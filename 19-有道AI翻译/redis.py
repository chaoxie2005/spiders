@time_it
def csdn_hot(request):
    """CSDN热榜（redis缓存）"""
    page = request.GET.get("page", 1)
    keyword = request.GET.get("keyword", "").strip()
    try:
        page = int(page)
    except (ValueError, TypeError):
        page = 1

    # 定义缓存键
    keyword_key = keyword if keyword else "all"
    cache_key = f"csdn:hot:v2:{keyword_key}:p{page}"
    category_cache_key = "global:all_categories"
    last_articles_cache_key = "csdn:hot:last10"

    # 尝试从 Redis 读取分页后的 ID 列表
    id_list = None
    try:
        cached_data = redis_client.get(cache_key)
        if cached_data:
            id_list = json.loads(cached_data)
    except Exception as e:
        print(f"Redis 读取异常: {e}", flush=True)

    # 如果命中主列表缓存
    if id_list:
        try:
            # 批量查询数据库，仅加载必要字段并保持顺序
            article_qs = CSDNArticle.objects.filter(id__in=id_list)
            id_map = {art.id: art for art in article_qs}
            articles_list = [id_map[aid] for aid in id_list if aid in id_map]

            # 获取总数（用于分页器展示）
            total_count = CSDNArticle.objects.all().count()
            if keyword:
                total_count = CSDNArticle.objects.filter(
                    Q(title__icontains=keyword)
                ).count()

            # 使用虚拟列表模拟分页器
            paginator = Paginator(range(total_count), 5)
            articles = paginator.page(page)
            articles.object_list = articles_list
        except Exception as e:
            print(f"处理缓存数据异常: {e}", flush=True)
            id_list = None  # 降级

    # 如果未命中主列表缓存
    if not id_list:
        articles_query = CSDNArticle.objects.all().order_by("-crawl_time")
        if keyword:
            articles_query = articles_query.filter(
                Q(title__icontains=keyword) | Q(summary__icontains=keyword)
            )

        paginator = Paginator(articles_query, 5)
        try:
            articles = paginator.page(page)
        except (PageNotAnInteger, EmptyPage):
            articles = paginator.page(1)

        # 写入缓存（仅存 ID 列表）
        try:
            current_ids = [art.id for art in articles.object_list]
            redis_client.set(
                cache_key, json.dumps(current_ids), ex=600 + random.randint(0, 3600)
            )
        except Exception:
            pass

    # 侧边栏与静态数据缓存优化
    # 分类列表缓存
    try:
        cached_categories = redis_client.get(category_cache_key)
    except Exception:
        cached_categories = None

    if cached_categories:
        categories = json.loads(cached_categories)
    else:
        categories = list(Category.objects.all().values("id", "name"))
        try:
            redis_client.set(
                category_cache_key,
                json.dumps(categories),
                ex=3600 + random.randint(0, 3600),
            )
        except Exception:
            pass

    # 最新 10 篇热榜
    # 直接从数据库获取最新数据，确保显示最新的CSDN快讯
    last_articles = list(
        CSDNArticle.objects.all()
        .order_by("-crawl_time")
        .values("title", "original_url")[:10]
    )

    context = {
        "articles": articles,
        "categories": categories,
        "last_articles": last_articles,
    }
    return render(request, "article/csdn_hot.html", context)

import csv
import json
import requests
import execjs
from urllib.parse import quote

JS_PATH = r'D:\爬虫项目\爬虫\js逆向\32-采标网-AES\param.js'


def dec_response(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg)


def spider(keyword, page):
    headers = {
        'accept': 'text/plain, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://search.bidcenter.com.cn',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://search.bidcenter.com.cn/',
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
    }

    enc_keywords = quote(keyword)
    data = {
        'from': '6137',
        'guid': '591D9C13-C6F8-FBA7-3091-A728EC31EF03',
        'location': '6138',
        'token': '',
        'next_token': '',
        'keywords': enc_keywords,
        'mod': '0',
        'page': str(page),
    }

    response = requests.post(
        'https://interface.bidcenter.com.cn/search/GetSearchProHandler.ashx',
        headers=headers,
        data=data
    )
    return response.text


def parse_data(enc_data):
    """解析数据：标题、时间、省份"""
    try:
        # 获取 other2 字段
        other2 = enc_data.get('other2')
        if not other2 or not isinstance(other2, dict):
            print("警告：enc_data 中缺少或格式错误 'other2' 字段")
            return []

        # 获取 listData 字段
        data_list = other2.get('listData')
        if not data_list or not isinstance(data_list, list):
            print("警告：other2 中缺少或格式错误 'listData' 字段")
            return []

        dict_list = []
        for item in data_list:
            if not isinstance(item, dict):
                continue
            d = {
                "标题": item.get("news_title_show", ""),
                "时间": item.get("news_star_time_show", ""),
                "省份": item.get("news_diqustr", ""),
            }
            dict_list.append(d)
        return dict_list

    except Exception as e:
        print(f"解析数据时出错: {e}")
        return []


def save_csv(datas, mode="w"):
    """保存数据到 CSV 文件"""
    try:
        with open("招标数据.csv", mode, encoding="utf-8-sig", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=("标题", "时间", "省份"))
            if mode == 'w':
                writer.writeheader()
            writer.writerows(datas)
            print(f'已保存 {len(datas)} 条数据')
    except Exception as e:
        print(f"数据保存失败: {e}")


def main():
    keyword = input("请输入你要搜索的关键字\r\n")
    for page in range(50):
        data = spider(keyword, page)
        dec_response_data = dec_response(JS_PATH, 'AESDecrypt', data)
        dec_data = json.loads(dec_response_data)

        datas = parse_data(dec_data)
        save_csv(datas, mode='a' if page > 0 else 'w')  # 第一页写入表头，后续追加


if __name__ == "__main__":
    main()
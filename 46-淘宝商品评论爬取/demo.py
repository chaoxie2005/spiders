"""
目标网址：https://detail.tmall.com/item.htm?ali_refid=a3_430582_1006%3A1123796040%3AH%3A2wUULxiBbwexwSVFuKhIgA%3D%3D%3Abe7b8e7682ece14ae20fcc9e086335d5&ali_trackid=282_be7b8e7682ece14ae20fcc9e086335d5&id=838289202236&mi_id=0000b-WMfxQ74ZrOSKVEBFJ-uNcFB7mNdVjDRsAhAx4geTs&mm_sceneid=1_0_116794558_0&priceTId=214782e117606932050783892e11c1&skuId=5768770195543&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%228ef4b1d55a944564f759760211213f00%22%7D&xxc=ad_ztc
"""
import requests, execjs, json


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def str_concat(original_str):
    # 1. 拆分四部分（按&分割）
    md5_part, timestamp_part, random_part, json_part = original_str.split('&', 3)

    # 2. 解析JSON，处理pageNo（补零为2位）
    json_data = json.loads(json_part)
    formatted_page_no = f"{json_data['pageNo']}"  # 格式化：4 → "04"（:02d表示2位数字补零）

    # 3. 用format()重构JSON字符串（替换pageNo的值）
    # 模板中用{page_no}作为占位符，后续用format传入格式化后的值
    json_template = '''{"showTrueCount":false,"auctionNumId":"838289202236","pageNo":{page_no},"pageSize":20,"orderType":"","searchImpr":"-8","expression":"","skuVids":"","rateSrc":"pc_rate_list","rateType":""}'''
    formatted_json = json_template.format(page_no=formatted_page_no)

    # 4. 用format()拼接完整字符串
    final_str = "{md5}&{timestamp}&{random}&{json}".format(
        md5=md5_part,
        timestamp=timestamp_part,
        random=random_part,
        json=formatted_json
    )

    return final_str

def spider(num, pageNo, auctionNumId):
    data = {"showTrueCount":"false","auctionNumId":str(auctionNumId),"pageNo":pageNo,"pageSize":20,"orderType":"","searchImpr":"-8","expression":"","skuVids":"","rateSrc":"pc_rate_list","rateType":""}
    data = json.dumps(data)
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\46-淘宝商品评论爬取\param.js'
    params = ex_js(JSPATH, 'get_param', data)
    t, sign = params['t'], params['sign']
    url = 'https://h5api.m.tmall.com/h5/mtop.taobao.rate.detaillist.get/6.0/'
    cookies = {
    'cna': 'DLK5IIB4YVcCAava+n2wjmFG',
    'lid': 'tb774020013',
    'wk_cookie2': '194a76782bec07e2153f223243bad650',
    'wk_unb': 'UUphy%2FA5iMIYV%2B5yKg%3D%3D',
    'isg': 'BCkpAILcZbEFVVne_6AmesZjONWD9h0oa0gyv8se8JBPkkikE0JH-HGBUDakDLVg',
    'dnk': 'tb774020013',
    'tracknick': 'tb774020013',
    '_l_g_': 'Ug%3D%3D',
    'unb': '2201205393049',
    'lgc': 'tb774020013',
    'cookie1': 'AH%2F4O9OPcys21CxigM%2F2M4jORajv2QrzKQll7GpNzGo%3D',
    'login': 'true',
    'cookie17': 'UUphy%2FA5iMIYV%2B5yKg%3D%3D',
    'cookie2': '10bbd82e44cef76940d4305e9cfa4cc4',
    '_nk_': 'tb774020013',
    'cancelledSubSites': 'empty',
    'sg': '39b',
    't': '42c6d1dfd535428e7903f4275048a310',
    'csg': 'ae05561f',
    'sn': '',
    '_tb_token_': 'e3367b3383e83',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': '3f157bd178cf3a1d53ec0a2b2cd3f728_1761412804657',
    '_m_h5_tk_enc': '7b157e3d02a05ef6456ef56e87c2608e',
    'havana_sdkSilent': '1761431886615',
    'uc1': 'cookie14',
    'uc3': 'vt3',
    'uc4': 'id4',
    'havana_lgc_exp': '1792507086615',
    'sgcookie': 'E100ro0a0ul0KSwAUudYGKe5oilb5J7fTN6%2FVhOCOqexSQCQzCF%2Fu1ZGrnmQnw3o%2FiZ8ferNCZkr0DB3uDiMfXRN3bnMmspiSw2Te17TD0m%2FFzA%3D',
    'tfstk': 'gTUrEviPzaQrBuvfP-3e_aP9U20-c2W1ayMItWVnNYDlp_hn88wmxeN5265E3JHSV4qSteyjhJTQNyrv85FLP_3Cw4F-J2X1CN_Uw73d95dI4zlmifFmtbDlcqb3O9vcCN__Zgc-RSX_Rdgrzfhn-bDo-xfqOXxoZJmHoSDx9XvotUf4ixHmZemoExYm1fHHxJ0hgSDxOL0nqJ0cgXHmK20nh3ZLjQGIqswpp3BWDgmoI7D2-FRtZ0ALwHTBRelo4Am-Rem_uborI74wOfaZiraqfmOCXqVTc8cq7ZtoSSr3Ql2dfn3ztu2K08Bv0xZ0yWDn4BY_g5Pujq4CtCn4nXoi-mRH-Su-LJzoSNvqMoV7xzeyTec8PPiEBm5HJDg05cqgUBCTi4c3pcUCBUHut5UTfV7XqVV4xRrF4b9KiwjQJuJHY0cxgA1VgEFaejYo3cABvHnRnjk1ZqKpv0cxgA1VgHKK2ocqC_0A.',
}

    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://detail.tmall.com/',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'script',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    }

    params = {
        'jsv': '2.7.5',
        'appKey': '12574478',
        't': t,
        'sign': sign,
        'api': 'mtop.taobao.rate.detaillist.get',
        'v': '6.0',
        'isSec': '0',
        'ecode': '1',
        'timeout': '20000',
        'dataType': 'jsonp',
        'valueType': 'string',
        'type': 'jsonp',
        'callback': f'mtopjsonp{num}',
        'data': data
    }

    response = requests.get(
        url,
        params=params,
        cookies=cookies,
        headers=headers,
    )
    return response.text[len('mtopjsonp16( '):-1]


def main():
    for num in range(15, 30):
        try:
            result = spider(num, num-13, 838289202236)
            print(result)
        except Exception as e:
            print('数据为空')
    
if __name__ == "__main__":
    main()

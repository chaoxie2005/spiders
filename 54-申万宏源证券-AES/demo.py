"""
目标网址: https://www.swhysc.com/swhysc/serve/margin/deposit-ratio
"""
import requests, execjs, json

JSPATH = r'D:\爬虫项目\爬虫\js逆向\54-申万宏源证券-AES\get_response.js'

def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)

def spider(pageNum):
    cookies = {
        'Hm_lvt_553ce4fa7b2bd3ea6d85c1fb6b901c6c': '1762065805',
        'Hm_lpvt_553ce4fa7b2bd3ea6d85c1fb6b901c6c': '1762065805',
        'HMACCOUNT': '26FAD4314C20E141',
        'zh_choose': 's',
        'sajssdk_2015_cross_new_user': '1',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2219a434e745393e-07d88768dbb07f-26061851-1338645-19a434e745414d2%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTlhNDM0ZTc0NTM5M2UtMDdkODg3NjhkYmIwN2YtMjYwNjE4NTEtMTMzODY0NS0xOWE0MzRlNzQ1NDE0ZDIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2219a434e745393e-07d88768dbb07f-26061851-1338645-19a434e745414d2%22%7D',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.swhysc.com/swhysc/serve/margin/deposit-ratio',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'Xdemeter': '{"DeviceType":"PW"}',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'Hm_lvt_553ce4fa7b2bd3ea6d85c1fb6b901c6c=1762065805; Hm_lpvt_553ce4fa7b2bd3ea6d85c1fb6b901c6c=1762065805; HMACCOUNT=26FAD4314C20E141; zh_choose=s; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219a434e745393e-07d88768dbb07f-26061851-1338645-19a434e745414d2%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTlhNDM0ZTc0NTM5M2UtMDdkODg3NjhkYmIwN2YtMjYwNjE4NTEtMTMzODY0NS0xOWE0MzRlNzQ1NDE0ZDIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2219a434e745393e-07d88768dbb07f-26061851-1338645-19a434e745414d2%22%7D',
    }

    params = {
        'pageNum': '2',
        'pageSize': '10',
    }

    response = requests.get(
        'https://www.swhysc.com/swhy/service/dsinfo/v2/margin/deposit/ratio',
        params=params,
        cookies=cookies,
        headers=headers,
    )
    return response.text


def get_response(enc_data):
    res = ex_js(JSPATH, "get_response", enc_data)
    return json.loads(res)


def main():
    for page in range(1, 50):
        result = spider(page)
        dec_data = get_response(result)
        print(dec_data)
    

if __name__ == "__main__":
    main()

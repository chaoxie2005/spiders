"""
目标网址: https://www.dxy.cn/bbs/newweb/pc/case
"""
import requests, execjs, json, re

def get_cursor_response():
    cookies = {
        'JUTE_SESSION_ID': 'd4aa2d79-26eb-4579-8004-43d0c04fed49',
        'dxy_da_cookie-id': '5612085a9fa069c323becc7dbb7d26931760684510098',
        'route': '2e6fb000659e153fed5be31371c54227',
        'cms_token': 'e2bdab6d-7b2c-4110-8562-edd525a9faf6',
    }

    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'baggage': 'sentry-environment=prd,sentry-release=6d183dcebb9a23bb9517ead4a1456cee239022e9,sentry-public_key=b3d1870b11474559bdc1137f9ea79d83,sentry-trace_id=cde7c08375a544b1a8523c843e36d362,sentry-sampled=true,sentry-sample_rand=0.4316853065959799,sentry-sample_rate=1',
        'cache-control': 'no-cache',
        'next-router-state-tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22(case)%22%2C%7B%22children%22%3A%5B%22sections%22%2C%7B%22children%22%3A%5B%22__PAGE__%3F%7B%5C%22id%5C%22%3A%5C%221101%5C%22%7D%22%2C%7B%7D%2C%22%2Fbbs%2Fnewweb%2Fpc%2Fsections%3Fid%3D1101%22%2C%22refresh%22%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        'next-url': '/sections',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.dxy.cn/bbs/newweb/pc/sections?id=1101',
        'rsc': '1',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sentry-trace': 'cde7c08375a544b1a8523c843e36d362-9b90f7466fc3fff9-1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        # 'cookie': 'JUTE_SESSION_ID=d4aa2d79-26eb-4579-8004-43d0c04fed49; dxy_da_cookie-id=5612085a9fa069c323becc7dbb7d26931760684510098; route=2e6fb000659e153fed5be31371c54227; cms_token=e2bdab6d-7b2c-4110-8562-edd525a9faf6',
    }

    params = {
        'id': '1101',
        '_rsc': '112g5',
    }

    response = requests.get('https://www.dxy.cn/bbs/newweb/pc/sections', params=params, cookies=cookies, headers=headers)
    return response.text


def extract_cursor_from_response(response_text):
    """
    从响应文本中提取 cursor 值
    """
    # 如果响应是 JSON 格式，可以直接解析
    try:
        data = json.loads(response_text)
        # 根据实际返回结构提取 cursor
        # 这里需要根据实际 API 返回结构调整
        return data.get('cursor', None)
    except json.JSONDecodeError:
        # 如果不是 JSON，尝试用正则表达式提取
        match = re.search(r'"cursor"\s*:\s*"([^"]+)"', response_text)
        if match:
            return match.group(1)
    return None

def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider(cursor):
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\45-丁香园数据-sha1\param.js'
    param_1 = ex_js(JSPATH, 'get_param',cursor)
    cookies = {
    'JUTE_SESSION_ID': 'd4aa2d79-26eb-4579-8004-43d0c04fed49',
    }

    headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://www.dxy.cn',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.dxy.cn/',
    'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    # 'cookie': 'JUTE_SESSION_ID=d4aa2d79-26eb-4579-8004-43d0c04fed49',
}
    param_2 = {
    'cursor': cursor,
    'source': '2',
    'sectionCode': '1101',
    'pageSize': '10',
    }
    params = {**param_1, **param_2}
    print(params)

    response = requests.get('https://bbsapi.dxy.cn/pc/case-bank/post/page', params=params, cookies=cookies, headers=headers)
    return response.text


def main():
    cursor_res = get_cursor_response()
    cursor = extract_cursor_from_response(cursor_res)
    res = spider(cursor)
    print(res)


if __name__ == "__main__":
    main()
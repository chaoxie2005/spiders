"""
目标网站: https://www.birdreport.cn/home/activity/page.html
"""

import requests, execjs


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)

def spider():
    jspath = r'D:\爬虫项目\爬虫\js逆向\41-中国观鸟记录中心\sign-md5.js'
    params = ex_js(jspath, 'get_sign', 2, '巴郎山（巴朗山）')
    sign = params[0]
    requestId = params[1]
    timestamp = params[2]
    headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://www.birdreport.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://www.birdreport.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    'requestId': requestId,
    'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sign': sign,
    'timestamp': str(timestamp),
}

    data = 'CCKp/PONZwuhOyaHPAfJdJcuyPT3gFXxB9iFPONR4n0HvMejnSrb86UCMHVxUrXpCaSEgTKzglvd/STRojSARDQmYUz108/Yt9zTvy/R02705EVeyvMKmQkzqNgRPagoxT3mRSsI1eFoM+1nJMDhPdo46Hk4fagvZj3zM5KTMqE='

    response = requests.post('https://api.birdreport.cn/front/record/activity/search', headers=headers, data=data)

    return response.json()['data']


def main():
    res = spider()
    result = ex_js(r'D:\爬虫项目\爬虫\js逆向\41-中国观鸟记录中心\get_response.js', 'get_response', res)
    print(result)


if __name__ == '__main__':
    main()

import csv
import json

import execjs
import requests


def get_param():
    with open(r'D:\爬虫项目\爬虫\js逆向\09-真气网\get_param.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_param')


def get_res(encdata):
    with open(r'D:\爬虫项目\爬虫\js逆向\09-真气网\get_res.js', 'r', encoding='utf-8') as f:
          js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('window.MyDecode', encdata)


def api_threah():
    param = get_param()
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.zq12369.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.zq12369.com/environment.php?order=desc&tab=rank',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
        'param': param
    }

    response = requests.post('https://www.zq12369.com/api/newzhenqiapi.php', headers=headers, data=data)
    return response.text


def parse_data(content):
    JSONBJ = json.loads(content)
    result = JSONBJ['result']
    data = result['data']
    rows = data['rows']
    for item in rows:
        cityname = item['cityname']
        provincename = item['provincename']
        quality = item['quality']
        save_data(cityname, provincename, quality)


def save_data(cityname, provincename, quality):
    with open('168城市AQI排行榜.CSV', 'a', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        if f.tell() == 0:
            writer.writerow(('城市名称', '省份名称', '空气质量'))
        writer.writerow((cityname, provincename, quality))

if __name__ == '__main__':
    encdata = api_threah()
    decdata = get_res(encdata)
    parse_data(decdata)
    
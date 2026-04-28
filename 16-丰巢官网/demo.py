import json
import random
import time
import uuid
from urllib import request

import ddddocr
import execjs
import requests


def get_data(uuid_4):
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # Already added when you pass json=
        # 'Content-Type': 'application/json',
        'Origin': 'https://www.fcbox.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.fcbox.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    json_data = {}

    response = requests.post(
        f'https://acs.fcbox.com/captcha/querySlideImage/{uuid_4}',
        headers=headers,
        json=json_data,
    )
    result = response.json()['data']
    checkId = result['checkId']
    clientIp = result['clientIp']
    key = result['key']
    pointY = result['pointY']
    shadeImageUrl = result['shadeImageUrl']
    slideImageUrl = result['slideImageUrl']
    
    # 保存图片
    request.urlretrieve(shadeImageUrl, 'shade.png')
    request.urlretrieve(slideImageUrl, 'slide.png')
    
    return checkId, clientIp, key, pointY

def get_track(pointY, location):
    """构造轨迹"""
    timesp = int(time.time() * 1000)
    lst = []
    for x in range(0, location+1):
        offset = random.randint(10, 100)
        item ={
            'x': x,
            'y': pointY,
            'time': timesp + offset
        }
        lst.append(item)
    return lst

def img_data():
    """识别图片 获取图片坐标"""
    # 创建对象, 关闭广告显示
    slide = ddddocr.DdddOcr(show_ad=False)

    # 读取图片
    with open('shade.png', 'rb') as f:
        shade_bytes = f.read()

    with open('slide.png', 'rb') as f:
        slide_bytes = f.read()
        
    res = slide.slide_match(shade_bytes, slide_bytes, simple_target=True)
    return res['target'][0]

def ex_js(file_path, func_name, *arg):
    with open(file_path, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg)

def get_sign(data):
    """进行MD5加密"""
    sign = ex_js(r'D:\爬虫项目\爬虫\js逆向\16-丰巢官网\ex.js', 'enc_md5', data)
    return sign

def get_aes(data, key):
    """进行AES加密"""
    enc_aes = ex_js(r'D:\爬虫项目\爬虫\js逆向\16-丰巢官网\ex.js', 'enc_aes', data, key)
    return enc_aes

def api_login(uuid_4, params):
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://www.fcbox.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.fcbox.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }
    response = requests.post(
        f'https://acs.fcbox.com/captcha/checkCode/{uuid_4}',
        headers=headers,
        data=params,
    )
    return response.json()



def main():
    uuid_4 = str(uuid.uuid4())
    checkId, clientIp, key, pointY= get_data(uuid_4)
    # 缺口的横坐标位置
    location = img_data()
    track = get_track(pointY, location)
    str_track = ''.join([f'{item["x"]}{item["y"]}{item["time"]}' for item in track])
    str_join = clientIp + checkId + uuid_4 + str_track
    
    sign = get_sign(str_join)
    str_join_2 = {'sign': sign, 'track': track}
    str_join_dumps = json.dumps(str_join_2)
    params = get_aes(str_join_dumps, key)
    res = api_login(uuid_4, params)
    print(res)

    
    

if __name__ == '__main__':
    main()
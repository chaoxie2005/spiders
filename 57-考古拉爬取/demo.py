"""
目标网址: https://www.kaogujia.com/darenSquare/darenList
需求: 达人这一栏的所有数据
"""
import requests
import execjs
import json
import base64
import csv

def ex_js(filepath, func_name, *args):
    with open(filepath, "r", encoding="utf-8") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    return ctx.call(func_name, *args)


def get_response():
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiIxMDAwIiwiaXNzIjoia2FvZ3VqaWEuY29tIiwianRpIjoiNDA2Mjg3OGVkY2I3NGNiOTkzYWVkMDNjM2U5MDRmMjAiLCJzaWQiOjg3MjM1OTYsImlhdCI6MTc2NTcxNTI0NiwiZXhwIjoxNzY2MzIwMDQ2LCJid2UiOjAsInR5cCI6MSwicF9id2UiOjB9.zRN96g1zqdH2zecOfh_fPc07MkHTcPPhPP1-8IrZhNR8wZTaiUhbE-uo8GRfyS-zpgdDXRDTKHtelW0-HClk4A',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://www.kaogujia.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.kaogujia.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'version_code': '3.1',
    }

    params = {
        'limit': '50',
        'page': '6',
        'sort_field': 'gmv',
        'sort': '0',
    }

    json_data = {
        'keyword': '',
        'author_type': 0,
    }

    response = requests.post('https://service.kaogujia.com/api/author/search', params=params, headers=headers, json=json_data)
    return response.json()["data"]


def dec_AESdata(enc_data):
    js_path = r"D:\爬虫项目\爬虫\js逆向\57-考古拉爬取\param.js"
    return ex_js(js_path, "decryptAES", enc_data)


def parse_data(data):
    items = data['items']
    all_data = []
    for item in items:
        dic = {}
        dic['达人名称'] = item.get('nick_name')
        dic['粉丝数'] = item.get('fans')
        dic['新增粉丝数'] = item.get('inc_fans')
        dic['销售额'] = item.get('gmv')
        dic['平均单价'] = item.get('aup')
        dic['近30日平均观看人次'] = item.get('avg_total_users')
        dic['近30日平均视频播放量'] = item.get('video_gmv')
        dic['近30日平均分钟带货表现'] = item.get('rpm')
        all_data.append(dic)
    return all_data
        

def save_data(data: list):
    filednames = (
              '达人名称', 
              '粉丝数', 
              '新增粉丝数', 
              '销售额', 
              '平均单价', 
              '近30日平均观看人次', 
              '近30日平均视频播放量', 
              '近30日平均分钟带货表现',
    )
    with open('考古拉达人数据.csv', 'w+', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=filednames)
        if f.tell() == 0:
            writer.writeheader()
        writer.writerows(data)
        print('-------写入数据成功！！！！---------')
        
        
def main():
    enc_data = get_response()
    dec_base64 = dec_AESdata(enc_data)
    # Base64 → bytes
    raw_bytes = base64.b64decode(dec_base64)
    text = raw_bytes.decode("utf-8")
    data = json.loads(text)
    parse_aftet_data = parse_data(data)
    if data:
        save_data(parse_aftet_data)
    
        

if __name__ == "__main__":
    main()


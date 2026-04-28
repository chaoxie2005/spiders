import requests
import execjs
import csv

def get_param(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg) 


def api_data(page):
    url = "https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query"

    payload = f'{{"keyword":"","provinceNames":[],"natureTypes":[],"eduLevel":"","categories":[],"features":[],"pageIndex":{page},"pageSize":20,"sort":11}}'
        
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\MD5加密\优志愿-院校列表\param.js'
    sign_enc = get_param(JSPATH, 'get_sign', page)
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://pv4y-pc.youzy.cn",
        "Pragma": "no-cache",
        "Referer": "https://pv4y-pc.youzy.cn/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        "agent": "objectId:;provinceId:;provinceCode:;userPermissionId:;score:0;",
        "deviceId": "38c7bac47f1b76977bdf37cd65158aac",
        "u-sign": sign_enc,
    }

    response = requests.request("POST", url, data=payload, headers=headers)
    return response.json()


def person_data(json_data):
    """提取所有大学信息，返回字典列表"""
    items = json_data['result']['items']
    data_list = []  # 用列表存储所有数据
    for item in items:
        # 为每个大学创建独立字典
        d = {
            'cnname': item["cnName"],
            'cnbelong': item['belong'],
            'cnprovinceName': item['provinceName'],
            'cncityName': item['cityName']
        }
        data_list.append(d)  # 添加到列表
    return data_list


def save_data(data, mode='w'):
    headers = ('cnname', 'cnbelong', 'cnprovinceName', 'cncityName')
    with open('中国大学信息表.csv', mode, encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        # 只有写入模式为'w'时才写表头，避免重复
        if mode == 'w':
            writer.writeheader()
        writer.writerows(data)  # 写入列表数据
    print(f'已保存 {len(data)} 条数据')
        

def main():
    # 先写表头和第一页数据
    first_page = api_data(1)
    first_data = person_data(first_page)
    save_data(first_data, mode='w')
    
    # 再处理剩余页面，用追加模式
    for i in range(2, 20):
        json_data = api_data(i)
        dic_data = person_data(json_data)
        save_data(dic_data, mode='a')
        

if __name__ == '__main__':
    main()

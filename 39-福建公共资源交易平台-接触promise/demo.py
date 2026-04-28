import requests, execjs, time, csv


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def timesp():
    return str(int(time.time() * 1000))


def spider(page):
    """获取相应数据"""
    url = 'https://ggzyfw.fj.gov.cn/FwPortalApi/Trade/TradeInfo'
    json_data = {
        'pageNo': page,
        'pageSize': 20,
        'total': 3225,
        'AREACODE': '',
        'M_PROJECT_TYPE': '',
        'KIND': 'GCJS',
        'GGTYPE': '1',
        'PROTYPE': '',
        'timeType': '6',
        'BeginTime': '2025-03-29 00:00:00',
        'EndTime': '2025-09-29 23:59:59',
        'createTime': '',
        'ts': timesp(),
    }
    
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\39-福建公共资源交易平台-接触promise\param.js'
    sign = ex_js(JSPATH, 'get_sign', json_data)
    cookies = {
        'Hm_lvt_63d8823bd78e78665043c516ae5b1514': '1753423452',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://ggzyfw.fj.gov.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://ggzyfw.fj.gov.cn/business/list/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        'portal-sign': sign,
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    
    response = requests.post(url, cookies=cookies, headers=headers, json=json_data)

    result = response.json()
    return result["Data"]


def parse_response(enc_response):
    """
    解密 加密的相应数据
    并解析数据 
    项目名称 项目ID 项目地点
    """
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\39-福建公共资源交易平台-接触promise\get_response.js'
    data = ex_js(JSPATH, 'get_respose', enc_response) 
    data_list = []
    for item in data['Table']:
        d = {
            "项目名称": item.get("NAME"),
            "项目ID": item.get("M_ID"),
            "项目地点": item.get("AREANAME")
        }
        data_list.append(d)
    return data_list


def save_data(data, mode="w"):
    with open("交易信息.csv", mode, encoding='utf-8-sig', newline="") as f:
        writer = csv.DictWriter(f, fieldnames=("项目名称", "项目ID", "项目地点"))
        if mode == 'w' or f.tell() == 0:
            writer.writeheader()
        writer.writerow(data)
    print(f'{data["项目名称"]}保存成功')
    
    
def main():
    for page in range(1, 50):
        result = spider(page)
        dec_data = parse_response(result)
        for data in dec_data:
            save_data(data, mode='a')
        
        
    
    
if __name__ == '__main__':
    main()
"""
目标网站: https://dc.simuwang.com/
需求: 爬取排行数据
"""
import requests
import execjs
import csv


def ex_js(filepath, func_name, *args):
    with open(filepath, "r", encoding="utf-8") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    return ctx.call(func_name, *args)


def get_response():
    url = "https://sppwapi.simuwang.com/sun/ranking/fundRankV3"

    querystring = {"page":"10","size":"50","condition":"{\"fund_type\":\"6\"}","sort_name":"ret_6m","sort_asc":"desc","tab_type":"1","frequency":"week","USER_ID":"3692519"}

    payload = ""
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "origin": "https://dc.simuwang.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://dc.simuwang.com/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
        "x-requested-with": "SHVpWlpGUytuWmMvbENDV2lmZkg0dFNYQnJsSnFORWx6MVV1T2lzQjBHZlNwWGFzd1hJZHJnS3BXNDh3TGhITw==",
        "Cookie": "_c_WBKFRo=wXWWFLyqL7rLNdI7oERTojDJcT2ne9lAflQxqYMm; http_tK_cache=e25ae3be20397501fe65e024f1c3db4e40c0d73d; Hm_lvt_c3f6328a1a952e922e996c667234cdae=1765808649; _ga=GA1.1.523142159.1765874246; _ga_7SBBX4Y5RE=GS2.1.s1765874246$o1$g1$t1765874259$j47$l0$h0",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Host": "sppwapi.simuwang.com"
    }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    return response.json()['data']
    
def dec_AESdata(enc_data):
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\58-私募排排网\param1.js'
    return ex_js(JSPATH, 'decrypt_data', enc_data)
    

def parse_data(data):
    data_list = data['list']
    all_data = []
    for item in data_list:
        dic = {}
        dic['基金简称'] = item.get("fund_short_name")
        dic['基金公司'] = item.get("company_short_name")
        dic['时间'] = item.get("cal_start_date")
        dic['所在省份'] = item.get("province")
        all_data.append(dic)
    return all_data



def save_data(data):
    filednames = (
        '基金简称',
        '基金公司',
        '时间',
        '所在省份'
    )
    with open('拍拍网数据.csv', 'w+', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=filednames)
        if f.tell() == 0:
            writer.writeheader()
        writer.writerows(data)
        print('-------写入数据成功！！！！---------')

def main():
    enc_data = get_response()
    dec_data = dec_AESdata(enc_data)
    all_data = parse_data(dec_data)
    save_data(all_data)
    
    
    
    
if __name__ == "__main__":
    main()
    

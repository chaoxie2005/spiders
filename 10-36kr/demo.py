import time

import execjs
import requests


def get_timesp():
    return int(time.time() * 1000)


def get_params(username, password):
    with open(r'D:\爬虫项目\爬虫\js逆向\10-36kr\get_params.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    mobileNo = js_code.call('get_params', username)
    password = js_code.call('get_params', password)
    return mobileNo, password

    
def api_login(username, password):
    timesp = get_timesp()
    mobileNo, password = get_params(username, password)
    
    
    cookies = {
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%226240115%22%2C%22%24device_id%22%3A%221973fcd139c1a47-07fe4d9bf38eae8-26011e51-1821369-1973fcd139d2372%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%221973fcd139c1a47-07fe4d9bf38eae8-26011e51-1821369-1973fcd139d2372%22%7D',
        'Hm_lvt_713123c60a0e86982326bae1a51083e1': '1749122094,1749740219',
        'HMACCOUNT': '5B53905BB2005420',
        'Hm_lvt_1684191ccae0314c6254306a8333d090': '1749122094,1749740219',
        'userId': '',
        'Hm_lpvt_1684191ccae0314c6254306a8333d090': '1749742694',
        'Hm_lpvt_713123c60a0e86982326bae1a51083e1': '1749742694',
        'tfstk': 'gqTsiUNXOR2_QMbYGGcURxDuvTbXfXuP1S1vZIUaMNQTH-dRLPEvQi-ChppCBKOmssBvHK62bDuysCbckYkjz4RGyZgXZdaA6khAG1axTGnouRmOkYkr8F9-FS_v3IqeRXOdKs1YDGpYv6CPpRU9HOILp_1lkZpABBUdaszTXZCtJX1cptQAkKQKOsWdHv57UsGVCCGZepAGAuHda9aYke1Knsd_Yr5B71s1eCL_krhl1G6J69MTCs_AvIjXoS4fBCKkn_pTBYSMMH9C1ZgUXadBDL1HW4y1thRpa9d7wzdG53T5WhM3xNJ6JwL9VSUvON6Gv6sQCv6JSBLlJMu-NBLHQCYBgS3ATLWpsFQjybb1WOQCtEk3WttpDFSGoRHPjIKBd1_R4EaPFUrQcWsul66rOXZ0mAgByeLFmJp1X6f1RXGQCwIOt66rOXZ0mGChTkGIOR_d.',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://www.36kr.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.36kr.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%226240115%22%2C%22%24device_id%22%3A%221973fcd139c1a47-07fe4d9bf38eae8-26011e51-1821369-1973fcd139d2372%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%221973fcd139c1a47-07fe4d9bf38eae8-26011e51-1821369-1973fcd139d2372%22%7D; Hm_lvt_713123c60a0e86982326bae1a51083e1=1749122094,1749740219; HMACCOUNT=5B53905BB2005420; Hm_lvt_1684191ccae0314c6254306a8333d090=1749122094,1749740219; userId=; Hm_lpvt_1684191ccae0314c6254306a8333d090=1749742694; Hm_lpvt_713123c60a0e86982326bae1a51083e1=1749742694; tfstk=gqTsiUNXOR2_QMbYGGcURxDuvTbXfXuP1S1vZIUaMNQTH-dRLPEvQi-ChppCBKOmssBvHK62bDuysCbckYkjz4RGyZgXZdaA6khAG1axTGnouRmOkYkr8F9-FS_v3IqeRXOdKs1YDGpYv6CPpRU9HOILp_1lkZpABBUdaszTXZCtJX1cptQAkKQKOsWdHv57UsGVCCGZepAGAuHda9aYke1Knsd_Yr5B71s1eCL_krhl1G6J69MTCs_AvIjXoS4fBCKkn_pTBYSMMH9C1ZgUXadBDL1HW4y1thRpa9d7wzdG53T5WhM3xNJ6JwL9VSUvON6Gv6sQCv6JSBLlJMu-NBLHQCYBgS3ATLWpsFQjybb1WOQCtEk3WttpDFSGoRHPjIKBd1_R4EaPFUrQcWsul66rOXZ0mAgByeLFmJp1X6f1RXGQCwIOt66rOXZ0mGChTkGIOR_d.',
    }

    json_data = {
        'krtoken': '',
        'partner_id': 'web',
        'timestamp': 1749744007768,
        'param': {
            'countryCode': '86',
            'mobileNo': mobileNo,
            'password': password,
        },
    }

    response = requests.post(
        'https://gateway.36kr.com/api/mus/login/byMobilePassword',
        cookies=cookies,
        headers=headers,
        json=json_data,
    )
    return response.json()


def main():
    username = input('请输入你的账户名:\n\r')
    password = input('请输入你的密码:\n\r')
    print(api_login(username, password))

if __name__ == '__main__':
    main()
    
    
"""
目标网站: https://webapi.cninfo.com.cn/#/marketDataDate
"""

import requests
from ..ex_js import ex_js

def spider():
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\55-巨潮资讯-AES混淆\param.js'
    encKey = ex_js(JSPATH, 'get_param')
    cookies = {
        'routeId': '.uc1',
        'Hm_lvt_489bd07e99fbfc5f12cbb4145adb0a9b': '1762068870',
        'HMACCOUNT': '26FAD4314C20E141',
        'MALLSSID': '3477464D4557637A4E6D39686862416F67785739797053704F3059763057376A734263767043672F35694E764E4457514254326F576433664E6B496F51434567',
        'Hm_lpvt_489bd07e99fbfc5f12cbb4145adb0a9b': '1762068988',
    }

    headers = {
        'Accept': '*/*',
        'Accept-EncKey': encKey,
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://webapi.cninfo.com.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://webapi.cninfo.com.cn/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
        'tdate': '2025-10-30',
        'market': 'SZE',
    }

    response = requests.post('https://webapi.cninfo.com.cn/api/sysapi/p_sysapi1007', cookies=cookies, headers=headers, data=data)
    return response.status_code


def main():
    result = spider()
    print(result)
    
    
if __name__ == "__main__":
    main()
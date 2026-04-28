import requests
import execjs
import json

def get_nig3():
    with open(r'D:\爬虫项目\爬虫\js逆向\12-快手服务平台\get_NIg3.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_nig3')


def api_content():
    url = 'https://cp.kuaishou.com/rest/v2/creator/pc/authority/account/current'

    headers = {
    "Accept": "application/json",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://cp.kuaishou.com",
    "Referer": "https://cp.kuaishou.com/article/comment",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36 Edg/137.0.0.0",
    "returnSetRootDomainLoginUrl": "true",
    "sec-ch-ua-mobile": "?0",
    'cookie':'did=web_cf84a380fee79c269b80b6c33dd8b86549a8; bUserId=1000463046698; userId=3715790549; kuaishou.web.cp.api_st=ChZrdWFpc2hvdS53ZWIuY3AuYXBpLnN0ErAB4-wuy-vbAFy1B8jIFkl31-2DQn9Acj2oTHqOUgvew0SdvuK0kNcYSCSY0KPjRgKYRcogTWhO9sPBEPHHHQPXgz5Xa7U0UJpPxjjlJT--aZxeo9dGo6DxjSk55Z5RgBqsTile1rT-QBQVafFPKyu6mke5tkvcxfw0-1JKQOvNb4O3F8nNlsLQ4V8lcNrS3FpR5F4DxSGNusn8sCrrWzOzsz5vFgHUVtSQkbOchgMUKGcaErufyC8-J6b5wxfp5E0b2v6NLSIgYxmuvTtZbwEak5lfBdRFR4gCsfQ8VamwhAmnAJR6NUYoBTAB; kuaishou.web.cp.api_ph=cc272d71d49f1cbd5563eae960461eff755c'
    }

    data={
        "kuaishou.web.cp.api_ph": "8ebe5c06d79877c9044996a379b2ee46d0e4"
    }
    
    data = json.dumps(data, separators=(',', ':'))

    params={
        "__NS_sig3": "1d0d4a7a58a50d26f6404342a816cfa9987cd4385c5c5e5e51505349"
    }
    
    response = requests.post(url, headers=headers, data=data, params=params)
    JSONBJ = json.loads(response.text)    
    return JSONBJ['data']['userName']


def main():
    print(api_content())
    

if __name__ == '__main__':
    main()
    
    
def aaa():
    print(12321)
import requests, execjs


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider():
    JSPTATH = r'D:\爬虫项目\爬虫\js逆向\43-广西壮族自治区博物馆-token参数\param.js'
    token = ex_js(JSPTATH, 'encryptApiKey', "3UPAUGD1ZFVTI6YES51DXJEN5554Y6I2")
    url = 'https://www.gxmuseum.cn/g/sw-cms-cloud/api/queryArchivesList'
    cookies = {
        'UM_distinctid': '199d3bad3c01833-01d859b5e3f75f8-26061851-146d15-199d3bad3c12cb9',
        'SECKEY_ABVK': 'N5as4O40O5fvwUflxJGKNK1mup+ZqQrBEIH8nCEQpbw%3D',
        'BMAP_SECKEY': '1Q09Ddv_CKXyazC8rHLPU5a0Mhk7bXUgvc3MQdc_fG37751Bj4nzIugwtRJNOqSLIhdfbschJbmjfGbupn4SW3pEIZXZU8AuHyIZ-6-fpf5XnkP_Xwvo3L0Ll9jDS6QkjFGgVnsKswAK0uPilKHZe4xIz8lj-K7JBRYoROpyR_cmEClj-Na1aNzXREN9yxKp',
        'CNZZDATA1281196759': '238427825-1760193861-https%253A%252F%252Fwww.baidu.com%252F%7C1760340708',
        'CNZZDATA1281314171': '1727524044-1760193861-https%253A%252F%252Fwww.baidu.com%252F%7C1760340708',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://www.gxmuseum.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://www.gxmuseum.cn/Service/Visit',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'appId': '85d031688f064b279b5900c9c049b730',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'token': token,
    }

    json_data = {
        'entity': {
            'channelNo': 'FriendLink',
        },
        'param': {
            'pageSize': 5,
            'pageNum': 1,
        },
    }

    response = requests.post(
        url,
        cookies=cookies,
        headers=headers,
        json=json_data,
    )
    return response.json()


def main():
    result = spider()
    print(result)
    
    
if __name__ == '__main__':
    main()


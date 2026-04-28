import requests, execjs



JSPATH = r'D:\爬虫项目\爬虫\js逆向\42-艺恩电影数据-DES混淆\get_response.js'
def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)

def spider():
    headers = {
        'Accept': 'text/plain, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.endata.com.cn',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = '&MethodName=Data_GetBrank_Overview_TradeSpread'

    response = requests.post('https://www.endata.com.cn/API/GetData.ashx', headers=headers, data=data)
    return response.text


def main():
    result = spider()
    dec_data = ex_js(JSPATH, 'shell', result)
    print(f'解密的响应数据：{dec_data}')


if __name__ == '__main__':
    main()
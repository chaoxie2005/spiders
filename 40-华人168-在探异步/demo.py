import requests, execjs


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider():
    url = 'https://p-gateway.us168168.com/wf-classify-web/recruitment/page'
    
    headers = {
        'cache-control': 'no-cache',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://us168.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        'x-application-name': 'wf-classify-web',
        'x-device-code': '054e1e4d10388fde383bf49ee6763965',
        'x-source': 'pc',
        'x-timezone': 'GMT+0800',
        'x-version': '6.0.0',
    }

    data = '0e7fc0eca499caad572d2d70fb42d96030aab8c617d3ae81c4c9b4152e0bd3370013317b64ebc6b569529e49e30d9749b16ebe75ca2191d3de6da8bfecce7fd5aed743b080bd8dbfb59575d6cfec2e326be78b8116eac7c44116d54956fd9127'

    response = requests.post(url, headers=headers, data=data)
    return response.json()["data"]


def dec_response(data):
    js_path = r'D:\爬虫项目\爬虫\js逆向\40-华人168-在探异步\param.js'
    dec_response_data = ex_js(js_path, 'get_response', data)
    return dec_response_data


def main():
    result = spider()
    print(dec_response(result))


if __name__ == '__main__':
    main()
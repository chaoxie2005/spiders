import requests
import execjs
import re


def ex_js(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg)


def get_param():
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'http://180.141.168.36:8099',
        'Pragma': 'no-cache',
        'Referer': 'http://180.141.168.36:8099/icity/public/index?wework_cfm_code=M4IUz7QHTb2d%2FRNGvIHD2g6yWZ3zFWsMibTJGz12QOjzQRGHJuzwhESoYffaPtfyBvAIHykScnlmACN85yJQvoxqYVHHeFmOiyZliR6tYpbQFU40ClDDnzc%3D',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
    }

    response = requests.get(
        'http://180.141.168.36:8099/icity/public/index',
        headers=headers,
    )
    response.encoding = 'utf-8'
    cookies = response.cookies.get_dict()
    key = cookies.get('XSRF-TOKEN')[:16]
    sig = re.findall(r'signature.*?\"([a-z0-9]+)\";', response.text)[0]
    return sig, key, cookies


def api_data(sig, key, cookies):
    url = ex_js(r'D:\爬虫项目\爬虫\逆向练习\respose.js', 'addUrlAuth', sig)
    payload = {'data':ex_js(r'D:\爬虫项目\爬虫\js逆向\21-广西政府网站\respose.js', 'get_res_enc', '{"rows":"50","page":"1","applySerialNo":""}', key)}
    headers1 = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'http://180.141.168.36:8099',
        'Pragma': 'no-cache',
        'Referer': 'http://180.141.168.36:8099/icity/public/index?wework_cfm_code=M4IUz7QHTb2d%2FRNGvIHD2g6yWZ3zFWsMibTJGz12QOjzQRGHJuzwhESoYffaPtfyBvAIHykScnlmACN85yJQvoxqYVHHeFmOiyZliR6tYpbQFU40ClDDnzc%3D',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
    }
    response = requests.post(url,headers=headers1, cookies=cookies, json=payload)
    return response.json()['data']


    
def dec_res(data):
    return ex_js(r'D:\爬虫项目\爬虫\js逆向\21-广西政府网站\respose.js', 'get_res_dec', data, key)

if __name__ == '__main__':
    sig, key, cookies = get_param()
    data = api_data(sig, key, cookies)
    print(dec_res(data))

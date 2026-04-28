import requests
import execjs
import random


def get_token():
    with open(r'D:\\爬虫项目\\爬虫\\js逆向\\19-有道AI翻译\\param-text.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    yduuid = js_code.call("get_md5_data", str(random.randint(100, 600)))
    
    url = "" 
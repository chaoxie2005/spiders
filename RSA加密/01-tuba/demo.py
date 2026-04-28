import requests
from ....Crawler_Tool.tool import Crawl


def api_login(username):
    url = "https://apigwc2.to8to.com/cgi/user/get/safety/biz/status"

    js_path= r'D:\爬虫项目\爬虫\js逆向\RSA加密\01-tuba\param.js'
    enc_rsa = Crawl.ex_js(js_path, 'get_rsa', username)
    data = {"appname":"to8to-pc","username":enc_rsa,"platform":"3"}
    payload = str(data)
    
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.to8to.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.to8to.com/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Host": "apigwc2.to8to.com",
        "Content-Length": "247"
    }

    response = requests.post(url, data=payload ,headers=headers)

    return response.json()
    
    

if __name__ == '__main__':
    username = input('请输入你的账户名:\r\n')
    print(api_login(username))
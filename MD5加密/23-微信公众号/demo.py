import requests

from Crawler_Tool.tool import Crawl


def api_data(username, pwd):
    url = "https://mp.weixin.qq.com/cgi-bin/bizlogin"

    querystring = {"action":"startlogin"}

    js_path = r'D:\爬虫项目\爬虫\js逆向\MD5加密\23-微信公众号\param.js'
    pwd_enc = Crawl.ex_js(js_path, 'enc_md5', pwd)
    
    payload = f"username={username}&pwd={pwd_enc}&verify_ticket=t03wbU983B5MkjVb4opkeeDEeYZuUm9jpocWrSKVhd-HurO7v_TPyBcB4aFUEws5MViHypqHN6Z6Zt9fANq_RAHy2RUFy9WCe7OTqlP_qJtM1p1esNbkuY1pQg5VfqbU9-G&rand_str=%40OqT&f=json&userlang=zh_CN&redirect_url=&fingerprint=cca8bfbbbc6e4caf6508c3fa3279c83d&token=&lang=zh_CN&ajax=1"
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://mp.weixin.qq.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://mp.weixin.qq.com/cgi-bin/loginpage",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest",
        "Cookie": "uuid=644ab72659da94bf0056361a141faccf",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Host": "mp.weixin.qq.com",
        "Content-Length": "325"
    }

    response = requests.request("POST", url, data=payload, headers=headers, params=querystring)

    return response.text
    
    
if __name__ == '__main__':
    username = input('请输入你的账户名:\r\n')
    pwd = input('请输入你的密码:\r\n')
    print(api_data(username, pwd))
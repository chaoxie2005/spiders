import requests
import execjs

def enc_param(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg)

def api_login(username, password, _p1):  # 修改参数名，避免与内部data变量冲突
    js_path = r'D:\爬虫项目\爬虫\js逆向\27-宁波大学官网登录\param.js'
    # 修正参数传递方式，使用正确的关键字参数
    pwd_enc = enc_param(js_path,"aes_enc", password, _p1)
    
    cookies = {
        'route': 'c1ef17f7e6648fd3ce8b42d37261916f',
        'JSESSIONID_auth': 'm6AJokvaoC8dBDPifUdRL3rjfhH-gB7Dhq0-rps1P8dWfLT5arUX!-324449240',
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://uis.nbu.edu.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://uis.nbu.edu.cn/authserver/login?service=https%3A%2F%2Fehall.nbu.edu.cn%2Flogin%3Fservice%3Dhttps%3A%2F%2Fehall.nbu.edu.cn%2Fywtb-portal%2Fofficial%2Findex.html',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    params = {
        'service': 'https://ehall.nbu.edu.cn/login?service=https://ehall.nbu.edu.cn/ywtb-portal/official/index.html',
    }

    data = {
        'username': username,
        'password': pwd_enc,
        'captchaResponse': 'ad6z',
        'lt': 'LT-622574-d7pc4afI79TjSexeziVcze5R3vVueR1756803445268-Mh1v-cas',
        'dllt': 'userNamePasswordLogin',
        'execution': 'e2s1',
        '_eventId': 'submit',
        'rmShown': '1',
    }

    response = requests.post(
        'https://uis.nbu.edu.cn/authserver/login', 
        params=params, 
        cookies=cookies, 
        headers=headers, 
        data=data
    )
    return response.text

if __name__ == "__main__":
    username = input("请输入你的用户名\r\n")
    password = input("请输入你的密码\r\n")
    p1 = "QfQeXjITA1e5YeYE"
    print(api_login(username ,password, p1))
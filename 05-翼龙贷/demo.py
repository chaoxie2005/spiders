import execjs
import requests


def get_password(password):
    with open(r'D:\爬虫项目\爬虫\js逆向\05-翼龙贷\get_password.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_password', password)

def api_data(password):
    cookies = {
        'sid': 'lcqt_2a9d4ee3-f1da-4988-bada-abebe8970dd9_1748874894801',
        '__jsluid_s': '67f0fca260960e457330f18a5e89a9b9',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://cj.eloancn.com',
        'Pragma': 'no-cache',
        'Referer': 'https://cj.eloancn.com/user/login?service=https%3A%2F%2Fcj.eloancn.co%E2%80%A6',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'sid=lcqt_2a9d4ee3-f1da-4988-bada-abebe8970dd9_1748874894801; __jsluid_s=67f0fca260960e457330f18a5e89a9b9',
    }

    data = {
        'version': '0.5591745070314895',
        'platform': '5',
        'username': '15700379044',
        'password': password,
        'service': 'https://cj.eloancn.com/pcgway/app001/v1/02?ret=https://cj.eloancn.com',
    }

    response = requests.post('https://cj.eloancn.com/pcgway/login/v1/02', cookies=cookies, headers=headers, data=data)
    print(response.text)
    
    
if __name__ == '__main__':
    encpwd = get_password('1234455')
    api_data(encpwd)
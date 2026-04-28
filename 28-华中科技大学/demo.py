import requests
import execjs

def enc_param(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg)


def api_login(username, password):
    cookies = {
        'cas_hash': '',
        'Language': 'zh_CN',
        'JSESSIONID': 'QsQKBGR61qY7k_pqQ6YfjZ1hu75J2-tBFdkJlOTT9eRjEXanW4Y9!-2133438537',
        'BIGipServerpool-icdc-cas2': '!hbWIXFnjZM+bvvsOpME0/G3podI1fV+xEiFcV1zMy1m+Vl71VTaiQuuC9nsWvMn9tlSwS4pTJB1LpQw=',
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://pass.hust.edu.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://pass.hust.edu.cn/cas/login',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'cas_hash=; Language=zh_CN; JSESSIONID=QsQKBGR61qY7k_pqQ6YfjZ1hu75J2-tBFdkJlOTT9eRjEXanW4Y9!-2133438537; BIGipServerpool-icdc-cas2=!hbWIXFnjZM+bvvsOpME0/G3podI1fV+xEiFcV1zMy1m+Vl71VTaiQuuC9nsWvMn9tlSwS4pTJB1LpQw=',
    }

    js_path = r'D:\爬虫项目\爬虫\js逆向\28-华中科技大学\param.js'
    
    data_param = enc_param(js_path, 'rsa_enc', username, password) 
    data = {
        'ua': '{"ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36","browser":{"name":"Chrome","version":"139.0.0.0","major":"139"},"cpu":{"architecture":"amd64"},"device":{},"engine":{"name":"Blink","version":"139.0.0.0"},"os":{"name":"Windows","version":"10"}}',
        'visitorId': '5d21b532f82aaab07e050ada02565f38',
        'rsa': '',
        'code': '8905',
        'phoneCode': '',
        'lt': 'LT-230494-s2cyQedrZURJehGKQ2chqUVqdUPRdL-cas',
        'execution': 'e1s3',
        '_eventId': 'submit',
    }
    datas_param = {**headers, **data_param}

    response = requests.post('https://pass.hust.edu.cn/cas/login', cookies=cookies, headers=headers, data=datas_param)
    return response.text


if __name__ == "__main__":
    username = input("请输入你的学号\r\n")
    password = input("请输入你的密码\r\n")
    print(api_login(username, password))
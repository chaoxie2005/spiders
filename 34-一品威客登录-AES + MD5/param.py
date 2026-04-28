import requests, execjs, time

def ex_js(filepath, func_name, *args):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def login_part():
    login_url = 'https://www.epwk.com/api/epwk/v1/user/login'
    cookies = {
        'HWWAFSESID': '50f5773c86cfc078bc',
        'HWWAFSESTIME': '1758430600928',
        'Hm_lvt_387b8f4fdb89d4ea233922bdc6466394': '1758363320,1758430601',
        'Hm_lpvt_387b8f4fdb89d4ea233922bdc6466394': '1758430601',
        'HMACCOUNT': '5B53905BB2005420',
        'PHPSESSID': '27ca7539e33e2a21332ed39b07e0db74bc703089',
        'time_diff': '-1',
        'XDEBUG_SESSION': 'XDEBUG_ECLIPSE',
        'banners_show_cookie_ip': '118.124.67.16',
        'login_fail_need_graphics': '1',
    }
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Access-Token': '',
        'App-Id': '4ac490420ac63db4',
        'App-Ver': '',
        'CHOST': 'www.epwk.com',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Device-Os': 'web',
        'Device-Ver': '',
        'Imei': '',
        'NonceStr': '17584307606hyak',
        'Origin': 'https://www.epwk.com',
        'Os-Ver': '',
        'Pragma': 'no-cache',
        'Referer': 'https://www.epwk.com/login.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Signature': 'qQ8DTYCWRq3OgKgzT4HURNz+9GNhnbTzhRXJ/pUavP06vci9VoDuVJ0PSzx7QFbV',
        'Timestemp': '1758430760',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        'X-REQUEST-ID': '192821d85cae749d070a1971a87c827c',
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'HWWAFSESID=50f5773c86cfc078bc; HWWAFSESTIME=1758430600928; Hm_lvt_387b8f4fdb89d4ea233922bdc6466394=1758363320,1758430601; Hm_lpvt_387b8f4fdb89d4ea233922bdc6466394=1758430601; HMACCOUNT=5B53905BB2005420; PHPSESSID=27ca7539e33e2a21332ed39b07e0db74bc703089; time_diff=-1; XDEBUG_SESSION=XDEBUG_ECLIPSE; banners_show_cookie_ip=118.124.67.16; login_fail_need_graphics=1',
    }
    data = {
        'username': '15712345678',
        'password': '123456678',
        'code': 'r3qz',
        'hdn_refer': '',
    }

    response = requests.post(login_url, cookies=cookies, headers=headers, data=data)

    return response.text



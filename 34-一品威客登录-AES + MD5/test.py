import requests, json, base64


def get_code():
    cookies = {
        'HWWAFSESID': '0ff5a768aeb70225d3',
        'HWWAFSESTIME': '1758453803080',
        'Hm_lvt_387b8f4fdb89d4ea233922bdc6466394': '1758363320,1758430601,1758453804',
        'Hm_lpvt_387b8f4fdb89d4ea233922bdc6466394': '1758453804',
        'HMACCOUNT': '5B53905BB2005420',
        'PHPSESSID': '8056aed5fea554c74aef5d9f953776360b895596',
        'time_diff': '0',
        'XDEBUG_SESSION': 'XDEBUG_ECLIPSE',
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
        'Device-Os': 'web',
        'Device-Ver': '',
        'Imei': '',
        'NonceStr': '1758454520no014',
        'Os-Ver': '',
        'Pragma': 'no-cache',
        'Referer': 'https://www.epwk.com/login.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Signature': 'jBXiLg3VQOQ9nzfhU/+TWFoAkQ5oJTB3pkrrPI8SroNdkVC7X0CEUJsXtqdHaUeX',
        'Timestemp': '1758454520',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        'X-REQUEST-ID': '4f49ddb2b2f6e916641b98ba4d2bd231',
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'HWWAFSESID=0ff5a768aeb70225d3; HWWAFSESTIME=1758453803080; Hm_lvt_387b8f4fdb89d4ea233922bdc6466394=1758363320,1758430601,1758453804; Hm_lpvt_387b8f4fdb89d4ea233922bdc6466394=1758453804; HMACCOUNT=5B53905BB2005420; PHPSESSID=8056aed5fea554c74aef5d9f953776360b895596; time_diff=0; XDEBUG_SESSION=XDEBUG_ECLIPSE',
    }

    params = {
        'channel': 'common_channel',
        'base64': '1',
    }

    response = requests.get('https://www.epwk.com/api/epwk/v1/captcha/show', params=params, cookies=cookies, headers=headers)


    base64_img = response.json()['data']['base64']
    return base64_img


def base64_to_img(base64_img):
    img = base64.b64decode(base64_img)
    with open('code.png', 'wb') as f:
        f.write(img)
    print('验证码已保存')
    
def main():
    base64_img = get_code()
    base64_to_img(base64_img)


main()
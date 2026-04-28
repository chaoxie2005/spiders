import requests

def api_data():
    import requests

    cookies = {
        'Hm_lvt_fb5d677ed5c8cf9aee8702b1472147e0': '1755502711',
        'HMACCOUNT': '5B53905BB2005420',
        'Hm_lpvt_fb5d677ed5c8cf9aee8702b1472147e0': '1755507481',
        'MXAPI': '%7B%22ver%22%3A%22v1.0.0%22%2C%22sCode%22%3A%22Wanda%22%2C%22_mi_%22%3A%22%22%2C%22width%22%3A1280%2C%22json%22%3Atrue%2C%22cCode%22%3A%221_3%22%2C%22check%22%3A%22f8e28d22da8910b009c8e4c8b7294b0b%22%2C%22ts%22%3A1755507711358%2C%22heigth%22%3A720%2C%22appId%22%3A%223%22%7D',
    }

    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'MX-API': '{"ver":"v1.0.0","sCode":"Wanda","_mi_":"","width":1280,"json":true,"cCode":"1_3","check":"4d8b944d4d49e3c471bc7ccb9753ddf9","ts":1755507711356,"heigth":720,"appId":"3"}',
        'Pragma': 'no-cache',
        'Referer': 'https://www.wandacinemas.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'Hm_lvt_fb5d677ed5c8cf9aee8702b1472147e0=1755502711; HMACCOUNT=5B53905BB2005420; Hm_lpvt_fb5d677ed5c8cf9aee8702b1472147e0=1755507481; MXAPI=%7B%22ver%22%3A%22v1.0.0%22%2C%22sCode%22%3A%22Wanda%22%2C%22_mi_%22%3A%22%22%2C%22width%22%3A1280%2C%22json%22%3Atrue%2C%22cCode%22%3A%221_3%22%2C%22check%22%3A%22f8e28d22da8910b009c8e4c8b7294b0b%22%2C%22ts%22%3A1755507711358%2C%22heigth%22%3A720%2C%22appId%22%3A%223%22%7D',
    }

    params = {
        'tt': '1755507711356',
    }

    response = requests.get(
        'https://www.wandacinemas.com/api/proxy/content/pc/movie/hot_show.api',
        params=params,
        cookies=cookies,
        headers=headers,
    )
    return response.json()


if __name__ == '__main__':
    print(api_data())
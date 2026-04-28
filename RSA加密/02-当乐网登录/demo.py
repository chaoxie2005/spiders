import requests
import execjs

def ex_js(filepath: str = None, func_name: str = None, *args) -> str:
        """
        编译JS代码，并调用函数
        :param filepath: JS文件的路径
        :param func_name: 需调用的JS函数
        :param *args: 函数所需要传入的参数
        """
        with open(filepath, 'r', encoding='utf-8') as f:
            js_code = f.read()
        ex_code = execjs.compile(js_code)
        return ex_code.call(func_name, *args)

def api_data(username, pwd):
    cookies = {
        'JSESSIONID': '432e30eab03236bed2e57ffd15f4',
        'ut': '1754296148749',
        'BIGipServerpool_web_oauth.d.cn_auth_81': '2818681024.20736.0000',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://oauth.d.cn/auth/goLogin.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': 'JSESSIONID=432e30eab03236bed2e57ffd15f4; ut=1754296148749; BIGipServerpool_web_oauth.d.cn_auth_81=2818681024.20736.0000',
    }

    js_path = r'D:\爬虫项目\爬虫\js逆向\RSA加密\02-当乐网登录\param.js'
    enc_pwd = ex_js(js_path, 'enc_rsa', pwd)
    params = {
        'display': 'web',
        'name': username,
        'pwd': enc_pwd,
        'to': 'https%3A%2F%2Fwww.d.cn%2F',
        'reqId': '2hoxr43wjnnszqsh482k7ebnj7nuuzb5',
        'geetest_challenge': '036800d261bc5087936adea5edbffbdd',
        'geetest_validate': 'f965a4597bd0df3724d8caddcf1d5f45',
        'geetest_seccode': 'f965a4597bd0df3724d8caddcf1d5f45|jordan',
    }

    response = requests.get('https://oauth.d.cn/auth/login', params=params, cookies=cookies, headers=headers)
    return response.text


if __name__ == '__main__':
    print(api_data('15700379044', '1232342'))
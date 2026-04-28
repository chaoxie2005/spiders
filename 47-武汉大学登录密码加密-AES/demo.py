"""
目标网址: https://cas.whu.edu.cn/authserver/login
"""
import requests
from bs4 import BeautifulSoup
import re, execjs

def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider():
    cookies = {
        'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE': 'zh_CN',
        'JSESSIONID': 'KQ36-NNk9_swCLdvnOxytGxPxC8x5TrCSHbj0N-7kW-ai-wKutoQ!1941193517',
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://cas.whu.edu.cn',
        'Pragma': 'no-cache',
        'Referer': 'https://cas.whu.edu.cn/authserver/login',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
        'username': '15700379044',
        'password':"PHf03SeqUFppVsyxznn7DevjSsmZClvZzX8qyyh0vP+rqv+CC8fJNia3acotrlK/uBHL76Ror7UNWlRV4uaIxrsXcBeF4k0oXPTFUkSNJcE=",
        'lt': 'LT-6441426-wOydnem456PIHeg5F0mQuK2MxAR2vB1760852736917-dYdF-cas',
        'dllt': 'userNamePasswordLogin',
        'execution': 'e1s5',
        '_eventId': 'submit',
        'rmShown': '1',
    }

    response = requests.post('https://cas.whu.edu.cn/authserver/login', cookies=cookies, headers=headers, data=data)
    return response.text


def get_key(html_content):
    """在前端网页中提取key进行加密"""
    soup = BeautifulSoup(html_content, 'html.parser')
    scripts = soup.find_all('script')
    for script in scripts:
        pattern = r'pwdDefaultEncryptSalt\s*=\s*"([^"]+)"'
        match = re.search(pattern, script.text)
        if match:
            res = match.group(1)
    return res
    
def get_enc_pwd(pwd, key):
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\47-武汉大学登录密码加密-AES\param.js'
    enc_pwd = ex_js(JSPATH, 'encryptAES', pwd, key)
    return enc_pwd
    

def main():
    user = input("输入你的账号:\r\n")
    result = spider()
    key = get_key(result)
    enc_pwd = get_enc_pwd(user, key)
    print(f'加密结果为:\r\n{enc_pwd}')
    
    

if __name__ == "__main__":
    main()

import requests
import execjs

def get_encpwd(username, password):
    with open(r'D:\爬虫项目\爬虫\js逆向\11-中国电信天翼云\get_password.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_password', username, password)


def api_login(username, password):
    encpwd = get_encpwd(username, password)
    cookies = {
        'vid': '5zfQk9qZdTsgAHXli2Qs3K0Yd3OkOgX3xcau1kqDQ4ulbVA0ReTXd5VTG12MvpIs',
        'ct_re': 'https%3A%2F%2Fwww.ctyun.cn%2F%5Ehttp%3A%2F%2Fwww.ctyun.cn%2Fsso%2Flogout%3FreturnUrl%3D%252F%26sign%3DNTY1NWVjZTBjODU2ZThlMGVlYzJkYWMxNjRiYzg0OTc%253D%5E1749288504',
        'auto_id': 'e11f31ae6096b2354c8ff998735429b6%7C',
        'ct_tgc': '69e9c98d-8f5a-4b52-8137-bf27c55115c5',
        'Hm_lvt_4b4ce93f1c92033213556e55cb65769f': '1749205827,1749288302,1749790518',
        'HMACCOUNT': '5B53905BB2005420',
        'ct_m_postId_expries': '1749830399999',
        'ct_m_pv_postId_expries': '1749830399999',
        'ct_m_sid1': '1749790518458-2Gt2RvAAcV',
        'ct_m_sid2': '1749790518458-2Gt2RvAAcV',
        'ct_m_dvc_id': '89e2fbdb4333fd275f81c7d25c99a7d7',
        'ct_m_event_postId_expries': '1749830399999',
        'ct_m_flow_postId_expries': '1749830399999',
        'Hm_lpvt_4b4ce93f1c92033213556e55cb65769f': '1749790805',
        'ct_m_pv_postId': '2',
        'ct_m_pvid': '2',
        'ct_m_cat2_id': '10001.0.3',
        'ct_m_event_postId': '24',
        'ct_m_cat2_time': '1749791573980',
        'ct_m_label_id': '17',
        'ct_m_postId': '42',
        'ct_m_flow_postId': '16',
        'JSESSIONID': 'z7mmn0iq3uj6zrzgoo7p0yin',
    }
    
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://www.ctyun.cn',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.ctyun.cn/h5/auth/login',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'x-ctyun-accesstoken': 'null',
        'x-riskdevicesign': '89e2fbdb4333fd275f81c7d25c99a7d7',
        # 'cookie': 'vid=5zfQk9qZdTsgAHXli2Qs3K0Yd3OkOgX3xcau1kqDQ4ulbVA0ReTXd5VTG12MvpIs; ct_re=https%3A%2F%2Fwww.ctyun.cn%2F%5Ehttp%3A%2F%2Fwww.ctyun.cn%2Fsso%2Flogout%3FreturnUrl%3D%252F%26sign%3DNTY1NWVjZTBjODU2ZThlMGVlYzJkYWMxNjRiYzg0OTc%253D%5E1749288504; auto_id=e11f31ae6096b2354c8ff998735429b6%7C; ct_tgc=69e9c98d-8f5a-4b52-8137-bf27c55115c5; Hm_lvt_4b4ce93f1c92033213556e55cb65769f=1749205827,1749288302,1749790518; HMACCOUNT=5B53905BB2005420; ct_m_postId_expries=1749830399999; ct_m_pv_postId_expries=1749830399999; ct_m_sid1=1749790518458-2Gt2RvAAcV; ct_m_sid2=1749790518458-2Gt2RvAAcV; ct_m_dvc_id=89e2fbdb4333fd275f81c7d25c99a7d7; ct_m_event_postId_expries=1749830399999; ct_m_flow_postId_expries=1749830399999; Hm_lpvt_4b4ce93f1c92033213556e55cb65769f=1749790805; ct_m_pv_postId=2; ct_m_pvid=2; ct_m_cat2_id=10001.0.3; ct_m_event_postId=24; ct_m_cat2_time=1749791573980; ct_m_label_id=17; ct_m_postId=42; ct_m_flow_postId=16; JSESSIONID=z7mmn0iq3uj6zrzgoo7p0yin',
    }
    
    data = {
        'id': username,
        'loginFree': 'false',
        'loginType': 'password',
        'newMode': 'true',
        'other': username,
        'password': encpwd,
    }
    
    response = requests.post('https://www.ctyun.cn/gw/auth/Login', cookies=cookies, headers=headers, data=data)
    return response.text


def main():
    data = api_login('15700379044', '123456789')
    print(data)
    
    
if __name__ == '__main__':
    main()
import requests
import execjs


def get_param():
    with open(r'D:\爬虫项目\爬虫\js逆向\20-大话西游藏宝阁\param.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    e = '{"un":"332089@qq.com","pkid":"aqpOBwV","pd":"cbg","channel":0,"topURL":"https://xy2.cbg.163.com/cgi-bin/show_login.py?act=show_login&server_id=115&server_name=%E5%A4%AA%E5%88%9D%E5%B9%BB%E5%A2%83&areaid=3&area_name=%E5%A4%A9%E7%95%8C&return_url=","rtid":"2y9bhYIAsPgkX1oRx9yBZJfhJ7NqMrOC"}'
    t = 'BC60B8B9E4FFEFFA219E5AD77F11F9E2'
    n = 1
    return js_code.call('c', e, t, n)
 
def api_data():
    cookies = {
        '_ntes_nnid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8,1745159681197',
        '_ntes_nuid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8',
        'utid': 'c60ag4jfznYXWk1rwgECNcTrRy8mCyyJ',
        'NTES_WEB_FP': '612d0ea7e087bff6e77d30f4976a4563',
        'timing_user_id': 'time_gXZzrFypDD',
        'gdxidpyhxdE': 'mqHAcY%2F%2FrwQXZGfNR2GwQDsCZCg10yYp%2B5N6aHmVBVa4ctIc08obe1RS3cfVTgwmCHYX7g2e2x%5CDd6ldgcxGPQqJAeSXKzE24TuyAKbxVVMh0yCfNSMsy7TppwzwacA6Bi7hNO0OfuQHq2aKE5AkXjTZXB2zH%2Bcmqc70aCSMyMLLVw2p%3A1752722324699',
        'l_s_cbgaqpOBwV': '50D7EFE8E1E36B32F3B9CF3038C366520E90685BC205D89C063F32457506E108BEB1A9601750ED98D664A67880CD27AF6983D9E96FC4C67D043B772784318C34CEA7A71FD1FDAC16D375C0BEFC79317441EC741930F7E5E50575844959B76871CD9C1F88078EA8F6B7EFF6DC14F80A6B',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://dl.reg.163.com',
        'Pragma': 'no-cache',
        'Referer': 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html?cd=https%3A%2F%2Fcbg-xy2.res.netease.com%2Frc1081442f2f9d5654dba8%2Fcss%2F&cf=urs-login.css&MGID=1752722761909.1492&wdaId=&pkid=aqpOBwV&product=cbg',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': '_ntes_nnid=dd5abfd08a49cce0fccfcdae8fd7b0a8,1745159681197; _ntes_nuid=dd5abfd08a49cce0fccfcdae8fd7b0a8; utid=c60ag4jfznYXWk1rwgECNcTrRy8mCyyJ; NTES_WEB_FP=612d0ea7e087bff6e77d30f4976a4563; timing_user_id=time_gXZzrFypDD; gdxidpyhxdE=mqHAcY%2F%2FrwQXZGfNR2GwQDsCZCg10yYp%2B5N6aHmVBVa4ctIc08obe1RS3cfVTgwmCHYX7g2e2x%5CDd6ldgcxGPQqJAeSXKzE24TuyAKbxVVMh0yCfNSMsy7TppwzwacA6Bi7hNO0OfuQHq2aKE5AkXjTZXB2zH%2Bcmqc70aCSMyMLLVw2p%3A1752722324699; l_s_cbgaqpOBwV=50D7EFE8E1E36B32F3B9CF3038C366520E90685BC205D89C063F32457506E108BEB1A9601750ED98D664A67880CD27AF6983D9E96FC4C67D043B772784318C34CEA7A71FD1FDAC16D375C0BEFC79317441EC741930F7E5E50575844959B76871CD9C1F88078EA8F6B7EFF6DC14F80A6B',
    }

    json_data = {'encParams':get_param()}

    response = requests.post('https://dl.reg.163.com/dl/zj/mail/powGetP', cookies=cookies, headers=headers, json=json_data)
    return response.json()


if __name__ == '__main__':
    print(api_data())

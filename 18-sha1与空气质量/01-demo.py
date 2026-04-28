import requests
import execjs


def get_param():
    with open(r'D:\爬虫项目\爬虫\js逆向\18-sha1与空气质量\01-sha1加密算法.js', 'r') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_param')

def api_data(dic_str):
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'AppId': 'ONEX97FB91F061405',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Eagleeye-Sessionid': '',
        'Eagleeye-Traceid': '',
        'Origin': 'https://www.zeekrlife.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.zeekrlife.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'WorkspaceId': 'prod',
        'X-CORS-ONEX97FB91F061405-prod': '1',
        'app_code': 'toc_pc_zeekrlife',
        # 'app_type': 'PC',
        'device_id': 'undefined',
        # 'platform': 'WEB_PC',
        'riskTimeStamp': '1752374386494',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        # 'x_ca_key': 'H5-SIGN-SECRET-KEY',
        # 'x_ca_nonce': 'CxeJti0pKieFeHy',
        # 'x_ca_sign': 'ec0d3549b93a938397c80ba2c003a8b514eb0379',
        # 'x_ca_timestamp': '1752374246697',
    }

    head = {**dic_str, **headers}
    response = requests.get(
        'https://api-gw-toc.zeekrlife.com/zeekrlife-config-order/v1/model/pub/toc/modelInfo/list',
        headers=head,
    )
    return response.text


if __name__ == '__main__':
    dic_str = get_param()
    res = api_data(dic_str)
    print(res)
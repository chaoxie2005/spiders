import execjs
import requests


def ex_js(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg)
    

def api_data():
    url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/fixed/queryDicByType"

    params = ex_js(r'D:\爬虫项目\爬虫\js逆向\22-国家医保\param.js', 'get_param')
    payload = "{\"data\":{\"data\":{\"encData\":\"EDB72BF2629F9E503727392A5FF0FE5F5AF3E24175CEABB0AF8C54DDF9C8E284\"},\"appCode\":\"T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ\",\"version\":\"1.0.0\",\"encType\":\"SM4\",\"signType\":\"SM2\",\"timestamp\":1753593055,\"signData\":\"omA8ZA6Cp3aX9KLTN2F/4d+sF+sZhmI1ZhBExu41+L+0n2SQK1Nq7j4v+kFJqbJ7zkHN3Auh/aQr/bzLIMNuIg==\"}}"
    headers = {
        "Accept": "application/json",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://fuwu.nhsa.gov.cn",
        "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "X-Tingyun": "c=B|4Nl_NnGbjwY;x=340edb04833346e6",
        "channel": "web",
        "contentType": "application/x-www-form-urlencoded",
        "x-tif-paasid": "undefined",
        "Cookie": "amap_local=511000; yb_header_active=-1; acw_tc=276aedc317535926967535799e3c57d41ab5a49edea4d6b767104cd2c5e6b9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "Host": "fuwu.nhsa.gov.cn",
        "Content-Length": "317"
    }

    headers = {**headers, **params}
    response = requests.request("POST", url, data=payload, headers=headers)

    return response.json()
    
    

if __name__ == '__main__':
    print(api_data())
    

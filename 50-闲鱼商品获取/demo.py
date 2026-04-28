"""
目标网址: https://www.goofish.com/
"""

import requests, execjs, json


JSPATH = r"D:\爬虫项目\爬虫\js逆向\50-闲鱼商品获取\sign.js"

def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider(pagenum):
    data = {"itemId":"","pageSize":30,"pageNumber":pagenum,"machId":""}
    data_str = str(data)
    params = ex_js(JSPATH, 'get_sign', data_str)
    
    sign, timesp = params['sign'], params['timesp']
    url = "https://h5api.m.goofish.com/h5/mtop.taobao.idlehome.home.webpc.feed/1.0/"

    querystring = {"jsv":"2.7.2","appKey":"34839810","t":timesp,"sign":sign,"v":"1.0","type":"originaljson","accountSite":"xianyu","dataType":"json","timeout":"20000","api":"mtop.taobao.idlehome.home.webpc.feed","sessionOption":"AutoLoginOnly","spm_cnt":"a21ybx.home.0.0"}

    payload = {
        "data": data_str
    }

    headers = {
        "accept": "application/json",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "origin": "https://www.goofish.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.goofish.com/",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        "Cookie": "cna=B5ZvIUgITTcCAXZ8QxA96uBZ; t=40b6bbca760f1dd429366fe584191503; tracknick=xy470763329122; havana_lgc2_77=eyJoaWQiOjIyMTk5MTQ3NDM1MTcsInNnIjoiZTBhOTU4NDhkMzVlNWM4ZDVhNTdmZGEzNmIzY2Y3ZDUiLCJzaXRlIjo3NywidG9rZW4iOiIxc19kR2t5M0NjQWdGcnJtSHNoVjlwUSJ9; _hvn_lgc_=77; havana_lgc_exp=1762669955686; xlly_s=1; unb=2219914743517; cookie2=1d6165fe738c0df1e74f1ef4859b9c27; mtop_partitioned_detect=1; _m_h5_tk=ea79e5b12c16b5ec1dab242ec88c7f68_1761195704414; _m_h5_tk_enc=50675d04d9ff5e1a095a17a4b53eea02; _samesite_flag_=true; sgcookie=E100qNjtv%2FvZLf56QZVoOGPzblA%2FEywc7NhDGQct7JDwbd8ouNr8ikktN24nqTX%2FGl32Zouvlw2zkEHMGkSL4qzzPrSjDdFiSd%2FzFquaC2zG%2Fp0%3D; csg=75ceb082; _tb_token_=754133f35ee08; sdkSilent=1761273466375; tfstk=gzhKQ4X-BhxHg0jFJ0vMEvSGyXLMId0F-DufZuqhFcntlqS3FXVn2Tnnz02WYWc-XWliK_qHY73Sm7KDmIAm82rzNnx05UMutSUYR_suFVNUrzkSloAm8271JgTmCIbJdKXhOui7dRa_8ls7Rui71Nauf6a5Ozs6Wzr_NyaCOPN_PrBCO6iS5FUufzZSVJTT1lz7Nui7NxOwtu5am_HEatsQ0a_c61hTJJERZl1-Lf10dosuf_C8jlepr2ZON_GteadsWk9VSuP3YbUK4I5UO8Hqrznp96i-ufoT5mORikgZox2EOLf0H5ELEXiJ2TUKnDnzA2sCdrFLv-GQQwTtW8Mt6WcB4tuiWkwYsAvwx8VKvxr4dd-Z2VEnVXe1vhqonVcQBmtG60y-344-vBCIcg7ZijeggiqYr9T9WTWzdPWJG1ftUnKLqPEDSlBPURdQWoY9WTWzdPzTmFXOUTy9O",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Host": "h5api.m.goofish.com",
        "Content-Length": "101"
    }

    response = requests.post(url, data=payload, headers=headers, params=querystring)

    return response.text


def main():
    for num in range(1, 41):
        result = spider(2)
        print(f'第{num}页保存成功：{result}')
    

if __name__ == '__main__':
    main()
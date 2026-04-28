import requests, execjs
import json


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider(page):
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\52-淘宝商品信息\get_sign.js'
    
    # 构建params数据，注意page参数需要是字符串
    params_data = {
        "device": "HMA-AL00",
        "isBeta": "false",
        "grayHair": "false",
        "from": "nt_history",
        "brand": "HUAWEI",
        "info": "wifi",
        "index": "4",
        "rainbow": "",
        "schemaType": "auction",
        "elderHome": "false",
        "isEnterSrpSearch": "true",
        "newSearch": "false",
        "network": "wifi",
        "subtype": "",
        "hasPreposeFilter": "false",
        "prepositionVersion": "v2",
        "client_os": "Android",
        "gpsEnabled": "false",
        "searchDoorFrom": "srp",
        "debug_rerankNewOpenCard": "false",
        "homePageVersion": "v7",
        "searchElderHomeOpen": "false",
        "search_action": "initiative",
        "sugg": "_4_1",
        "sversion": "13.6",
        "style": "list",
        "ttid": "600000@taobao_pc_10.7.0",
        "needTabs": "true",
        "areaCode": "CN",
        "vm": "nw",
        "countryNum": "156",
        "m": "pc",
        "page": str(page),  # 转换为字符串
        "n": 48,
        "q": "%E9%94%AE%E7%9B%98",
        "qSource": "manual",
        "pageSource": "a21bo.jianhua/a.search_manual.0",
        "channelSrp": "",
        "tab": "all",
        "pageSize": "48",
        "totalPage": "100",
        "totalResults": "5000",
        "sourceS": "0",
        "sort": "_coefp",
        "bcoffset": "",
        "ntoffset": "",
        "filterTag": "",
        "service": "",
        "prop": "",
        "loc": "",
        "start_price": None,
        "end_price": None,
        "startPrice": None,
        "endPrice": None,
        "itemIds": None,
        "p4pIds": None,
        "p4pS": None,
        "categoryp": "",
        "ha3Kvpairs": None,
        "myCNA": "ws6DIRqFmHYCAXZ8QxC7ILok",
        "screenResolution": "1463x915",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        "couponUnikey": "",
        "subTabId": "",
        "np": "",
        "clientType": "h5",
        "isNewDomainAb": "false",
        "forceOldDomain": "false"
    }
    
    enc_data = {
        "appId": "34385",
        "params": json.dumps(params_data, separators=(',', ':'))  # 使用json序列化
    }
    
    params = ex_js(JSPATH, 'get_sign', json.dumps(enc_data, separators=(',', ':')))  # 传递序列化后的数据
    
    url = "https://h5api.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/"
    
    sign = params['sign']
    timesp = params['t']
    
    querystring = {
        "jsv": "2.7.4",
        "appKey": "12574478",
        "t": timesp,
        "sign": sign,
        "api": "mtop.relationrecommend.wirelessrecommend.recommend",
        "v": "2.0",
        "timeout": "10000",
        "type": "jsonp",
        "dataType": "jsonp",
        "callback": "mtopjsonp21",
        "data": json.dumps(enc_data, separators=(',', ':'))
    }

    payload = ""
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://s.taobao.com/search?commend=all&ie=utf8&initiative_id=tbindexz_20170306&page=1&preLoadOrigin=https%3A%2F%2Fwww.taobao.com&q=%E9%94%AE%E7%9B%98&search_type=item&sourceId=tb.index&spm=a21bo.jianhua%2Fa.search_manual.0&ssid=s5-e&tab=all",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        "Cookie": "cookie2=11c0c9ea9f79d0df57eeeded740a7015; t=5124bfa1e8cae98179f9e529c46951b0; _tb_token_=70478deb369d4; wk_cookie2=1203060bbcb4a573359f228d364e7c72; wk_unb=UUphy%2FA5iMIYV%2B5yKg%3D%3D; thw=cn; aui=2201205393049; mt=ci=0_0; sgcookie=E100P2MBhuJzzjml%2BtoAGAlfzDGlJ0eGNmSdUSA35qYWKgvaMLn1yUeV15N0RlPj%2BTGNYlkIpccHXiDaKl%2BxGFrVILjMprg3V7OZ0fWxK0HjvkE%3D; _hvn_lgc_=0; havana_lgc2_0=eyJoaWQiOjIyMDEyMDUzOTMwNDksInNnIjoiYzM5ZTVmMzY0NWFiNDEyMThhYTc0MWNkMDdlNTU2MTUiLCJzaXRlIjowLCJ0b2tlbiI6IjFPTmVMRUFHOG1FUUY5WVhldWpOSXJBIn0; unb=2201205393049; csg=cb948a41; lgc=tb774020013; cancelledSubSites=empty; cookie17=UUphy%2FA5iMIYV%2B5yKg%3D%3D; dnk=tb774020013; skt=32f59196b5eb802e; tracknick=tb774020013; _l_g_=Ug%3D%3D; sg=39b; _nk_=tb774020013; cookie1=AH%2F4O9OPcys21CxigM%2F2M4jORajv2QrzKQll7GpNzGo%3D; uc1=pas=0&cookie16=VT5L2FSpNgq6fDudInPRgavC%2BQ%3D%3D&cookie14=UoYY4v%2F3xci4%2Bg%3D%3D&cookie15=W5iHLLyFOGW7aA%3D%3D&existShop=false&cookie21=W5iHLLyFe3xm; sn=; uc3=nk2=F5RCYr6H7ysbmlo%3D&id2=UUphy%2FA5iMIYV%2B5yKg%3D%3D&lg2=WqG3DMC9VAQiUQ%3D%3D&vt3=F8dD2kv3K7f%2BzPfnneM%3D; existShop=MTc2MTQ2MzIwMw%3D%3D; uc4=id4=0%40U2grEJfMA8%2BjwcctU4TYnWo4AgmU37tq&nk4=0%40FY4JjCqmGCsLxI1tn%2BomPgKLU%2BzhYw%3D%3D; _cc_=UtASsssmfA%3D%3D; 3PcFlag=1761576312173; cna=ws6DIRqFmHYCAXZ8QxC7ILok; xlly_s=1; mtop_partitioned_detect=1; _m_h5_tk=f1501dfc5d95a6e8bfaec692346fcaf0_1761893691652; _m_h5_tk_enc=9cf3f9b46b040ba7250677577578e54d; sca=f6ee77a7; _samesite_flag_=true; havana_lgc_exp=1792989777162; sdkSilent=1761914577162; havana_sdkSilent=1761914577162; tfstk=gvWxLrGOwz40JvuqDNVus0NeyJqlh7j4oZSIIFYm1aQRfUDg0KVwBNLR7EADhED9BGQNSNIa0hT15NLGi72h0iJwCy4TKJjVEbqZBZL618Z6jHGbqIgAcKoXCy43KhMFePv1mOebLUGWYUtjhdMb2Qt9cA961ns72htilfMf5gZJzngsCxO6NgtBjdT15dZRVU-9Cn_6CuIWzhMH7-YZUeDOgMUJAjM3wXhdendvWAYSB4qMcILCcUU_xTHeMesXyAUA40GXWUWQr7IPNs_D4NeLyd7P1NtOP4aMgG1RynQ0JV8G3iX9oiFbPgpykZOAwkG22gXAX1O8c-sJHEdhCZisMKC1uOdVMcrFVK_PTeRbaz-Rn9A98Q37lgjJlBCOozk6o6I5yBXorvvNz1_6XagA4uWhpQvE-eKiGuE-_fRX4feIEYHe6ZpH2eqkyflww-tJ-uE-_fRX43L3qbhZ_Qef.; isg=BF1dTDpO6Pg0vI3iS2ddMsCZbDlXepHMdwyGox8iqrT61n8I5ssPnLgAAMpQEqmE",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Host": "h5api.m.taobao.com"
    }

    response = requests.get(url, data=payload, headers=headers, params=querystring)
    
    # 正确处理返回的jsonp数据
    if response.text.startswith('mtopjsonp21('):
        return response.text[len("mtopjsonp21("): -1]
    else:
        return response.text

def main():
    result = spider(1)
    print(result)
    
    
if __name__ == "__main__":
    main()
"""
目标网站: https://index.mysteel.com/price/indexPrice.html
需求: 获取走势图数据
"""
import requests, time, execjs, json


def timesp():
    return int(time.time() * 1000)


def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)


def spider(startTime, endTime, catalog, spec, city):
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://index.mysteel.com/price/indexPrice.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Cookie': 'uuid_5d36a9e0-919c-11e9-903c-ab24dbab411b=b690140b-9137-4245-9393-adaf6a3eabe7; buriedDistinctId=fb11467ea6be4150a638db06bfe42922; WM_NI=wqU5Mm31YYmNNWNG9j2dKfdHSJICFH%2BlBMAPZywPi6%2FPSt1PY2CT6SFO07lXlIDvse1CmdoQgbnthgqYK0sM35mpBiQk0ti8%2Ff0twuoh%2BYJJsOg9jfowlIIrbzWqr14aazE%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee97d84fa5e9aab2c16fa7ac8aa6d14e928e8fb0d63a92b9fbb9c2548abcf88fed2af0fea7c3b92ab5af9bd6d067f1ef97baf0468e8982a8bc62f2bc8587e744919687a4c544e9b48eaec45c9aa7b9b1ec3eed909d95b45c9bee8db5b559869100d8ef54b0978c97f26ff39da385ee5ba5bea295eb6db38785d1f247f1eba391c16393b50095ec34edba0095f67fadb8e5bac942b191a9dae96eada9a4aacc7aa2a69992f13bf8bfaf9bc837e2a3; WM_TID=R3mXnV%2FNee9FQUBAEUbX2VlpCXTYI8nz; accessId=5d36a9e0-919c-11e9-903c-ab24dbab411b; BURIED_STARTUP=eyJTVEFSVFVQIjp0cnVlLCJTVEFSVFVQVElNRSI6IjIwMjUtMTAtMjggMTA6NTE6MzAuNzk5In0%3D; MYSTEEL_GLOBAL_BURIED_IDENTITY=9268a2194096579093bc22cde741cdd9; ratingLoginFlag=0; Hm_lvt_1c4432afacfa2301369a5625795031b8=1761576528,1761577878,1761619900; Hm_lpvt_1c4432afacfa2301369a5625795031b8=1761619900; HMACCOUNT=26FAD4314C20E141; href=https%3A%2F%2Findex.mysteel.com%2Fprice%2FindexPrice.html; pageViewNum=5; gdxidpyhxdE=eVDeEMlEO61UxAhIqiAWDNN40WCuSSfej8G0Z%2F3U70BvP%2B0lKX%5Cp0cNZtyuJgWfS77Vb%2FzmDcieq%2Bor5b8t64sz6weNOdQAIfnfA40aYIedsPbA%5CxuVVCfYKP4397KixdrAxjicKQ0nOZgXvUdcdObJ5z3uyLeRXDZBvmGAkbBfrZWUb%3A1761622866507',
    }
    
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\51-材料获取-对响应数据进行解密-堆栈\get_response.js'
    params = ex_js(JSPATH, 'get_params', catalog, city, spec)
    timesp_val, timestamp, catalog_val, city_val, spec_val, token = \
        params["timesp"], params["Timestamp"], params["catalog"], params["city"], params["spec"], params["Token"]
        
    request_params = {
        "catalog": catalog_val,
        "city": city_val,
        "spec": spec_val,
        "startTime": startTime,
        "endTime": endTime,
        "callback": "json",
        "v": timesp_val,
        "Api-Token": token,
        "Timestamp": timestamp
    }
    
    url = 'https://index.mysteel.com/api/pricetrend/getChartMultiCity.htm'
    response = requests.get(url, headers=headers, params=request_params)
    
    if response.status_code == 200:
        encrypted_data = response.json()
        # 解密响应数据
        decrypted_result = ex_js(JSPATH, 'get_response', encrypted_data)
        return json.loads(decrypted_result)
    else:
        print(f"请求失败，状态码: {response.status_code}")
        return None


def main():
    result = spider('2025-01-01', '2025-10-27', '螺纹钢_:_螺纹钢', 'HRB400E Φ20_:_HRB400E_Φ20', '上海')
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
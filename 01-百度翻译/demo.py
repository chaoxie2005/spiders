import execjs
import requests

URL = 'https://fanyi.baidu.com/v2transapi?from=en&to=zh'


def get_params(word):
    with open(r'D:\python项目\爬虫\js逆向\01-百度翻译\get_params.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
        
    js_code = execjs.compile(js_code)
    return js_code.call('get_params', word)


def send(word):
    headers = {
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'referer':'https://fanyi.baidu.com/?ext_channel=pcPinzhuan',
        'cookie':'BIDUPSID=B12FDC0831423CE0F9C9063310E09D1B; PSTM=1745131308; BAIDUID=B12FDC0831423CE0E42CC467BD69E4E7:FG=1; BDUSS=tldFNRTTZsb3huWTB2a3VtVHB6ZmtDNnFOZ1B2cW9SZGZIRHdRTk9rS2N1VXBvSVFBQUFBJCQAAAAAAQAAAAEAAAATRC2FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJwsI2icLCNoUG; BDUSS_BFESS=tldFNRTTZsb3huWTB2a3VtVHB6ZmtDNnFOZ1B2cW9SZGZIRHdRTk9rS2N1VXBvSVFBQUFBJCQAAAAAAQAAAAEAAAATRC2FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJwsI2icLCNoUG; smallFlowVersion=old; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; H_WISE_SIDS=62325_62969_63141_63195_63211_63243_63248_63254_63290_63074_63326_63353_63378_63382_63186; MAWEBCUID=web_aQrHLmjHZBACQUpFQbBRYvaULeEmwfbDSEvyGEehuJBqOkHaDl; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_PS_PSSID=62325_63141_63195_63211_63243_63290_63326_63353_63378_63382_63186_63393_63391_63401_63442_63465; BAIDUID_BFESS=B12FDC0831423CE0E42CC467BD69E4E7:FG=1; BA_HECTOR=002ha02k00a001848l0hah2l008lak1k3l3am24; ZFY=nA:Av4:BXk2uUeFnT7UiC1EqVfzeMKcLs3jzN12QJgbP0:C; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1747137754,1747138072,1747212691,1748682608; HMACCOUNT=5B53905BB2005420; RT="z=1&dm=baidu.com&si=9ab3dae0-7871-4de7-abb5-2de9a738fb3d&ss=mbc1y7ji&sl=1&tt=28b&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=30g"; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1748685091; ab_sr=1.0.1_MWQ1NDM5ZTM1YzA1ZGQwYTRhN2IzNzI2ZGE4MjhmZjIzODY5NjMxNzVhNTU5YWJhYjY1YzQ4MTlhZTRmMGI3OTA5OTA3ZTA0NjZjMjNlOTg1ZGJhODU3OTU3MjhjM2Y3MzMyYmVhMjVhODVmYzgxODYwYWNlZTRlNGZiODI4ZmNhN2Y1YTU5MTUzNzRmYjFmMWRmNDhmNjIyOTc3NmQxNDgxZmEwODE0YjRkNWUzM2FlMWUzZGMyZGM2YTA4MTky'
    }
    params = get_params(word)
    
    res = requests.post(URL, headers=headers, data=params)
    return res.json()


def api_translate(content):
    data = content['trans_result']['data'][0]
    translate = data['dst']
    return translate
    

def main():
    word = input('请输入你要翻译的单词：\r\n')
    content = send('translate')
    if content:
        translate = api_translate(content)
        print(f'\n翻译内容: {translate}')


if __name__ == '__main__':
    main()
    
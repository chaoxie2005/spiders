import requests
import execjs
import random


def get_param(func_name, *arg):
    with open(
        r"D:\爬虫项目\爬虫\js逆向\19-有道AI翻译\param.js", "r", encoding="utf-8"
    ) as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg) 


def get_token():
    num = str(random.randint(100, 600))
    yduuid = get_param('md5_enc', num)
    url = f'https://luna-ai.youdao.com/translate_llm/secret?keyid=ai-translate-llm-pre&sign=3964af2b6afc26a5a088c497e8af3e3d&client=fanyideskweb&product=webfanyi&appVersion=1.0.0&vendor=web&pointParam=client,mysticTime,product&mysticTime=1747913963986&keyfrom=fanyi.web&mid=1&screen=1&model=1&network=wifi&abtest=0&yduuid={yduuid}'
    header = {
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
    }
    res = requests.get(url, headers=header)
    return yduuid, res.json()['data']['token']


def get_sign(yduuid, token, word):
    data = f"appVersion=1&client=web&free=false&fromLang=en&functionEnglishName=LLM_translate&imei=1&input={word}&keyfrom=fanyi.web&keyid=ai-translate-llm&mid=1&model=1&mysticTime=1747830283426&network=wifi&product=webfanyi&roundNo=1&screen=1&showSuggest=0&singleBox=false&toLang=zh-CHS&token={token}&useTerm=0&vendor=web&yduuid={yduuid}&key=QGCmKoX7N7wACtICx3PSaWzoPJza2DSC"
    chat_sign = get_param('md5_enc', data)
    return chat_sign


def api_data(yduuid, token, chat_sign, word):
    url = 'https://luna-ai.youdao.com/translate_llm/v3/chat'
    headers = {
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
    }
    data = {
       'product': 'webfanyi',
        'appVersion': '1',
        'client': 'web',
        'mid': '1',
        'vendor': 'web',
        'screen': '1',
        'model': '1',
        'imei': '1',
        'network': 'wifi',
        'keyfrom': 'fanyi.web',
        'keyid': 'ai-translate-llm',
        'mysticTime': '1747830283426',
        'yduuid': yduuid,
        'functionEnglishName': 'LLM_translate',
        'input': word,
        'useTerm': '0',
        'free': 'false',
        'singleBox': 'false',
        'fromLang': 'en',
        'toLang': 'zh-CHS',
        'roundNo': '1',
        'showSuggest': '0',
        'token': token,
        'sign': chat_sign,
        'pointParam': 'appVersion,client,free,fromLang,functionEnglishName,imei,input,keyfrom,keyid,mid,model,mysticTime,network,product,roundNo,screen,showSuggest,singleBox,toLang,token,useTerm,vendor,yduuid,key',
    }
    res = requests.post(url, headers=headers, data=data)
    return res.text

def main():
    word = input('请输入你要翻译的单词\r\n')
    yduuid, token = get_token()
    chat_sign = get_sign(yduuid, token, word)
    print(api_data(yduuid, token, chat_sign, word))


if __name__ == '__main__':
    main()

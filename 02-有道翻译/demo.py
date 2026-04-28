import json

import execjs
import requests

URL = 'https://dict.youdao.com/webtranslate'


def get_params(word):
    with open(r'D:\python项目\爬虫\js逆向\02-有道翻译\get_params.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    params = js_code.call('get_params')
    params['i'] = word
    params['from'] = 'auto'
    params['useTerm'] = 'false'
    params['dictResult'] = 'true'
    params['keyid'] = 'webfanyi'
    return params


def send(word):
    """获取加密后的响应数据"""
    headers = {
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'referer':'https://fanyi.youdao.com/',
        'cookie':'OUTFOX_SEARCH_USER_ID=292577172@240e:476:8500:e522:cc91:2d7e:3519:2248; OUTFOX_SEARCH_USER_ID_NCOO=13296505.36584336; _gcl_au=1.1.2113919309.1747404646; _uetsid=3ae912903e0c11f0b3a9c114e800065f; _uetvid=b8510df0325c11f0a2c5255d08983b47; DICT_DOCTRANS_SESSION_ID=Y2QwODVhNGMtNmZiZi00MTdiLThmZWUtN2I2ZWZmZWY3Mjg1'
    }
    
    params = get_params(word)
    
    
    res = requests.post(URL, headers=headers, data=params)
    return res.text


def get_res(e):

    with open(r'D:\python项目\爬虫\js逆向\02-有道翻译\get_res.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    res = js_code.call('get_res', e)
    return json.loads(res)


def api_translate(content):
    dictResult = content['dictResult']
    ec = dictResult['ec']
    translate_word = ec['word']['trs'][0]['tran']
    return translate_word


def main():
    word = input('请输入要翻译的单词：\r\n')
    enc_data = send(word)
    content = get_res(enc_data)
    translate_word = api_translate(content)
    print('\n翻译单词为: {}'.format(translate_word))


if __name__ == '__main__':
    main()
    
    
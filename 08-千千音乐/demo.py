import time

import execjs
import requests


def get_timesp():
    return int(time.time())


def get_sign(word, timesp):
    data = f'appid=16073360&pageSize=20&timestamp={str(timesp)}&type=1&word={word}0b50b02fd0d73a9c4c8c3a781c30845f'
    with open(r'D:\爬虫项目\爬虫\js逆向\08-千千音乐\get_sign.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_sign', data)


def api_music(singname):
    timesp = get_timesp()
    sign = get_sign(singname, timesp)
    cookies = {
        'Hm_lvt_d0ad46e4afeacf34cd12de4c9b553aa6': '1747723243,1749546421',
        'Hm_lpvt_d0ad46e4afeacf34cd12de4c9b553aa6': '1749546421',
        'HMACCOUNT': '5B53905BB2005420',
    }

    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'device-id': '0fe6feb54289f4c67027ec06cc2131f8',
        'from': 'web',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://music.91q.com/search?word=%E5%BC%A0%E6%9D%B0',
        'requestid': '1749546576_SPEkssS',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        # 'cookie': 'Hm_lvt_d0ad46e4afeacf34cd12de4c9b553aa6=1747723243,1749546421; Hm_lpvt_d0ad46e4afeacf34cd12de4c9b553aa6=1749546421; HMACCOUNT=5B53905BB2005420',
    }

    params = {
        'sign': sign,
        'word': singname,
        'type': '1',
        'pageSize': '20',
        'appid': '16073360',
        'timestamp': timesp,
    }

    response = requests.get('https://music.91q.com/v1/search', params=params, cookies=cookies, headers=headers)
    return response.json()


def parse_data(content):
    data = content['data']
    typeTrack = data['typeTrack']
    for item in typeTrack:
        title = item['title']
        albumTitle = item['albumTitle']
        print(f'歌曲名: {title} ------ 专辑名: {albumTitle}')
        
        
def main():
    word = input('请输入你要搜索的歌曲或歌手：')
    content = api_music(word)
    parse_data(content)
    
    
if __name__ == '__main__':
    main()
    
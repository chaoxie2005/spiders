import json
import os
import time

import execjs
import requests

URL = 'https://complexsearch.kugou.com/v2/search/song'
sing_name = input('请输入你要搜索的歌手或者歌曲:\r\n')


def get_timesp():
    return int(time.time() * 1000)


def get_signature(sing_name, timesp):
    str=f'NVPh5oo715z5DIWAeQlhMDsWXXQV4hwtappid=1014bitrate=0callback=callback123clienttime={timesp}clientver=1000dfid=4XRnEl3tHXFK0K5Efv1SiJjKfilter=10inputtype=0iscorrection=1isfuzzy=0keyword={sing_name}mid=c6a0cfe918829301c28957cff195e0f6page=1pagesize=30platform=WebFilterprivilege_filter=0srcappid=2919token=5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891userid=2339924156uuid=c6a0cfe918829301c28957cff195e0f6NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt'
    with open(r'D:\python项目\爬虫\js逆向\03-酷狗音乐\get_signature.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_signature', str)


def get_signature_1(id, timesp):
    str = f'NVPh5oo715z5DIWAeQlhMDsWXXQV4hwtappid=1014clienttime={timesp}clientver=20000dfid=4XRnEl3tHXFK0K5Efv1SiJjKencode_album_audio_id={id}mid=c6a0cfe918829301c28957cff195e0f6platid=4srcappid=2919token=5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891userid=2339924156uuid=c6a0cfe918829301c28957cff195e0f6NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt'
    
    with open(r'D:\python项目\爬虫\js逆向\03-酷狗音乐\get_signature.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_signature', str)


def api_songs(sing_name, timesp, signature):
    """获取歌曲列表响应数据"""
    headers = {
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'cookie':'kg_mid=c6a0cfe918829301c28957cff195e0f6; kg_dfid=4XRnEl3tHXFK0K5Efv1SiJjK; kg_dfid_collect=d41d8cd98f00b204e9800998ecf8427e; Hm_lvt_aedee6983d4cfc62f509129360d6bb3d=1747581704,1747617380,1747661129,1748752123; HMACCOUNT=5B53905BB2005420; KuGoo=KugooID=2339924156&KugooPwd=ECB54762C95D148B082C4A7140F98F83&NickName=%u8c22%u8c22&Pic=http://imge.kugou.com/kugouicon/165/20100101/20100101192931478054.jpg&RegState=1&RegFrom=&t=5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891&a_id=1014&ct=1748752333&UserName=%u0032%u0033%u0033%u0039%u0039%u0032%u0034%u0031%u0035%u0036&t1=; KugooID=2339924156; t=5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891; a_id=1014; UserName=2339924156; mid=c6a0cfe918829301c28957cff195e0f6; dfid=4XRnEl3tHXFK0K5Efv1SiJjK; Hm_lpvt_aedee6983d4cfc62f509129360d6bb3d=1748752667'
    }
    
    params = {
    'callback':'callback123',
    'srcappid':'2919',
    'clientver':'1000',
    'clienttime':timesp,
    'mid':'c6a0cfe918829301c28957cff195e0f6',
    'uuid':'c6a0cfe918829301c28957cff195e0f6',
    'dfid':'4XRnEl3tHXFK0K5Efv1SiJjK',
    'keyword':sing_name,
    'page':'1',
    'pagesize':'30',
    'bitrate':'0',
    'isfuzzy':'0',
    'inputtype':'0',
    'platform':'WebFilter',
    'userid':'2339924156',
    'iscorrection':'1',
    'privilege_filter':'0',
    'filter':'10',
    'token':'5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891',
    'appid':'1014',
    'signature':signature,
}
    
    res = requests.get(URL, headers=headers, params=params)
    return res.text[len('callback123('):-2]


def get_singinfo(timesp, singid, signature):
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.kugou.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.kugou.com/',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    }

    params = {
        'srcappid': '2919',
        'clientver': '20000',
        'clienttime': timesp,
        'mid': 'c6a0cfe918829301c28957cff195e0f6',
        'uuid': 'c6a0cfe918829301c28957cff195e0f6',
        'dfid': '4XRnEl3tHXFK0K5Efv1SiJjK',
        'appid': '1014',
        'platid': '4',
        'encode_album_audio_id': singid,
        'token': '5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891',
        'userid': '2339924156',
        'signature': signature,
    }

    response = requests.get('https://wwwapi.kugou.com/play/songinfo', params=params, headers=headers)
    return response.json()


def parse_song(content, timesp, signature):
    """解析"""
    JSONBJ = json.loads(content)
    data = JSONBJ['data']
    lists = data['lists']
    for item in lists:
        # 歌手名称
        SingerName = item['SingerName']
        # 歌曲名称
        OriSongName = item['OriSongName']
        # 歌曲id
        EMixSongID = item['EMixSongID']
        signature_1 = get_signature_1(EMixSongID, timesp)
        song_info = get_singinfo(timesp, EMixSongID, signature_1)
        song_data = get_song_url(song_info)
        save_mp3(song_data, SingerName, OriSongName)
    print('歌曲下载完毕------------')
    
    
def get_song_url(content):
    headers = {
        "authority": "wwwapi.kugou.com",
        "method": "GET",
        "path": "/play/songinfo?srcappid=2919&clientver=20000&clienttime=1748830945606&mid=c6a0cfe918829301c28957cff195e0f6&uuid=c6a0cfe918829301c28957cff195e0f6&dfid=4XRnEl3tHXFK0K5Efv1SiJjK&appid=1014&platid=4&encode_album_audio_id=4fql9xab&token=5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891&userid=2339924156&signature=ceb6c144fcd2496f381da6c674143bb8",
        "scheme": "https",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "origin": "https://www.kugou.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.kugou.com/",
        "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
}
    
    play_url = content['data']['play_url']
    res = requests.get(play_url, headers=headers)
    return res.content


def save_mp3(song_content, sing_name, song_name):
    if not os.path.exists('music'):
        os.mkdir('music')
        
    if not os.path.exists(f'music/{sing_name}'):
        os.mkdir(f'music/{sing_name}')
        
    with open(f'music/{sing_name}/{song_name}.mp3', 'wb') as f:
        f.write(song_content)
    print(f'{song_name} 下载完毕')
    
   
def main():
    timesp = str(get_timesp())
    signature = get_signature(sing_name, timesp)
    # 获取歌曲列表响应数据
    content = api_songs(sing_name, timesp, signature)
    if content:
        parse_song(content, timesp, signature)

if __name__ == '__main__':
    main()
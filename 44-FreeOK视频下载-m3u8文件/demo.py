import requests


def spider():
    index_url = 'https://cdn.ryplay12.com/20251006/22933_17514fc6/2000k/hls/index.m3u8'
    index = index_url.split('/')
    a, b = index[3], index[4]
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.jsard.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.jsard.com/',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    }
    response = requests.get(index_url, headers=headers)
    return a, b, response.text


def parse_get_ts(response):
    data = response.split('\n')
    ts = [i for i in data if '.ts' in i]
    return ts


def load_mp4(a, b, response):
    ts = parse_get_ts(response)
    url = 'https://cdn.ryplay12.com/{}/{}/2000k/hls/{}'
    for t in ts:
        url_str = url.format(a, b, t)
        headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.jsard.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.jsard.com/',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
    }
        mp4_content = requests.get(url_str, headers=headers).content
        print(f'{url_str}保存成功')
        with open('视频.mp4', 'ab') as f:
            f.write(mp4_content)

        
    
def main():
    a, b, result = spider()
    load_mp4(a, b, result)
    

if __name__ == '__main__':
    main()
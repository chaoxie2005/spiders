import json
import time

import execjs
import requests


def get_page(page, cursor):
    d = {"rid": "A_PL_0_19723756", "threadId": "A_PL_0_19723756", "pageNo": str(page), "pageSize": "20",
         "cursor": str(cursor), "offset": "0", "orderType": "1", "csrf_token": ""}
    return json.dumps(d)

def get_params(d):
    with open(r'D:\爬虫项目\爬虫\js逆向\04-网易云评论\get_params.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call('get_params', d)


def api_music_Review():
    cursor = -1 
    for page in range(1, 100):
        cookies = {
            '_ntes_nnid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8,1745159681197',
            '_ntes_nuid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8',
            'JSESSIONID-WYYY': 'ovlJPXbad3W9mvaYu%2BgXEC0EPFkJUeAKAQYrny2mO8Qjxb%2FKVRF%2B3bUW%2Bo7UXE3iHJsEiuxa9ZF33V%5CIbSjTyl9Wg9F53%2BfWseI36VP%5Cr8%5CTxMe8jjnGmFeFp%2FMACSOmuge%5CCeafWchFhDuGw091PXauDoBP3oybEky8C6tpHiWc%2BbzP%3A1748856841371',
            '_iuqxldmzr_': '32',
            'NMTID': '00OGP8m4LPLKV9-eUrkiLlnqXe9XOwAAAGXL-Iymw',
            'WEVNSM': '1.0.0',
            'WNMCID': 'kmbvbp.1748855047765.01.0',
            'ntes_utid': 'tid._.MQAl8PpC821BVwUQUAODagivqVhmHJav._.0',
            'sDeviceId': 'YD-263HlQK8uzZBElAEUFKCel2v%2BF1zWNOq',
            'WM_NI': 'mHOgaUDd2V7qjaBhmfMIw8Kp%2BAzCKBujuz2LvZTJqZJcqnFqkBPKxOBZMs9x2%2BcNDqKgWrVSnwHxm94ZbqyjM7BLeW7aFs9xn4JQb3VxfA%2BnHqsoJSNLG56UfOtlrmXrZWU%3D',
            'WM_NIKE': '9ca17ae2e6ffcda170e2e6ee89b55a9b9e8a8cec5cb1b08eb2c45b839f8f82cb6bf4b3bfd7d43cf2b6f9b7b72af0fea7c3b92aaf988188e45f88bcfeb7b67baabf8e89f06e8f97b9d9ca7ce99fb6a4ca4ab7b6bb9bb148b6869cabf4528abdbf8fc57ba99ea0acfb4582868394bc74f2f5adafc77b89b99993d559aea98899f033f886ae92fc628fe98eade85df5bf8a94bc74aeec86b2e13996a8aaa2aa668cafbd90c9598e9489d6b55fa691bc8df1679cae96b8d837e2a3',
            'WM_TID': 'eKo3KmF%2FbcNEVBVFQAPXag3vqR0ynrR5',
        }

        headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            'nm-gcore-status': '1',
            'origin': 'https://music.163.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://music.163.com/discover/toplist',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
            # 'cookie': '_ntes_nnid=dd5abfd08a49cce0fccfcdae8fd7b0a8,1745159681197; _ntes_nuid=dd5abfd08a49cce0fccfcdae8fd7b0a8; JSESSIONID-WYYY=ovlJPXbad3W9mvaYu%2BgXEC0EPFkJUeAKAQYrny2mO8Qjxb%2FKVRF%2B3bUW%2Bo7UXE3iHJsEiuxa9ZF33V%5CIbSjTyl9Wg9F53%2BfWseI36VP%5Cr8%5CTxMe8jjnGmFeFp%2FMACSOmuge%5CCeafWchFhDuGw091PXauDoBP3oybEky8C6tpHiWc%2BbzP%3A1748856841371; _iuqxldmzr_=32; NMTID=00OGP8m4LPLKV9-eUrkiLlnqXe9XOwAAAGXL-Iymw; WEVNSM=1.0.0; WNMCID=kmbvbp.1748855047765.01.0; ntes_utid=tid._.MQAl8PpC821BVwUQUAODagivqVhmHJav._.0; sDeviceId=YD-263HlQK8uzZBElAEUFKCel2v%2BF1zWNOq; WM_NI=mHOgaUDd2V7qjaBhmfMIw8Kp%2BAzCKBujuz2LvZTJqZJcqnFqkBPKxOBZMs9x2%2BcNDqKgWrVSnwHxm94ZbqyjM7BLeW7aFs9xn4JQb3VxfA%2BnHqsoJSNLG56UfOtlrmXrZWU%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee89b55a9b9e8a8cec5cb1b08eb2c45b839f8f82cb6bf4b3bfd7d43cf2b6f9b7b72af0fea7c3b92aaf988188e45f88bcfeb7b67baabf8e89f06e8f97b9d9ca7ce99fb6a4ca4ab7b6bb9bb148b6869cabf4528abdbf8fc57ba99ea0acfb4582868394bc74f2f5adafc77b89b99993d559aea98899f033f886ae92fc628fe98eade85df5bf8a94bc74aeec86b2e13996a8aaa2aa668cafbd90c9598e9489d6b55fa691bc8df1679cae96b8d837e2a3; WM_TID=eKo3KmF%2FbcNEVBVFQAPXag3vqR0ynrR5',
        }

        params = {
            'csrf_token': '',
        }
        
        d = get_page(page, cursor)
        data = get_params(d)
        
        if not data:
            print(f"第{page + 1}页加密数据获取失败，跳过")
            continue

        response = requests.post(
            'https://music.163.com/weapi/comment/resource/comments/get',
            params=params,
            cookies=cookies,
            headers=headers,
            data=data,
        )
        info = response.json()
        data = info['data']
        comments = data['comments']
        for comment in comments:
            nickname = comment['user']['nickname']
            detal = comment['content']
            print(f'{nickname}: {detal}')
        cursor = data['cursor']
        time.sleep(2)



if __name__ == '__main__':
    api_music_Review()

    

import requests
import execjs

def fetch():
    cookies = {
        '_xsrf': 'P682rMNJRiUntwrXfclz0Ds9Q0PY8TkY',
        '_zap': '959e32e5-a7cf-43ef-96df-fe906fbcb82a',
        'd_c0': 'LPZTKB96gBqPTlasxouBcFGu8Vy4o1AUwDw=|1748078546',
        '__zse_ck': '005_YHI1OjZ4dEhbt3N1YtklnTqzGMu3MlGsszlt26bm2n9xbg6kd1s31nU121XYd4MM7vDeLOfpJKTFd9hhzdAapVoi1kmRkiyYq8uDh8NaV8XeHbKGdT7lVrtyr2lP8Uyp-Vi5F49jblSgp8LGYnjts1wl6jx3TV3rCr3yBwyZ0QA98mfHvzDUPSIjLp9CEl1M4lOUsWY/BeFnZSJN483fOwcs9yNVsVsKWcRsr9h7/Lty7Au4qVXOKNlDZKNzAbBPt',
        'captcha_session_v2': '2|1:0|10:1776779544|18:captcha_session_v2|88:VUJna3cyWWcrNWh2SDBLU1JkMEFNQ3BGSU9MVzJIWEQydmZHZWNiQjVOMnprWGRxNHZMZy85T2Q0SytET1NobQ==|4b58776320049926e28d9077f45bad752f1ec06de0c5063ca6a8c44401bd3ec4',
        'Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49': '1776090601,1776779545',
        'HMACCOUNT': '26FAD4314C20E141',
        'SESSIONID': 'gmQI2h521aVnDRn7oveDntJaWN6Fe1xPJghmmyFZUnr',
        '__snaker__id': 'PIgI8QMAmpodHHhk',
        'JOID': 'U18TA0pf7I34DqxDJtNpmeAY58Y7PoDasDzCdxJui9qQS_4rEEJqbZAIq0Qhtbs87RX6OgtXtkTyBVBviwkGiPI=',
        'osd': 'V14UAEhb7Yr7DKhCIdBrneEf5MQ_P4fZsjjDcBFsj9uXSPwvEUVpb5QJrEcjsbo77hf-OwxUtEDzAlNtjwgBi_A=',
        'gdxidpyhxdE': 'Zdim5N%2Bd0P6Q3Wud0w70HedM%2BLyyBLfqwpwzWddoSMwXgz8m1j%2F3banRZZ%5CcfreqKPC79aDivTdURrAZJpzRc130R3cDjLyj%2BQsgE59j5m6dIKgqBDuGv0%5CcSH%2BLP39R1S8rI3kjt7TVwRJqlens9q0QUdT2lfY81Dmwn47q5VlZm4NX%3A1776780446483',
        'DATE': '1748267276401',
        'cmci9xde': 'U2FsdGVkX1878Y5gOspBWKJW/INxsAsckbpLifWU5eFoiU13gvX1W19fcs2ez2MgmJnDiqvmHPabUIIPw1R/Wg==',
        'pmck9xge': 'U2FsdGVkX1+yK+KHyGaKsbj5aaTs9YNc7iwSOWGwGwo=',
        'crystal': 'U2FsdGVkX1/JG5TdyoGyIXChGIkojosbCjCsFULiw0OQf5xCJlyZSgzQeRTep27XN/R7GbhE/iJfT5BwOseJxzZMXLhlCVRq87T5yLpvd8gpagBhxkU1NItqIQpZliieYipENamJOQLzW0aquFW9Vl9ByrZnhmVMk4syu9D4WpzVMZyjZFv0kulaTYmY08tVrwZ3gibNBheOewkiWACekOxWqfAYP/3CYlK1K2U3If5iUEwiZ5iHP+fUUfOccnFg',
        'assva6': 'U2FsdGVkX1+PRh0GUakkor5f6uDC25MAtDO/WNcftWI=',
        'assva5': 'U2FsdGVkX1/BhgzlxuZ57D0Lf9VA/uKNeCEVpdcca/A4HkQVVkontS9mSZMVagTaWRPEIiy3ZVam/3RrjaI5gw==',
        'o_act': 'login',
        'utm_source': 'google',
        'ref_source': 'other_https://www.zhihu.com/signin',
        'vmce9xdq': 'U2FsdGVkX1+lzZrEQ6gF7EORlLj5eQ4ij9+gHtIpu+XCcjA+8WMvGQkYAZDGAEVmrQMocRbhtZlK87V/QVP4fMsLGGudNfDlFO2h6RvohHm8yxS5cEyQJP4/+7124No6r+7VZyQqWLS7SQaBVIldZmdNAf2Tayf68yLc+MIsLZU=',
        'expire_in': '15552000',
        'q_c1': '9a2780e43de9450083ed2bd5afd689c1|1776779606000|1776779606000',
        'z_c0': '2|1:0|10:1776779607|4:z_c0|92:Mi4xbnBxUTFBVUFBQUFzOWxNb0gzcUFHaGNBQUFCZ0FsVk5WY19VYWdDeEZsNk9CcG5yLTFRRXRWQ1ZMeW5mTnZFZ2d3|04c3df3db64f492ac7886e5c197c594cbae27f6aed95211abfa7929141cd0fe4',
        'unlock_ticket': 't8QYyNAnLBwXAAAAYAJVTVWO52knGws-WGhxDXzkoJDTK3qvGm1qwQ==',
        'Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49': '1776781232',
        'BEC': '8ce9e721fafad59a55ed220f1ad7f253',
    }

    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.zhihu.com/',
        'sec-ch-ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
        'x-api-version': '3.0.53',
        'x-requested-with': 'fetch',
        'x-zse-93': '101_3_3.0',
        'x-zse-96': '2.0_J7N0iYksDsy6vUuZC3TJpsbs8exPZ4v017fGNoR=8AYbY/hzuAs=zh+s1PLf9QPq',
    }

    params = {
        'limit': '10',
        'desktop': 'true',
    }

    response = requests.get('https://www.zhihu.com/api/v3/feed/topstory/recommend', params=params, cookies=cookies, headers=headers)
    print(response.json())


fetch()
"""
需求：客户评论 客户名称 客户ID 评论时间 购买产品型号
"""

import requests


def api_comment():
    cookies = {
        '__jdu': '17466989546971237293889',
        'shshshfpa': '7429ff43-466f-4807-0943-0d3925207f7c-1746699269',
        'shshshfpx': '7429ff43-466f-4807-0943-0d3925207f7c-1746699269',
        'jcap_dvzw_fp': 'VTb4boJBIcc-KcTb8cmRs6dj7brnx1w5LJ4WRBu_98JeEpvdDlEnux_iu-vTzX9CRMW80zopOFP_dhwRM1P5Pg==',
        'pinId': 'JTq4cD814F69_VUAKW5sig',
        'pin': 'jd_HnFgUQByvjPI',
        'unick': 'jd_w3zajb8r6q3d5l',
        'TrackID': '1e1PIGEIbjfNKouEhW4LO7AUdf_Vq4n18QpN8NNW5q2AxSLGkiUV9PRY4s78AC3VNs1C-q9eivQ06ozRh0LxHY3oO_TsumOh8ERjoQJBmmnA',
        'light_key': 'AASBKE7rOxgWQziEhC_QY6yaEb8Jg82bDCvsOGV7QDUrvPPV-oIeoDWdxz2revHHjn9I4hfH',
        '__jdv': '76161171|baidu|-|organic|notset|1754287991441',
        'areaId': '22',
        'PCSYCityID': 'CN_510000_511000_0',
        'umc_count': '1',
        'thor': '5649CEDFDEA1C62B5C78CB9C7086D09C8D6ADBE01B63FFADBC0C11EEEBB72139D524AC964BDF72F0EFFC80D0935FE75E83D40A4D36FEE2775B543BAB6A1EAB46847F08DD3D2AF7D648D506C55D1BD396B0C5D2731133F4D9675C32DB88C41FE6F203DE66C069D8B4AE9175C935C184991FE349389040FCAC0BDD71F0B9260AB65252336CBFF4C18138D0D5EBEC0093E29D2742A0D6B546F25ECD0709A90F513B',
        'ipLoc-djd': '22-1988-3121-7809',
        'jsavif': '1',
        '3AB9D23F7A4B3C9B': 'QSYC2WCOHDXSGA6V7J6M74FMEH3ZJ74IR7GA6MLUIGKDFLUVU35JU5ZQGUX2YV3DBOZ6YL43MCUO55RLA6T7HISN7I',
        'TARGET_UNIT': 'bjcenter',
        'cn': '36',
        'source': 'PC',
        'platform': 'pc',
        'lpkLoginType': '3',
        'mba_muid': '1754289133744-615af6e38b9cf07222',
        'mba_sid': '17542891337454494914342980202.1',
        'flash': '3_DAqtgsmBekYWEgFNetEvRHllmYi3tyFDAl8q9ZvV8HUWw6kZeISesfyaggMLYyg8_ritEiO6rcGbQvLPWYd35GW0hjxJte7_M1FohpcNT5NJFqyKRgbPFqflbIO3xowVWIRRgwnecZ-b1BdA3Ws5N2Xyy4jfJi8wyImB4apDp0J0wYuj-cgk',
        'token': 'cfcd6a0a780def0db19b53a237e99c9d,3,974605',
        '__jda': '181111935.17466989546971237293889.1746698955.1750419735.1754287991.4',
        '__jdb': '181111935.38.17466989546971237293889|4.1754287991',
        '__jdc': '181111935',
        '3AB9D23F7A4B3CSS': 'jdd03QSYC2WCOHDXSGA6V7J6M74FMEH3ZJ74IR7GA6MLUIGKDFLUVU35JU5ZQGUX2YV3DBOZ6YL43MCUO55RLA6T7HISN7IAAAAMYOPIK3YYAAAAADTEOX6E5BHULNIX',
        '_gia_d': '1',
        'shshshfpb': 'BApXSLzjYcP1A31FTtCims7uKZE6e5s6mBgQolUZq9xJ1MrC_AY62',
        'sdtoken': 'AAbEsBpEIOVjqTAKCQtvQu17G6F3p5EYym_Tch_yHy2EQwWTuiZvYL76tcpX4ovvy7xJFhS11qcGGrS01EqSdOzq4yrb3UEKaTC0e_0nXC1mMMLhBSHSLbhZTtPLuFujkxt67pNRig',
    }

    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://item.jd.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://item.jd.com/',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'x-referer-page': 'https://item.jd.com/10116442013348.html',
        'x-rp-client': 'h5_1.0.0',
        # 'cookie': '__jdu=17466989546971237293889; shshshfpa=7429ff43-466f-4807-0943-0d3925207f7c-1746699269; shshshfpx=7429ff43-466f-4807-0943-0d3925207f7c-1746699269; jcap_dvzw_fp=VTb4boJBIcc-KcTb8cmRs6dj7brnx1w5LJ4WRBu_98JeEpvdDlEnux_iu-vTzX9CRMW80zopOFP_dhwRM1P5Pg==; pinId=JTq4cD814F69_VUAKW5sig; pin=jd_HnFgUQByvjPI; unick=jd_w3zajb8r6q3d5l; TrackID=1e1PIGEIbjfNKouEhW4LO7AUdf_Vq4n18QpN8NNW5q2AxSLGkiUV9PRY4s78AC3VNs1C-q9eivQ06ozRh0LxHY3oO_TsumOh8ERjoQJBmmnA; light_key=AASBKE7rOxgWQziEhC_QY6yaEb8Jg82bDCvsOGV7QDUrvPPV-oIeoDWdxz2revHHjn9I4hfH; __jdv=76161171|baidu|-|organic|notset|1754287991441; areaId=22; PCSYCityID=CN_510000_511000_0; umc_count=1; thor=5649CEDFDEA1C62B5C78CB9C7086D09C8D6ADBE01B63FFADBC0C11EEEBB72139D524AC964BDF72F0EFFC80D0935FE75E83D40A4D36FEE2775B543BAB6A1EAB46847F08DD3D2AF7D648D506C55D1BD396B0C5D2731133F4D9675C32DB88C41FE6F203DE66C069D8B4AE9175C935C184991FE349389040FCAC0BDD71F0B9260AB65252336CBFF4C18138D0D5EBEC0093E29D2742A0D6B546F25ECD0709A90F513B; ipLoc-djd=22-1988-3121-7809; jsavif=1; 3AB9D23F7A4B3C9B=QSYC2WCOHDXSGA6V7J6M74FMEH3ZJ74IR7GA6MLUIGKDFLUVU35JU5ZQGUX2YV3DBOZ6YL43MCUO55RLA6T7HISN7I; TARGET_UNIT=bjcenter; cn=36; source=PC; platform=pc; lpkLoginType=3; mba_muid=1754289133744-615af6e38b9cf07222; mba_sid=17542891337454494914342980202.1; flash=3_DAqtgsmBekYWEgFNetEvRHllmYi3tyFDAl8q9ZvV8HUWw6kZeISesfyaggMLYyg8_ritEiO6rcGbQvLPWYd35GW0hjxJte7_M1FohpcNT5NJFqyKRgbPFqflbIO3xowVWIRRgwnecZ-b1BdA3Ws5N2Xyy4jfJi8wyImB4apDp0J0wYuj-cgk; token=cfcd6a0a780def0db19b53a237e99c9d,3,974605; __jda=181111935.17466989546971237293889.1746698955.1750419735.1754287991.4; __jdb=181111935.38.17466989546971237293889|4.1754287991; __jdc=181111935; 3AB9D23F7A4B3CSS=jdd03QSYC2WCOHDXSGA6V7J6M74FMEH3ZJ74IR7GA6MLUIGKDFLUVU35JU5ZQGUX2YV3DBOZ6YL43MCUO55RLA6T7HISN7IAAAAMYOPIK3YYAAAAADTEOX6E5BHULNIX; _gia_d=1; shshshfpb=BApXSLzjYcP1A31FTtCims7uKZE6e5s6mBgQolUZq9xJ1MrC_AY62; sdtoken=AAbEsBpEIOVjqTAKCQtvQu17G6F3p5EYym_Tch_yHy2EQwWTuiZvYL76tcpX4ovvy7xJFhS11qcGGrS01EqSdOzq4yrb3UEKaTC0e_0nXC1mMMLhBSHSLbhZTtPLuFujkxt67pNRig',
    }

    data = {
        'appid': 'pc-rate-qa',
        'body': '{"requestSource":"pc","shopComment":0,"sameComment":0,"channel":null,"extInfo":{"isQzc":"0","spuId":"10116442013348","commentRate":"1","needTopAlbum":"1","bbtf":"","userGroupComment":"1"},"num":"10","pictureCommentType":"A","scval":null,"shadowMainSku":"0","shopType":"0","firstCommentGuid":"d28c49ff019d6ba88eea59f33324489b","sku":"10116442013348","category":"1318;1466;15888","shieldCurrentComment":"1","pageSize":"10","isFirstRequest":false,"style":"1","isCurrentSku":false,"sortType":"5","tagId":"","tagType":"","type":"0","pageNum":"2"}',
        'client': 'pc',
        'clientVersion': '1.0.0',
        'functionId': 'getCommentListPage',
        'h5st': '20250804144203972;6gz3ma999h3t3ph4;01a47;tk03wc6a81ce818nsjdhnBB03nfmIt3NlYD9JPWIwXrFtIclwjkn7w9W6CytOKn8hCbV5XamWUmUblgEqN40XalEbJUy;495404578d677c75fbc315379c01d982;5.2;1754289721972;eVxhk4BZppPVzh_ZB5_ZwN6J-hfZXx-ZtBbFuRqV58OTodLGu5qIrZfZnZfF7YfZB5hWvVeZnZ-G_U7ZBh-f1ZfV9I7J7IrJwhOU_YeV-UbV7UeUvJOU8MeUrR_U_Y_JuZfZnZfFbwrI-MrE-hfZXx-ZAc7IvRrU7guJrdLIxZLJoRLJ-AuUuN7IrdOUrBeV7I_ZB5_Zuc7EzcrJ-hfZXx-ZxZfZnZfUsY7ZBh-f1ZfVzZ_WsJqK8wLH7kMU5YfZnZ-E-hfZXx-ZO8dTudLTWgeD-h-T-trG9oLJvYfZB5hW-ZuVz8rM-h-T-JbF-hfZXxPCBh-f-17Q-h-T-VOVsY7ZBhfZB5hWuh-T-dOVsY7ZBhfZB5hWtdeZnZfVwN6J-hfZBh-f1BOWB5_ZvdOE-YfZBhfZXx-Z3Q8JCgeE3UeM1EeVKYfZnZPGyQ7GAY6ZBhfZB5hWxh-T-BOE-YfZBhfZXxfVB5_ZqN6J-hfZBh-f1ZuVB5_ZrN6J-hfZBh-f1heZnZPUsY7ZBhfZB5hWxh-T-ROE-YfZBhfZXxvVxdeZnZvVsY7ZBhfZB5hW-9_WwpfV-h-T-dOE-YfZBhfZXxfVB5_Z2E6ZBhfZB5hWsh-T-VaG-hfZBh-f1heZnZfG-hfZBh-f1heZnZfIqYfZBhfZX1aZnZfIzMbEpM7ZBh-f1taZB5BZYg8Hr86RQMsIbobPCQ7H-h-T-ZeF-hfZBh-fmg-T-haF-hfZXx-ZtJeDB1eUrpLHKgvTxpfVwhfMTgvFqkbIz8rM-h-T-dLEuYfZB5xD;8f1905aa5935530f5bb99963419245c9;gRaW989Gy8bE_oLE7w-Gy8rFvM7MtoLI4wrJ1R6G88bG_wPD9k7J1RLHxgKJ',
        'loginType': '3',
        't': '1754289721958',
        'uuid': '17466989546971237293889',
    }

    response = requests.post('https://api.m.jd.com/client.action', cookies=cookies, headers=headers, data=data, timeout=3)
    return response.json()


def parse_comment(comment_data):
    res_data = comment_data['result']['floors']
    print(res_data)

if __name__ == '__main__':
    res_data = api_comment()
    print(res_data)
    parse_comment(res_data)

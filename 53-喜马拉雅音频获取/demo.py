import requests, execjs

def ex_js(filpath, func_name, *args):
    with open(filpath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *args)



def spider():
    JSPATH = r'D:\爬虫项目\爬虫\js逆向\53-喜马拉雅音频获取\get_xm_sign.js'
    e = [
    "gpwBOg3QZ2IUwNFLEitYWtVe0pig_uuSsWMHBlkTVTU_1",
    "D2cdE1bsAeSKxScNGr7aOrEwgaBIzbJNGDyGAED7/dvVQXbb"
    ]
    sign = ex_js(JSPATH, "get_sign", e)["xm-sign"]
    cookies = {
        '_xmLog': 'h5&a0228a0d-15a0-4f42-9000-1e29e12a940d&process.env.sdkVersion',
        'wfp': 'ACNmMTFlYmIxMmI0MzQ2MWM4NnTthSdzfB54bXdlYl93d3c',
        '1&remember_me': 'y',
        '1&_token': '494556582&F9B2C8D0340N5B403DA13C23C29090E311ADC7101766A62E79E088F2ECD743F1B4ECC023F8FF169M40D4D7E1BE0CB4D_',
        'HWWAFSESID': 'a1bb61de2d98fc29622',
        'HWWAFSESTIME': '1761989722735',
        'DATE': '1760193575533',
        'crystal': 'U2FsdGVkX19PEEailtaeySLdE+tLiM7VVNgQ31CNtzG6txH59DesXTIEPHYpoJy4ilwCko63Q2l4LjELSElhz+dAGteT4lDaIpfAyMU/A6EqTRZk4VXQkDVHmbjQdtYu/QcN2DQ0mL4/FXDm0E7D83tPm5C4P/9lPetKDU6aGj2F6kef8ljdg0jpE6VdPGTzLN1yAkcWao81M1JgSKvwUgTOUEEI4CUiuzunLY3kgc5hVkl4qt5VswRlDSp/GCLl',
        'xm-page-viewid': 'ximalaya-web',
        'Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070': '1761706150,1761892598,1761989730',
        'Hm_lpvt_4a7d8ec50cfd6af753c4f8aee3425070': '1761989730',
        'HMACCOUNT': '26FAD4314C20E141',
        'impl': 'www.ximalaya.com.login',
        'assva6': 'U2FsdGVkX19iA+oubDGlfdbDp7KpE+isRyGPqRYBG/0=',
        'assva5': 'U2FsdGVkX18+xEDLQSHIk39bDz8QSzhIYHVeBIRyoGKHPuuVDGLhVRenQ3VWSOmXP9IB+RWSeoGwgpd2kLnnfQ==',
        'cmci9xde': 'U2FsdGVkX1+lRfGokwZgssxsBoQ+0PMCOWlEhjhUjrzsTiaXazi1UVBpkSz8ROZVaJLJvyxEvNR7lCbrm/WXqA==',
        'pmck9xge': 'U2FsdGVkX1+UpK2NtqaNtVCkdiNQRromzaLYZl42aqU=',
        'web_login': '1761991877131',
        'vmce9xdq': 'U2FsdGVkX1+sIq6JRt1IQ4DM/IovjwVYII3yz8bY07Tk/sR+gatG8y0fao5nbR4jdOTD4hRQYAjQXKYumFXus1DEkLgFeMD/PdPs5glKLAVT9gHqJqUONi03dU6YR2nyHFNDIfDhAz+dem86gTdzDagRO0sKLts5GoSDR3iMPRE=',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.ximalaya.com/album/40514512',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'ctn': '{"captcha_id":"3ebf85eb1be9e6d4280f2ac59c369333","lot_number":"d6fe134a6fcd44b3aae8c96fe6537174","pass_token":"eab6ae627fbf2198906042d86987f1ce01c9af16079360edbdb574ab91805c8b","gen_time":"1761989766","captcha_output":"24eEswNFhWlQ6hbxXV5BDtLWLOwaITcKUWCJLKm8ChsLV5okFk939nOnTo6pQFP2FF2ipZs4pkLqiIT-dmrfPXKh-1zeWfJUNgzP5s4o5yNtJIjtOrYiJ35S_DgdGE6JF8lu9AtP1T0HBmW0up9MYRjbJ2vIXDAsvnbRG0fVGC4lMv21jcl8wGRykA5D8qrEqyn_bOsAJIOKbbFgGli8OZBldGB83s4Az1-g3Zo6UGK9DJcxnL95M6PwsaPhzeyggYxafqiJ3sOaZTwFVAnJRXoHI-TM_O7hKyaj2gHWHUjEMGygyPLnugrm-_dfzW_fOVexqXeFd5KG_-9AcHHvhhT9jBedM9hbb6wNnI5erddU8YqqPKCXlx-X2jhY4Ene6Uj2lVs9PHpud2jP5PlcOQY3n7KjSn5Vg4tJO4LHwisFL1zGQlyU4CCAUwcnkRE5svMqV4dXpdbq3ROSlfC0Guc6Ljs9uC6LcPguOMZoWR0qQRgyZ3bQ08ZHeh9Q_fFW"}',
        'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'xm-sign': "D2cdE1bsAeSKxScNGr7aOrEwgaBIzbJNGDyGAED7/dvVQXbb&&GaA11jX2BMe8zVZQ8jmnKYfhCHvZxuanMXZyznAFehE_1",
        # 'Cookie': '_xmLog=h5&a0228a0d-15a0-4f42-9000-1e29e12a940d&process.env.sdkVersion; wfp=ACNmMTFlYmIxMmI0MzQ2MWM4NnTthSdzfB54bXdlYl93d3c; 1&remember_me=y; 1&_token=494556582&F9B2C8D0340N5B403DA13C23C29090E311ADC7101766A62E79E088F2ECD743F1B4ECC023F8FF169M40D4D7E1BE0CB4D_; HWWAFSESID=a1bb61de2d98fc29622; HWWAFSESTIME=1761989722735; DATE=1760193575533; crystal=U2FsdGVkX19PEEailtaeySLdE+tLiM7VVNgQ31CNtzG6txH59DesXTIEPHYpoJy4ilwCko63Q2l4LjELSElhz+dAGteT4lDaIpfAyMU/A6EqTRZk4VXQkDVHmbjQdtYu/QcN2DQ0mL4/FXDm0E7D83tPm5C4P/9lPetKDU6aGj2F6kef8ljdg0jpE6VdPGTzLN1yAkcWao81M1JgSKvwUgTOUEEI4CUiuzunLY3kgc5hVkl4qt5VswRlDSp/GCLl; xm-page-viewid=ximalaya-web; Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070=1761706150,1761892598,1761989730; Hm_lpvt_4a7d8ec50cfd6af753c4f8aee3425070=1761989730; HMACCOUNT=26FAD4314C20E141; impl=www.ximalaya.com.login; assva6=U2FsdGVkX19iA+oubDGlfdbDp7KpE+isRyGPqRYBG/0=; assva5=U2FsdGVkX18+xEDLQSHIk39bDz8QSzhIYHVeBIRyoGKHPuuVDGLhVRenQ3VWSOmXP9IB+RWSeoGwgpd2kLnnfQ==; cmci9xde=U2FsdGVkX1+lRfGokwZgssxsBoQ+0PMCOWlEhjhUjrzsTiaXazi1UVBpkSz8ROZVaJLJvyxEvNR7lCbrm/WXqA==; pmck9xge=U2FsdGVkX1+UpK2NtqaNtVCkdiNQRromzaLYZl42aqU=; web_login=1761991877131; vmce9xdq=U2FsdGVkX1+sIq6JRt1IQ4DM/IovjwVYII3yz8bY07Tk/sR+gatG8y0fao5nbR4jdOTD4hRQYAjQXKYumFXus1DEkLgFeMD/PdPs5glKLAVT9gHqJqUONi03dU6YR2nyHFNDIfDhAz+dem86gTdzDagRO0sKLts5GoSDR3iMPRE=',
    }

    params = {
        'device': 'www2',
        'trackId': '326273927',
        'trackQualityLevel': '1',
    }

    response = requests.get(
        'https://www.ximalaya.com/mobile-playpage/track/v3/baseInfo/1761991877293',
        params=params,
        cookies=cookies,
        headers=headers,
    )


    return response.json()


def main():
    result = spider()
    print(result)
    
    
if __name__ == "__main__":
    main()
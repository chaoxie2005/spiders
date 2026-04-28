import os
import time
from urllib import parse

import execjs
import requests


class JSExecutor:
    def __init__(self, js_file_path):
        """
        初始化加载 JS 文件
        :param js_file_path: .js 文件的路径
        """
        if not os.path.exists(js_file_path):
            raise FileNotFoundError(f"JS 文件不存在: {js_file_path}")

        with open(js_file_path, 'r', encoding='utf-8') as f:
            self.js_code = f.read()

        self.ctx = execjs.compile(self.js_code)
    
    def call(self, func_name, *args):
        """
        调用 JS 中的函数
        :param func_name: 函数名
        :param args: 参数列表
        :return: 执行结果
        """
        return self.ctx.call(func_name, *args)
    
    def get_data(self, skuId):
        """动态生成包含正确skuId的data字符串"""
        str_ = f'{{"itemId":"770948795182","skuId":"{skuId}","quantity":1,"exParams":"{{\\"detail_redpacket_pop\\":\\"true\\",\\"id\\":\\"770948795182\\",\\"ltk2\\":\\"17490471630798z9bh9a9u058njvplbowal\\",\\"ns\\":\\"1\\",\\"priceTId\\":\\"213e077517490462421658330e1874\\",\\"query\\":\\"衣服男款短袖\\",\\"skuId\\":\\"5454214011831\\",\\"spm\\":\\"a21n57.1.hoverItem.1\\",\\"utparam\\":\\"{{\\\\\\"aplus_abtest\\\\\\":\\\\\\"5343a4a53d9756f6168a0c92a66ad928\\\\\\"}}\\",\\"xxc\\":\\"ad_ztc\\",\\"areaId\\":\\"513321\\",\\"sellerNick\\":\\"小卡拉虫子\\",\\"serviceId\\":\\"\\",\\"spiPage\\":\\"pcTao\\"}}","serviceId":""}}'
        return str_
    
    def get_timesp(self):
        return int(time.time() * 1000)
    
    def api_Shopping_Cart(self, skuId):
        timesp = str(self.get_timesp())
        data = self.get_data(skuId=skuId)
        token = "58684ce729ea3705454c22d28b363c6e"
        appKey = "12574478"
        eu = f"{token}&{timesp}&{appKey}&{data}"  # 确认拼接顺序
        sign = self.call('get_sign', eu)
        

        headers = {
            'accept': 'application/json',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://item.taobao.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://item.taobao.com/',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            'cookie':'cna=DLK5IIB4YVcCAava+n2wjmFG; wk_unb=UUphy%2FA5iMIYV%2B5yKg%3D%3D; lid=tb774020013; xlly_s=1; wk_cookie2=1d745690498a2f7419844a14e9e55207; dnk=tb774020013; uc1=cookie14=UoYagkEBdlP7BQ%3D%3D&pas=0&existShop=false&cookie21=U%2BGCWk%2F7pY%2FF&cookie16=W5iHLLyFPlMGbLDwA%2BdvAGZqLg%3D%3D&cookie15=U%2BGCWk%2F75gdr5Q%3D%3D; uc3=id2=UUphy%2FA5iMIYV%2B5yKg%3D%3D&nk2=F5RCYr6H7ysbmlo%3D&lg2=VT5L2FSpMGV7TQ%3D%3D&vt3=F8dD2f5q%2BPXHwcIa5lw%3D; tracknick=tb774020013; _l_g_=Ug%3D%3D; uc4=nk4=0%40FY4JjCqmGCsLxI1tn%2BokwMLobZBYZQ%3D%3D&id4=0%40U2grEJfMA8%2BjwcctU4TYnWiHpKf3NIVZ; unb=2201205393049; lgc=tb774020013; cookie1=AH%2F4O9OPcys21CxigM%2F2M4jORajv2QrzKQll7GpNzGo%3D; login=true; cookie17=UUphy%2FA5iMIYV%2B5yKg%3D%3D; cookie2=17cb40256e65bec7f03b4fcc50b98f3c; _nk_=tb774020013; sgcookie=E100m6m%2FGhr2n8c9X%2FF%2FwMsbWbnL40bzpYdoqLicdSEFOwNaZuW3XF5oMHMiJd9HmDUndCdaEKu%2FplGE0aQBxKu8T18SkBIxHcTqyTsybnNoAs8%3D; cancelledSubSites=empty; sg=39b; t=bc0e56755b6af0cd15fd3ec64b6c7771; csg=c8fdeb9b; sn=; _tb_token_=34757377b5553; isg=BMfHKrUqYx_RK-fgTYrgPBQZVnuRzJuuRBJmSJm049Z9COfKoZwr_gXLqshW23Mm; bxuab=0; mtop_partitioned_detect=1; _m_h5_tk=714974d684674c2db46b2f0f6691934c_1749111073500; _m_h5_tk_enc=f5d26cf5af88908de8d7fa78eea631c3; tfstk=gprsL09bdCA1bYnvhVXeAKdRSGiXC9SP5KMYE-KwHcnthnwuGRo4HjrjcWVKkloaQWsbE7gZkol4cdqQNn-NsN2vcmoAa_SP4R2ImmCybY6tqCDZnFIq6xLKjxysQ_td4R2MpdOAUyIyhDDrsVhYMV3p9YhpDFHYM2nKFXKtHhHv99Gn9AL9XAhp9xHyBjFxD9wKtxnxBS3OdJHeDQkf3fw1Qpr_qtxe_RlBDnEIpsc7CTtjLkHs5beT3nxcoAgswRhC6NSsh2emlovDcfeTrSD86CCrS-UQOAifYFn8drFSKlIy1v4ap8lLFLK8Ica7VcU1tema1knLXz9vDJiss2HIRC1Iwl2LqD3F2TwLx5ygA-JADvPr9RqtcgBofchtAvqVthhbJrEZSmAOaV2YRWMs2gR64bZyRE9IrnMIa96BoEf1AuELXomwfVHnCD6CdCiKWvDIa96BoE0tKv8Cd9Osv'
        }

        params = {
            'jsv': '2.7.5',
            'appKey': '12574478',
            't': timesp,
            'sign': sign,
            'api': 'mtop.trade.addBag',
            'v': '3.1',
            'isSec': '0',
            'ecode': '0',
            'timeout': '10000',
            'needEcodeSign': 'true',
            'LoginRequest': 'true',
            'type': 'json',
            'ttid': '1@tbwang_windows_1.0.0#pc',
            'dataType': 'json',
            'valueType': 'string',
        }

        payload = "data=" + parse.quote(data)
        
        response = requests.post(
            'https://h5api.m.taobao.com/h5/mtop.trade.addbag/3.1/',
            params=params,
            headers=headers,
            data=payload,
        )
        print(response.text)



if __name__ == '__main__':
    # 加载 JS 文件
    js_executor = JSExecutor(r'D:\爬虫项目\爬虫\js逆向\06-淘宝购物车\get_params.js')
    js_executor.api_Shopping_Cart('5890329594344')

    
import requests
import execjs
import os
import csv


class SpierData():
    def __init__(self,field_mapping: dict):
        """
        初始化爬虫信息

        Args:
            field_mapping: 字段映射关系
        """
        self.cookies = {
            '_tea_utm_cache_2608': 'undefined',
            '__tea_cookie_tokens_2608': '%257B%2522web_id%2522%253A%25227495787047023838760%2522%252C%2522user_unique_id%2522%253A%25227495787047023838760%2522%252C%2522timestamp%2522%253A1745248943786%257D',
            'odin_tt': '21770152b6d9beb854a15f6dde529f856c0432ce11dbf716d87b2602d31e2a89831cb27d972acdafb39c49b3ed57050570b817a4fc667773a675a2619f4532e4',
            '_ga': 'GA1.2.979893466.1772948845',
            '_ga_S695FMNGPJ': 'GS2.2.s1772948845$o1$g0$t1772948845$j60$l0$h0',
            'n_mh': 'QgN8ycIE1mLmvYammYTgizVxWH5yfUziwXl-3A2wvEY',
            'passport_csrf_token': '16d20439f043b6163720e4880f98fa7b',
            'passport_csrf_token_default': '16d20439f043b6163720e4880f98fa7b',
            'passport_auth_status': '3d27969088473f937793f3e1a6e43ddc%2C7c721dc747f905a0a97b14bd3b05ba75',
            'passport_auth_status_ss': '3d27969088473f937793f3e1a6e43ddc%2C7c721dc747f905a0a97b14bd3b05ba75',
            'sid_guard': '8858bd4ccfbe422b5b9bd44d42ef9437%7C1774586719%7C31536000%7CSat%2C+27-Mar-2027+04%3A45%3A19+GMT',
            'uid_tt': '4653e2ce00659599b1fdb08d67df4dbe',
            'uid_tt_ss': '4653e2ce00659599b1fdb08d67df4dbe',
            'sid_tt': '8858bd4ccfbe422b5b9bd44d42ef9437',
            'sessionid': '8858bd4ccfbe422b5b9bd44d42ef9437',
            'sessionid_ss': '8858bd4ccfbe422b5b9bd44d42ef9437',
            'session_tlb_tag': 'sttt%7C10%7CiFi9TM--Qitbm9RNQu-UN__________UsDpqteQc1aMMnQMNt0hZMFuE9dH7bp_VT7coXs4Sl94%3D',
            'is_staff_user': 'false',
            'use_biz_token': 'true',
            'sid_ucp_v1': '1.0.0-KDU2NjA4MjM0NWZjYjAzYjFhZmYzM2I5NzcwZWYzMTViY2FhYWY5ZTIKFwjc6uGGra3KAxDflpjOBhiwFDgCQPEHGgJsZiIgODg1OGJkNGNjZmJlNDIyYjViOWJkNDRkNDJlZjk0Mzc',
            'ssid_ucp_v1': '1.0.0-KDU2NjA4MjM0NWZjYjAzYjFhZmYzM2I5NzcwZWYzMTViY2FhYWY5ZTIKFwjc6uGGra3KAxDflpjOBhiwFDgCQPEHGgJsZiIgODg1OGJkNGNjZmJlNDIyYjViOWJkNDRkNDJlZjk0Mzc',
            'csrf_session_id': '7b7e6247fdcd10998ec7cc3d292e378e',
        }

        self.headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'origin': 'https://juejin.cn',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://juejin.cn/',
            'sec-ch-ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
            'x-secsdk-csrf-token': '000100000001b4235c61d107931c4584680cdcd283900e81d017a8b387a97de5505f546a662d18a863e7dbce13e8',
        }

        self.field_mapping = field_mapping

    @property
    def data(self):
        """载荷参数"""
        return {
            'aid': '2608',
            'uuid': '7495787047023838760',
            'spider': '0',
        }

    def get_js(self, js_path: str, func_name: str, *args):
        """
        获取JS代码上下文对象
        
        Returns:
            str: JS函数执行结果
        """
        with open(js_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        exec_js =  execjs.compile(js_code)
        return exec_js.call(func_name, *args)

    def fetch(self, source_url: str=None ,response_type=True):
        """
        获取响应数据(发请求)

        Args:
            response_type: 数据返回类型 默认为True 返回JSON格式
        """
        self.headers["accept-enckey"] = self.get_js(js_path="./param.js", func_name="getResCode")
        response = requests.post(
            url=source_url,
            cookies=self.cookies,
            headers=self.headers,
            data=self.data,
            timeout=10,
        )
        if response.status_code == 200:
            if response_type == True:
                result = response.json()
            else:
                result = response.text
        else:
            raise Exception(f"请求失败，状态码：{response.status_code}")
        return result 

    def parse(self, source_data: dict) -> list:
        """
        解析数据
        
        Args:
            source_data: 待解析的数据
        """
        if "records" in source_data:
            records = source_data.get("records", [])
            all_data = [] # 总数据
            for record in records:
                # 过滤空数据
                if not record:
                    continue 
                dic = {}
                for cn_field, api_field in self.field_mapping.items():
                    dic[cn_field] = record.get(api_field, "暂无数据") 
                all_data.append(dic)
            return all_data
        else:
            print("数据格式错误")
            return []

    def save(self, data: list, save_path: str):
        """保存数据"""
        if not data:
            print(f"无数据可保存：{self.time_date}")
            return
        if os.path.exists(save_path):
            print(f"文件已存在，正在覆盖：{save_path}")
        else:
            os.makedirs(save_path, exist_ok=True) # 确保文件路径存在
        save_path = os.path.join(save_path, f"{self.time_date}.csv")
        with open(save_path, 'w', encoding='utf-8-sig') as f:
            writer = csv.DictWriter(f, fieldnames=data[0].keys() if data else [])
            writer.writeheader()
            writer.writerows(data)
        print(f"数据已保存到：{save_path}")
        

    def run(self, source_url: str, save_path: str) -> None:
        """
        运行爬虫
        
        Args:
            source_url: 数据来源URL
            save_path: 数据保存路径
        """
        source_data = self.fetch(source_url=source_url)
        parsed_data = self.parse(source_data=source_data)
        self.save(data=parsed_data, save_path=save_path)


if __name__ == "__main__":
    field_mapping = {
        "交易日期": "交易日期",
        "交易所": "交易所",
        "最高价": "最高价",
        "最低价": "最低价",
        "开盘价": "开盘价",
        "收盘价": "收盘价",
        "证券简称": "证券简称",
    }
    spider = SpierData("2026-04-16", field_mapping)
    source_url = "https://webapi.cninfo.com.cn/api/sysapi/p_sysapi1007"
    save_path = "./data"
    spider.run(source_url=source_url, save_path=save_path)
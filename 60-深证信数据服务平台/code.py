import requests
import execjs
import os
import csv


class SpierData():
    def __init__(self, time_date:str, field_mapping: dict):
        """
        初始化爬虫信息

        Args:
            time_date: 需要爬取的日期
            field_mapping: 字段映射关系
        """
        self.cookies = {
            "MALLSSID": "50594E492F50555843597069715167436B487351516E417A72384E68456E6365796972307372566E4752615A356C4445765944577673525870334354757A724E",
            "Hm_lvt_489bd07e99fbfc5f12cbb4145adb0a9b": "1776331562,1776356789,1776438468",
            "HMACCOUNT": "26FAD4314C20E141",
            "Hm_lpvt_489bd07e99fbfc5f12cbb4145adb0a9b": "1776439509",
        }

        self.headers = {
            "Accept": "*/*",
            "Accept-EncKey": "QCAtt37m5zRz6UaoDTsoLw==",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://webapi.cninfo.com.cn",
            "Pragma": "no-cache",
            "Referer": "https://webapi.cninfo.com.cn/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua": '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
        }

        self.time_date = time_date
        self.field_mapping = field_mapping

    @property
    def data(self):
        return {
            "tdate": self.time_date,
            "market": "SZE",
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
    spider = SpierData("2026-04-17", field_mapping)
    source_url = "https://webapi.cninfo.com.cn/api/sysapi/p_sysapi1007"
    save_path = "./data"
    spider.run(source_url=source_url, save_path=save_path)
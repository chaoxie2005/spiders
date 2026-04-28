import csv
import json
import os
import time
from datetime import datetime

import execjs
import requests


def get_page(start):
    page = {
    "sort": 1,
    "start": start * 20,
    "limit": 20
    }
    return page


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
    
    def api_data(self, page):
        """
        获取响应加密数据
        :param page: 翻页参数
        """
        json_data = self.call('get_params', page)
        json_data['v'] = 1
        
        cookies = {
            'btoken': '4LY5IGLILH32Q658N062TD1CGI321BB0',
            'utoken': 'N09X37B0FTV0MOXV1HDAY0GHU5LK5796',
            'username': '%E8%B0%A2%E8%B0%A2',
            'export_notice': 'true',
            'Hm_lvt_42317524c1662a500d12d3784dbea0f8': '1748353794,1748406303,1748441018,1749104130',
            'Hm_lpvt_42317524c1662a500d12d3784dbea0f8': '1749104887',
        }

        headers = {
            'accept': 'application/json',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'origin': 'https://www.xiniudata.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://www.xiniudata.com/industry/newest?from=data',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        }

        response = requests.post(
            'https://www.xiniudata.com/api2/service/x_service/person_industry_list/list_industries_by_sort',
            cookies=cookies,
            headers=headers,
            json=json_data,
        )
        return response.text
    
    def dec_enc_data(self, enc_data):
        dec_data = self.call('get_res', enc_data)
        list_ = dec_data['list']
        for info in list_:
            # 公司
            name = info['name']
            
            # 创立时间 
            createTimesp_ms = info['createTime']
            create_time = self.timestamp_to_str(createTimesp_ms)
            
            # 更新时间 
            updateTimesp_ms = info['updateTime']
            update_time = self.timestamp_to_str(updateTimesp_ms)
            
            companyVOs = info['companyVOs']
            all_company = []
            for info_1 in companyVOs:
                # 投资公司
                name_1 = info_1['name']
                all_company.append(name_1)
            companies = ' '.join(all_company)
            data = name, create_time, update_time, companies                    
            self.save_data(data)
    
    def save_data(self, data):
        with open('稀牛数据.csv', 'a', encoding='utf-8-sig', newline='') as f:
            writer = csv.writer(f)
            if f.tell() == 0:
                writer.writerow(('名称', '创立时间', '更新时间', '关联公司'))
            writer.writerow(data)
    
    def timestamp_to_str(self, timestamp_ms, format_str='%Y-%m-%d %H:%M:%S'):
        """
        将毫秒级时间戳转换为指定格式的时间字符串
        :param timestamp_ms: 毫秒级时间戳
        :param format_str: 时间格式字符串
        :return: 格式化后的时间字符串
        """
        # 转换为秒级时间戳
        timestamp_seconds = timestamp_ms / 1000
        # 转换为datetime对象
        dt_object = datetime.fromtimestamp(timestamp_seconds)
        # 格式化为指定字符串
        return dt_object.strftime(format_str)


def main():
     # 加载 JS 文件
    js_executor = JSExecutor(r'D:\爬虫项目\爬虫\js逆向\07-稀牛数据\get_params.js')
    js_executor_1 = JSExecutor(r'D:\爬虫项目\爬虫\js逆向\07-稀牛数据\get_res.js')
    index = 0
    while True:
        try:
            time.sleep(1.5)
            page = get_page(index)
            enc_data_str = js_executor.api_data(page)
            enc_data_str = json.loads(enc_data_str)
            enc_data = enc_data_str['d']
            js_executor_1.dec_enc_data(enc_data)
            index += 1
        except KeyboardInterrupt:
            break

if __name__ == '__main__':
   main()
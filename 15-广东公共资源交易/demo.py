import requests
import execjs
import os


class JsFile():
    def __init__(self, js_file_path):
        """
        初始化js文件
        :param js_file_path: js文件路径
        """
        if not os.path.exists(js_file_path):
            raise FileNotFoundError(f'JS文件不存在:{js_file_path}')
        with open(js_file_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        self.js_code = execjs.compile(js_code)
        
    def call(self, func_name, *arg):
        """
        调用JS中的函数
        :param func_name: 函数名称
        :param arg: 参数列表
        return 运行结果
        """
        return self.js_code.call(func_name, *arg)
    
    def api_data(self, param_dic):
        cookies = {
            '_horizon_sid': '1855032b-b8ca-40cc-844c-2bd719d6fc3a',
            '_horizon_uid': 'b3174a64-ed73-456d-a922-a2c697dc4f97',
        }

        headers1 = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://ygp.gdzwfw.gov.cn/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            # 'Cookie': '_horizon_sid=1855032b-b8ca-40cc-844c-2bd719d6fc3a; _horizon_uid=b3174a64-ed73-456d-a922-a2c697dc4f97',
        }
        headers = {**headers1,**param_dic}
        params = {
            'nodeId': '1942875456603066370',
            'version': 'v3',
            'tradingType': 'A',
            'noticeId': 'cbe11cf1b31b47c59e32af5f00e65268',
            'bizCode': '3C14',
            'projectCode': 'E441300083590bf5a001',
            'siteCode': '441300',
        }

        response = requests.get(
            'https://ygp.gdzwfw.gov.cn/ggzy-portal/center/apis/trading-notice/new/detail',
            params=params,
            cookies=cookies,
            headers=headers,
        )
        return response.json()


def main():
    js_file = JsFile(r'D:\爬虫项目\爬虫\js逆向\15-广东公共资源交易\param.js')
    param = js_file.call('get_param')
    print(js_file.api_data(param))


if __name__ == '__main__':
    main()
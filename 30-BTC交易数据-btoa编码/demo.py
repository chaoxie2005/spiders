import pymongo.mongo_client
import requests
import time
import execjs
import pymongo

class MogoDB:
    def __init__(self, host=None, port=None, *, databse=None, table=None):
        """
        初始化mongodb数据库
        :param host: 主机名
        :param port: 端口号
        :param database: 数据库名称
        :param table: 数据库表名称
        """
        if host is None and port is None:
            host = '127.0.0.1'
            port = 27017
        self.mogodb_client = pymongo.MongoClient(host, port)
        self.db = self.mogodb_client[databse][table]
    
    def add_many(self, data):
        self.db.insert_many(data)

def get_param(filepath, func_name, *arg):
    with open(filepath, 'r', encoding='utf-8') as f:
        js_code = f.read()
    js_code = execjs.compile(js_code)
    return js_code.call(func_name, *arg) 


def get_data(page):
    apikey = get_param(r'D:\爬虫项目\爬虫\js逆向\30-BTC交易数据-btoa编码\param.js', 'getApiKey')
    cookies = {
        'devId': 'ceadfc20-a974-49fe-abc1-764117aa89c0',
        'ok_site_info': '9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye',
        'locale': 'zh_CN',
        'ok-exp-time': '1758033904997',
        'fingerprint_id': 'ceadfc20-a974-49fe-abc1-764117aa89c0',
        'fp_s': '-1',
        'okg.currentMedia': 'xl',
        'aliyungf_tc': 'a00a909157256681351d2003429d9909bf2fe2abd0cbe219a44b70b277b3b074',
        'traceId': '2930181069983820001',
        'first_ref': 'https%3A%2F%2Fwww.oklink.com%2Fzh-hans%2Fbitcoin%2Ftx-list%3Flimit%3D20%26pageNum%3D1',
        '_monitor_extras': '{"deviceId":"WCO1pVSBPNCwTjFBpkCJDM","eventId":24,"sequenceNumber":24}',
        'ok-ses-id': 'ZqL5ceGCNYm3qeKLTlZ9Ogoy2lgYiEjH3y8S4AQHOTcNlT9j9GY2XCCpA0Zjh/1d/AjEbVBRYJu3gANnAFDV3DzgTsQ0Fuz5auUNeHcxh7RQMJexGBybNO2nuMfzM7ZG',
    }

    headers = {
        'accept': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'app-type': 'web',
        'cache-control': 'no-cache',
        'devid': 'ceadfc20-a974-49fe-abc1-764117aa89c0',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.oklink.com/zh-hans/bitcoin/tx-list/page/4',
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        'x-apikey': apikey,
        'x-cdn': 'https://static.oklink.com',
        'x-id-group': '2930181069983820001-c-4',
        'x-locale': 'zh_CN',
        'x-simulated-trading': 'undefined',
        'x-site-info': '9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye',
        'x-utc': '8',
        'x-zkdex-env': '0',
    }

    params = {
        'offset': '{}'.format(page),
        'limit': '20',
        'needBigField': 'false',
        't': str(int(time.time() * 1000)),
    }

    response = requests.get(
        'https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict',
        params=params,
        cookies=cookies,
        headers=headers,
    )
    return response.json()


def parse_data(json_data):
    items = json_data['data']['hits']
    dict_list = []
    for item in items:
        time_struct = time.localtime(item.get('blocktime'))
        formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', time_struct)
        d = {
            '交易哈希': item.get('hash'),
            '区块': item.get('blockHeight'),
            '时间': formatted_time,
            '输入': item.get("inputsCount")
        }
        dict_list.append(d)
    return dict_list


def save_Mogodb(datas):
    mogodb = MogoDB(databse='BTC', table='info')
    mogodb.add_many(datas)

def main():
    for page in range(0, 161, 20):
        res_data = get_data(page)
        dict_list = parse_data(res_data)
        save_Mogodb(dict_list)

    
if __name__ == '__main__':
    main()
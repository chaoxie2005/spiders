import requests
import pymongo


class Lottery_Collection():
    def __init__(self, host=None, port=None, *, database, table):
        """
        初始化连接mongo数据库
        :param host: 主机名
        :param port: 端口号
        :param database: 数据库名称
        :param table: 表名
        """
        if host is None and port is None:
            host = '127.0.0.1'
            port = 27017
        mongodb = pymongo.MongoClient(host, port)
        self.db = mongodb[database][table]
        
    def get_html(self):
        """
        获取网页源码内容
        """
        cookies = {
            'PHPSESSID': 'vfoejlabbsk8gaml0v66s1mga7',
            'Hm_lvt_692bd5f9c07d3ebd0063062fb0d7622f': '1750409427,1751940267',
            'Hm_lpvt_692bd5f9c07d3ebd0063062fb0d7622f': '1751940267',
            'HMACCOUNT': '5B53905BB2005420',
            '_ga_9FDP3NWFMS': 'GS2.1.s1751940266$o2$g0$t1751940266$j60$l0$h0',
            'Hm_lvt_12e4883fd1649d006e3ae22a39f97330': '1750409429,1751940267',
            'Hm_lpvt_12e4883fd1649d006e3ae22a39f97330': '1751940267',
            '_ga': 'GA1.2.214305941.1750409428',
            '_gid': 'GA1.2.1896677877.1751940267',
            '_gat_UA-66069030-3': '1',
        }

        headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://www.zhcw.com/',
            'Sec-Fetch-Dest': 'script',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            # 'Cookie': 'PHPSESSID=vfoejlabbsk8gaml0v66s1mga7; Hm_lvt_692bd5f9c07d3ebd0063062fb0d7622f=1750409427,1751940267; Hm_lpvt_692bd5f9c07d3ebd0063062fb0d7622f=1751940267; HMACCOUNT=5B53905BB2005420; _ga_9FDP3NWFMS=GS2.1.s1751940266$o2$g0$t1751940266$j60$l0$h0; Hm_lvt_12e4883fd1649d006e3ae22a39f97330=1750409429,1751940267; Hm_lpvt_12e4883fd1649d006e3ae22a39f97330=1751940267; _ga=GA1.2.214305941.1750409428; _gid=GA1.2.1896677877.1751940267; _gat_UA-66069030-3=1',
        }

        params = {
            'transactionType': '10001001',
            'lotteryId': '1',
            'issueCount': '50',
            'startIssue': '',
            'endIssue': '',
            'startDate': '',
            'endDate': '',
            'type': '0',
            'pageNum': '1',
            'pageSize': '30',
            'tt': '0.8177625970496537',
            '_': '1751940265942',
        }

        response = requests.get('https://jc.zhcw.com/port/client_json.php', params=params, cookies=cookies, headers=headers)
        return response.json()
    
    
    def parse_html(self, content):
        """
        解析数据
        :param content: 待解析的内容
        """
        res_data = content['data']
        lst = []
        for item in res_data:
            dic = {}
            # 期号
            dic['issue'] = item['issue']
            # 红球
            frontWinningNum = item['frontWinningNum']
            # 篮球
            backWinningNum = item['backWinningNum']
            dic['result_code'] = (frontWinningNum + ',' + backWinningNum).replace(' ', ',')
            dic['openTime'] = item['openTime']
            lst.append(dic)
        return lst
    
    def insert_data(self, data):
        """
        添加数据
        :param data:待添加的内容列表
        """
        self.db.insert_many(data)
        
    def find_data(self, number):
        num_list = number.split(',')
        like_list = []
        for num in num_list:
            condition = {'result_code':{'$regex':num}}
            like_list.append(condition)
        # 构造查询条件
        query = {'$and':like_list}
        result = self.db.find(query, {'_id':0})
        for item in result:
            print(item)
        all_count = self.db.count_documents({}) # 不带条件查询的全部个数
        partial_count = self.db.count_documents(query) # 带条件查询的部分个数
        probability = partial_count / all_count # 概率
        probability = probability * 100
        print(f'查询到{all_count}条数据，中奖的概率是{probability:.2f}%')

 
        
    
def main():
    l = Lottery_Collection(database='demo1', table='info')
    print('请输入你要选择的功能！！')
    print('1. 获取彩票数据添加到数据库中')
    print('2. 模糊查询号码中奖的概率')
    choice = int(input('请输入选择(1/2)\r\n'))
    if choice == 1:
        data = l.get_html()
        res_data = l.parse_html(data)
        l.insert_data(res_data)
    elif choice == 2:
        number = input('请输入多个数字, 请用逗号隔开\r\n')
        l.find_data(number)

if __name__ == '__main__':
    main()
                

"""
需求: 采集近三个月直播数据(直播时长、直播次数、观众数、人数峰值、
点赞量、评论量、礼物收入)
"""
import requests
import sqlite3
import yaml


class Sqlite():
    def __init__(self, openfile):
        try:
            self.db = sqlite3.connect(openfile)
            print('数据库打开成功')
        except sqlite3.Error as e:
            print(f'打开数据库失败：{e}')
    
    def add_data(self, table, data):
        cursor = self.db.cursor()
        columns = ', '.join([key for key in data.keys()])
        placeholders = ','.join(['?' * len(data)])
        insert_sql = f'insert into {table} ({columns}) values ({placeholders})'
        cursor.execute(insert_sql, tuple(data.values()))
        self.db.commit()
        return True
    
def api_data():
    """
    获取快手直播数据
    """
    url = "https://cp.kuaishou.com/rest/cp/creator/analysis/live/pc/trending"

    querystring = {"__NS_sig3":"25357242ff24001e03787b7a91066c3fa044ec006464666669686b71"}

    payload = "{\"memberId\":3715790549,\"dimensions\":[1,2,3,4,5,6,7,8,9],\"endTime\":1752595199999,\"startTime\":1744819200000,\"dateType\":4,\"kuaishou.web.cp.api_ph\":\"255307e7e9b5724edb991fa59f56eaa956a6\"}"
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": "https://cp.kuaishou.com",
        "Pragma": "no-cache",
        "Referer": "https://cp.kuaishou.com/statistics/live",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "returnSetRootDomainLoginUrl": "true",
        "Cookie": "did=web_4307d23c307a4932dfd8c90d23929ab1; bUserId=1000463046698; userId=3715790549; kuaishou.web.cp.api_st=ChZrdWFpc2hvdS53ZWIuY3AuYXBpLnN0ErABnU0H0P_A0fMARg5tCH1DiHWAUcy4FP3yLJq4lIMfeTnD4p8yceInYb9AqhHANStm5K4ZUAVivKDol28frglweyhCGVep3tye4nG9Fy8iSJPxhL4_7U_Py9psBSy2QzTPzMqkSIU-8QPPtdEw7JYnDfRj5UPSK0dClv9XIbLvnZJjsU5xg5GjpnqZwhfkwW9uFBZcnwLH2lhNweqWs6Ij9SwZ1_p_0c4_3dWK-2VcSn8aEm9Hzy3KHHOyODDuOuii16v5iSIgurKUu6SIxl8iWEBfpFDz7rTgLGBOFbtf9rZHV9zLsXcoBTAB; kuaishou.web.cp.api_ph=255307e7e9b5724edb991fa59f56eaa956a6",
        "Accept-Encoding": "gzip, deflate, br",
        "Host": "cp.kuaishou.com",
        "Content-Length": "183"
    }

    response = requests.request("POST", url, data=payload, headers=headers, params=querystring)

    return response.json()

def parse_data(content):
    data = content.get('data')
    trending = data.get('trending')
    lst = []
    for item in trending:
        dic = {}
        # 直播时长
        dic["直播时长"] = item.get('liveDuration')
        # 直播次数
        dic["直播次数"] = item.get('liveCnt')
        # 观众数
        dic["观众数"] = item.get('playUv')
        # 人数峰值
        dic["人数峰值"] = item.get('maxConcurrentUv')
        # 点赞量
        dic["点赞量"] = item.get('likeUv')
        # 评论量
        dic["评论量"] = item.get('commentUv')
        # 礼物收入 
        dic["礼物收入"] = item.get('receiveAmount')
        # 日期
        dic["日期"] = item.get('dateTime')
        # print(f'日期:{dateTime},直播时长: {liveDuration}, 观众数:{playUv}, 人数峰值:{maxConcurrentUv}, 点赞量:{likeUv}, 评论量:{commentUv}, 礼物收入:{receiveAmount}')
        lst.append(dic)
    return lst


def main():
    content = api_data()
    data_lst = parse_data(content)
    with open('config.yaml', 'r', encoding='utf-8') as f:
        config = yaml.safe_load(f)
    db_path = config['DataBase']['Sqlite']['Ks']
    db = Sqlite(db_path)
    for item in data_lst:
        db.add_data('info1',item)
    
    
if __name__ == '__main__':
    main()
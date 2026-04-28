import requests, execjs, csv, os


def get_dec_result(content):
    with open(r"D:\爬虫项目\爬虫\js逆向\35-CBA球员信息-AES\param.js", "r") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    result = ctx.call("get_response", content)
    return result

def spider():
    """
    获取球队列表
    """
    url = "https://data-server.cbaleague.com/api/teams/teamList"
    payload = ""
    headers = {
        "accept": "application/json, text/plain, */*",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://cbaleague.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "Host": "data-server.cbaleague.com"
    }
    response = requests.get(url, data=payload, headers=headers)
    response.encoding = 'utf-8'
    return response.text.replace('"', "")

def get_player_list(team_id):
    url = f"https://data-server.cbaleague.com/api/teams/{team_id}/seasons/2024/players"

    payload = ""
    headers = {
        "priority": "u=1, i",
        "referer": "https://cbaleague.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "Host": "data-server.cbaleague.com"
    }

    response = requests.get(url, data=payload, headers=headers)

    return response.text.replace('"', "")

def get_team_id(response):
    for team in response:
        team_id = team.get("teamId")
        yield team_id

def parse_player_list(content):
    dic_list = []
    for player in content:
        d = {
            "姓名": player.get("cnAliasShow"),
            "年龄": player.get("age"),
            "位置": player.get("position"),
            "国籍": player.get("nationality"),
            "生日": player.get("birthDate"),
            "身高": player.get("height"),
            "体重": player.get("weight"),
            "所属球队": player.get("teamCnName")
        }
        dic_list.append(d)
    return dic_list


def save_data(data, mode='w'):
    headers = ('姓名', '年龄', '位置', '国籍', '生日', '身高', '体重', '所属球队')
    if not os.path.exists(f"{data['所属球队']}"):
        os.mkdir(f"{data['所属球队']}")
    with open(f"{data['所属球队']}/球员信息.csv", mode, encoding='gbk', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        if mode == "w" or f.tell() == 0:
            writer.writeheader()
        writer.writerow(data)
    print(f"已保存 {data['姓名']} 的信息")
        
        
def main():
    team_list = get_dec_result(spider())
    for team_id in get_team_id(team_list):
        player_list = get_dec_result(get_player_list(team_id))
        play_info = parse_player_list(player_list)
        for data in play_info:
            save_data(data, 'a')
        print(f"已保存 {team_id} 的球员信息")

if __name__ == '__main__':
    main()
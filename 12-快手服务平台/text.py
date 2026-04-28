import requests

url = "https://cp.kuaishou.com/rest/cp/creator/analysis/live/pc/trending"

querystring = {"__NS_sig3":"c8d89faf3bf7eef3e995969731a98cf24da901ed89898b8b8485869c"}

payload = "{\"memberId\":3715790549,\"dimensions\":[1,2,3,4,5,6,7,8,9],\"endTime\":1752422399999,\"startTime\":1744646400000,\"dateType\":4,\"kuaishou.web.cp.api_ph\":\"255307e7e9b5724edb991fa59f56eaa956a6\"}"
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

print(response.text)
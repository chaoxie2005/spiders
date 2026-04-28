import requests

def api_data():
    cookies = {
        "did": "web_dbc736a5d24e104d15ad84051a1fc005baf8",
        "kwfv1": "PnGU+9+Y8008S+nH0U+0mjPf8fP08f+98f+nLlwnrIP9+Sw/ZFGfzY+eGlGf+f+e4SGfbYP0QfGnLFwBLU80mYGArFPB+YP9GEG0WA+fPA+0PA8fcE80cMwBQ0G/WI8fzD+/WMG0HEP/mDweHI8fpjG/c9+980PeclwnbD+0Pl80P=",
        "bUserId": "1000596433698",
        "userId": "2429894719",
        "kuaishou.web.cp.api_st": "ChZrdWFpc2hvdS53ZWIuY3AuYXBpLnN0ErABdd8A3GU5wcboQ9xeXn5nIODY5l_Ymt52YeGR8ZnPofxA4Q3p-CS0YVqt7z5LCg-jX_qQixd38OWkXHz_ykTqK7jRZeV3YvY15gInHQPgv7mFTJu8B7mxcB1GFHPTHvQQ4LffGyolbWzCysgPKOuLHXNOZ_Uy7XBPAQalca4DW2cL7_A11zZ-_HrqNYtxks38Wf0zmEqK2EdN8SU3RRW8tM82RlVv8SmO86a_5hmC63QaEjLK9U5_RqNOduNBXgVs_lV6DiIgcBzih8H_lY9uBxIeyPyVREfHJ09KUXOXYPYfDyf-4GEoBTAB",
        "kuaishou.web.cp.api_ph": "da3af889a7d44ae1aa1e0ba358eae6ca35c5",
    }

    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": "https://cp.kuaishou.com",
        "Pragma": "no-cache",
        "Referer": "https://cp.kuaishou.com/statistics/live",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "returnSetRootDomainLoginUrl": "true",
        "sec-ch-ua": '"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
    }

    params = {
        "__NS_sig3": "c3d394a4e89944f9ed9e9d9ca3e17a6346a20ae6828280808f8e8d97",
    }

    json_data = {
        "memberId": 2429894719,
        "dimensions": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
        ],
        "endTime": 1775491199999,
        "startTime": 1774886400000,
        "dateType": 2,
        "kuaishou.web.cp.api_ph": "da3af889a7d44ae1aa1e0ba358eae6ca35c5",
    }

    response = requests.post(
        "https://cp.kuaishou.com/rest/cp/creator/analysis/live/pc/trending",
        params=params,
        cookies=cookies,
        headers=headers,
        json=json_data,
    )
    return response.text


print(api_data())
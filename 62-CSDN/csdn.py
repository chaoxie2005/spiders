import sys
import requests
from lxml import etree
# 设置默认编码为UTF-8
sys.stdout.reconfigure(encoding='utf-8')

def spider():
    """爬取csdn数据"""
    url = "https://www.csdn.net/"

    payload = ""
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
        "Cookie": "uuid_tt_dd=10_28832532610-1745132351491-177576; fid=20_91728460241-1745132351881-967354; UN=2301_80282636; c_dl_fref=https://so.csdn.net/so/search; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=6525*1*10_28832532610-1745132351491-177576!5744*1*2301_80282636; UserName=2301_80282636; UserInfo=d9e8f3d878b940899736baeebf902faa; UserToken=d9e8f3d878b940899736baeebf902faa; UserNick=%E8%B0%A2%E8%B0%A20000; AU=6CA; BT=1761190618377; p_uid=U010000; c_dl_prid=1762584964497_418580; c_dl_rid=1762585424498_430158; c_dl_fpage=/download/zhengyvxiang/86179509; c_dl_um=distribute.pc_search_result.none-task-download-2%7Eall%7Einsert_commercial%7Edefault-2-10733323-null-null.142%5Ev102%5Epc_search_result_base5; c_adb=1; csdn_newcert_2301_80282636=1; c_ab_test=1; _ga_JJBD2VG1H7=GS2.1.s1773829705$o2$g0$t1773829710$j55$l0$h0; _ga_7W1N0GEY1P=GS2.1.s1774876494$o18$g1$t1774876883$j60$l0$h0; _ga=GA1.2.1305449770.1766673951; csrfToken=VXAkHXvdsE9_u4DjnGcDvsN3; c_segment=8; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1774846099,1774928647,1774957421,1775026255; HMACCOUNT=26FAD4314C20E141; dc_sid=c83e1c678fe3f44dd53b17bb4c928f4f; _clck=1kq1ix4%5E2%5Eg4u%5E0%5E1936; creative_btn_mp=3; historyList-new=%5B%5D; is_advert=1; c_first_ref=default; c_first_page=https%3A//www.csdn.net/; fe_request_id=1775029633000_1671_5211151; c_utm_source=cknow_so_nontop_query; _clsk=25gs8z%5E1775029664671%5E14%5E0%5Eh.clarity.ms%2Fcollect; dc_session_id=10_1775055448494.873322; c_pref=default; c_ref=default; c_page_id=default; c-sidebar-collapse=0; log_Id_click=1; c_dsid=11_1775057138236.314103; log_Id_pv=9; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1775057139; log_Id_view=580; dc_tos=tctng8",
        "Accept-Encoding": "gzip, deflate, br",
        "Host": "www.csdn.net"
    }

    response = requests.request("GET", url, data=payload, headers=headers)
    # 指定编码
    response.encoding = "utf-8"
    return response.text


def parse(content):
    """解析csdn数据"""
    tree = etree.HTML(content)
    # 提取文章列表
    article_list = tree.xpath('//div[@class="article-item"]')
    for article in  article_list:
        author = article.xpath('.//span/text()')[0]
        # 文章链接
        url = article.xpath('.//a[contains(@class, "article-title")]/@href')[0]
        title = article.xpath('.//a[contains(@class, "article-title")]/text()')[0].strip()
        summary = article.xpath('.//a[contains(@class, "article-desc")]/text()')[0].strip()
        print(url)
        


res = spider()
parse(res)

import requests
import execjs
import os
import json
import time
import random

def sanitize_filename(filename):
    """过滤文件名中的非法字符"""
    invalid_chars = r'\/:*?"<>|'
    for char in invalid_chars:
        filename = filename.replace(char, '')
    return filename

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
    
    def api_music_list(self, num, singer_name):
        """
        获取歌曲的名称和id
        :param num: 翻页参数，一次增加30
        :param singer_name: 歌手名称
        """
        # 对歌手名称进行JSON字符串转义处理
        escaped_singer = json.dumps(singer_name)
        page = f'{{"hlpretag":"<span class=\\"s-fc7\\">","hlposttag":"</span>","s":{escaped_singer},"type":"1","offset":{num},"total":"false","limit":"30","csrf_token":"5e37546fa909f9f788d412a69dd79661"}}'
        
        cookies = {
            # 保持原cookies不变
            '_ntes_nnid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8,1745159681197',
            '_ntes_nuid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8',
            'NMTID': '00O37ZpNRwFow_sc0QylzxomwkGRJoAAAGXco1LPA',
            '__snaker__id': 'HrzCYxhxQ1WqLu5Y',
            'WM_NI': 'HAdviF3suXDZApPR54%2FCRlZsZs3PX2tpE%2FeSS%2FeDgQgmookXOh1cUbHWTDEobYVT1g6aWQ10G5Vzkogm%2B2HAez2QP3SW%2BviByhaeAvBbcqMaJHR%2BOFXmjQnoQ3OaEHUnUWU%3D',
            'WM_NIKE': '9ca17ae2e6ffcda170e2e6eeb2d668819f84d7ce3ea18e8eb7d15a838f9a86c76aaaecadd2e56b8cbb9aabd32af0fea7c3b92a8c9fac97ec4ef1adbbb9c75283b0a0b3b840ed9d9e8dd9799aadfdb1db3ab8b08bd0e85991f1aba5e65ba5b3a190ea548db8ff84d86a8c899ca5c865a2879ab5b46df6bf99b2b43c85eb9a9bea65a5b3e5d3cb4ba7a6feb2d3399189e597ec4abbb8af86c47e82bead92d06b8a989eccce4e9cb3a6b2ed6593ed8182c84497b29bb8d837e2a3',
            'WM_TID': 'qMDpImTnPSlAFEBQUAPGbi9c0aeCfEdO',
            '__csrf': 'e9bad67a9bd3c6522b285f2f85e440bc',
            'MUSIC_U': '0041C7B7C5DEE3E99253EAE36A298B3E1C38E364ABCE37D1C081467F92CAE8EC24C5BB118D5ADAE26B1B04FD41F1C4FC9F1A6AAE0B92A8E020A7D4C76F5F34250844071158EFEF00E69A8D0F4E1745672DE9167F93B1AFB370B32E255F60E4131B6B03024D63C73B91F83ABF8D695AD37476AB7D594F618980EBA7EC8E44782D1C5CE0AFF3A6E299B5E768E26A4D497CE5B2F369AA69CFE4E50B4B8F7C00702F1B2DF5CD2BE49E823251AF8D7EDC6FCF1B5E2FBBC962295A20BBF6B9251F2CDB004585AF45E041F3141E6C01B75B22B6992945EEF04F1F18EA78A86200BFEEBF1E2059D4FA73E435CC57386D7BFCB40049E3BE55FC72CFAB7D246CB7FF4DF62DEBC52C495BB3D7403F47A4AE46E39F74B2903102CF354C780C0F16E9BC02BAA316376ACC5E878129DA4C8616CDF15925A8',
            '_iuqxldmzr_': '32',
            'ntes_kaola_ad': '1',
            'WEVNSM': '1.0.0',
            'WNMCID': 'vggztx.1749973613457.01.0',
            'ntes_utid': 'tid._.jGFB75jol%252BVEVxBRARKXan4YhPft3VNt._.0.%2C.edd._.._.0',
            'sDeviceId': 'YD-nuPLIb4EiEFBE0VQRVLXKVT9CQKAw9rn',
            'gdxidpyhxdE': 'zKuf4dWW3OfkeebadStbWpyR%5CfuIWpJo0kviVIJvPjwZEPd%5C%2B3MKMBWVnZTrEW8hj2n68cBB49UQyojaJ%2BK%2BNQZlsTb32TMS%5CzpH1nuN4coTWEOQ%2BZb3RoX8hlCvuRvzk2nInyo4XGuiZL%2FT6h6yEnRpi%2BD0E8zvIcRhphJrCsyUocAS%3A1749976762281',
            'JSESSIONID-WYYY': 'dIm%2F%2F6d4X4GSOSaKjMhcReUIND6dnH%2F%2B6UyKOpg3g%2F3vm0A%2BwyfDkbtDaY9f82igE7jHJzw4f3vvm%2FS95G0mSeRZYFzmS3gpUw5zYuw7K4UlJZjNHaR6RvgY6zqIR86jVT3GKfKFEBJAGC7Y6gqZ4neV5uc%2B7b0plV4qqz5kMYXDFEfv%3A1749979402319',
            'playerid': '75846256',
        }

        headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            'nm-gcore-status': '1',
            'origin': 'https://music.163.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://music.163.com/search/',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        }

        params = {
            'csrf_token': '5e37546fa909f9f788d412a69dd79661',
        }

        # 添加随机延迟，避免频繁请求触发反爬
        time.sleep(random.uniform(1, 3))
        
        try:
            data = self.call('get_params', page)
            response = requests.post(
                'https://music.163.com/weapi/cloudsearch/get/web',
                params=params,
                cookies=cookies,
                headers=headers,
                data=data,
                timeout=15  # 设置超时时间
            )
            
            # 检查响应状态码
            if response.status_code == 200:
                return response.text
            else:
                print(f"请求返回非200状态码: {response.status_code}")
                return "{}"  # 返回空JSON避免解析错误
        except Exception as e:
            print(f"api_music_list请求出错: {e}")
            return "{}"  # 返回空JSON避免解析错误

    def parse_data(self, content, singer_name):
        """解析歌曲数据，增加错误处理"""
        try:
            # 检查content是否为空
            if not content.strip():
                print("接收到空内容，跳过解析")
                return
                
            content = json.loads(content)
            
            # 检查响应中是否包含必要的字段
            if 'result' not in content or 'songs' not in content['result']:
                print(f"响应格式异常，缺少result或songs字段: {content}")
                return
                
            songs = content['result']['songs']
            for song in songs:
                song_name = song['name']
                song_id = song['id']
                str_ = self.get_song_info(song_id)
                self.parse_url(str_, song_name, singer_name)
        except json.JSONDecodeError:
            print(f"JSON解析失败，内容可能是: {content[:100]}...")
        except KeyError as e:
            print(f"响应缺少必要字段: {e}")
        except Exception as e:
            print(f"parse_data处理出错: {e}")
    
    def get_song_info(self, id):
        """获取单个歌曲的数据，增加错误处理"""
        cookies = {
            # 保持原cookies不变
            '_ntes_nnid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8,1745159681197',
            '_ntes_nuid': 'dd5abfd08a49cce0fccfcdae8fd7b0a8',
            'NMTID': '00O37ZpNRwFow_sc0QylzxomwkGRJoAAAGXco1LPA',
            '__snaker__id': 'HrzCYxhxQ1WqLu5Y',
            'WM_NI': 'HAdviF3suXDZApPR54%2FCRlZsZs3PX2tpE%2FeSS%2FeDgQgmookXOh1cUbHWTDEobYVT1g6aWQ10G5Vzkogm%2B2HAez2QP3SW%2BviByhaeAvBbcqMaJHR%2BOFXmjQnoQ3OaEHUnUWU%3D',
            'WM_NIKE': '9ca17ae2e6ffcda170e2e6eeb2d668819f84d7ce3ea18e8eb7d15a838f9a86c76aaaecadd2e56b8cbb9aabd32af0fea7c3b92a8c9fac97ec4ef1adbbb9c75283b0a0b3b840ed9d9e8dd9799aadfdb1db3ab8b08bd0e85991f1aba5e65ba5b3a190ea548db8ff84d86a8c899ca5c865a2879ab5b46df6bf99b2b43c85eb9a9bea65a5b3e5d3cb4ba7a6feb2d3399189e597ec4abbb8af86c47e82bead92d06b8a989eccce4e9cb3a6b2ed6593ed8182c84497b29bb8d837e2a3',
            'WM_TID': 'qMDpImTnPSlAFEBQUAPGbi9c0aeCfEdO',
            '__csrf': 'e9bad67a9bd3c6522b285f2f85e440bc',
            'MUSIC_U': '0041C7B7C5DEE3E99253EAE36A298B3E1C38E364ABCE37D1C081467F92CAE8EC24C5BB118D5ADAE26B1B04FD41F1C4FC9F1A6AAE0B92A8E020A7D4C76F5F34250844071158EFEF00E69A8D0F4E1745672DE9167F93B1AFB370B32E255F60E4131B6B03024D63C73B91F83ABF8D695AD37476AB7D594F618980EBA7EC8E44782D1C5CE0AFF3A6E299B5E768E26A4D497CE5B2F369AA69CFE4E50B4B8F7C00702F1B2DF5CD2BE49E823251AF8D7EDC6FCF1B5E2FBBC962295A20BBF6B9251F2CDB004585AF45E041F3141E6C01B75B22B6992945EEF04F1F18EA78A86200BFEEBF1E2059D4FA73E435CC57386D7BFCB40049E3BE55FC72CFAB7D246CB7FF4DF62DEBC52C495BB3D7403F47A4AE46E39F74B2903102CF354C780C0F16E9BC02BAA316376ACC5E878129DA4C8616CDF15925A8',
            '_iuqxldmzr_': '32',
            'ntes_kaola_ad': '1',
            'WEVNSM': '1.0.0',
            'WNMCID': 'vggztx.1749973613457.01.0',
            'ntes_utid': 'tid._.jGFB75jol%252BVEVxBRARKXan4YhPft3VNt._.0.%2C.edd._.._.0',
            'sDeviceId': 'YD-nuPLIb4EiEFBE0VQRVLXKVT9CQKAw9rn',
            'gdxidpyhxdE': 'zKuf4dWW3OfkeebadStbWpyR%5CfuIWpJo0kviVIJvPjwZEPd%5C%2B3MKMBWVnZTrEW8hj2n68cBB49UQyojaJ%2BK%2BNQZlsTb32TMS%5CzpH1nuN4coTWEOQ%2BZb3RoX8hlCvuRvzk2nInyo4XGuiZL%2FT6h6yEnRpi%2BD0E8zvIcRhphJrCsyUocAS%3A1749976762281',
            'playerid': '40640561',
            'JSESSIONID-WYYY': 'SH%2Fbppj%2Bcfc8fQgT9P0qwHmZZh%2BZmn9%2Bn%2FJBuvetbG2Xo35RCDCxC%2FdMzb%2FdTTXYUvXPssg%2BJMPcpEcXK0%2ByIfPYGo9f%5CAgWlxCGKyM2Iu12UmpOXUyFcJRWRpRAGJ%2BH%5C3BHqFdnUmYIp13AwmAzDb8qG0WH2YY4DJkZKpGY1%2FVReTDG%3A1749981179861',
        }

        headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://music.163.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://music.163.com/',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        }

        params = {
            'csrf_token': '5e37546fa909f9f788d412a69dd79661',
        }
        
        d = {"ids":f"[{str(id)}]","level":"exhigh","encodeType":"aac","csrf_token":"5e37546fa909f9f788d412a69dd79661"}
        d = json.dumps(d)
        
        try:
            data = self.call('get_params', d)
            response = requests.post(
                'https://music.163.com/weapi/song/enhance/player/url/v1',
                params=params,
                cookies=cookies,
                headers=headers,
                data=data,
                timeout=15
            )
            
            if response.status_code == 200:
                return response.text
            else:
                print(f"get_song_info请求返回非200状态码: {response.status_code}")
                return "{}"
        except Exception as e:
            print(f"get_song_info请求出错: {e}")
            return "{}"
    
    def parse_url(self, content, song_name, singer_name):
        """解析歌曲URL，增加错误处理"""
        try:
            if not content.strip():
                print("接收到空内容，跳过解析URL")
                return
                
            content = json.loads(content)
            info = content.get('data', [])
            for item in info:
                url = item.get('url')
                if url:
                    try:
                        # 添加随机延迟
                        time.sleep(random.uniform(1, 2))
                        response = requests.get(url, timeout=20)
                        if response.status_code == 200:
                            song_content = response.content
                            self.save_music(song_name, singer_name, song_content)
                        else:
                            print(f"下载歌曲 {song_name} 失败，状态码: {response.status_code}")
                    except Exception as e:
                        print(f"下载歌曲 {song_name} 时出错: {e}")
        except json.JSONDecodeError:
            print(f"解析URL响应时JSON出错，内容: {content[:100]}...")
        except Exception as e:
            print(f"parse_url处理出错: {e}")

    def save_music(self, song_name, singer_name, song_content):
        """保存音乐文件，使用过滤后的文件名"""
        try:
            safe_singer_name = sanitize_filename(singer_name)
            safe_song_name = sanitize_filename(song_name)
            
            music_dir = os.path.join('music', safe_singer_name)
            os.makedirs(music_dir, exist_ok=True)
            
            file_path = os.path.join(music_dir, f"{safe_song_name}.m4a")
            with open(file_path, 'wb') as f:
                f.write(song_content)
            print(f"成功保存: {safe_song_name}.m4a")
        except Exception as e:
            print(f"保存歌曲 {song_name} 时出错: {e}")

def main():
    """主函数，增加异常处理"""
    try:
        singer_name = input('请输入你要搜索的歌手或者歌曲:\r\n')
        js_file_path = input('请输入JS加密文件路径:\r\n')
        
        js_executor = JSExecutor(js_file_path)
        print(f"开始搜索 {singer_name} 的歌曲...")
        
        # 限制最多获取10页数据，避免长时间运行
        for i in range(0, 301, 30):
            print(f"正在获取第 {i//30 + 1} 页数据...")
            content = js_executor.api_music_list(i, singer_name)
            js_executor.parse_data(content, singer_name)
            
        print(f"歌曲下载完成，已保存到 music/{singer_name} 目录")
        
    except FileNotFoundError as e:
        print(f"文件未找到: {e}")
    except Exception as e:
        print(f"程序运行过程中出错: {e}")

if __name__ == '__main__':
    main()
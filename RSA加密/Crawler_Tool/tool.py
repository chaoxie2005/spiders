import csv
import execjs
from typing import List, Dict, Tuple, Optional


class Crawl:
    @classmethod
    def ex_js(cls, filepath: str = None, func_name: str = None, *args) -> str:
        """
        编译JS代码，并调用函数
        :param filepath: JS文件的路径
        :param func_name: 需调用的JS函数
        :param *args: 函数所需要传入的参数
        """
        with open(filepath, 'r', encoding='utf-8') as f:
            js_code = f.read()
        ex_code = execjs.compile(js_code)
        return ex_code.call(func_name, *args)

    @classmethod
    def save_csv(cls, filename: str = None, save_data: Tuple = None, headers: str = None, mode: str = 'w',
                 data_mode: int = 0) -> None:
        """
        创建csv文件，并保存数据, 默认保存在当前文件夹下
        :param filename 文件名称
        :param save_data 待保存的数据
        :param headers 表头
        :param mode 文件写入的模式
        :param data_mode 默认为0 数据格式(元组/字典) 0为元组
        """
        if data_mode == 0:
            with open(filename, mode, encoding='utf-8-sig', newline='') as f:
                writer = csv.writer(f)
                if f.tell() == 0:
                    writer.writerow(headers)
                writer.writerow(save_data)
        else:
            raise '参数 data_mode为0 默认传入数据类型为元组'

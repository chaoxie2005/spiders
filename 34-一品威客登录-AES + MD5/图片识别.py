from chaojiying_Python.chaojiying import Chaojiying_Client

def get_code():
    """获取验证码内容并输入和登录"""
    chaojiying = Chaojiying_Client('xiechao2005', 'Xc159357@', '970579')	
    im = open('code.png', 'rb').read()										
    result = chaojiying.PostPic(im, 1004)
    pic_str = result['pic_str']
    return pic_str

print(get_code())


const cryptoJs = require('crypto-js');
window = globalThis;


function decrypt_data(data) {
    window.a = eval(data.key)
    var _a = {}
        , _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
    (function (e) {
        e[_0xb483[0]] = _0xb483[1]
    }
    )(_a);
    var __Ox11208b = ["encode", "aes", "wxSign", "data", "atob", "parse", "slice", "decrypt", "script", "createElement", "text", "key", "appendChild", "body", "window.", "id", "", "join", "reverse", "split", "length", "charCodeAt", "fromCharCode", "undefined", "log", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"];
    let key = (() => {
        let code = data[__Ox11208b[0]]
        let key = eval(__Ox11208b[14] + data[__Ox11208b[15]]);
        return code === 3 ? key = key[__Ox11208b[19]](__Ox11208b[16])[__Ox11208b[18]]()[__Ox11208b[17]](__Ox11208b[16]) : code === 4 ? key = key[__Ox11208b[6]](2) : code === 5 ? key = key[__Ox11208b[6]](0, key[__Ox11208b[20]] - 2) : code === 6 ? key = key[__Ox11208b[6]](1, key[__Ox11208b[20]] - 1) : code === 7 ? key = key[__Ox11208b[6]](2, key[__Ox11208b[20]] - 1) : code === 8 ? key = key[__Ox11208b[6]](1, key[__Ox11208b[20]] - 2) : code === 9 ? key = key[0] + key[__Ox11208b[6]](2, key[__Ox11208b[20]]) : code === 10 && (key = key[__Ox11208b[6]](0, key[__Ox11208b[20]] - 2) + key[key[__Ox11208b[20]] - 1]), key
    }
    )()
        , datas = data[__Ox11208b[3]];
    if (key !== void 0)
        if (data[__Ox11208b[0]] > 2) {
            let e = cryptoJs.MD5(key).toString()
                , t = cryptoJs.enc.Utf8[__Ox11208b[5]](e)
                , r = cryptoJs.enc.Utf8[__Ox11208b[5]](e[__Ox11208b[6]](16, 32))
                , n = cryptoJs.AES.decrypt(window[__Ox11208b[4]](datas), t, {
                    iv: r,
                    padding: cryptoJs.pad.Pkcs7
                }).toString(cryptoJs.enc.Utf8);
            data = JSON[__Ox11208b[5]](n)
        } else {
            let e = window[__Ox11208b[4]](datas)
                , t = key[__Ox11208b[20]]
                , r = __Ox11208b[16];
            for (let o = 0; o < e[__Ox11208b[20]]; o++) {
                let n = o % t;
                r += String[__Ox11208b[22]](e[__Ox11208b[21]](o) ^ key[__Ox11208b[21]](n))
            }
            data = JSON[__Ox11208b[5]](window[__Ox11208b[4]](r))
        }
    return data
}




module.exports = {
    decrypt_data,
}


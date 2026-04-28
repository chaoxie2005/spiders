const CryptoJS = require('crypto-js');

const l = {
    key: CryptoJS.enc.Utf8.parse("fX@VyCQVvpdj8RCa"),
    iv: CryptoJS.enc.Utf8.parse(function (t) {
        for (var e = "", i = 0; i < t.length; i += 2) {
            var n = parseInt(t[i] + "" + t[i + 1], 16);
            e += String.fromCharCode(n);
        }
        return e;
    }("00000000000000000000000000000000"))
};

function get_app() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            fromRes: !1, parseJSON: true
        }
    // 根据实际需求添加返回值
    return null; // 或者其他适当的返回值
}

function uuid() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5
    return Math.random().toString(36).substring(3, 3 + e)
}

function get_app() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            fromRes: !1, parseJSON: true
        }
}

function d(data) {
    return CryptoJS.MD5(data).toString()
}

function v(data) {

    return function (data) {
        return CryptoJS.AES.encrypt(data, l.key, {
            iv: l.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString()
    }(data)
}

function aesSign(t) {
    var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "a75846eb4ac490420ac63db46d2a03bf",
        n = e + f(data) + f(t) + e;
    return n = d(n),
        n = v(n)
}

function f(t) {
    let e = "";
    // 使用 reduce 替代 forEach 以便返回结果
    return Object.keys(t).sort().reduce(function (acc, n) {
        // 补全括号，修正三元运算符
        acc += n + ("object" === typeof (t[n])
                ? JSON.stringify(t[n], function (t, e) {
                    return "number" == typeof e ? String(e) : e;
                }).replace(/\//g, "\\/")  // 补全缺失的括号
                : t[n]
        );
        return acc;
    }, e);  // 初始值为 e
}

function get_signature() {
    let timestemp = parseInt(new Date().getTime() / 1000)
    const COM_TIME_DIFF = get_app('time_diff') || 0
    timestemp = timestemp - COM_TIME_DIFF
    const Header = {
        'App-Ver': '',
        'Os-Ver': '',
        'Device-Ver': '',
        Imei: '',
        'Access-Token': '',
        Timestemp: timestemp,
        NonceStr: `${timestemp}${uuid()}`,
        'App-Id': "4ac490420ac63db4",
        'Device-Os': 'web'
        // 'User-Agent': 'web'
    }
    let signatureParams = {
        "username": "12324355646", "password": "sadsadsaf", "code": "dypn", "hdn_refer": ""
    }

    return aesSign(Header, signatureParams, "4ac490420ac63db4")
}


function get_signature_code() {
    let timestemp = parseInt(new Date().getTime() / 1000)
    const COM_TIME_DIFF = get_app('time_diff') || 0
    timestemp = timestemp - COM_TIME_DIFF
    const Header = {
        'App-Ver': '',
        'Os-Ver': '',
        'Device-Ver': '',
        Imei: '',
        'Access-Token': '',
        Timestemp: timestemp,
        NonceStr: `${timestemp}${uuid()}`,
        'App-Id': "4ac490420ac63db4",
        'Device-Os': 'web'
        // 'User-Agent': 'web'
    }
    let signatureParams = {}

    return aesSign(Header, signatureParams, "4ac490420ac63db4")
    
}

console.log(get_signature_code())
console.log(get_signature())

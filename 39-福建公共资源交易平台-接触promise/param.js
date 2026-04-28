const CryptoJS = require('crypto-js')

function l(t, e) {
    return t.toString().toUpperCase() > e.toString().toUpperCase() ? 1 : t.toString().toUpperCase() == e.toString().toUpperCase() ? 0 : -1
}

function u(t) {
    for (var e = Object.keys(t).sort(l), n = "", a = 0; a < e.length; a++)
        if (void 0 !== t[e[a]])
            if (t[e[a]] && t[e[a]] instanceof Object || t[e[a]] instanceof Array) {
                var i = JSON.stringify(t[e[a]]);
                n += e[a] + i
            } else
                n += e[a] + t[e[a]];
    return n
}

function d(t) {
    for (var e in t)
        "" !== t[e] && void 0 !== t[e] || delete t[e];
    var n = "B3978D054A72A7002063637CCDF6B2E5" + u(t);
    return CryptoJS.MD5(n).toString().toLocaleLowerCase()
}

function get_sign(e) {
    return d(e)
}

let e = {
    "ts": 1759128791400,
    "pageNo": 4,
    "pageSize": 20,
    "total": 3225,
    "KIND": "GCJS",
    "GGTYPE": "1",
    "timeType": "6",
    "BeginTime": "2025-03-29 00:00:00",
    "EndTime": "2025-09-29 23:59:59"
}

console.log(get_sign(e))
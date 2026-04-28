const CryptoJS = require('crypto-js')

function xre(e, t) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * e + 1, 10);
        case 2:
            return parseInt(Math.random() * (t - e + 1) + e, 10);
        default:
            return 0
    }
}
function Ore(e) {
    const GF = 'zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM'
    return [...Array(e)].map(() => GF[xre(0, 61)]).join("")
}

function D1(e = {}) {
    const { p: t, t: n, n: u, k: o } = e
        , r = qF(t);
    return CryptoJS.SHA256(u + o + decodeURIComponent(r) + n).toString()
}

function qF(e) {
    let t = "";
    t = e.split("&").sort().join("&")
    return t
}

function get_param() {
    a = Date.now()
    l = Ore(16)
    let data = {
        "type": "trading-type",
        "openConvert": false,
        "keyword": "",
        "siteCode": "44",
        "secondType": "A",
        "tradingProcess": "",
        "thirdType": "[]",
        "projectType": "",
        "publishStartTime": "",
        "publishEndTime": "",
        "pageNo": 5,
        "pageSize": 10
    }
    const p = D1({
        p: JSON.stringify(data, {allowDots: true}),
        t: a,
        n: l,
        k: "k8tUyS$m"
    });
    d = {
        "X-Dgi-Req-App": "X-Dgi-Req-App",
        "X-Dgi-Req-Nonce": l,
        "X-Dgi-Req-Timestamp": a,
        "X-Dgi-Req-Signature" : p
    };
    return d
}


console.log(get_param());

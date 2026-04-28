const CryptoJS = require('crypto-js')

const r = function () {
    function t(t) {
        this.clientKey = "B3AA12B0145E1982F282BEDD8A3305B89A9811280C0B8CC3A6A60D81022E4903",
            this.saleSubjectCode = "Wanda",
            this.cCode = "1_3",
            this.mxAPIVer = "v1.0.0",
            this.method = "GET",
            this.appId = "3"
    }

    t.prototype.generateSignature = function (t, e, i) {
        var n = "";
        return n += this.saleSubjectCode,
            n += this.cCode,
            n += this.clientKey,
            n += t,
            "POST" === this.method ? (n += e,
                n += i) : (n += e,
                    i && (n += "?",
                        n += i)),
            // 假设这里使用CryptoJS的MD5方法
            CryptoJS.MD5(n).toString()
    };

    t.prototype.setPostData = function (t) {
        var e = [];
        for (var i in t)
            "POST" === this.method ? "object" == typeof t[i] ? e.push(this.flatParamObjectValue(i, t[i])) : e.push(i + "=" + this.urlEncodeUnicode(t[i])) : e.push(i + "=" + encodeURIComponent(t[i]));
        return e.join("&")
    };

    t.prototype.setMxHead = function (t, e, i) {
        var n = {
            ver: "v1.0.0",
            sCode: this.saleSubjectCode,
            _mi_: t,
            width: 1280,
            json: !0,
            cCode: this.cCode,
            check: i,
            ts: e,
            heigth: 720,
            appId: this.appId
        };
        return JSON.stringify(n)
    };

    t.prototype.flatParamObjectValue = function (t, e) {
        var i = [];
        for (var n in e)
            "object" == typeof e[n] ? i.push(this.flatParamObjectValue(t + "[" + n + "]", e[n])) : i.push(t + "[" + n + "]=" + this.urlEncodeUnicode(e[n]));
        return i.join("&")
    };

    t.prototype.urlEncodeUnicode = function (t) {
        "string" != typeof t && (t += "");
        for (var e = t.length, i = [], n = 0; n < e; n++) {
            var o = t.charAt(n)
                , a = t.charCodeAt(n);
            a > 0 && a < 255 ? this.isSafe(o) ? i.push(o) : " " === o ? i.push("+") : (i.push("%"),
                i.push(this.intToHex(a >> 4 & 15)),
                i.push(this.intToHex(15 & a))) : (i.push("%u"),
                    i.push(this.intToHex(a >> 12 & 15)),
                    i.push(this.intToHex(a >> 8 & 15)),
                    i.push(this.intToHex(a >> 4 & 15)),
                    i.push(this.intToHex(15 & a)))
        }
        return i.join("")
    };

    t.prototype.intToHex = function (t) {
        return t <= 9 ? String.fromCharCode(t + 48) : String.fromCharCode(t - 10 + 97)
    };

    t.prototype.isSafe = function (t) {
        if (t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t >= "0" && t <= "9")
            return !0;
        switch (t) {
            case "'":
            case "(":
            case ")":
            case "*":
            case "-":
            case ".":
            case "_":
            case "!":
                return !0;
        }
        return !1
    }
    return t
}();

var t = {
    "baseUrl": "api/proxy/content",
    "path": "/pc/movie/coming.api",
    "method": "get",
    "data": {
        "tt": 1755503709654
    }
}

document = {
    cookie: 'Hm_lvt_fb5d677ed5c8cf9aee8702b1472147e0=1755502711; HMACCOUNT=5B53905BB2005420; Hm_lpvt_fb5d677ed5c8cf9aee8702b1472147e0=1755505227; MXAPI=%7B%22ver%22%3A%22v1.0.0%22%2C%22sCode%22%3A%22Wanda%22%2C%22_mi_%22%3A%22%22%2C%22width%22%3A1280%2C%22json%22%3Atrue%2C%22cCode%22%3A%221_3%22%2C%22check%22%3A%2258f14cb1e052a1d9d804e01d0e28d9d1%22%2C%22ts%22%3A1755505227146%2C%22heigth%22%3A720%2C%22appId%22%3A%223%22%7D'
}

function get(t) {
    var e = "";
    if (document.cookie.length > 0)
        for (var i = document.cookie.split("; "), n = 0, o = i.length; n < o; n++) {
            var a = i[n].split("=");
            a[0] === t && (e = decodeURIComponent(a[1]))
        }
    return e
}

c = new r(t.method)
A = (new Date).getTime()
p = c.setPostData(t.data)
d = c.generateSignature(A, t.path, p)
u = get("mi")
i = c.setMxHead(u, A, d)
console.log(i);




const CryptoJS = require("crypto-js");
function pe(e, t, a) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " ";
    function o(e) {
        return e < 10 ? "0" + e : e
    }
    if (!e)
        return "unknown";
    t || (t = "-"),
        a || (a = ":");
    var r = new Date(parseInt(e))
        , i = r.getFullYear()
        , s = o(r.getMonth() + 1)
        , c = o(r.getDate())
        , u = o(r.getHours())
        , l = o(r.getMinutes())
        , d = o(r.getSeconds());
    return i + t + s + t + c + n + u + a + l + a + d
}

function getRandomSring(e) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = "", n = 0; n < e; n++) {
        var o = Math.floor(Math.random() * t.length);
        a += t.substring(o, o + 1)
    }
    return a
}

function m(t) {
    return btoa(t)
}

function h(t) {
    if (t.length < 2) {
        var e = t.charCodeAt(0);
        return e < 128 ? t : e < 2048 ? c(192 | e >>> 6) + c(128 | 63 & e) : c(224 | e >>> 12 & 15) + c(128 | e >>> 6 & 63) + c(128 | 63 & e)
    }
}
function f(t) {
    return t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, h)
}
function g(t) {
    return m(f(String(t)))
}
function enc(t, e) {
    return g(t)
}
function getNewSign(e, t, a, n) {
    var r = ""
        , i = "";
    if (t) {
        var s = Object.assign({}, t);
        i = JSON.stringify(s),
            i = encodeURIComponent(i);
        var u = i.split("")
            , l = u.sort();
        i = l.join("")
    }
    var d = CryptoJS.MD5(enc(i)).toString()
        , p = CryptoJS.MD5(a + ":" + n);
    return r = CryptoJS.MD5(d + p).toString().toUpperCase(),
        r
}

r = (new Date).getTime()
i = pe(r, "", "");
o = getRandomSring(16);
var data = {
    "account": "15712345678",
    "type": 2
}
s = getNewSign(undefined,data,i, o);


function get_mcloud_sign(i, o) {
    var r = i + "," + o + "," + s
    return r
}


console.log(get_mcloud_sign(i, o))

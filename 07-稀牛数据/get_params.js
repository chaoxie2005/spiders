var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
, _p = "W5D80NFZHAYB8EUI2T649RT2MNRMVE2O";
const crypto = require('crypto');

function u_c(e) {
    if (null == e)
        return null;
    for (var t, n, r, o, i, a, u, c = "", l = 0; l < e.length; )
        o = (t = e.charCodeAt(l++)) >> 2,
        i = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4,
        a = (15 & n) << 2 | (r = e.charCodeAt(l++)) >> 6,
        u = 63 & r,
        isNaN(n) ? a = u = 64 : isNaN(r) && (u = 64),
        c = c + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(a) + _keyStr.charAt(u);
    return c
}

function _u_e(e) {
    if (null == e)
        return null;
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
        t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
        t += String.fromCharCode(r >> 6 & 63 | 128),
        t += String.fromCharCode(63 & r | 128))
    }
    return t
}

function u_d(e) {
    if (null == (e = _u_e(e)))
        return null;
    for (var t = "", n = 0; n < e.length; n++) {
        var r = _p.charCodeAt(n % _p.length);
        t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t
}

function u_e(e) {
    return crypto.createHash('md5').update(e + _p).digest('hex').toUpperCase()
}

function get_params (page) {
    var f = u_c(u_d(JSON.stringify(page)))
        , p = u_e(f);
        payload = f,
        sig = p
        return {'payload': payload, 'sig': sig}
}

function get_res (enc_data) {
    var d = u_a(enc_data)
    , y = u_b(d)
    , v = JSON.parse(y);
    return v
}

console.log(get_params({
    "sort": 1,
    "start": 40,
    "limit": 20
}));



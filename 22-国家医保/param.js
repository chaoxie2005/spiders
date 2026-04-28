const Crypto = require('crypto')

function enc_sha256(data) {
    return Crypto.createHash('sha256').update(data).digest('hex')
}

function timesp() {
    return String(Math.ceil((new Date).getTime() / 1e3))
}

function get_str_() {
    var e, t, n, i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = "0123456789";
    return e = o(6, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
        t = o(1, i),
        n = o(1, r),
    t + n + e;

    function o(e, t) {
        e = e || 32;
        for (var n = "", i = 0; i < e; i++)
            n += t.charAt(Math.ceil(1e3 * Math.random()) % t.length);
        return n
    }
}

function get_param() {
    let s = timesp()
    let h = get_str_()
    let f = s + h + s
    return {
        "x-tif-signature": enc_sha256(f),
        "x-tif-timestamp": s,
        "x-tif-nonce": h
    }
}

let e = [
    "gpwBOg3QZ2IUwNFLEitYWtVe0pig_uuSsWMHBlkTVTU_1",
    "D2cdE1bsAeSKxScNGr7aOrEwgaBIzbJNGDyGAED7/dvVQXbb"
]

function Q(e, t) {
    return function (e) {
        if (Array.isArray(e))
            return e
    }(e) || function (e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == r)
            return;
        var n, o, a = [], i = !0, u = !1;
        try {
            for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                !t || a.length !== t); i = !0)
                ;
        } catch (e) {
            u = !0,
                o = e
        } finally {
            try {
                i || null == r.return || r.return()
            } finally {
                if (u)
                    throw o
            }
        }
        return a
    }(e, t) || J(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function get_sign(e) {
    var t = Q(e, 2)
        , r = t[0]
        , n = t[1];
    return {
        "xm-sign": "".concat(n, "&&").concat(r)
    }
}

module.exports = {
    get_sign
}

console.log(get_sign(e));

const Crypto = require('crypto')
const d = "fanyideskweb"
const u = "webfanyi"
const e = "Vy4EQ1uwPkUoqvcP1nIu6WiAjxFeA3Y3"
function _(e) {
    return Crypto.createHash("md5").update(e.toString()).digest("hex")
}

function S(e, t) {
    return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
}

function get_params(t) {
    const a = (new Date).getTime();
    return {
        sign: S(a, e),
        client: d,
        product: u,
        appVersion: "1.0.0",
        vendor: "web",
        pointParam: "client,mysticTime,product",
        mysticTime: a,
        keyfrom: "fanyi.web",
        mid: 1,
        screen: 1,
        model: 1,
        network: "wifi",
        abtest: 0,
        yduuid: t || "abcdefg"
    }
}

console.log(get_params("Vy4EQ1uwPkUoqvcP1nIu6WiAjxFeA3Y3"));

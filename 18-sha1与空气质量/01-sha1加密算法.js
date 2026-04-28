const Crypto = require('crypto')

function bn(e) {
    e = e || 32;
    for (var t = 51, r = "", n = 0; n < e; n++)
        r += "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890".charAt(Math.floor(Math.random() * t));
    return r
}

function gn(e) {
    var t = e.x_ca_nonce
      , r = e.x_ca_timestamp
      , n = ['MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCz09z6e9WOcNq+nUMX8Vq1Xe2EmJxuR3XbturefioF)E(Fl', t, r]
      , i = n.sort().join("")
      , o = Crypto.createHash('sha1').update(i).digest('hex');
    return o
}

function wn() {
    var e = '02758537593713906759';
    if (e)
        return e;
    var t = kn();
    return localStorage.setItem("deviceId", t),
    t
}
function kn() {
    for (var e = "0123456789", t = "", r = 0; r < 20; r++) {
        var n = Math.floor(Math.random() * e.length);
        t += e[n]
    }
    return t
}

function get_param() {
    const e = bn(15)
    const t = (new Date).getTime()
    var r = {
        x_ca_key: "H5-SIGN-SECRET-KEY",
        platform: 'WEB_PC',
        app_type: "PC",
        x_ca_nonce: e,
        x_ca_timestamp: String(t),
        x_ca_sign: gn({
            x_ca_nonce: e,
            x_ca_timestamp: t
        }),
        // WorkspaceId: 'prod',
        // Version: 2,
        // device_id: wn(),
        // riskTimeStamp: (new Date).getTime(),
        // AppId: 'ONEX97FB91F061405',
        // "Content-Type": "application/json"
    };
    // return r["X-CORS-".concat('ONEX97FB91F061405', "-").concat('prod')] = "1",
    return r
}

console.log(get_param());

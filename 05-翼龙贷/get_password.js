const CryptoJS = require('crypto-js')
const cfg = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
}


function get_password(t) {
    var a = CryptoJS.enc.Utf8.parse("e9284d45-cf2a-4e46-9367-f122413ca6b0");
    try {
        var s = CryptoJS.DES.encrypt(String(t), a, cfg)
    } catch (t) {
        console.log(t)
    }
    return s.toString()
}

const enc = get_password('12345678', "e9284d45-cf2a-4e46-9367-f122413ca6b0")
console.log(enc);

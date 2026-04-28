const CryptoJS = require('crypto-js')
const Crypto = require('crypto')

function enc_md5(data) {
    return Crypto.createHash('md5').update(data).digest('hex')
}


function addUrlAuth(sig) {
    var curUrl = "http://180.141.168.36:8099/icity/api-v2/app.icity.engineering.EngineeringCmd/getBusProcess";
    var chars = "0123456789abcdef";
    var key = "";
    var keyIndex = -1;
    for (var i = 0; i < 6; i++) {
        var c = sig.charAt(keyIndex + 1);
        key += c;
        keyIndex = chars.indexOf(c);
        if (keyIndex < 0 || keyIndex >= sig.length) {
            keyIndex = i;
        }
    }

    var timestamp = parseInt(Math.random() * (9999 - 1000 + 1) + 1000) + "_" + key + "_" + Date.parse(new Date());
    var t = timestamp.replace(/\+/g, "_");
    var tkey = enc_md5(t + "yeURLyTZoum4K27d").toString();

    curUrl += "?s=" + sig;
    curUrl += "&t=" + t;
    curUrl += "&o=" + tkey;

    return curUrl;
}

// console.log(addUrlAuth(''));


function get_res_enc(plaintext, key) {
    // 将密钥转换为 CryptoJS 格式
    const keyBytes = CryptoJS.enc.Utf8.parse(key);

    // 加密配置
    const encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(plaintext),
        keyBytes,
        {
            mode: CryptoJS.mode.ECB, // 或 CBC 等其他模式
            padding: CryptoJS.pad.Pkcs7
        }
    );

    // 返回 Hex 格式
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex) + "";
}


function get_res_dec(ciphertextHex, key) {
    // 将密钥转换为 CryptoJS 格式
    const keyBytes = CryptoJS.enc.Utf8.parse(key);

    // 将 Hex 转换为 CryptoJS 格式
    const encryptedData = CryptoJS.enc.Hex.parse(ciphertextHex);
    const encrypted = {
        ciphertext: encryptedData
    };

    // 解密配置
    const decrypted = CryptoJS.AES.decrypt(
        encrypted,
        keyBytes,
        {
            mode: CryptoJS.mode.ECB, // 需与加密时一致
            padding: CryptoJS.pad.Pkcs7
        }
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
}

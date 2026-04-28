const CryptoJS = require('crypto-js')
function encryptApiKey(key) {
    var r = Math.random() + '';
    var randomSix = r.substr(-6, 6);
    var text = randomSix + +new Date();
    var encrypt = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypt.toString();
}

console.log(encryptApiKey("3UPAUGD1ZFVTI6YES51DXJEN5554Y6I2"));

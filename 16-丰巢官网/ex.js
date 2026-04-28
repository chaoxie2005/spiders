const Crypto = require('crypto')
const CryptoJS = require('crypto-js')


function enc_md5(data) {
    return Crypto.createHash('md5').update(data).digest('hex')
}

function enc_aes(data, key) {
    return CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding:CryptoJS.pad.Pkcs7
    }).toString()
}
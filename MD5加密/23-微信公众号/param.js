const Crypto = require('crypto')

function enc_md5(data) {
    return Crypto.createHash('md5').update(data).digest('hex')
}

console.log(enc_md5("123456"));


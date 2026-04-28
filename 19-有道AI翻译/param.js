const Crypto = require('crypto')

function md5_enc(data) {
    return Crypto.createHash('md5').update(data).digest('hex')
}


let data = 'client=fanyideskweb&mysticTime=1752715705618&product=webfanyi&key=EZAmCfVOH2CrBGMtPrtIPUzyv3bheLdk'
console.log(md5_enc(data));

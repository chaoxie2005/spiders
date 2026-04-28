const Crypto = require('crypto')

function get_sign(str_){
    return Crypto.createHash('md5').update(str_).digest('hex')
}


const cryptoJS = require('crypto-js')

function get_md5_data(data) {
    return cryptoJS.MD5(data).toString()
}


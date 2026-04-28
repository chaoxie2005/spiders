const { sign } = require('crypto')
const CryptoJS = require('crypto-js')
function get_sign(data) {
    return CryptoJS.MD5(data).toString()
}


function get_param() {
    let timesp = (new Date).getTime()
    let data = `undfinde&${timesp}&12574478&{}`
    let sign = get_sign(data)
    return {
        t: timesp,
        sign: sign
    }

}

console.log(get_param());


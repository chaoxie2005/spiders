const { sign } = require('crypto')
const CryptoJS = require('crypto-js')
function get_sign(data) {
    return CryptoJS.MD5(data).toString()
}


function get_param(str_data) {
    let timesp = (new Date).getTime()
    let data = `3f157bd178cf3a1d53ec0a2b2cd3f728&${timesp}&12574478&`
    enc_data = data.concat(str_data)
    let sign = get_sign(enc_data)
    return {
        t: timesp,
        sign: sign
    }

}

console.log(get_param('5ea2210f2ad4fe547c1b50827b2f6f7e&1760693496197&12574478&{"showTrueCount":false,"auctionNumId":"838289202236","pageNo":4,"pageSize":20,"orderType":"","searchImpr":"-8","expression":"","skuVids":"","rateSrc":"pc_rate_list","rateType":""}'));

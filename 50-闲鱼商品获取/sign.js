const CryptoJS = require('crypto-js')

function get_sign(data) {
    let h = "34839810"
    let timesp = (new Date).getTime()
    let token = "ea79e5b12c16b5ec1dab242ec88c7f68"

    // let data = '{"itemId":"","pageSize":30,"pageNumber":2,"machId":""}'
    console.log(data);
    
    let sign = CryptoJS.MD5(token + "&" + timesp + "&" + h + "&" + data).toString()
    return {
        sign: sign,
        timesp: timesp
    }
}


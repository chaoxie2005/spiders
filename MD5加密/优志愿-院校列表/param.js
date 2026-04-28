const CryptoJS = require('crypto-js')

function get_sign(page) {
    var i = "9SASji5OWnG41iRKiSvTJHlXHmRySRp1"
    var o = ""
    var a = {
        "keyword": "",
        "provinceNames": [],
        "natureTypes": [],
        "eduLevel": "",
        "categories": [],
        "features": [],
        "pageIndex": page,
        "pageSize": 20,
        "sort": 11
    }
    o = "".concat(JSON.stringify(a), "&").concat(i)
    o = o.toLowerCase()
    return CryptoJS.MD5(o).toString()
}

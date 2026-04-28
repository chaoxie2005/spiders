const CryptoJS = require('crypto-js')

let mappingObj = {}

function replaceStr(str, index, char) {
    var strAry = str.split('')
    strAry[index] = char
    return strAry.join('')
}

function modifyJson(obj, encryptField) {
    for (var key in obj) {
        // 如果当前属性值是字符串，将其转换为大写
        if (typeof obj[key] === 'string') {
            for (var i = 0; i < obj[key].length; i++) {
                if (encryptField.indexOf(key) != -1) {
                    var tag = obj[key].charAt(i)
                    if (mappingObj[tag]) {
                        obj[key] = replaceStr(obj[key], i, mappingObj[tag])
                    }
                }
            }
        } else if (Array.isArray(obj[key])) {
            // 如果当前属性值是数组，将数组中的每个元素乘以2
            for (var i = 0; i < obj[key].length; i++) {
                if (typeof obj[key][i] === 'object' && obj[key][i] !== null) {
                    modifyJson(obj[key][i], encryptField)
                }
                if (encryptField.indexOf(key) != -1) {
                    for (var j = 0; j < obj[key][i].length; j++) {
                        var tag = obj[key][i].charAt(j)
                        if (mappingObj[tag]) {
                            obj[key][i] = replaceStr(
                                obj[key][i],
                                j,
                                mappingObj[tag]
                            )
                        }
                    }
                }
            }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // 如果当前属性值是对象，递归调用modifyJson函数
            modifyJson(obj[key], encryptField)
        }
    }
    return obj
}

function decryptContent(content, key, iv) {
    var keyStr = CryptoJS.enc.Base64.parse(key),
        ivStr = CryptoJS.enc.Base64.parse(iv),
        base64 = CryptoJS.enc.Base64.parse(content),
        srcs = CryptoJS.enc.Base64.stringify(base64),
        descrypted = CryptoJS.AES.decrypt(srcs, keyStr, {
            iv: ivStr,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    return CryptoJS.enc.Utf8.stringify(descrypted)
}

function decryptEncryptFields(res, prop, isJsonFormat) {
    var json = JSON.parse(JSON.stringify(res)),
        copyTxt = isJsonFormat ? json[prop] : JSON.parse(json[prop]),
        base64Key = json.responseSecretKey,
        base64Iv = json.responseKeyOffset,
        base64Mapping = json.mapping,
        encryptField = json.encryptFields,
        mapping = decryptContent(base64Mapping, base64Key, base64Iv),
        mappings = mapping.split(',')

    for (var i = 0; i < mappings.length; i++) {
        var relative = mappings[i].split('-')
        mappingObj[relative[1]] = String(relative[0])
    }
    return modifyJson(copyTxt, encryptField)
}

function get_response(res) {
    let relust = {
        title: res.title,
        data: decryptEncryptFields(res, 'data', true)
    }
    return JSON.stringify(relust)
}

function getSign(appSec, path) {
    var timestamp = new Date().getTime();
    var path = "path" + path + "timestamp" + timestamp + "version1.0.0" + appSec;
    return [CryptoJS.MD5(path).toString().toUpperCase(), timestamp]
}

function get_params(catalog, city, spec) {
    let key = "97e3d765c8574f35"
    let signList = getSign(key, "/api/pricetrend/getChartMultiCity.htm")
    let params = {
        timesp: String((new Date()).getTime()),
        Timestamp: String(signList[1]),
        catalog: encodeURI(catalog),       //品种
        city: encodeURI(city),             //城市
        spec: encodeURI(spec),             //规格
        Token: signList[0]
    }
    return params
}

// 导出函数供Python调用
module.exports = {
    get_params,
    get_response
}
const CryptoJS = require('crypto-js');

function calculate_sign(data) {
    return CryptoJS.MD5(data).toString();
}

function get_sign(str_data) {
    let timesp = (new Date).getTime();
    let data = `f1501dfc5d95a6e8bfaec692346fcaf0${timesp}&12574478&`;
    let enc_data = data.concat(str_data);
    let sign = calculate_sign(enc_data);
    return {
        t: timesp,
        sign: sign
    };
}

module.exports = {
    get_sign
};
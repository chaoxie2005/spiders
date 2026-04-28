const Crypto = require('crypto');
const { get } = require('http');
const GF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM"
    , kre = GF + "-@#$%^&*+!";

function xre(e, t) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * e + 1, 10);
        case 2:
            return parseInt(Math.random() * (t - e + 1) + e, 10);
        default:
            return 0
    }
}

function Ore(e) {
    return [...Array(e)].map(() => GF[xre(0, 61)]).join("")
}

function get_signature (data) {
    return Crypto.createHash('sha256').update(data).digest('hex')
}
function get_param() {
    a = Date.now()
        , l = Ore(16)
        , c = "k8tUyS$m"
        , data = l + "mbizCode=3C14&nodeId=1942875456603066370&noticeId=cbe11cf1b31b47c59e32af5f00e65268&projectCode=E441300083590bf5a001&siteCode=441300&tradingType=A&version=v31752114066760"
        , d = {
            ["X-Dgi-Req-App"]: "ggzy-portal",
            ["X-Dgi-Req-Nonce"]: l,
            ["X-Dgi-Req-Timestamp"]: String(a),
            ["X-Dgi-Req-Signature"]: get_signature(data)
        };
    return d
}

console.log(get_param());


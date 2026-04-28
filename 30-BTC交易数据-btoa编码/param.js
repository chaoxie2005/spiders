var API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
function encryptApiKey() {
    var e = API_KEY
        , t = e.split("")
        , n = t.splice(0, 8);
    return e = t.concat(n).join("")
}

function mathRandom() {
    return Math.random()
}

function encryptTime(e) {
    var t = (1 * e + 1111111111111).toString().split("")
        , n = parseInt(10 * mathRandom(), 10)
        , r = parseInt(10 * mathRandom(), 10)
        , i = parseInt(10 * mathRandom(), 10);
    return t.concat([n, r, i]).join("")
}

function comb(e, t) {
    var n = "".concat(e, "|").concat(t);
    console.log(n);
    
    return btoa(n)
}

function getApiKey() {
    var e = (new Date).getTime()
    var t = encryptApiKey();
    e = encryptTime(e)
    return comb(t, e)
}

console.log(getApiKey())
(function () {
    var _stringify = JSON.stringify;
    JSON.stringify = function (ps) {
        console.log("Hook JSON.stringify ——> ", ps);
        debugger;
    }
})();
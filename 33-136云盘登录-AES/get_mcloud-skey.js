function cooike(e, t) {
    var a=  30
        , n = new Date;
    n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
    var o = "expires=" + n.toGMTString()
        , r = 24 * a * 60 * 60;
    document.cookie = e + "=" + t + "; path=/;" + o + "; max-age=" + r
    return document.cookie
}

document = {}

function get_mcloudSkey(e) {
    for (var t = e + "=", a = cooike("a_k", "kp3UFNPEpfW5Be72").split(";"), n = 0; n < a.length; n++) {
        var o = a[n].trim();
        if (0 == o.indexOf(t))
            return o.substring(t.length, o.length)
    }
    return ""
}



console.log(get_mcloudSkey("skey"))
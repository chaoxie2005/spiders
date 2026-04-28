function r(e) {
    if (!n.i(a.a)(e) || n.i(o.a)(e) != c)
        return !1;
    var t = n.i(i.a)(e);
    if (null === t)
        return !0;
    var r = vpn_call_fn(f, "call", (t), ("constructor")) && t.constructor;
    return "function" == typeof r && r instanceof r && vpn_call_fn(s, "call", (r)) == p
}

function u_a(e) {
    q = e,
        U = new Array(q);
    for (var t = 0; t < U.length; t++)
        vpn_set_obj(U, t, (0));
    B = new o,
        R = new o,
        R.digits[0] = 1
}
function a_i(e) {
    return e
}

function u_b(e, t, a) {
    return new L(e, t, a)
}
function get_pwd(f) {
    var _ = "";
        a_i(u_a)(131);
        var w = a_i(u_b)(r.a.public_exponent, "", r.a.modulus);
        _ = a_i(u.c)(w, t)
} 

get_pwd()
let o = new Uint8Array([183, 174, 108, 16, 131, 159, 250, 5, 239, 110, 193, 202, 153, 137, 251, 176, 119, 150, 47, 204, 97, 237, 1, 71, 177, 42, 88, 218, 166, 82, 87, 94, 14, 195, 69, 127, 215, 240, 225, 197, 238, 142, 123, 44, 219, 50, 190, 29, 181, 186, 169, 98, 139, 185, 152, 13, 141, 76, 6, 157, 200, 132, 182, 49, 20, 116, 136, 43, 155, 194, 101, 231, 162, 242, 151, 213, 53, 60, 26, 134, 211, 56, 28, 223, 107, 161, 199, 15, 229, 61, 96, 41, 66, 158, 254, 21, 165, 253, 103, 89, 3, 168, 40, 246, 81, 95, 58, 31, 172, 78, 99, 45, 148, 187, 222, 124, 55, 203, 235, 64, 68, 149, 180, 35, 113, 207, 118, 111, 91, 38, 247, 214, 7, 212, 209, 189, 241, 18, 115, 173, 25, 236, 121, 249, 75, 57, 216, 10, 175, 112, 234, 164, 70, 206, 198, 255, 140, 230, 12, 32, 83, 46, 245, 0, 62, 227, 72, 191, 156, 138, 248, 114, 220, 90, 84, 170, 128, 19, 24, 122, 146, 80, 39, 37, 8, 34, 22, 11, 93, 130, 63, 154, 244, 160, 144, 79, 23, 133, 92, 54, 102, 210, 65, 67, 27, 196, 201, 106, 143, 52, 74, 100, 217, 179, 48, 233, 126, 117, 184, 226, 85, 171, 167, 86, 2, 147, 17, 135, 228, 252, 105, 30, 192, 129, 178, 120, 36, 145, 51, 163, 77, 205, 73, 4, 188, 125, 232, 33, 243, 109, 224, 104, 208, 221, 59, 9])


let a = new Uint8Array([204, 53, 135, 197, 39, 73, 58, 160, 79, 24, 12, 83, 180, 250, 101, 60, 206, 30, 10, 227, 36, 95, 161, 16, 135, 150, 235, 116, 242, 116, 165, 171])


let i = "function" == typeof atob
const f = i ? e => atob(e.replace(/[^A-Za-z0-9\+\/]/g, "")) : u ? t => e.from(t, "base64").toString("binary") : e => {
    if (e = e.replace(/\s+/g, ""),
        !s.test(e))
        throw new TypeError("malformed base64.");
    e += "==".slice(2 - (3 & e.length));
    let t, r, n, o = "";
    for (let a = 0; a < e.length;)
        t = c[e.charAt(a++)] << 18 | c[e.charAt(a++)] << 12 | (r = c[e.charAt(a++)]) << 6 | (n = c[e.charAt(a++)]),
            o += 64 === r ? l(t >> 16 & 255) : 64 === n ? l(t >> 16 & 255, t >> 8 & 255) : l(t >> 16 & 255, t >> 8 & 255, 255 & t);
    return o
}

function p(e, t, r) {
    let n = Math.min(e.length - t, r.length);
    for (let o = 0; o < n; o++)
        e[o + t] = e[o + t] ^ r[o]
}


function getSoundCryptLink (e) {
    const { link: t = "", deviceType: i = "www2" } = e;
    let u = o
        , c = a;
    ["www2", "mweb2"].includes(i) || (u = r,
        c = n);
    try {
        let e = f(t.replace(/_/g, "/").replace(/-/g, "+"));
        if (null === e || e.length < 16)
            return t;
        let r = new Uint8Array(e.length - 16);
        for (let t = 0; t < e.length - 16; t++)
            r[t] = e.charCodeAt(t);
        let n = new Uint8Array(16);
        for (let t = 0; t < 16; t++)
            n[t] = e.charCodeAt(e.length - 16 + t);
        for (let e = 0; e < r.length; e++)
            r[e] = u[r[e]];
        for (let e = 0; e < r.length; e += 16)
            p(r, e, n);
        for (let e = 0; e < r.length; e += 32)
            p(r, e, c);
        return function (e) {
            var t, r, n, o, a, i;
            for (t = "",
                n = e.length,
                r = 0; r < n;)
                switch ((o = e[r++]) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t += String.fromCharCode(o);
                        break;
                    case 12:
                    case 13:
                        a = e[r++],
                            t += String.fromCharCode((31 & o) << 6 | 63 & a);
                        break;
                    case 14:
                        a = e[r++],
                            i = e[r++],
                            t += String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | (63 & i) << 0)
                }
            return t
        }(r)
    } catch (e) {
        return console.warn(e, "secret failed"),
            ""
    }
}

let e = {
    "deviceType": "www2",
    "link": "mJswWpMMNhehNYOg23wgucN994wvVsuLgvezx6ndeXq68SiBkJzoe2ZInfs1f3RN0ts6aG_o-TvNs1kfQvZWiyPVj-yuRYO7kWAEkzUfbRSyCooisclcWJ312HNJbDaLUpbBZjlW6f8QVRG4-m_gCW2a2R6MsF_6VSpNWjYlJ9ux5T5ikOVLnkOidVcY7PC-X0rr89Lpa9vVn_UrSYt571KLMI5Ams1SoQZyZA-536RSEY4H0j2y1wBbjlsmCH0lkFjlW3e_0G1D26xponNXM-J52PPivkbVXuqNyACPom017wUw"
}

console.log(getSoundCryptLink(e))

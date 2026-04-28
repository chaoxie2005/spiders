function get_sign(eu) {
    function ep(eu, ep) {
        return eu << ep | eu >>> 32 - ep
    }
    function em(eu, ep) {
        var em, ey, e_, ew, eS;
        return e_ = 2147483648 & eu,
        ew = 2147483648 & ep,
        em = 1073741824 & eu,
        ey = 1073741824 & ep,
        eS = (1073741823 & eu) + (1073741823 & ep),
        em & ey ? 2147483648 ^ eS ^ e_ ^ ew : em | ey ? 1073741824 & eS ? 3221225472 ^ eS ^ e_ ^ ew : 1073741824 ^ eS ^ e_ ^ ew : eS ^ e_ ^ ew
    }
    function ey(eu, ep, em) {
        return eu & ep | ~eu & em
    }
    function e_(eu, ep, em) {
        return eu & em | ep & ~em
    }
    function ew(eu, ep, em) {
        return eu ^ ep ^ em
    }
    function eS(eu, ep, em) {
        return ep ^ (eu | ~em)
    }
    function eT(eu, e_, ew, eS, eT, eI, eP) {
        return eu = em(eu, em(em(ey(e_, ew, eS), eT), eP)),
        em(ep(eu, eI), e_)
    }
    function eI(eu, ey, ew, eS, eT, eI, eP) {
        return eu = em(eu, em(em(e_(ey, ew, eS), eT), eP)),
        em(ep(eu, eI), ey)
    }
    function eP(eu, ey, e_, eS, eT, eI, eP) {
        return eu = em(eu, em(em(ew(ey, e_, eS), eT), eP)),
        em(ep(eu, eI), ey)
    }
    function eE(eu, ey, e_, ew, eT, eI, eP) {
        return eu = em(eu, em(em(eS(ey, e_, ew), eT), eP)),
        em(ep(eu, eI), ey)
    }
    function eC(eu) {
        var ep, em = "", ey = "";
        for (ep = 0; 3 >= ep; ep++)
            em += (ey = "0" + (eu >>> 8 * ep & 255).toString(16)).substr(ey.length - 2, 2);
        return em
    }
    var eA, eM, eO, eN, eL, eR, eD, eB, eV, eU = [], eF = 7, ez = 12, eH = 17, eW = 22, eG = 5, eX = 9, eJ = 14, eZ = 20, eY = 4, eK = 11, eQ = 16, e$ = 23, e0 = 6, e3 = 10, e4 = 15, e5 = 21;
    for (eU = function(eu) {
        for (var ep, em = eu.length, ey = em + 8, e_ = (ey - ey % 64) / 64, ew = 16 * (e_ + 1), eS = Array(ew - 1), eT = 0, eI = 0; em > eI; )
            ep = (eI - eI % 4) / 4,
            eT = eI % 4 * 8,
            eS[ep] = eS[ep] | eu.charCodeAt(eI) << eT,
            eI++;
        return ep = (eI - eI % 4) / 4,
        eT = eI % 4 * 8,
        eS[ep] = eS[ep] | 128 << eT,
        eS[ew - 2] = em << 3,
        eS[ew - 1] = em >>> 29,
        eS
    }(eu = function(eu) {
        eu = eu.replace(/\r\n/g, "\n");
        for (var ep = "", em = 0; em < eu.length; em++) {
            var ey = eu.charCodeAt(em);
            128 > ey ? ep += String.fromCharCode(ey) : ey > 127 && 2048 > ey ? ep += String.fromCharCode(ey >> 6 | 192) + String.fromCharCode(63 & ey | 128) : ep += String.fromCharCode(ey >> 12 | 224) + String.fromCharCode(ey >> 6 & 63 | 128) + String.fromCharCode(63 & ey | 128)
        }
        return ep
    }(eu)),
    eR = 1732584193,
    eD = 4023233417,
    eB = 2562383102,
    eV = 271733878,
    eA = 0; eA < eU.length; eA += 16)
        eM = eR,
        eO = eD,
        eN = eB,
        eL = eV,
        eR = eT(eR, eD, eB, eV, eU[eA + 0], eF, 3614090360),
        eV = eT(eV, eR, eD, eB, eU[eA + 1], ez, 3905402710),
        eB = eT(eB, eV, eR, eD, eU[eA + 2], eH, 606105819),
        eD = eT(eD, eB, eV, eR, eU[eA + 3], eW, 3250441966),
        eR = eT(eR, eD, eB, eV, eU[eA + 4], eF, 4118548399),
        eV = eT(eV, eR, eD, eB, eU[eA + 5], ez, 1200080426),
        eB = eT(eB, eV, eR, eD, eU[eA + 6], eH, 2821735955),
        eD = eT(eD, eB, eV, eR, eU[eA + 7], eW, 4249261313),
        eR = eT(eR, eD, eB, eV, eU[eA + 8], eF, 1770035416),
        eV = eT(eV, eR, eD, eB, eU[eA + 9], ez, 2336552879),
        eB = eT(eB, eV, eR, eD, eU[eA + 10], eH, 4294925233),
        eD = eT(eD, eB, eV, eR, eU[eA + 11], eW, 2304563134),
        eR = eT(eR, eD, eB, eV, eU[eA + 12], eF, 1804603682),
        eV = eT(eV, eR, eD, eB, eU[eA + 13], ez, 4254626195),
        eB = eT(eB, eV, eR, eD, eU[eA + 14], eH, 2792965006),
        eD = eT(eD, eB, eV, eR, eU[eA + 15], eW, 1236535329),
        eR = eI(eR, eD, eB, eV, eU[eA + 1], eG, 4129170786),
        eV = eI(eV, eR, eD, eB, eU[eA + 6], eX, 3225465664),
        eB = eI(eB, eV, eR, eD, eU[eA + 11], eJ, 643717713),
        eD = eI(eD, eB, eV, eR, eU[eA + 0], eZ, 3921069994),
        eR = eI(eR, eD, eB, eV, eU[eA + 5], eG, 3593408605),
        eV = eI(eV, eR, eD, eB, eU[eA + 10], eX, 38016083),
        eB = eI(eB, eV, eR, eD, eU[eA + 15], eJ, 3634488961),
        eD = eI(eD, eB, eV, eR, eU[eA + 4], eZ, 3889429448),
        eR = eI(eR, eD, eB, eV, eU[eA + 9], eG, 568446438),
        eV = eI(eV, eR, eD, eB, eU[eA + 14], eX, 3275163606),
        eB = eI(eB, eV, eR, eD, eU[eA + 3], eJ, 4107603335),
        eD = eI(eD, eB, eV, eR, eU[eA + 8], eZ, 1163531501),
        eR = eI(eR, eD, eB, eV, eU[eA + 13], eG, 2850285829),
        eV = eI(eV, eR, eD, eB, eU[eA + 2], eX, 4243563512),
        eB = eI(eB, eV, eR, eD, eU[eA + 7], eJ, 1735328473),
        eD = eI(eD, eB, eV, eR, eU[eA + 12], eZ, 2368359562),
        eR = eP(eR, eD, eB, eV, eU[eA + 5], eY, 4294588738),
        eV = eP(eV, eR, eD, eB, eU[eA + 8], eK, 2272392833),
        eB = eP(eB, eV, eR, eD, eU[eA + 11], eQ, 1839030562),
        eD = eP(eD, eB, eV, eR, eU[eA + 14], e$, 4259657740),
        eR = eP(eR, eD, eB, eV, eU[eA + 1], eY, 2763975236),
        eV = eP(eV, eR, eD, eB, eU[eA + 4], eK, 1272893353),
        eB = eP(eB, eV, eR, eD, eU[eA + 7], eQ, 4139469664),
        eD = eP(eD, eB, eV, eR, eU[eA + 10], e$, 3200236656),
        eR = eP(eR, eD, eB, eV, eU[eA + 13], eY, 681279174),
        eV = eP(eV, eR, eD, eB, eU[eA + 0], eK, 3936430074),
        eB = eP(eB, eV, eR, eD, eU[eA + 3], eQ, 3572445317),
        eD = eP(eD, eB, eV, eR, eU[eA + 6], e$, 76029189),
        eR = eP(eR, eD, eB, eV, eU[eA + 9], eY, 3654602809),
        eV = eP(eV, eR, eD, eB, eU[eA + 12], eK, 3873151461),
        eB = eP(eB, eV, eR, eD, eU[eA + 15], eQ, 530742520),
        eD = eP(eD, eB, eV, eR, eU[eA + 2], e$, 3299628645),
        eR = eE(eR, eD, eB, eV, eU[eA + 0], e0, 4096336452),
        eV = eE(eV, eR, eD, eB, eU[eA + 7], e3, 1126891415),
        eB = eE(eB, eV, eR, eD, eU[eA + 14], e4, 2878612391),
        eD = eE(eD, eB, eV, eR, eU[eA + 5], e5, 4237533241),
        eR = eE(eR, eD, eB, eV, eU[eA + 12], e0, 1700485571),
        eV = eE(eV, eR, eD, eB, eU[eA + 3], e3, 2399980690),
        eB = eE(eB, eV, eR, eD, eU[eA + 10], e4, 4293915773),
        eD = eE(eD, eB, eV, eR, eU[eA + 1], e5, 2240044497),
        eR = eE(eR, eD, eB, eV, eU[eA + 8], e0, 1873313359),
        eV = eE(eV, eR, eD, eB, eU[eA + 15], e3, 4264355552),
        eB = eE(eB, eV, eR, eD, eU[eA + 6], e4, 2734768916),
        eD = eE(eD, eB, eV, eR, eU[eA + 13], e5, 1309151649),
        eR = eE(eR, eD, eB, eV, eU[eA + 4], e0, 4149444226),
        eV = eE(eV, eR, eD, eB, eU[eA + 11], e3, 3174756917),
        eB = eE(eB, eV, eR, eD, eU[eA + 2], e4, 718787259),
        eD = eE(eD, eB, eV, eR, eU[eA + 9], e5, 3951481745),
        eR = em(eR, eM),
        eD = em(eD, eO),
        eB = em(eB, eN),
        eV = em(eV, eL);
    return (eC(eR) + eC(eD) + eC(eB) + eC(eV)).toLowerCase()
}

const data = '9c9d990bd0bdd4a262d5db81f3959450&1749047206635&12574478&{"itemId":"770948795182","skuId":"5454214011831","quantity":1,"exParams":"{\\"detail_redpacket_pop\\":\\"true\\",\\"id\\":\\"770948795182\\",\\"ltk2\\":\\"17490471630798z9bh9a9u058njvplbowal\\",\\"ns\\":\\"1\\",\\"priceTId\\":\\"213e077517490462421658330e1874\\",\\"query\\":\\"衣服男款短袖\\",\\"skuId\\":\\"5454214011831\\",\\"spm\\":\\"a21n57.1.hoverItem.1\\",\\"utparam\\":\\"{\\\\\\"aplus_abtest\\\\\\":\\\\\\"5343a4a53d9756f6168a0c92a66ad928\\\\\\"}\\",\\"xxc\\":\\"ad_ztc\\",\\"areaId\\":\\"513321\\",\\"sellerNick\\":\\"小卡拉虫子\\",\\"serviceId\\":\\"\\",\\"spiPage\\":\\"pcTao\\"}","serviceId":""}'

console.log(get_sign(data));

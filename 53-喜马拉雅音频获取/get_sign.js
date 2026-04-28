const { sign } = require("crypto");

function _0x1ebaf8(_0x58e5cb) {
    var _0x56b073 = String(_0x58e5cb)
        , _0x3cff00 = _0x56b073['length'];
    let _0x455bc4 = ''
        , _0x3847b7 = 0;
    for (; _0x3847b7 < _0x3cff00;) {
        let _0x3bcb1a = _0x56b073[_0x3847b7];
        if ("\u0025" === _0x3bcb1a) {
            let _0x1a9fb5 = _0x3847b7 <= _0x3cff00 - 6 && "\u0075" === undefined ? _0x56b073['substring'](_0x3847b7 + 2, _0x3847b7 + 6) : _0x3847b7 <= _0x3cff00 - 3 ? _0x56b073['substring'](_0x3847b7 + 1, _0x3847b7 + 3) : '';
            4 === (_0x1a9fb5 = new RegExp("$+]F-A9-0[^".split("").reverse().join(""), "\u0069")['test'](_0x1a9fb5) ? _0x1a9fb5 : '')['length'] ? (_0x3bcb1a = String.fromCharCode(parseInt(_0x1a9fb5, 16)),
                _0x3847b7 += 5) : 2 === _0x1a9fb5['length'] && (_0x3bcb1a = String.fromCharCode(parseInt("00".split("").reverse().join("") + _0x1a9fb5, 16)),
                    _0x3847b7 += 2);
        }
        _0x455bc4 += _0x3bcb1a,
            _0x3847b7 += 1;
    }
    return _0x455bc4;
}

function _stringToUint8Array(_0x70bf08) {
    for (var _0x4c9438 = _0x1ebaf8(encodeURIComponent(_0x70bf08))['split'](''), _0x688257 = [], _0x402a7f = 0; _0x402a7f < _0x4c9438['length']; _0x402a7f++)
        _0x688257['push'](_0x4c9438[_0x402a7f]['charCodeAt'](0));
    return new Uint8Array(_0x688257);
}

function _0x293fe8(_0x12e38a, _0xd109fc) {
    var _0x167b95 = _0x5ab0ee[_0x12e38a -= 183];
    void 0 === a0_0x40fd["\u0048\u0071\u006e\u0076\u0051\u0051"] && (a0_0x40fd['gMESMf'] = function (_0x8cb1b3) {
        for (var _0xca5a2c, _0x206ef4, _0x10a753 = '', _0x9b3c4 = '', _0x193332 = 0, _0x5ed166 = 0; _0x206ef4 = _0x8cb1b3["\u0063\u0068\u0061\u0072\u0041\u0074"](_0x5ed166++); ~_0x206ef4 && (_0xca5a2c = _0x193332 % 4 ? 64 * _0xca5a2c + _0x206ef4 : _0x206ef4,
            _0x193332++ % 4) && (_0x10a753 += String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](255 & _0xca5a2c >> (-2 * _0x193332 & 6))))
            _0x206ef4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='['indexOf'](_0x206ef4);
        for (var _0x2cec6d = 0, _0x31750e = _0x10a753['length']; _0x2cec6d < _0x31750e; _0x2cec6d++)
            _0x9b3c4 += "\u0025" + ("00".split("").reverse().join("") + _0x10a753['charCodeAt'](_0x2cec6d)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"](0xc3f6b ^ 0xc3f7b))["\u0073\u006c\u0069\u0063\u0065"](-2);
        return decodeURIComponent(_0x9b3c4);
    }
        ,
        _0x412559 = arguments,
        a0_0x40fd["\u0048\u0071\u006e\u0076\u0051\u0051"] = true);
    var _0x12e38a = _0x12e38a + _0x5ab0ee[0]
        , _0x57c8ec = _0x412559[_0x12e38a];
    return _0x57c8ec ? _0x167b95 = _0x57c8ec : (_0x167b95 = a0_0x40fd["\u0067\u004d\u0045\u0053\u004d\u0066"](_0x167b95),
        _0x412559[_0x12e38a] = _0x167b95),
        _0x167b95;
}


function assign(_0x3d482a) {
    for (var _0x3043b8, _0x5151de, _0x47f553, _0x1437e2 = _0x293fe8, _0xa934a3 = Array['prototype']['slice']['call'](arguments, 1); _0xa934a3['length'];) {
        var _0x172aea = _0xa934a3['shift']();
        if (_0x172aea) {
            for (var _0x584c16 in _0x172aea)
                _0x3043b8 = _0x172aea,
                    _0x5151de = _0x584c16,
                    _0x47f553 = void (0),
                    _0x47f553 = _0x293fe8,
                    Object['prototype']['hasOwnProperty']['call'](_0x3043b8, _0x5151de) && (_0x3d482a[_0x584c16] = _0x172aea[_0x584c16]);
        }
    }
    return _0x3d482a;
}

function _0x2a8003() {
    this['input'] = null,
        this['input'] = 0,
        this['avail_in'] = 0,
        this['total_in'] = 0,
        this['output'] = null,
        this['next_out'] = 0,
        this['avail_out'] = 0,
        this['total_out'] = 0,
        this['msg'] = '',
        this['state'] = null,
        this['data_type'] = 2,
        this['adler'] = 0;
}

function _0x5d3cb5() {
    this['strm'] = null,
        this['status'] = 0x258fd ^ 0x258fd,
        this['pending_buf'] = null,
        this['pending_buf_size'] = 0x3d9d8 ^ 0x3d9d8,
        this['pending_out'] = 0x4626f ^ 0x4626f,
        this['pending'] = 0xea354 ^ 0xea354,
        this['wrap'] = 0xb19e8 ^ 0xb19e8,
        this['gzhead'] = null,
        this['gzindex'] = 0xedca6 ^ 0xedca6,
        this['method'] = _0x46c762,
        this['last_flush'] = -(0x3565a ^ 0x3565b),
        this['w_size'] = 0x90d2a ^ 0x90d2a,
        this['w_bits'] = 0xf0dd7 ^ 0xf0dd7,
        this['w_mask'] = 0xac1bc ^ 0xac1bc,
        this['window'] = null,
        this['window_size'] = 0xc4e6a ^ 0xc4e6a,
        this['prev'] = null,
        this['head'] = null,
        this['ins_h'] = 0x3ba9a ^ 0x3ba9a,
        this['hash_size'] = 0xbdea0 ^ 0xbdea0,
        this['hash_bits'] = 0x24ced ^ 0x24ced,
        this['hash_mask'] = 0x3d5f0 ^ 0x3d5f0,
        this['hash_shift'] = 0x5e798 ^ 0x5e798,
        this['block_start'] = 0x572f6 ^ 0x572f6,
        this['match_length'] = 0xbce21 ^ 0xbce21,
        this['prev_match'] = 0xab837 ^ 0xab837,
        this['match_available'] = 0x99f48 ^ 0x99f48,
        this['strstart'] = 0x96fc1 ^ 0x96fc1,
        this['match_start'] = 0x1d705 ^ 0x1d705,
        this['lookahead'] = 0x23443 ^ 0x23443,
        this['prev_length'] = 0x56a45 ^ 0x56a45,
        this['max_chain_length'] = 0x21ec7 ^ 0x21ec7,
        this['max_lazy_match'] = 0x91a5d ^ 0x91a5d,
        this['level'] = 0xa467f ^ 0xa467f,
        this['strategy'] = 0xf18eb ^ 0xf18eb,
        this['good_match'] = 0xd499f ^ 0xd499f,
        this['nice_match'] = 0x53762 ^ 0x53762,
        this['dyn_ltree'] = new _0x4171f8['Buf16'](2 * 573),
        this['dyn_dtree'] = new _0x4171f8['Buf16'](2 * 61),
        this['bl_tree'] = new _0x4171f8['Buf16'](2 * 39),
        _0x1a7cee(this['dyn_ltree']),
        _0x1a7cee(this['dyn_dtree']),
        _0x1a7cee(this['bl_tree']),
        this['l_desc'] = null,
        this['d_desc'] = null,
        this['bl_desc'] = null,
        this['bl_count'] = new _0x4171f8['Buf16'](_0x4e5bf8 + 1),
        this['heap'] = new _0x4171f8['Buf16'](2 * _0x107a57 + 1),
        _0x1a7cee(this['heap']),
        this['heap_len'] = 0,
        this['heap_max'] = 0,
        this['depth'] = new _0x4171f8['Buf16'](2 * _0x107a57 + 1),
        _0x1a7cee(this[_0x293057(0x1f8f2 ^ 0x1f82c)]),
        this[_0x293057(0xdd3cb ^ 0xdd37c)] = 0x623e7 ^ 0x623e7,
        this[_0x293057(0x2ba21 ^ 0x2b8e3)] = 0x9bc96 ^ 0x9bc96,
        this[_0x293057(0xbc432 ^ 0xbc6e7)] = 0x3accd ^ 0x3accd,
        this[_0x293057(0xc2511 ^ 0xc207b)] = 0x41615 ^ 0x41615,
        this[_0x293057(0xdf588 ^ 0xdf71d)] = 0x893c4 ^ 0x893c4,
        this[_0x293057(0x96ac1 ^ 0x9688d)] = 0xdcde4 ^ 0xdcde4,
        this[_0x293057(0x2141a ^ 0x214f0)] = 0x2396b ^ 0x2396b,
        this[_0x293057(0x9840a ^ 0x9802e)] = 0x4c90d ^ 0x4c90d,
        this[_0x293057(0x9cd9a ^ 0x9cc4a)] = 0x319fd ^ 0x319fd,
        this[_0x293057(0xc1300 ^ 0xc121c)] = 0xafc08 ^ 0xafc08;
}

function deflateInit2(_0xe112ba, _0xdc2338, _0x5a8973, _0x27ab10, _0x19fc80, _0x44cbc9) {
    if (!_0xe112ba)
        return _0x168ff2;
    var _0x8e3c5d = 1;
    if (-1 === _0xdc2338 && (_0xdc2338 = 6),
        _0x27ab10 < 0 ? (_0x8e3c5d = 0,
        _0x27ab10 = -_0x27ab10) : 15 < _0x27ab10 && (_0x8e3c5d = 2,
            _0x27ab10 -= 16),
        _0x19fc80 < 1 || 9 < _0x19fc80 || _0x5a8973 !== 8 || _0x27ab10 < 8 || 15 < _0x27ab10 || _0xdc2338 < 0 || 9 < _0xdc2338 || _0x44cbc9 < 0 || 4 < _0x44cbc9)
        return _0x5e2693(_0xe112ba, _0x168ff2);
    8 === _0x27ab10 && (_0x27ab10 = 9);
    var _0x3cd0cb = new _0x5d3cb5();
    return (_0xe112ba['state'] = _0x3cd0cb)['strm'] = _0xe112ba,
        _0x3cd0cb['wrap'] = _0x8e3c5d,
        _0x3cd0cb['gzhead'] = null,
        _0x3cd0cb['w_bits'] = _0x27ab10,
        _0x3cd0cb['w_size'] = 1 << _0x3cd0cb['w_bits'],
        _0x3cd0cb['w_mask'] = _0x3cd0cb['w_size'] - 1,
        _0x3cd0cb['hash_bits'] = _0x19fc80 + 7,
        _0x3cd0cb['hash_size'] = 1 << _0x3cd0cb['hash_bits'],
        _0x3cd0cb['hash_mask'] = _0x3cd0cb['hash_size'] - 1,
        _0x3cd0cb['hash_shift'] = ~~((_0x3cd0cb['hash_bits'] + _0x24d034 - 1) / _0x24d034),
        _0x3cd0cb['window'] = new _0x4171f8['Buf8'](2 * _0x3cd0cb['w_size']),
        _0x3cd0cb['head'] = new _0x4171f8['Buf16'](_0x3cd0cb['hash_size']),
        _0x3cd0cb['prev'] = new _0x4171f8['Buf16'](_0x3cd0cb['w_size']),
        _0x3cd0cb['lit_bufsize'] = 1 << _0x19fc80 + 6,
        _0x3cd0cb['pending_buf_size'] = 4 * _0x3cd0cb['lit_bufsize'],
        _0x3cd0cb['pending_buf'] = new _0x4171f8['Buf8'](_0x3cd0cb['pending_buf_size']),
        _0x3cd0cb['d_buf'] = +_0x3cd0cb['lit_bufsize'],
        _0x3cd0cb['l_buf'] = 3 * _0x3cd0cb['lit_bufsize'],
        _0x3cd0cb['level'] = _0xdc2338,
        _0x3cd0cb['strategy'] = _0x44cbc9,
        _0x3cd0cb['method'] = _0x5a8973,
        _0x1f0e2a(_0xe112ba);
}

// 等下解混淆
function _0xcbb533(_0x2dc1f2) {
    this['options'] = assign({
        'level': -1,
        'method': 8,
        'chunkSize': 16384,
        "\u0077\u0069\u006e\u0064\u006f\u0077\u0042\u0069\u0074\u0073": 15,
        "\u006d\u0065\u006d\u004c\u0065\u0076\u0065\u006c": 8,
        "\u0073\u0074\u0072\u0061\u0074\u0065\u0067\u0079": 0,
        "\u0074\u006f": ''
    }, _0x2dc1f2 || {});
    var _0x2dc1f2 = this['options'];
    _0x2dc1f2['raw'] && 0 < _0x2dc1f2['windowBits'] ? _0x2dc1f2['windowBits'] = -_0x2dc1f2['windowBits'] : _0x2dc1f2['gzip'] && 0 < _0x2dc1f2['windowBits'] && _0x2dc1f2['windowBits'] < 16 && (_0x2dc1f2['windowBits'] += 16),
        this['err'] = 0,
        this['msg'] = '',
        this['ended'] = false,
        this['chunks'] = [],
        this['strm'] = new _0x2a8003(),
        (this['strm']['avail_out'] = 0) === deflateInit2(this['strm'], _0x2dc1f2['level'], _0x2dc1f2['method'], _0x2dc1f2['windowBits'], _0x2dc1f2['memLevel'], _0x2dc1f2['strategy']) && (_0x2dc1f2['header'] && _0x50ff0d['deflateSetHeader'](this['strm'], _0x2dc1f2['header']),
        _0x2dc1f2['dictionary']) && (_0x2dc1f2 = 'string' == typeof _0x2dc1f2['dictionary'] ? _0x3ba2c9['string2buf'](_0x2dc1f2['dictionary']) : '[object ArrayBuffer]' === _0x3e1820['call'](_0x2dc1f2['dictionary']) ? new Uint8Array(_0x2dc1f2['dictionary']) : _0x2dc1f2['dictionary'],
        0 === _0x50ff0d['deflateSetDictionary'](this['strm'], _0x2dc1f2)) && (this['_dict_set'] = true);
}

function deflate(_0x54550c, _0x504465) {
    var_0x504465 = new _0xcbb533(_0x504465);
    if (_0x504465['push'](_0x54550c, true),
        _0x504465['err'])
        throw _0x504465['msg'] || _0x4c3b56[_0x504465['err']];
    return _0x504465['result'];
}

function _compress(_0x383a33) {
    return deflate(_0x383a33, {
        "\u006c\u0065\u0076\u0065\u006c": 6
    });
}
function _getProcessData(_0x2017a4, _0x4057be) {
    var _0x1134e3 = _stringToUint8Array(JSON.stringify(_0x2017a4))
    var _0x311c22 = _compress(_0x1134e3)
    var _0x49dc27 = Jcr["lib"]["WordArray"]["create"](_0x311c22["buffer"])
    var _0x536148 = this["_aeEn"](_0x49dc27, _0x4057be);
    return this["_base64ToArrayBuffer"](_0x536148);
     
}
function get_sign(a, b) {
    sign = _getProcessData(a, b)
    return sign
}

const a = {
    "Zf5": 1761997754077,
    "GF9": "2.0.0",
    "HW5": "t6pfoml9679z52kqw93uqu75eflqdg1bykhl",
    "ew1": {
        "Wg7": "Mozilla",
        "lV1": "Google Inc.",
        "Xt4": "Netscape",
        "yV2": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        "KY1": "Win32",
        "Le3": "Tmxhcm9vei81LjAgKERybXdsZGggTUcgMTAuMDsgRHJtNjQ7IGM2NCkgWmtrb3ZEdnlQcmcvNTM3LjM2IChQU0dOTywgb3JwdiBUdnhwbCkgWHNpbG52LzE0MS4wLjAuMCBIenV6aXIvNTM3LjM2",
        "kH1": 867,
        "ad5": 1463,
        "Ua9": 24,
        "TQ6": 915,
        "kC7": 1463,
        "me8": 24,
        "eY9": true,
        "Kn2": false,
        "OM3": true,
        "sw8": false,
        "uW3": -1,
        "iO8": "https://www.ximalaya.com/album/40514512",
        "By1": "www.ximalaya.com",
        "Gv4": "/album/40514512",
        "ef2": "",
        "tZ2": "https:",
        "OG4": true,
        "kx1": true,
        "VD6": true,
        "Ov6": false,
        "lq3": "zh-CN",
        "ef5": [
            "zh-CN",
            "zh"
        ],
        "OK3": 1.75,
        "Fg5": true,
        "qS2": [
            1463,
            867,
            1463,
            338
        ],
        "Fc5": "light"
    },
    "HK3": {
        "iI1": {
            "NF1": -1,
            "cA1": -1,
            "NK5": -1,
            "VP4": "-1.00",
            "RX5": -1,
            "VP6": -1,
            "tJ4": -1
        },
        "ti4": {
            "xm9": true,
            "is3": 0.95
        },
        "AV9": 32,
        "aK8": "Google Inc. (NVIDIA)",
        "df6": "ANGLE (NVIDIA, NVIDIA GeForce RTX 4060 Laptop GPU (0x000028E0) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "WB9": "UBNHV0VEVkEWUU0QAUQVBk1FAEEXAkxGVERLAhNHUUI",
        "pD7": "AEFCAE0QAExLAkVDBkdDUBBKXEVDXUxLARYVXEFBUxA",
        "da2": "VUdHSkVHV0FEUUdEUURFVEJH",
        "dt2": 8,
        "Sy6": -480,
        "MS3": "Asia/Shanghai",
        "pi9": false,
        "Ao1": [],
        "BH5": 0,
        "UG4": [
            "Arial",
            "Arial Black",
            "Arial Narrow",
            "Book Antiqua",
            "Bookman Old Style",
            "Calibri",
            "Cambria",
            "Cambria Math",
            "Century",
            "Century Gothic",
            "Comic Sans MS",
            "Consolas",
            "Courier",
            "Courier New",
            "Georgia",
            "Helvetica",
            "Impact",
            "Lucida Console",
            "Lucida Handwriting",
            "Lucida Sans Unicode",
            "Microsoft Sans Serif",
            "Monotype Corsiva",
            "MS Gothic",
            "MS PGothic",
            "MS Reference Sans Serif",
            "MS Sans Serif",
            "MS Serif",
            "Palatino Linotype",
            "Segoe Print",
            "Segoe Script",
            "Segoe UI",
            "Segoe UI Light",
            "Segoe UI Semibold",
            "Segoe UI Symbol",
            "Tahoma",
            "Times",
            "Times New Roman",
            "Trebuchet MS",
            "Verdana",
            "Wingdings",
            "Wingdings 2",
            "Wingdings 3"
        ]
    },
    "fc9": {
        "cx4": "4g",
        "zY8": -1,
        "yj6": 10,
        "dV4": 50,
        "yX4": false,
        "eN7": "b1f48ee4-10d6-4522-9139-4b3800ba540e.local"
    },
    "pX4": "F4255A:E51846:2C7A65:fc00",
    "Ud2": "D2cdE1bsAeSKxScNGr7aOrEwgaBIzbJNGDyGAED7/dvVQXbb",
    "Cb7": null,
    "Gp5": null,
    "Zn6": {
        "oe2": "1",
        "EV9": "true",
        "xu2": "1441A79084B299361228B8A0C24AEF9F18CAFE22C7647F0ACDB8F740150ECD69",
        "CY8": "",
        "nE4": 3124,
        "Tw1": [
            8028422.800000012,
            8031547.199999988
        ],
        "Sb1": false
    },
    "lL1": "aad82bf91e8c815b49324781b9e110c9",
    "uT8": "-1",
    "sV5": 2,
    "Vo6": "",
    "hi9": 0,
    "kz4": "idnr_kV_UGxG6Mrx|IXQUVUCÙsXf}u\bWH¥µv\u00153Vggj\\E~¤n[fsE@YËXÉocY×\boLT9d98DHue\u0006FH{ht\\B¹iA,@zJ[pBhU )Z9/\ffGin(dAXk6SXAr299",
    "fd2": {
        "Pf5": 1760193575533,
        "Ja5": "F4255A:E51846:2C7A65:fc00",
        "xz7": "adfaee55-e1b7-9ea4-e3ee-42d62c8281b3",
        "av1": "D2cdE1bsAeSKxScNGr7aOrEwgaBIzbJNGDyGAED7/dvVQXbb",
        "cp9": 0
    },
    "ck9": "h5_goyxvzyohd",
    "uS7": "",
    "jm9": 2,
    "GJ2": "cbf6bd31-6f2d-7235-6296-8a55ccabfb73-fcs011",
    "MT7": "33-00000-0000-1111111-000000-0011-000000-0000-00000-0",
    "BG5": false,
    "Fd8": "2",
    "Dr2": "MnZ1ejExenl2OXY3djQ4MjV4OXoyeDZ5NDh1MTJ1Nnc",
    "lp7": "djI5NHg5djI3eHg3OXYwNTEyNHY1ejAxODM1OTcyOTA",
    "iq7": false,
    "MB8": "E7j1T2vFri",
    "ZH2": "SUwC105p1D",
    "DP5": "1441A7909C087DBBE7CE59881B9DF8B9",
    "rf2": "Yz9U9cCfaJ9aYs0Ko29DDK7s0K1oapEtkC2YMwOaenFjWygTady2rUscpBf7B7sH6rIQRb0asKKHcANssASYdLG2qrqqTpjQYJWALFGBJbkPfPZFnoyxy9ccevdA5bif",
    "eM5": "Yq_EYl+:a+UB&c]\u0001AX9B_\u001d.NLMk}￥vnUg,e￝ix:Lpfk\u0014p\u0012H\u0011ￏ%}~<ￊￍ<~=[ I)ln,c`Dﾹmm#UW*\u0014I9YHﾮH\rﾥ5mWd\u0005of8MCﾡ1}Jﾙsg2*+nt\u001eBﾌ&zKBmbﾍFTJ6ﾄh\u001aPZHR"
}

const b = 'm9ZtRrz:qujT8@da'
console.log(get_sign(a, b));

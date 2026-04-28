const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
const $ = require('jquery')(window);


function nmnmue23(d) {
    var T = '';
    return $['each'](d, function (O, w) {
        T += ',\x22' + O + '\x22:\x22' + w + '\x22';
    }),
        T != '' && (T = T['substring'](0x1)),
        '{' + T + '}';
}

function jkks(d) {
    return 0x7d6c0 - 0x14e75 * 0x6 == 0x2 ? nmnmue23(d) : ueh3875(d);
}

function ssssdddttssssStr(T) {
    var O = jkks(T)
        , w = Math['floor'](Math['random']() * 0x5) + 0x1;
    for (var l = 0x0; l < w; l++) {
        O = jkkc(O);
    }
    return O = O['substring'](0x0, 0x20) + w + O['substring'](0x20, O['length']),
        O;
}

function cqbj(d) {
    var T = {
        'v': ssssdddttssssStr(d)
    };
    return T;
}

function request_param() {
    const R = {
        "ud": "CB7EBC26F4600001114D1B3033504D40",
        "v": "1302691811-1767513600764-793b62c39a349075e42205579d57e6e8",
        "type": "audio_mp3",
        "rescUrl": "128048957",
        "pkg": false,
        "vis": "",
        "isc": false,
        "ilg": false,
        "confirm": false,
        "downUuid": null
    }
    let W = cqbj(R),
        U = $['extend'](W, T['gt_captchaResult'] || {});
}



request_param()
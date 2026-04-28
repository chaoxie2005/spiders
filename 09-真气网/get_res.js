window = this;
var hexcase = 0,
    b64pad = "",
    chrsz = 8,
    appId = "a01901d3caba1f362d69474674ce477f",
    akb33 = "32223",
    akb36 = "mAkJqt8coXQ96zML",
    akb48 = "t4ABRmeN",
    method = "GETCITYAQIRANK",
    obj = {
        "order": "desc"
    };
const CryptoJS = require('crypto-js');

    function Base64() {
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.encode = function(a) {
            var c, d, e, f, g, h, i, b = "",
                j = 0;
            for (a = _utf8_encode(a); j < a.length;) c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64), b = b + _keyStr.charAt(f) + _keyStr.charAt(g) + _keyStr.charAt(h) + _keyStr.charAt(i);
            return b
        }, this.decode = function(a) {
            var c, d, e, f, g, h, i, b = "",
                j = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < a.length;) f = _keyStr.indexOf(a.charAt(j++)), g = _keyStr.indexOf(a.charAt(j++)), h = _keyStr.indexOf(a.charAt(j++)), i = _keyStr.indexOf(a.charAt(j++)), c = f << 2 | g >> 4, d = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, b += String.fromCharCode(c), 64 != h && (b += String.fromCharCode(d)), 64 != i && (b += String.fromCharCode(e));
            return b = _utf8_decode(b)
        }, _utf8_encode = function(a) {
            var b, c, d;
            for (a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) d = a.charCodeAt(c), 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(192 | d >> 6), b += String.fromCharCode(128 | 63 & d)) : (b += String.fromCharCode(224 | d >> 12), b += String.fromCharCode(128 | 63 & d >> 6), b += String.fromCharCode(128 | 63 & d));
            return b
        }, _utf8_decode = function(a) {
            for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : d > 191 && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((31 & d) << 6 | 63 & c2), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), c += 3);
            return b
        }
    }
    

var decryptData = (function() {
    var DES = {
        encrypt: function(text) {
            var secretkey = (CryptoJS.MD5(akb36).toString()).substr(0, 16);
            var secretiv = (CryptoJS.MD5(akb48).toString()).substr(24, 8);
            secretkey = CryptoJS.enc.Utf8.parse(secretkey);
            secretiv = CryptoJS.enc.Utf8.parse(secretiv);
            var result = CryptoJS.DES.encrypt(text, secretkey, {
                iv: secretiv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return result.toString()
        },
        decrypt: function(text) {
            var secretkey = (CryptoJS.MD5(akb36).toString()).substr(0, 16);
            var secretiv = (CryptoJS.MD5(akb48).toString()).substr(24, 8);
            secretkey = CryptoJS.enc.Utf8.parse(secretkey);
            secretiv = CryptoJS.enc.Utf8.parse(secretiv);
            var result = CryptoJS.DES.decrypt(text, secretkey, {
                iv: secretiv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return result.toString(CryptoJS.enc.Utf8)
        }
    };
    var AES = {
        encrypt: function(text) {
            var secretkey = (CryptoJS.MD5(akb34).toString()).substr(16, 16);
            var secretiv = (CryptoJS.MD5(akb35).toString()).substr(0, 16);
            secretkey = CryptoJS.enc.Utf8.parse(secretkey);
            secretiv = CryptoJS.enc.Utf8.parse(secretiv);
            var result = CryptoJS.AES.encrypt(text, secretkey, {
                iv: secretiv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return result.toString()
        },
        decrypt: function(text) {
            var secretkey = (CryptoJS.MD5(akb34).toString()).substr(16, 16);
            var secretiv = (CryptoJS.MD5(akb35).toString()).substr(0, 16);
            secretkey = CryptoJS.enc.Utf8.parse(secretkey);
            secretiv = CryptoJS.enc.Utf8.parse(secretiv);
            var result = CryptoJS.AES.decrypt(text, secretkey, {
                iv: secretiv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return result.toString(CryptoJS.enc.Utf8)
        },
    };

    function MyDecode(str, nopop) {
        var arr = akb33.split('').reverse()
        var b = new Base64;
        arr.forEach(times => {
            switch (times) {
            case "1":
                str = AES.decrypt(str)
                break;
            case "2":
                str = DES.decrypt(str)
                break;
            case "3":
                str = b.decode(str)
                break;
            }
        }
        )
        if (!nopop) {
            str = b.encode(str)
        }
        return b.decode(str);
    }
    window.MyDecode = MyDecode;

    return function(data) {
        return MyDecode(data)
    }
}

)();

const data = 'aGd5QjloQWQxZlREdlBjam1RQmM4cS9wczZVMU1rcmVPVzYyQmt0bUdKdkdpamhXZXJBUmVYSjBVb0l1ak9lZTJYcTJUVmhNT3hjMWtFVnBJTHVvUFVYOTZ3WTB5b1pzeG9DSWRCZ1dPRjIzSndEUFFReUVYQVZNNDhnTk9nYU5DeVJhL0VhaFhhODNXVU9ycmpDcHFab09LMDJpdk9mN1RHWFNVRWJNdDd5dW1rQWxsUUFNaWRzVFJnM0pnTTFPK1hCQUthV1k4UXpGeVR2T2s3Szg2ckpiMXFQaXZXTmFteGRmSit0d1ZrcG8xSWhSaFN6OXZ1cTd1MXBnWnhzN1Y1TzhGTm1rbnVBQkNIaFc5WENWbUxwbDVQbWZVYm1INGs5K2dERTVzQUpKQmdrNGlXSklKMmJ5b3pKejREd0N1SnBvalJvSzdCbUNXamovaHJDUGk2YnUwUThPSVZDWmtrdWg0bFkrMGNwL05FM2RJMVUxaWZhR3NNRUpRUE1qRCtZK053K0JjdFNMQ0wxdjY0R1pHYTFBSzJUbjRlTHBvR0VsQldxS0Q5Q3RxZ2MvUkwwZTdmN2M4SExoSkViZFNLR3V0dEV0MDZoU1cyUEtNTVE5R3U2ekZSRWI1SnExOWpkNjlsd2JoSy9BaUdhdkp4Q1paUjQ4Mjd6bjRLL1UyeEJXMGN5WlRRQkhxcUNNdk14SHhXTU1UcllvMWhTNWc1VkJuSGJMTTk4TXJtWDVtTW1lamh0NjNkeFkyR21tYWhzR3E3cVprQUN2RFJialpFQ2Fsei9Ycm16QWxVTHk4R2hRU0h4cG9lUy8wVGNDREY2SW5ONS84dFZPajVBbUpablB4RDYyNUd1Mm5STTloZHhSUEJtdnI2T1Uxa2kwcyt5TmhKNnRseCt0VXRiSFF1YnpXYTBWOGplTFdPbVpJMXFybE9wb1RxdkFzOHRUVHMyNkN4UjlGOEk5Qi9GNEJhQUkrVW0yQ1dwS3JWdHp2dnBEL294SWo4WDRrZ3hJZlQ3T0g5TEFlcklqaVFLZUVZRW5PeUtCOS9jeVhCWlYvQmRUY1FlMXJMbW44anJDNkNFMExhR2xaOTJ1OFN1a2dxVkhmREFEWThxM2FYMWpRbTlZTUpvcGU4Y2NMSWhjZy9rWnJyUlF4R3g3WTN6dHJGU3hvK2JjNmROZm9ZMHY1U0w4TUlqbDJlVHZzWisxNEYwK2ZJZ1g5Z0ZjU0hIR2Yzd1I5cWpwblhibm5DUVhXZ2hZcVBnM0RpQXFMOVo1UTcyc2dLMjFOL0hzQlh1dnF1V1NYRGF2Q2JwcUo2YXA3WE1kTGhEdnBZRzRYUlZPOWRFOE9mL1ZvbEpMSW5CM2NXZTExVnltL1pSVkg3cjNQMk1yR3hSZEhOQk9vK1lhdXNPZmJDdFZ1K3hQd0xldnBWc0FzcjhPYVhyVGYvMjJYS2lTRVp0ODNyN011amkrbko5SDVIbmRmSGxTSU5scWZJZ0tNMWlidDVnQzZrR3JyMHZnUEp6TWtZME1YaE1IaGhqRk1yOUYxdGNYQzVpK2hZN0JVWEE5QXhkbHhkbllXY1VXK2N0K0pXYkhKSzdzT0tuOUJpQjhVcGpVaEk4czhVRlMwc2JzcWxsWG5yaFd6QWhzOWswbFRDM2FmbEV1OEhnRDhvaGNDV0crRDZ4MWszSEtwNVRDTVlVT0xGZDN2ajNacmRiS3VBTndIV1hWdWVuS0tLN0h4NW1GejVsaXlOZmtPazVoSEl3djMrS1VTVTF5WDVMc0hBWnVhNnJPWjRyVG9SVVl4Uis3bWczYVVQekFpVkFTOXcyUTBqTHRvRlpYdTgrS2JMNjhrTnBQVDRSS1U2VHMwd2d2emFhV2VPOW1HdDQyQkhFY25WZlVzSloyaEZheE9NZXlPV0p6OVN3amttbUxrZXR1bCtiblZTSFQ3UGVMODdTWVNKMjczdENBTWZoc0VZK0lkeXNvM1h2Q2VQYzl0bGVsdWF5dHBvcGNFVU0wcTJaOFdnWjlTNXN1QVRQMGtyQkU2SUVnRnFQdlk1YkQrSWsyMktua0swTjdsMU5CbnBRL0c5ODR1V2dURWR3L0pNL3FjRDZFVWNRTTRreFg4YW5nQmtzQmZhN3B4TVQvdVNMRXJBaXpvQlBudUl1VStCcS9SRkRFVHpKUTYwSS9CSHJaS05ydkN4NzBTYWxXRWFJank3QzhNL3hVc0JrOFYyNGFDWWYyRzdlY0hzc0xIdDhoRTJ1bnA0dm12cGJNOHdxQW5WQ1U2ZDZ0RFhmZURaa1E1cnhuRzdiTGdkWVZJY1EyMDBJejJUMVZ0czRTZVRMcUNzZWM0TXAvS09YVWRTTVk5TXRGd2JVZERYUWJCVHdMRHFNcXloNVBGd0RSQ1oyc0lvSUxidExUakl6UGFjV0NlZCt5QmtHS25ZdGYxWHhvNFp5RTlNZzJOWjFsWlZtRFE1aHlqaTdxajNCOERwYUNiT2hhT0FmSk1sRnlTdkE1MXVwejQ5MTBuTVB6RnRhbWRXc0d3ejVYeDEwbEprU3JTN05MQmZxT1kxMkRFRkZhT2JBMnFuZ2FTNU15VjByWGh3MmdvTjZjUWlzUktYVnFXY1NTVE1sUTZmYlNPSExaWVFUaHNVUEF0aVZ0L21xN0J2REdTN0s0YURweGQ2TDR6cTVEK0cwTGhnd0RzT0RRSW95RnZMQUlZeGYyTVRERFNvZEZBK05IVTVycnRpTnpPVXJDN1RaNkFoUXBhOWZuR1pTNmlGaWRpRHFsMWoxVVJWZ1VQeHhoSy95QS9McGdIMjcxdWljMDlxQmgwcHRJaTREYjBsekRuYXFYMzNGN1FLTkdaKzBwVWZhdm5tTjQxN0JMZks1M2RJT25OeGFDalVjSnBPYWdYeXJZY0tQbHArMnFaMmJrUmNpeitmbHZ3S0xIV094aFJMY0JlVFgzK0VwbUwzakVDbmYwT0FkVWFhRmlxKzdlMGR6NkZzQ0xFUjFhNjM3R0JwRG1ialAxeEhOWnFyR3BON3R4RHUyeHZkdERScmFUYzg4VnZBNER3NU1OWUJYQUg5VWxwUHc5S2lUY0s2T1h3SVlsQ1BxNmc0UlkxN3Vqb1ZGYVBRSTZmWDlJY0JuSHFxWjh2SnNicldKOFcxUXJUNEVzWUpDSTVIUXRlMHJLRkZydDJGVm9hTkJzdmN6ZFZOQ3BoZU1mWjZRRUVCbnBVQjBKYWtYRVBCdWJjN3ZvWTJJbXFyQUV5T1YrUysrVDdkdVpQaTNLK1ZWczlxWlJ6RXJKWmpiM0NXN0krM0tIcEw3bDBXWFBzSU04RWhISk5hTlJDKzgrTjJrSE5sRkpmMlpTSnZLckl6MExBdWt0d0hXdmNjQUh5ZVlVTVRVZUptZ3RUaFdUQ05GN0VNOG5qZkNKRUMwdUZ6ZHh3TlMxa0wrdWh6Y1d6cmZqd3VNd29aMndmaHprczd0T2QyRUsxM2t2eWcvT1NUWVhiN29vWW51aEZKSUYzbjNMUERRVUJvVmZVWkpnTmhISEY2LzRHSkdXaElld3J6Skc5Snd3aXNQVVJMa3hBSDJ2RU56SWhBWWdaQ2NZMVBianUxbWpHOEJuVVBvcFBKbmJMancybm81VkdUNGFPMTdxem9lbVhBdlF4NWRuN3dzUnpod1pTYmFlaE83V1hnM1FzUmVrZVI5S2h5b2trOENodDI3dG8xMVE5SU81RkI2eXovN3R1TkpPdmJoNHd3YTBKOUU4WGR0Q0tjWGFqNzJTOWRZSXNnektHT29FQmthZHppN25OZEk0cktaTkpyQUZjYnV6NjI0U0JFN2xFV05zVUh6VVFBemI5ZGFEVXpNVTJ5eDFDb3RiRkM2YnhZbTZud2FUaitVUGhsMEFYYk5kZUdZUFZQUDJaakVqajA1UXl6Mjd6bWFjeVJ1cnJMMzZiaXNYRFBRbHFWdGMyOWVQcjRmMFdINHN1UEFOTDNOTks4Rkp3cFVpVlVKKzdxdjNhMFlLWHgzaWNqUUtGYmdoZVhhczRsdjV2U1VkYlJGWlRBWmNxaTBSejBCNFNxOEhjdEcwam1UQlZJaS9FcjYrbEUySHBla1J0MWplREVEb2wvdlkraDA4ZjNOUmZpUXIxbEZuNUJCRHRaZWUzU3lZQXVlRGRLM3ErTndnSFBNM2dvZHdZd1l4Rm9vaTM3QnRuODE5elBhTm5Eak9oMVpnYTJ5NU9qd2w4SE5NVDFNWEVuOGlmWXJZQWtWVHA5RzVlTXlXVlBBeFZGakpRa0F0bjhnMG8xWWU5aFlPNGpTUGwyNUtQdWRmRUhzQ1FVWE9lcXBjejJSRHdxVVBuVVhSdU10ZzhGNW1OR3V6UE1wTUF4NG1HZU9HV2JpL0FWQ2NwemtFdXh2b1VNWE1JYU9nWGJERnV0QVRZcWxxaWg4NGQ2V0M0QUpsTlViWXU3WnZoSytiMEhDcUJHczRML0ZwY3d4d09VNkV4QThtN3hJL2wrc1orRlB1MTliQzVqdTRzUnJGWkhRamJjOWQ3bHVzaEQ1WVl3UHQzMWR2WHdoNGN5Z1VCMHdzc01EL2ZLSURlU21QWkcyZldYRFpKbGI0TUozb092aGIvL2RCMEF0NUFLNEVGcU5tVVU3VU5SV085V3huMWEyMGNkVHVYbkZIOTZqUnl2VncyK0o2T3FNOTFsdlMrMGJETWRtaU1vUk9GVmtTVzJxOEthOGZIQTlyZ01Rdms3czZON1I4TlVaTjFFRHVlZ1cwa0RPMzlUVTRxUnRMWWVyYXdlbXMrNFJQU3owaHd6U3RSZXJYM1FOYm1qN2k5aTQzb29EamJNeEhsMGN3bU5ZNEFCM2RtUGo3cmJTdFBIQk9kYlJBc20xb3RCREcyNFZ1TXFnbUk5S290Tktsd2dRc2RjVWdnd2hiazl2WExRay85RDVNb3NnSXNTclpPWTFKYlNjOEk0VUFSTUR4ZU84SUFWeTR1Qk85WHN5WUEweHJNdW40WkRzc3dsZVFKR2wzZzlYUWE0cGp2UEI0Q21iMnZ6U1I2RWNYNi80bWxNTy9uR25xbXF2WEEvTTZVOTAzb3J6Nks3Q2w4OUJITmsxcWZYejVpSy9YRU1zOFZIVkozOHo1ZkYzOFZ0b1NZME90QnJWc1JIK1U5YW1ETE9lNDdOMUdRQ21WaTBCaCt3WFBkclpSeDR3dkNYeldPUUs5TWI4blVia1dYU3FnekZmNjNjbENRM0pUb21iR2RKK05FclVQem1Oekx0bHFqd3V5eWExSGltZjJMSnhNcW5ZbSs3aERBUjNhSTdxay9KU0xJQ1g2UDhGZE5tYUMvY0w0SGhYaHk4Titmck5IaWtiaTg4bzF6T1YvZnVrQVhFR0FFaXREdHIzU3RBcUlra3IxNTgwRWRtY2FGOE5vcVpEeHJ5MWJsTEg2Y3MvS1BNU1JHdVdKZzBaNS9iZzh5U0NKZjRIa1dNMG5MSEJNMXE2Q1BBcUluclluaUczU1ZTSnpFcVVGNzgvajJXZWkrcS9LUlJjdVYxN3c4Uk1jUnZjc2pFUm9uYk0zNjZqYUNLYVZlZHQrWm5mVnoyYXVycURKVTVCdllTVFFFdGUwa0dkREV2bzdYb1h3R2E2Kzlad0c2RmIrbWF4TEtwS3J3RWZyL05LVGNOTlpva0EvRzdPSVBXUGVVZENQZ2o4MHJ1WndWSTRUNEhaQ3V0QmZKekM1d1dWS0xtMEowbFdzcnZ1ODBFMktUWXJmZW52Q3M2Nys2MU9CaHR3eEdRMGlGaEk2cnY0L25YTjJlME1SOElOTHNPNU1sK2Z4RE51NWhHSy9DYVVucWNKcjJHSnZ4UzBJNmJjSVIveUl2U0prQ1NaOGtVWTV6L0EwVDZ1YjB0aDB6Nk5lMVk3dnI3MThSWEVIZ0xaaENCQ1ZubUI3Z01LbXFNUU1EZ3NmbnZrQTVKTGtkYzhmM2lCbW5IMkRqU2NRR1gxUHVSWWhZaW9lTjhMdnJBTjBqdnB0dmRacS8rV0xobXhiRERrSVUxdy9XSTdqNXd2MzFvdjZYRTE4TS80a0tZRk5BYmNRTnAwZ0FQSFovYXNxd2orSkFjajg0TDhoZ3VJMnI3K2F5NHg2NkdRRno0TUNvRlBUUWViL1Q0ampuOFlidS81TERUVGdpK3dTREdrRGNNRVlyRDN1L1p5VWNyWVI3d2I1WmVkSFFhS2ZnMlU1djhVSlRUZ2N6UlIzbjd5dkVGT1hYVEsrV3Bod254YXRnMjdpdjZQcTNDUEsyRXNxdTc5RFpvZlluSUlIRkhnTjllOUhmYTJnUUJpazJoZklxdU1BVThRd3NMaXgzbnljSXRRZlZUSEk0M01zUWdSbUNSMG1LTzM2S2tOZFJ1akM2bVJWQ3U0bi9pYVFvUUVIT1pZdjhLWmVZK3o4dUkxR1hYM0dCOFR5Tm9yenVLUjc4VUdERkhmMU02T2VvcVlFUEZNQ3V1VFJ0MTNybXlnVmtXeVlTYW9BekNSbVliYjlPR0pVbnNkQXR6RjF0RGdRL2dRSk5IWml4bWZYV3pkSUZZMTdEMWpEY3EzcjJHaCtpRmtEQ3JyaTJaS1FPczBVcEl5cG9GUUVWM0RGWlcxdjN2SzVrejVzWUxjWGxLeXVFWHRobEF1d1NKdGdqYUF1dWxqUU9nQW5tV1dVV1VwVlBQSEhSSzk5K05BSzU2QXZMTDRYR25nMFZEYVFHaFd2RGczM05MZFBPQ1dxRlJzdzB5WXdiQk12bDZYemZ3S2JsRVc3YTVxU3dNWm5ENXIyRUdBeVhoQTlra1VJSlpqYVJ2TjZGZzJtTGpYa25KQVZidGhzV2liNHdQNU9QdW9XczdqelBWNmhxZ1FtQytYZ1ZiVFRjeXlFQlp2SzhzVVZBMWIxUUNLNGordGlLcUlqclhFNndBUldsMzZLSVFZRFkxQVduUmdqSDMrK3U5VURBRjFiT0VrNVVuMDgwem8vMXo4ZUMvaG1tcXZ4OEhEWG80S1lxQnhNZkU5VTN0Q25vcUpRRWdyei85QkhOTlFlSk1HdFphMFNNdHhtL2NrbFRNcXJGTUpYTGdwdXZBUFBEdHpIQjZVTU9qVjlVN2NzOWpzQTMwaWRiS3NkWmNjVlZ3MFFla3FKY2hxL0RDdzg3dzIwUzd1dDhIMVdpZlpFS09MUlBvb1p2RVNDRmh6YW9xcFFUMjduendQSXlreTBJTkJuU0FpaytFQ09TdnF6a2pMSHhNR0cwUW9Pcjgxbm1nZFNaY1IySGkwSGpjRGZ5V2o4Nkx3d1JOdHROU0I1ZmF4RkdFZGxtRWRjS0xpNUZPWWl5d2xpR2JkVVRKTnVuaElJVzZRbm5UWndBMHBTY29nRklaUC9YSGx4QUgvTnJ4MmRyWW1GNXJ3aURjbGhmSHBtNXI0UFF1VTZEd0t5SEFaMDZLOENOVVpxZmVhVVFpTDhkVlpUV043Mm9SUjY0Y3hvbWxPeWt4a3oyblZJMkxVMXA1YUs5Z1QvUXVQZDZFSlF3c0VBNER4YnNvUTNrWVRYSjVBd0J1MnZuR0wya0E1UzdxMnhIbU9oUXY0Nk1LbkxOK3VTTDNzOWRRaEpvNWdoRlJyc25HR0FqcmJZcUhWcjd6Tk4xeFZwQkJsVVE1TVJvQ0RicGszVHN3V0VXZFRNTUJmZk05SFRuK1YxVlk1TElJbThrOWR1WmlqRWlGRlArZ215TWgwWnVhODJ4OHRQWi9nU1Z2Z3pYcGlTbWdoVG8rdE9EU1had21ycW44YWpyU0RFeE1hQ3QwS3NMa2hRMHBHMWptTjJFN0RDTXBHQTQwSS9hZXNTNlVya2tMN0E0VVNrZDNUT1dWZkNWd0FtMkliN3RYYjdKSFBwa3VQcFZFbTJPK1FyTWVERlJ4Ykx4K2VOWXpOdjF0Mkx1eUgyZDlqQ2U2cUJBWDQvM0FCU1VtcGFNN3NwbVJrdTlrQWJoS21IWjlaNVdWZVpIZUlpU3FGYkRwSHhPbFNBZXo0cjVZTklXdFdWVXVUMDdQNGRUU2pFcFMwY2prKzhmVHZBZ1NPc2N3c281azYyWVFXZGNkVXR2eDhrVVNUbUMvT2tibzlLSHhkc3ZYeWZQenplTEhZRXRDV0VnbWp4V0hMSjYxVUxVR203UDJNPQ=='

console.log(window.MyDecode(data));

const JSEncrypt = require('node-jsencrypt');
function rsa_encrypt(str) {
    let publickeystr = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhNhuAr4UjFv+cj99PbAQWWx9H \
	X+3jSRThJqJdXkWUMFMTRay8EYRtPFIiwiOUU4gCh4ePMxiuZJWUBHe1waOkXEFc \
	Kg17luhVqECsO+EOLhxa3yHoXA5HcSKlG85hNV3G4uQCr+C8SOE0vCGTnMdnEGmU \
	nG1AGGe44YKy6XR4VwIDAQAB";

    RSAUtilszb = new JSEncrypt();
    RSAUtilszb.setPublicKey(publickeystr);

    let nestr = RSAUtilszb.encrypt(str);
    return nestr;

}

function rsaString(str) {
    return encodeURIComponent(rsa_encrypt(str));
}

function rsa_enc(password) {
    return rsaString(password)
}

console.log(rsa_enc("123456"));

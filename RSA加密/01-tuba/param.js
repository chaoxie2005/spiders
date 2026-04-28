window = global

const JSencrypt = require('jsencrypt')

function get_rsa(text) {
    // 创建一个对象
    let jse = new JSencrypt()
    var publickeystr = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhNhuAr4UjFv+cj99PbAQWWx9H \
	X+3jSRThJqJdXkWUMFMTRay8EYRtPFIiwiOUU4gCh4ePMxiuZJWUBHe1waOkXEFc \
	Kg17luhVqECsO+EOLhxa3yHoXA5HcSKlG85hNV3G4uQCr+C8SOE0vCGTnMdnEGmU \
	nG1AGGe44YKy6XR4VwIDAQAB";
    jse.setPublicKey(publickeystr)
    newstr = encodeURIComponent(jse.encrypt(text))
    return encodeURIComponent(newstr)
}

console.log(get_rsa("15712345678"));

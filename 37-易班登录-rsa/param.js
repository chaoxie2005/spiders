const JSEncrypt = require('node-jsencrypt')

function get_rsa_pwd(pwd) {
    let  encrypt = new JSEncrypt();
    let p_key = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCu8i8g7iVeJt5+/iVZkbdMq4js\nzeOiUc3DMBkqfazwYQHXGLgsvSHgWR/I9qZv2Qdj7bTmdckaI6v3mD9aVTc+Zpy0\n1TT4XnpXtJpRwx9n7dRkLDAOMSoQVKEBzax78eialQRDGS941n/QX6aCEKVfTSDl\nTFiPmybRA6QbtBB3cQIDAQAB\n-----END PUBLIC KEY-----\n'
    encrypt.setPublicKey(p_key);
    return encrypt.encrypt(pwd);
}

console.log(get_rsa_pwd('123456'))
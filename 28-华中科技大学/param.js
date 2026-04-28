window = global;
const JSEncrypt = require("jsencrypt")

function rsa_enc(username, password) {
    var encrypt = new JSEncrypt();
    publicKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAI66BYoQkqV9myMFmO7DFJvOfXLhjQgie7eVq1ucG+SDoZ+C8QKMXnHJABxfufl/c9S4gMmil3KqsfcXyRcU54sCAwEAAQ=="
    encrypt.setPublicKey(publicKey);
    return {
        "ul": encrypt.encrypt(username),
        "pl": encrypt.encrypt(password)
    }
}



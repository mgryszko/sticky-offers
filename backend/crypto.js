var crypto = require('crypto');

var algorithm = 'aes192';
var key = 'sticky-offer';
var utf8Encoding = 'utf8';
var hexEncoding = 'hex';

function cipher(plainText) {
  var cipher = crypto.createCipher(algorithm, key);
  var crypted = cipher.update(plainText, utf8Encoding, hexEncoding);
  return cipher.final(hexEncoding);
}

function decipher(cryptedText) {
  var decipher = crypto.createDecipher(algorithm, key);
  var decrypted = decipher.update(cryptedText, hexEncoding, utf8Encoding);
  return decipher.final(utf8Encoding);
}

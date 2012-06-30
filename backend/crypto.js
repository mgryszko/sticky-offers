var crypto = require('crypto');

function cipher(plainText) {
  var cipher = crypto.createCipher('aes192','sticky-offer');
  var crypted = cipher.update(plainText,'utf8','hex');
  return cipher.final('hex');
}

function decipher(cryptedText) {
  var decipher = crypto.createDecipher('aes192','sticky-offer');
  var decrypted = decipher.update(cryptedText,'hex','utf8');
  return decipher.final('utf8');
}

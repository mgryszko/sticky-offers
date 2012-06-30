var qrcode = require('qrcode');

function encode(value) {
  qrcode.toDataURL(value, function(err, qr) {
      return qr;
  });
}

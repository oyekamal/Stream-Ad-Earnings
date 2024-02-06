const qrcode = require('qrcode');
const { generateAdUrl } = require('./adGenerator');

// Get user information and generate ad URL
const user = {
  id: '123',
  username: 'example',
  ads: ['ad1.png', 'ad2.png', 'ad3.png']
};

const adUrl = generateAdUrl(user);

// Generate QR code for ad URL
qrcode.toDataURL(adUrl, function (err, url) {
  if (err) {
    console.log('Error generating QR code:', err);
    return;
  }
  
  // Display QR code image on webpage
  const qrCodeImg = document.createElement('img');
  qrCodeImg.src = url;
  document.body.appendChild(qrCodeImg);
});

const adImages = [
  { src: 'fullscreen01.png', url: 'https://gamingedge.gg', duration: 10 },
  { src: 'fullscreen02.png', url: 'https://tapp.co', duration: 10 },
  { src: 'lowerthird01.png', url: 'https://amazon.com', duration: 10 },
  { src: 'lowerthird02.png', url: 'https://linustechtips.com', duration: 10 },
  { src: 'bottomleft01.png', url: 'https://gamingedge.gg', duration: 10 },
];

let currentAd = 0;

function generateQRCode(elementId, url) {
  const typeNumber = 0;
  const errorCorrectionLevel = 'L';
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(url);
  qr.make();
  const imgTag = qr.createImgTag(4);
  document.getElementById(elementId).innerHTML = imgTag;
}

function updateProgressBar(duration) {
  let progressBar = document.getElementById('progress-bar');
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';

  setTimeout(() => {
    progressBar.style.transition = `width ${duration}s linear`;
    progressBar.style.width = '100%';
  }, 50);
}

function changeAd() {
  let adImage = document.getElementById('ad-image');
  let adLayer = document.querySelector('.streamit-ad-layer');
  let qrCode = document.getElementById('qr-code');

  currentAd = (currentAd + 1) % adImages.length;
  adImage.src = adImages[currentAd].src;

  adLayer.className =
    'streamit-ad-layer ' + adImages[currentAd].src.replace('.png', '');
  generateQRCode('qr-code', adImages[currentAd].url);

  updateProgressBar(adImages[currentAd].duration);
}

window.onload = function () {
  generateQRCode('qr-code', adImages[currentAd].url);
  updateProgressBar(adImages[currentAd].duration);
  setInterval(changeAd, 10000);
};

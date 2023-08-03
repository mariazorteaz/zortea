const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'inline-block';
}

// Esconder todas as imagens exceto a primeira
for (let i = 1; i < images.length; i++) {
  images[i].style.display = 'none';
}

setInterval(showNextImage, 2000);

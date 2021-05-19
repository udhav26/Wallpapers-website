var i = 0;
var images = [];
var time = 2000;

images[0] = 'img/image1.jpg';
images[1] = 'img/image2.jpg';
images[2] = 'img/image3.jpg';
images[3] = 'img/image4.jpg';
images[4] = 'img/image5.jpg';
images[5] = 'img/image6.jpg';
images[6] = 'img/image7.jpg';
images[7] = 'img/image8.jpg';
images[8] = 'img/image9.jpg';
images[9] = 'img/image10.jpg';
images[10] = 'img/image11.jpg';
images[11] = 'img/image12.png';
images[12] = 'img/image13.png';
images[13] = 'img/image14.png';
images[14] = 'img/image15.png';
images[15] = 'img/image16.png';
images[16] = 'img/image17.png';
images[17] = 'img/image18.png';

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time)
}

window.onload = changeImg;
// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 20,
//     stretch: 0,
//     depth: 200,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   loop: true,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
// });



// var i = 0;
// var images = [];
// var time = 2000;

// images[0] = 'img/image1.jpg';
// images[1] = 'img/image2.jpg';
// images[2] = 'img/image3.jpg';
// images[3] = 'img/image4.jpg';
// images[4] = 'img/image5.jpg';
// images[5] = 'img/image6.jpg';
// images[6] = 'img/image7.jpg';
// images[7] = 'img/image8.jpg';
// images[8] = 'img/image9.jpg';
// images[9] = 'img/image10.jpg';
// images[10] = 'img/image11.jpg';
// images[11] = 'img/image12.png';
// images[12] = 'img/image13.png';
// images[13] = 'img/image14.png';
// images[14] = 'img/image15.png';
// images[15] = 'img/image16.png';
// images[16] = 'img/image17.png';
// images[17] = 'img/image18.png';

// function changeImg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImg()", time)
// }

// window.onload = changeImg;

// const img = document.querySelectorAll("img");
// img[0].src = "https://picsum.photos/200/301"; // image 1
// img[1].src = "https://picsum.photos/200/302"; // image 2
// img[2].src = "https://picsum.photos/200/303"; // image 3

// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('img');
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active');
//     const img = document.createElement('img');
//     img.src = image.src;
//     while(lightbox.firstChild){
//       lightbox.removeChild(lightbox.firstChild);
//     };
//     lightbox.appendChild(img);
//   });
// });

// lightbox.addEventListener('click', e=> {
//   if(e.target !== e.currentTarget) return;
//   lightbox.classList.remove('active');
// })




// ------------------navbar-----------------------------------

var util = {
  mobileMenu() {
    $("#nav").toggleClass("nav-visible");
  },
  windowResize() {
    if ($(window).width() > 800) {
      $("#nav").removeClass("nav-visible");
    }
  },
  scrollEvent() {
    var scrollPosition = $(document).scrollTop();
    
    $.each(util.scrollMenuIds, function(i) {
      var link = util.scrollMenuIds[i],
          container = $(link).attr("href"),
          containerOffset = $(container).offset().top,
          containerHeight = $(container).outerHeight(),
          containerBottom = containerOffset + containerHeight;

      if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
        $(link).addClass("active");
      } else {
        $(link).removeClass("active");
      }
    });
  }
};

$(document).ready(function() {
  
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
  
});

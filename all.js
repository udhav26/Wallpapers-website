const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild);
    };
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', e=> {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
})


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

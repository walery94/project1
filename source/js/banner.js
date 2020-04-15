'use strict';

// Переключение банера
$(document).ready(function () {
  var images = ['img/banner-desktop@1x.png', 'https://www.dw.com/image/44504125_303.jpg'];
  var imagesMobile = ['img/banner-mobile@1x.png', 'https://www.dw.com/image/44504125_303.jpg'];
  var delay = 5000;
  var position = 1;
  var isMobile = $(window).width() < 1024;

  setTimeout(function () {
    $('.banner').fadeTo(1000, 0.15);
  }, 4000);

  //Смена слайдеров через delay секунд
  setTimeout(function request() {
    var image = isMobile ? imagesMobile : images;
    $('.banner').css('opacity', '0.15');
    $('.banner').css('background-image', 'url(' + image[position] + ')');
    $('.banner').fadeTo(2000, 1);

    position++;
    if (imagesMobile.length - 1 < position) {
      position = 0;
    }

    setTimeout(function () {
      $('.banner').fadeTo(1000, 0.15);
    }, 4000);

    setTimeout(request, delay);

  }, delay);

  $(window).resize(function () {
    isMobile = $(window).width() < 1024;

    var image = isMobile ? imagesMobile : images;
    $('.banner').css('background-image', 'url(' + image[position] + ')');
  });
});

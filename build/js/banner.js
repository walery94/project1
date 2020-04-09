'use strict';

//Переключение банера
$(document).ready(function () {
  var images = ['img/banner-desktop@1x.png', 'https://www.dw.com/image/44504125_303.jpg'];
  var imagesMobile = ['img/banner-mobile@1x.png', 'https://www.dw.com/image/44504125_303.jpg'];
  var delay = 3000;
  var position = 0;
  var isMobile = $(window).width() < 1024;

  setTimeout(function request() {
    var image = isMobile ? imagesMobile : images;
    $('.banner').css('background-image', 'url(' + image[position] + ')');

    position++;
    if (imagesMobile.length - 1 < position) {
      position = 0;
    }

    setTimeout(request, delay);

  }, delay);

  $(window).resize(function () {
    isMobile = $(window).width() < 1024;

    var image = isMobile ? imagesMobile : images;
    $('.banner').css('background-image', 'url(' + image[position] + ')');
  })
});

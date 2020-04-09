'use strict';

//Переключение банера
$(document).ready(function () {
  var images = ['../img/banner-desktop@1x.png', 'https://www.dw.com/image/44504125_303.jpg', 'https://www.sgsgroup.com.ua/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg?la=en'];
  var delay = 3000;
  var position = 0;

  setTimeout(function request() {
    $('.banner').css('background-image', 'url(' + images[position] + ')');

    position++;
    console.log(images.length, position);
    if (images.length - 1 < position) {
      position = 0;
    }

    setTimeout(request, delay);

  }, delay);
});

'use strict'

$(document).ready(function(){
  $('.slider__list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    nextArrow: document.querySelector('.slider__button--next'),
    prevArrow: document.querySelector('.slider__button--prev'),
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows : false,
          slidesToShow: 1
        }
      }
    ]
  });
  $(window).on('load resize', function() {
    if ($(window).width() < 1024) {
        $('.events__items:not(.slick-initialized)').slick({
          dots: false,
          infinite: true,
          speed: 100,
          slidesToShow: 2,
          arrows : false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
        $('.store__items--shops:not(.slick-initialized)').slick({
          dots: false,
          infinite: true,
          speed: 100,
          slidesToShow: 2,
          arrows : false,
          variableWidth: true
        });
        $('.store__items--services:not(.slick-initialized)').slick({
          dots: false,
          rows: 2,
          infinite: true,
          speed: 100,
          slidesToShow: 2,
          arrows : false,
          variableWidth: true
        });
    } else {
        $(".events__items.slick-initialized").slick("unslick");
        $(".store__items--shops.slick-initialized").slick("unslick");
        $(".store__items--services.slick-initialized").slick("unslick");
    }
    });
});

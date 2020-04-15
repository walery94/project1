'use strict';

// Переключение банера
$(document).ready(function () {
  var images = ['img/banner-desktop@1x.png', 'https://www.dw.com/image/44504125_303.jpg'];
  var imagesMobile = ['img/banner-mobile@1x.png', 'https://www.dw.com/image/44504125_303.jpg'];
  var delay = 7000;
  var position = 1;
  var isMobile = $(window).width() < 1024;

  // Смена слайдеров через delay секунд
  setTimeout(function request() {
    var image = isMobile ? imagesMobile : images;
    $('.banner').css('opacity', '0');
    $('.banner').css('background-image', 'url(' + image[position] + ')');
    $('.banner').fadeTo(1000, 1);

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
  });

  // Открытие/закрытие меню
  var buttonOpenMenu = $('.site-navigation__open-menu');
  var buttonCloseMenu = $('.site-navigation__close-menu');
  var searchCategory = $('.search');
  var searchOpenMenu = $('.pagination__link--search');
  var fieldSearch = $('.pagination-menu__search-input');
  var fieldSearchMobile = $('.pagination__search-input');
  var fieldSearchId = $('#search-menu');

  // Открытие меню при клике на бургер
  if (buttonOpenMenu) {
    buttonOpenMenu.on('click', function (evt) {
      evt.preventDefault();
      $('body').addClass('menu-opened');
    });
  }

  // Закрытие меню и поиска по магазинам
  if (buttonCloseMenu) {
    buttonCloseMenu.on('click', function (evt) {
      evt.preventDefault();
      $('body').removeClass('menu-opened');
      $('body').removeClass('menu-opened--search');
      $('body').removeClass('stop-scroll');
      $('.search-shop').removeClass('search-shop__opened');
      $('.overlay').removeClass('overlay--opened');
      searchCategory.removeClass('search__open');
    });
  }

  // Открытие поиска по категориям при клике по иконке поиска
  if (searchOpenMenu) {
    searchOpenMenu.on('click', function (evt) {
      evt.preventDefault();
      $('body').addClass('menu-opened--search');
      $('body').addClass('stop-scroll');
      searchCategory.addClass('search__open');
      $('.overlay').addClass('overlay--opened');
    });
  }

  // Открытие поиска по категориям при фокусе поля поиска в мобильном разрешении
  if (fieldSearchMobile) {
    fieldSearchMobile.on('focus', function () {
      $('body').addClass('menu-opened--search');
      $('body').addClass('stop-scroll');
      searchCategory.addClass('search__open');
      $('.overlay').addClass('overlay--opened');
      fieldSearchId.focus();
    });
  }

  // Появление поиска по магазинма при начале печати в поле поиска
  if (fieldSearch) {
    fieldSearch.on('input', function () {
      if (fieldSearch.val().length > 0) {
        $('.search-shop').addClass('search-shop__opened');
        searchCategory.removeClass('search__open');
      } else {
        $('.search-shop').removeClass('search-shop__opened');
        searchCategory.addClass('search__open');
      }
    });
  }

  // Появление поиска по магазинма при начале печати в поле поиска в мобильном разрешении
  if (fieldSearchId) {
    fieldSearchId.on('input', function () {
      if (fieldSearchId.val().length > 0) {
        $('.search-shop').addClass('search-shop__opened');
        searchCategory.removeClass('search__open');
      } else {
        $('.search-shop').removeClass('search-shop__opened');
        searchCategory.addClass('search__open');
      }
    });
  }

  // Закрытие overlay при клике по нему
  if ($('.overlay')) {
    $('.overlay').on('click', function () {
      $('.search-shop').removeClass('search-shop__opened');
      $('.overlay').removeClass('overlay--opened');
      $('body').removeClass('menu-opened');
      searchCategory.removeClass('search__open');
      $('body').removeClass('menu-opened--search');
      $('body').removeClass('stop-scroll');
    });
  }

  // Открытие/Закрытие графика работы
  var body = $('body');
  var buttonClock = $('.site-navigation__item--clock');
  var buttonClockFooter = $('.address__item--time');
  var buttonClockShop = $('.page-shop__link--clock');
  var buttonClockCinema = $('.shop-info__link--clock');
  var buttonClockMenu = $('.address-menu__item--clock');
  var buttonClose = $('.schedule__button');
  var ESC = 27;

  if (buttonClock) {
    buttonClock.on('click', function (evt) {
      evt.preventDefault();
      body.addClass('schedule-opened');
    });
  }

  if (buttonClockFooter) {
    buttonClockFooter.on('click', function (evt) {
      evt.preventDefault();
      body.addClass('schedule-opened');
    });
  }

  if (buttonClockShop) {
    buttonClockShop.on('click', function (evt) {
      evt.preventDefault();
      body.addClass('schedule-opened');
    });
  }

  if (buttonClockCinema) {
    buttonClockCinema.on('click', function (evt) {
      evt.preventDefault();
      body.addClass('schedule-opened');
    });
  }

  if (buttonClockMenu) {
    buttonClockMenu.on('click', function (evt) {
      evt.preventDefault();
      body.addClass('schedule-opened');
    });
  }

  if (buttonClose) {
    buttonClose.on('click', function (evt) {
      evt.preventDefault();
      body.removeClass('schedule-opened');
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC) {
      evt.preventDefault();
      if (body.hasClass('schedule-opened')) {
        body.removeClass('schedule-opened');
      }
    }
  });

  // Скролл
  var pagination = $('.pagination');
  var inputSearch = $('#search');
  var paginationSearch = $('.pagination__search');
  var paginationScrollIcons = $('.pagination__scroll-icons');

  var checkYOffsetMobile = function () {
    if (window.pageYOffset < 56) {
      pagination.removeClass('pagination--scroll');
      inputSearch.attr('placeholder', 'Поиск всего');
    } else {
      pagination.addClass('pagination--scroll');
      inputSearch.attr('placeholder', 'Поиск');
    }
  };

  if (pagination && inputSearch) {
    $(document).scroll(checkYOffsetMobile);
    checkYOffsetMobile();
  }

  var checkYOffsetDesktop = function () {
    if (window.pageYOffset < 56) {
      paginationSearch.removeClass('visually-hidden');
      paginationScrollIcons.addClass('visually-hidden');
    } else {
      paginationSearch.addClass('visually-hidden');
      paginationScrollIcons.removeClass('visually-hidden');
    }
  };

  if (paginationSearch && paginationScrollIcons) {
    $(document).scroll(checkYOffsetDesktop);
    checkYOffsetDesktop();
  }

  // Валидация чекбокса
  var checkbox = document.querySelector('input[type=checkbox]');
  if (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        checkbox.setCustomValidity('');
      } else {
        checkbox.setCustomValidity('Дайте согласие на обработку персональных данных');
      }
    });
  }

  // Слайдер
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
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 1024) {
      $('.date__slider:not(.slick-initialized)').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      });
      $('.events__items:not(.slick-initialized)').slick({
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        arrows: false,
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
        arrows: false,
        variableWidth: true
      });
      $('.store__items--services:not(.slick-initialized)').slick({
        dots: false,
        rows: 2,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        arrows: false,
        variableWidth: true
      });
    } else {
      $('.date__slider.slick-initialized').slick('unslick');
      $('.events__items.slick-initialized').slick('unslick');
      $('.store__items--shops.slick-initialized').slick('unslick');
      $('.store__items--services.slick-initialized').slick('unslick');
    }
  });
});

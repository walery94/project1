'use strict';

$(document).ready(function () {
  // График работы
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
});

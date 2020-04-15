'use strict';

$(document).ready(function () {
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
});

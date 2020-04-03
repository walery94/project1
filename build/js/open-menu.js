'use strict';

$(document).ready(function(){

	var buttonOpenMenu = $('.site-navigation__open-menu');
  var buttonCloseMenu = $('.site-navigation__close-menu');
  var searchOpenMenu = $('.pagination__link');
  var fieldSearch = $('.pagination-menu__search-input');

  /**
   * Открытие меню при клике на бургер.
   */
	if (buttonOpenMenu) {
		buttonOpenMenu.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('menu-opened');
		});
	}

  /**
   * Закрытие меню и поиска по магазинам
   */
	if (buttonCloseMenu) {
		buttonCloseMenu.on('click', function (evt) {
			evt.preventDefault();
      $('body').removeClass('menu-opened');
      $('body').removeClass('stop-scroll');
      $('.search-shop').removeClass('search-shop__opened');
      $('.overlay').removeClass('overlay--opened');
		})
  }

  /**
   * Открытие меню при клике по поиску
   */
  if (searchOpenMenu) {
		searchOpenMenu.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('menu-opened');
		});
  }

  /**
   * Появление поиска по магазинма при начале печати в поле поиска
   */
  if (fieldSearch) {
		fieldSearch.on('input', function (evt) {
      $('.search-shop').addClass('search-shop__opened');
      $('.overlay').addClass('overlay--opened');
      $('body').addClass('stop-scroll');
		});
  }

  /**
   * Закрытие overlay при клике по нему
   */
  if ($('.overlay')) {
		$('.overlay').on('click', function (evt) {
      $('.search-shop').removeClass('search-shop__opened');
      $('.overlay').removeClass('overlay--opened');
		});
  }
});

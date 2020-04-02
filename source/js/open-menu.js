'use strict';

$(document).ready(function(){

	var buttonOpenMenu = $('.site-navigation__open-menu');
  var buttonCloseMenu = $('.site-navigation__close-menu');
  var searchOpenMenu = $('.pagination__link');
  var fieldSearch = $('.pagination-menu__search-input');


	if (buttonOpenMenu) {
		buttonOpenMenu.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('menu-opened');
		});
	}

	if (buttonCloseMenu) {
		buttonCloseMenu.on('click', function (evt) {
			evt.preventDefault();
      $('body').removeClass('menu-opened');
      $('body').removeClass('stop-scroll');
      $('.search-shop').removeClass('search-shop__opened');
      $('.overlay').removeClass('overlay--opened');
		})
  }

  if (searchOpenMenu) {
		searchOpenMenu.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('menu-opened');
		});
  }

  if (fieldSearch) {
		fieldSearch.on('input', function (evt) {
      $('.search-shop').addClass('search-shop__opened');
      $('.overlay').addClass('overlay--opened');
      $('body').addClass('stop-scroll');
		});
  }
});

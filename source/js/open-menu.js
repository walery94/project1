'use strict';

$(document).ready(function(){

	var buttonOpenMenu = $('.site-navigation__open-menu');
	var buttonCloseMenu = $('.site-navigation__close-menu');

	
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
		})
	}
});

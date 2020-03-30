'use strict';

$(document).ready(function(){
	
	var buttonClock = $('.site-navigation__item--clock');
	var buttonClockFooter = $('.address__item--time');
	var buttonClockShop = $('.page-shop__link--clock');
	var buttonClockCinema = $('.shop-info__link--clock');
	var buttonClose = $('.schedule__button');
	
	if (buttonClock) {
		buttonClock.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('schedule-opened');
		});
	}
	
	if (buttonClockFooter) {
		buttonClockFooter.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('schedule-opened');
		});
	}
	
	if (buttonClockShop) {
		buttonClockShop.on('click', function (evt) {
			evt.preventDefault();
			$('body').addClass('schedule-opened');
		});
	}
	
	if (buttonClockCinema) {
		buttonClockCinema.on('click', function (evt) {
			evt.preventDefault();
			console.log('hello');
			$('body').addClass('schedule-opened');
		});
	}
	
	if (buttonClose) {
		buttonClose.on('click', function (evt) {
			evt.preventDefault();
			$('body').removeClass('schedule-opened');
		});
	}
	
});

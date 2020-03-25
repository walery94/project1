'use strict';

$(document).ready(function(){

	var buttonOpenMenu = $('.site-navigation__open-menu--opened');
	var buttonCloseMenu = $('.site-navigation__close-menu--closed');
	var menuClosed = $('.wrapper-menu__close');
	var mainOpened = $('.main-wrapper__opened');
	var pagination = $('.pagination--opened');
	var paginationMenu = $('.pagination-menu--closed');
	var siteNavigationInfo = $('.site-navigation__info');
	var mainHeader = $('.main-header');
	var siteNavigationIcon = $('.site-navigation__icon');
	var siteNavigationLogo = $('.site-navigation__icon-logo');
	
	if (buttonOpenMenu) {
		buttonOpenMenu.on('click', function (evt) {
			evt.preventDefault();
			pagination.removeClass('pagination--opened');
			pagination.addClass('pagination--closed');
			paginationMenu.removeClass('pagination-menu--closed');
			paginationMenu.addClass('pagination-menu--opened');
			mainOpened.removeClass('main-wrapper__opened');
			mainOpened.addClass('main-wrapper__closed');
			menuClosed.removeClass('wrapper-menu__close');
			menuClosed.addClass('wrapper-menu__open');
			buttonOpenMenu.removeClass('site-navigation__open-menu--opened');
			buttonOpenMenu.addClass('site-navigation__open-menu--closed');
			buttonCloseMenu.removeClass('site-navigation__close-menu--closed');
			buttonCloseMenu.addClass('site-navigation__close-menu--opened');
			
			if ($(window).width() < 1024) {
				siteNavigationInfo.removeClass('site-navigation__info');
				siteNavigationInfo.addClass('site-navigation__info--none');
				mainHeader.addClass('main-header--menu');
				siteNavigationIcon.addClass('site-navigation__icon--white');
				siteNavigationLogo.addClass('site-navigation__icon-logo--blue');
			}
		});
	}
	
	if (buttonCloseMenu) {
		buttonCloseMenu.on('click', function (evt) {
			evt.preventDefault();
			pagination.removeClass('pagination--closed');
			pagination.addClass('pagination--opened');
			paginationMenu.removeClass('pagination-menu--opened');
			paginationMenu.addClass('pagination-menu--closed');
			mainOpened.removeClass('main-wrapper__closed');
			mainOpened.addClass('main-wrapper__opened');
			menuClosed.removeClass('wrapper-menu__open');
			menuClosed.addClass('wrapper-menu__close');
			buttonOpenMenu.removeClass('site-navigation__open-menu--closed');
			buttonOpenMenu.addClass('site-navigation__open-menu--opened');
			buttonCloseMenu.removeClass('site-navigation__close-menu--opened');
			buttonCloseMenu.addClass('site-navigation__close-menu--closed');
			
			if ($(window).width() < 1024) {
				siteNavigationInfo.removeClass('site-navigation__info--none');
				siteNavigationInfo.addClass('site-navigation__info');
				mainHeader.removeClass('main-header--menu');
				siteNavigationIcon.removeClass('site-navigation__icon--white');
				siteNavigationLogo.removeClass('site-navigation__icon-logo--blue');
			}
		})
	}
});

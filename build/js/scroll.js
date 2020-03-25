'use strict';

$(document).ready(function(){
	var pagination = $('.pagination');
	var inputSearch = $('#search');
	var paginationSearch = $('.pagination__search');
	var paginationScrollIcons = $('.pagination__scroll-icons');
	
	var checkYOffsetMobile = function() {
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
});

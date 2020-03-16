'use strict';

$(document).ready(function(){
	var pagination = $('.pagination');
	var inputSearch = $('#search');
	
	var checkYOffset = function() {
		if (window.pageYOffset < 56) {
			pagination.removeClass('pagination--scroll');
			inputSearch.attr('placeholder', 'Поиск всего');
		} else {
			pagination.addClass('pagination--scroll');
			inputSearch.attr('placeholder', 'Поиск');
		}
	};
	
	$(document).scroll(checkYOffset);
	checkYOffset();
});

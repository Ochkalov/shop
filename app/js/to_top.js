// скроллим наверх при нажатии на кнопку

var toTop = (function () {

		var init = function(){
				console.log('Инициализация модуля toTop');
				_setUpListners();
			},

			_setUpListners = function (){
				$('#toTop').on('click', _scrollUp); // вверх по клику))
				$(window).on('scroll', _scrollHide)
			},
			_scrollUp = function() { // собственно сам скролл
				console.log('click'),
				$('body, html').animate({scrollTop:0},800);
	    	},
	    	_scrollHide = function (){ // прячем-показываем кнопку
				var scrollTop = 0,
					toTop = $('.up-button');

					if (document.documentElement && document.documentElement.scrollTop) {
    		            scrollTop = document.documentElement.scrollTop;
           			 } 

				else { scrollTop = $(this).scrollTop();
            }
            if (scrollTop != 0) {
                toTop.fadeIn();
                console.log('in')
            }
            else {
            	console.log('out')
                toTop.fadeOut();
            }

		}; 

	return {
		init: init
	};

})();

toTop.init();
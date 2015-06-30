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
				var scrollTop = $(window).scrollTop();
				if($(this) !== 0) {
 
			$('.up-button').fadeIn();
 				console.log('in');
			} else {
 
			$('.up-button').fadeOut();
 				console.log('out');
		}
		}; 

	return {
		init: init
	};

})();

toTop.init();
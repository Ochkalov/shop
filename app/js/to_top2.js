$(document).ready(function(){

	/* --------- to top --------- */
	
	$('#toTop').on('click', function(e){
		e.preventDefault();
		$('body, html').animate({scrollTop: 0}, 300);
	});
	$(window).on('scroll', function(e){
      e.preventDefault();
			var scrollTop = $(document).scrollTop(),
			toTop = $('.up-button');

					if (document.documentElement && document.documentElement.scrollTop) {
    	            scrollTop = document.documentElement.scrollTop;
           			 } 

				 else { scrollTop = $(this).scrollTop();
            }
            if (scrollTop != 0) {
                toTop.fadeIn();
                // console.log('in')
            }
            else {
            	// console.log('out')
                toTop.fadeOut();
            }


	});
		

}); // - > ready_end;
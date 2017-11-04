// page init
jQuery(function(){
	smothscroll();
	headerfixed();
});

/********************
	header fixed
 ********************/

function headerfixed(){
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 100) {
		   $('#header').addClass('fixed-header');
		}
		else {
		   $('#header').removeClass('fixed-header');
		}
	});
}

/********************
	smoth scroll
 ********************/
 
function smothscroll(){
	
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		
		//smoothscroll
		$('#nav ul li a').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
		  
			var target = this.hash,
				menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 800, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
	
	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('#nav ul li a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('#nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}
}

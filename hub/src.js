$(document).ready(function(){
	/*mega menu*/
	$('#mega-menu-fresher li').on('hover', function(){
		 if ($(this).siblings().children().hasClass('active-mega-menu')) {
		 	$(this).siblings().children().removeClass('active-mega-menu');

		 }
			$(this).children().addClass('active-mega-menu');
		
});
	$('#mega-menu-fresher').on('mouseleave', function(){
		$('#mega-menu-fresher li').children().removeClass('active-mega-menu');
		$('#mega-menu-fresher li:first-child').children().addClass('active-mega-menu');
	});
	
	$('.navigation-bar ul.menu-list li#mega-menu-parent').on('hover',function(){
		$('#mega-menu-fresher').toggle();
	});
	$('#mega-menu-fresher ul li.vegies').on('mouseenter', function(){
		$(this).children('a.active-mega-menu').css('color','#fff');
	});
	$('#mega-menu-fresher ul li.vegies').on('mouseleave', function(){
		$(this).children('a.active-mega-menu').css('color','#000');
	});
	
});

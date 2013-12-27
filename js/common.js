$(document).ready(function() {

	// sub-menu
	
	$(".menu__item").hover(
		function(){
			$(this).find('.sub-menu').addClass('is-active');
			$(this).find('.menu-link').addClass('is-active');
		},
		function(){
			$(this).find('.sub-menu').removeClass('is-active');
			$(this).find('.menu-link').removeClass('is-active');
		}
	);

	// masonry bricks

	$('.masonry').masonry({
	  	columnWidth: 361,
	  	gutter: 10,
	  	itemSelector: '.post',
	  	stamp: '.sidebar'
	});

	// search
	

	$(".search input").focus(function() {
		$(this).addClass('is-active');
		$(this).parents('nav').find(".menu__item").css('margin', '0 23px');
	});
	$(".search input").blur(function(){
		$(this).removeClass('is-active');
		$(this).parents('nav').find(".menu__item").css('margin', '0 38px');
	});

	// scroll pane

	if ($(".scroll-pane").length >0 ){
        $('.scroll-pane').jScrollPane();
    } 
	

    // sticky elements

    function menu_scroll() {
    	var position = $(".js-topper").offset().top;
    	var	position_off = $(".topper-wrap").offset().top;

    	if ($(window).scrollTop() >= position) {
    		$(".js-topper").addClass('fixed');
    	}
    	if ($(window).scrollTop() <= position_off){
    		$(".js-topper").removeClass('fixed');
    	}
    	else {}
    } 
    
    if ($(".js-topper-wrap").length >0 ){
    	menu_scroll();
    } 
    
    var header_height = $(".topper-wrap").outerHeight();

    function author_scroll() {
    	var position2 = $(".js-article-block").offset().top;
    	var	position_off2 = $(".article").offset().top;
    	var pos_left = $(".article").offset().left + 770;

    	if ($(window).scrollTop() >= position2 - header_height) {
    		$(".js-article-block").addClass('fixed');
    		$(".js-article-block").css('left', pos_left);
    	}
    	if ($(window).scrollTop() <= position_off2 - header_height){
    		$(".js-article-block").removeClass('fixed');
    		$(".js-article-block").css('left', 770);
    	}
    	else {}
    }
	

    function info_scroll() {
    	var position3 = $(".js-article-info").offset().top;
    	var	position_off3 = $(".article").offset().top;
    	var pos_left2 = $(".article").offset().left + 778;

    	if ($(window).scrollTop() >= position3 - header_height) {
    		$(".js-article-info").addClass('fixed');
    		$(".js-article-info").css('right', pos_left2);
    	}
    	if ($(window).scrollTop() <= position_off3 - header_height){
    		$(".js-article-info").removeClass('fixed');
    		$(".js-article-info").css('right', 778);
    	}
    	else {}
    }
	
	if ($(".article").length >0 ){
    	info_scroll();
    	author_scroll();
    }


    $(window).scroll(function(){
      	if ($(".js-topper-wrap").length >0 ){
    		menu_scroll();
    	}
    	if ($(".article").length >0 ){
    		author_scroll();
    		info_scroll();
    	}
    });
    $(window).resize(function(){
    	if ($(".js-topper-wrap").length >0 ){
    		menu_scroll();
    	}
    	if ($(".article").length >0 ){
    		author_scroll();
    		info_scroll();
    	}
    });

});
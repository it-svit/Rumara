$(document).ready(function () {

	'use strict';


	lazyload();


/*
* desktop hover
*/
var flag = false,
st = null;

$(".desktop-menu > li").each(function () {
	$(this).hover(
		function(){
			var th = $(this);
			flag = true;
			clearTimeout(st);
			if (!th.hasClass('active') && $(window).width() > 768) {
				st = setTimeout(showItem, 300, th);
			}
		},
		function(){
			clearTimeout(st);
			flag = false;
			st = setTimeout(closeItem, 500);
		});
});

function showItem(th) {
	closeAll();
	th.addClass("active");
	var subMenu = th.find('.sub-menu');
	subMenu.fadeIn();
}

function closeItem() {
	if (!flag) {
		closeAll();
	}
}

function closeAll() {
	$('.desktop-menu .sub-menu').fadeOut("fast");
	$('.desktop-menu > li').removeClass("active");
}


/*
* mobile menu
*/
var	$hamburger = $(".hamburger"),
desktopMenu = $(".desktop-menu");

desktopMenu.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
$("#mobile-menu").children("ul").removeClass("desktop-menu")
.parent().mmenu({
	extensions: ["fx-menu-fade", "pagedim-black", "theme-white", "listview-justify", "border-none"],
	"offCanvas": {
		"position": "top",
		"zposition": "top"
	},
});

var api = $("#mobile-menu").data( "mmenu" );

api.bind( "open:start", function( $panel ) {
	$hamburger.addClass("is-active");
});

api.bind( "close:start", function( $panel ) {
	$hamburger.removeClass("is-active");
});

$hamburger.click(function() {
	api.close();
});


/*
* carousels
*/
$(".page-carousel-top").owlCarousel({
	items: 1,
	autoWidth: false,
	dots: true,
	loop: true,
	smartSpeed: 700,
	dragEndSpeed: 700,
	navSpeed: 700,
	lazyLoad: true
});

$(".collection-carousel").owlCarousel({
	items: 8,
	loop: true,
	smartSpeed: 700,
	dragEndSpeed: 700,
	navSpeed: 700,
	margin: 10,
	nav: true,
	lazyLoad: true,
	navText: ['<img src="img/ShapeCopy.svg" alt="left">', '<img src="img/Shape.svg" alt="left">'],
	responsive:{
		0:{
			items:2,
			center: false,
			autoWidth: false,
			slideBy: 2
		},
		480:{
			center: true,
			autoWidth: true,
		},
	}
});

$(".products-layout-carousel").owlCarousel({
	items: 4,
	loop: true,
	smartSpeed: 700,
	dragEndSpeed: 700,
	navSpeed: 700,
	margin: 5,
	slideBy: 3,
	nav: true,
	lazyLoad: true,
	navText: ['<img src="img/ShapeCopy.svg" alt="left">', '<img src="img/Shape.svg" alt="left">'],
	responsive:{
		0:{
			slideBy: 1,
			autoWidth: true,
			center: true,
			margin: 10,
		},
		1200:{
			slideBy: 3,
			autoWidth: true,
			center: true,
			margin: 10,				
		},
		1450:{
			items: 4,
		},
	}
});


	// owl carousel on resize
	$('.owl-carousel').on('resized.owl.carousel', function(event) {
		$(window).trigger("resize");
	});



	$('.close-btn').click(function() {
		$('.search-overlay').fadeOut();
		$("html").removeClass("overflow");
	});

	$('.search-btn').click(function() {
		$("html").addClass("overflow");
		$('.search-overlay').fadeIn();
	});

	$(".footer-menu__title").each(function() {
		$(this).click(function () {
			if ( $(window).width() < 550 )
				$(this).next().slideToggle("fast");
			$(this).toggleClass("active");
		});
	});


/*
* accordion on faq page
*/
	$('.acc_ctrl').on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next().stop().slideUp(300);
		} else {
			$(this).addClass('active');
			$(this).next().stop().slideDown(300);
		}
	});
	
	$('.acc_ctrl').click(function(){
		$(this).find('i').toggleClass('fa fa-minus fa fa-plus');
	});
/*
* end accordion on faq page
*/


	//show more testimonials
	$(".show-testimonials").click(function () {
		$(".testimonials-items").addClass("active");
	});


/*
* modal
*/
	$("#modal").iziModal();

	$(document).on('click', '.trigger', function (event) {
		event.preventDefault();
		$('#modal').iziModal('open');
	});
/*
* end modal
*/



	$(window).resize(function () {

	});



});

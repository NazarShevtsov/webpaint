$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1, //how many slides should show
		slidesToScroll:1, // how many slides should scroll by one press 
		easing:'ease', //type of animation by scrolling
		infinite:true, //do you want a infinite slider?
		autoplay:true, //autoplay scrolling slides
		autoplaySpeed:15000, //period of scrolling 
		pauseOnFocus:true, //pause scrolling when cursor click slide
		pauseOnHover:true, //pause scrolling when cursor hovers slide
		draggable:true, //if you want or dont want to swipe slides on PC
		swipe:true, //if you want or dont want to swipe slides on mobile
		touchThreshold:6, //how you should swipe on mobile <5 hard or >5 ease
		touchMove:false, //do you wanna swipe slide by clicking it or not
		fade:true,
	});
});


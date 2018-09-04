// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		dots: true,
		nav:false,
	})
	// Phần Clients
	$('.home-clients .owl-carousel').owlCarousel({
		loop: true,
		items: 5,
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1024:{
				items:5
			}
		}
		
	});
});

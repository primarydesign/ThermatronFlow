Template.home.onRendered(function() {


//(function(window, $, undefined){$(function() {
	var i = 1; //Global for svgs
	var heroSlider = $('#hero-slider').glide({
		animationDuration: 700,
		autoplay: false,
		dragDistance: false,
		hoverpause: false,
		keyboard: false,
		touchDistance: false,
		type: 'carousel',
		classes: {
			base: 'hero-slider',
			wrapper: 'hero-slider--wrapper',
			track: 'hero-slider--track',
			slide: 'hs-slide'
		},
		afterInit: animation,
		afterTransition: animation
	}).data('glide_api');

	window.heroSlider = heroSlider;

	function animation(index, slide) {
		var index = index === 1 ? 6 : index;
		var caption = slide.find('.hs-slide--caption');
		var popup = slide.find('.hs-slide--popup');
		var prev = $('.hs-'+(index-1));
		var headerTime, popupTime, trans;

		prev.find('.hs-slide--caption').velocity({
			opacity: 1
		});
		prev.find('.hs-slide--popup').velocity({
			translateX: [-200, 0],
			opacity: [0, 1]
		});

		headerTime = 3000;
		popupTime = 4000;
		if ($(window).width() > 800) {
			caption.velocity({
				opacity: 0
			},{
				delay: headerTime,
				duration: trans,
				easing: 'ease-in-out'
			});
			popup.velocity({
				translateX: [0, -200],
				opacity: [1, 0]
			},{
				delay: headerTime,
				duration: trans,
				easing: 'ease-in-out',
				complete: function() {
					var transition = window.setTimeout(function(){
						window.heroSlider.go('>');
						drawLine()
					}, popupTime);
				}
			});
		} else {
			setTimeout(function(){
				window.heroSlider.go('>');
				console.log(2)
				drawLine()
			}, headerTime + popupTime);
		}
	}

	function drawLine(){
		var svgs = ['a','b','c','d','e']
		if(i>4){ 
			i = 0;
			$('.'+svgs[svgs.length-1]).removeClass('path')
		}
			
			//console.log($('.'+svgs[i]).parent().html());
		
			$('.'+svgs[i]).addClass('path')
			$('.'+svgs[i-1]).removeClass('path')

		i++;

	}
	console.log('home');

//});})(window, jQuery);

});

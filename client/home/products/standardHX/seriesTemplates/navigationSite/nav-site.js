

Template.nav.onRendered(function(){ //TEMPORARY

//(function(window, $, undefined){$(function() {

	$('.nx-trigger').click(function(){
		console.log('open')
			
		if ($(this).hasClass('open')) { 
			openNav(); 
		}
		else { closeNav(); }
	});
	$('body > *:not(#mobile-nav)').click(function(){
		//closeNav();
		
	});

	$('*:not(.nx-trigger)').click(function(){
		console.log('clicked')
		//closeNav();
		
	});
	
	$('body:not(#mobile-nav)').click(function(){
		//console.log('mobile nav not cliekd')
	})
		

	$('#mobile-nav').click(function(){
		console.log('mobile nav cliekd')
	})
	$(document).on("click", "div:not('#mobile-nav')",function() {
		console.log('mobile nav not cliekd')
		console.log($(this).attr('id'));
		console.log(this)
		//if($(this).attr('id') != 'mobile-header'){
			//closeNav()
		//}
		if($(this).attr('id') == undefined){
			return closeNav()
		}
	})
	

	$('#mobile-nav li:not(".has-children, .return")').click(function(){
		console.log('no kids')
		closeNav()
			
	})

	
	$('.has-children > a').click(function(){
		navNext($(this));
	});
	$('.return > a').click(function(){
		navBack($(this)); 
	});
	$(window).resize(function(){
		closeNav();
	});

	/*

	$('#navbar .nav-tier, #navbar .has-children').hover(function(){
		if ($(this).hasClass('has-children') & !$(this).children('.nav-tier').hasClass('dirty') ) {
			$(this).children('.nav-tier').addClass('dirty');
		} else if ($(this).hasClass('nav-tier') & !$(this).hasClass('dirty') & !$(this).hasClass('nt-1')) {
			$(this).addClass('dirty');
		}
	});
	$('#navbar .nav-tier:not(.nt-1), #navbar .has-children').mouseleave(function(){
		var $tier;
		if ($(this).hasClass('nav-tier')) $tier = $(this);
		else $tier = $(this).children('.nav-tier');
		$tier.css('display','block');
		var after = setTimeout(function(){
			$tier.css('display','none');
		}, 150);
	});

	*/
	function navNext(selected){
		selected.next('#mobile-nav .nav-tier').removeClass('nx-right');
		selected.closest('#mobile-nav .nav-tier').addClass('nx-left');
	}
	function navBack(selected){
		selected.closest('#mobile-nav .nav-tier').addClass('nx-right');
		selected.parents('#mobile-nav .nav-tier:eq(1)').removeClass('nx-left');
	}
	function closeNav(){
		// window.heroSlider.play();
		$('.nx-trigger').removeClass('close').addClass('open');
		$('body').removeClass('nav-in-view');
		$('#mobile-nav').removeClass('nx-visible').addClass('nx-hidden');
		setTimeout(function(){
			$('#mobile-nav .nt-1').removeClass('nx-right nx-left').delay('30000').find('#mobile-nav .nav-tier').removeClass('nx-left').addClass('nx-right');
		}, 250);
	}
	function openNav(){
		// window.heroSlider.pause();
		$('.nx-trigger').removeClass('open').addClass('close');
		$('body').addClass('nav-in-view');
		$('#mobile-nav').removeClass('nx-hidden').addClass('nx-visible');
	}

//});})(window, jQuery);
})

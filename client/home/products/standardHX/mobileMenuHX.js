

Template.mobileMenu.onRendered(function(){
	$('#mobileMenu a').toggleClass('shrink');
})
Template.mobileMenu.events({
	'click':function(){
		$('#mobileMenu a').toggleClass('shrink');
	}	
		
})



Template.mobileMenuRobust.onRendered(function(){
	$('#mobileMenu a').toggleClass('shrink');
})
Template.mobileMenuRobust.events({
	'click':function(){
		$('#mobileMenu a').toggleClass('shrink');
	}	
		
})


Template.mobileMenu.onRendered(function(){
	$(window).ready(function(){
		
		$('#series-informants-nav a').click(function(e,i){
					
			console.log($(this).attr('href'))
			

			var section = $($(this).attr('href'))

			var sectionTop = section.offset().top - $('#navbar').height() - 100 //;
				$("html, body").animate({
				scrollTop: sectionTop
			}, "slow");


		})	
	
	})


})
Template.mobileMenuRobust.onRendered(function(){


	$(window).ready(function(){
		
		$('#series-informants-nav a').click(function(e,i){
					
			console.log($(this).attr('href'))
			

			var section = $($(this).attr('href'))

			var sectionTop = section.offset().top - $('#navbar').height() - 100 //;
				$("html, body").animate({
				scrollTop: sectionTop
			}, "slow");


		})	
	
	})

})

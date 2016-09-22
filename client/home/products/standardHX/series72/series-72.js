Template.series72.onRendered(function(){
	$('.download').attr({target: '_blank', href  : '../pdfs/sizing-diagram-series-72.pdf'});
});




Template.series72.onRendered(function(){


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

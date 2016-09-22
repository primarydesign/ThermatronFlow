FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render("nav",{template: "home"});		
	}
});


var products = FlowRouter.group({
	prefix: '/products'
});
/*
products.route( '/:product', {
	action: function() {
		console.log( "We're viewing a list of documents." );
		BlazeLayout.render("nav",{content: "a"});

		//
		
	}
});
*/
// http://app.com/documents/:_id
products.route( '/:product', {
	action: function(e) {
		console.log( "We're viewing a single document." );
		console.log(e);
		console.log(e.product);
		
		BlazeLayout.render("nav", {template:e.product});


		
	}
});


/*So I should have one nav template that I render 
 *
 *  This template needs to put all of the content in the push div for mobile, but also display the content if on desktop 
 *  */



FlowRouter.route('/:page',{
	action: function(e, i){
		BlazeLayout.render("nav", {template:e.page});


	}	
})


/*
FlowRouter.route('/about',{
	action: function(){
		BlazeLayout.render("nav",{content: "about"});
		
	}
})

FlowRouter.route('/communities',{
	action: function(){
		BlazeLayout.render("nav",{content: "summit"});
		
	}
})



FlowRouter.route('/home',{
	action: function(){
		console.log('home')
		BlazeLayout.render("nav",{content: "home"});
		
	}
})*/


/*
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
*/



FlowRouter._scrollToHash = function(hash) {//detects scroll and assigns to hashtag
	console.log(hash);
	var section = $(hash);
	console.log(section);
	if (section.length) {


		//console.log($('.section-wrapper').())
		console.log($(hash))
			console.log($(hash + '.title'))
			console.log($(hash + '.title').height())

			/*console.log($(hash)[0].style)*/

			//console.log($('#navbar').height()) //This needs to be figured out for all pages 

			console.log('width')
			console.log($(window).width());
	
			if($(window).width() > 768){
				var diff = 100; 
			} else {
				var diff = -40; 
			}

			console.log(diff);
			

			var sectionTop = section.offset().top - $('#navbar').height() - diff; // - 100 //;
		$("html, body").animate({
			scrollTop: sectionTop
		}, "slow");
	}
};



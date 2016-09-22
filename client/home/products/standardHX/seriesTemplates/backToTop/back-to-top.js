Template.nav.events({
	'click #back-to-top': function(){
		//$('#back-to-top').css({'right': '-103px'});
		
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
	}
})

Template.nav.onCreated(function() {

    var self = this;
    self.zoom = new ReactiveVar(0);
    $(window).on('scroll', function(e) {	  
	 	var scroll = $(window).scrollTop();
		//console.log(scroll);
		if(scroll > 5000){
			//console.log('maybe show back to top');
		}
    })
});




/*	
    Template.series72.helpers({
    zoom: function(e) { 
        // This will be called when 'zoom' changes, 
        // so treat this as your events function
	console.log(e)
	console.log( Template.instance().zoom.get() )
        return Template.instance().zoom.get(); 
    }
});


Template.series72.onRendered(function(){
	var sectionTop = 400;
	$("html, body").animate({
      scrollTop: sectionTop
    }, "slow");
	console.log('adfsa');
	
})
*/

/*
Template.series72.onRendered(function() {

		console.log('why not');

//(function(window, $, undefined){$(function() {

	if ($('#back-to-top').length === 0) return;

	var back = $('#back-to-top');
	var footer = $('#site-footer, #home-footer');
	var offset = 25;

	back.on('click', function(e) {
		$('html').velocity('scroll', {
			duration: 400,
			easing: 'easeInSine'
		});
	});

	$(window).on('scroll', function() {
		var scroll = $(this).scrollTop();
		offset += $(document).height;
		offset -= $(window).height();
		offset -= footer.height();


		console.log(scroll);
	console.log('back to top');

		
		if (scroll > $(this).height()) back.show();
		else back.hide();

		if (scroll > offset) back.css('color', '#ffffff');
		else back.css('color', '#010C39');
	});

//});})(window, jQuery);
	console.log('back to top');


})
*/


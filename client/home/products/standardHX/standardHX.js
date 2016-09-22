Template.standardHX.onRendered(function(){
	console.log('THERMATRON ROCKS!');
	var arr = $('.holder').text().split(' ');
	var result = '<span class="rotate"> ' +
		      arr.join(' </span><span class="rotate">') + 
		     '</span>';
	$('.holder').html(result);
	$('.rotate:nth-child(39)').after('<br><br>')
	$('.rotate:nth-child(108)').after('<br><br>')
	$('.rotate:nth-child(118)').after(
			'<span class="rotate"><a href="tel:+19786878844"> 978.687.8844</a></span><span class="rotate"> or</span><span class="rotate"><a href="mailto:info@thermatroneng.com"> INFO@THERMATRONENG.COM</a></span><br><br>'
			)
	
});



Template.standardHX.onRendered(function(){

	$(document).on('scroll', function() {

		if($(this).scrollTop() < $('#standard-hx-intro').height()){
			$('#series-informants-nav').removeClass('stick');		
		}
		
		
		if($(this).scrollTop() >= $('#series-informants-nav').offset().top - 200){
			$('#series-informants-nav').addClass('stick');
		}
	})

})
/*

Template.standardHX.onCreated(function() {

    $(window).on('scroll', function(e) {
	var h = $('#series-informants-nav').hasClass('sticky-nav'); 
	var t = $(window).scrollTop();
	if( t > 740 && h){
		$('#series-informants-nav').removeClass('sticky-nav');
	} else if(t < 740 && !h) {
		$('#series-informants-nav').addClass('sticky-nav');
	} 

    })
})*/

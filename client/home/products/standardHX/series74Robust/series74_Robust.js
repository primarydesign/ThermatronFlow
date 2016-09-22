Template.series74_Robust.onRendered(function(){
	var arr = $('#series74_Robust .holder').text().split(' ');

	var result = '<span class="rotate"> ' +
              arr.join(' </span><span class="rotate">') + 
             '</span>';
	$('#series74_Robust .holder').html(result);

$(document).on('scroll', function() {

	if($(this).scrollTop() < $('#header').height()){
		$('#series-informants-nav').removeClass('stick');		
	}
    	
	
    	if($(this).scrollTop() >= $('#series-informants-nav').offset().top - 200){
		$('#series-informants-nav').addClass('stick');
    	}
})



})





Template.rhombus.onRendered(function(){

	$('#series74_Robust .rhombus').each(function(i,e){
		
		var a = $(this).text().split(' ');
		var r = '<span class="rotateRhombus"> ' +
              		a.join(' </span><span class="rotateRhombus">') + 
	   	        '</span>';

		$(this).html(r)
		
	
	})
	
})	

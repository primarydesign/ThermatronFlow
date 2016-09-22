Template.models.onRendered(function(){
	$('.model-exhibit--image').each(function(i,obj){
		var s = $(this).find('img').attr('src').split('.');
		var t = s[0].replace('img/models/sketch-','../pdfs/') + '.pdf';
		$(this).parent().find('a').attr({target: '_blank', href  : t});	
	})
});

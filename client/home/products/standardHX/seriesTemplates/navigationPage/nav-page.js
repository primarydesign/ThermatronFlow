Template.nav.onRendered(function() {
/*
(function(window, $, undefined){$(function() {
/*
	if ($('.serial-nav').length === 0) return;

	var sticky = $('.serial-nav');
	var links = sticky.find('li');
	var anchors = sticky.find('li a');

	anchors.on('click', function(e) {
		e.preventDefault;
	});

	links.on('click', function() {
		var href = $(this).find('a').attr('href');
		var offset = $(document).width() < 1100 ? 60 : 100;
		var select = '[data-nav-catch="' + href + '"]';

		if (sticky.hasClass('is-stuck')) {
			offset = (offset + 90) * -1;
		} else {
			offset = (offset + 157) * -1;
		}

		if (href.charAt(0) !== '#') return;

		$(select).velocity('scroll', {
			duration: 400,
			easing: 'easeInSine',
			offset: offset
		});

	});

	var offset = sticky.offset().top - ($(window).height() < 1100 ? 60 : 100 );
	$(window).on('scroll', function() {

		if (sticky.is('per-stuck')) return;

		if ($(window).width() < 700) {
			sticky.removeClass('is-stuck').addClass('not-stuck');
		} else if ($(this).scrollTop() >= offset) {
			sticky.removeClass('not-stuck').addClass('is-stuck');
		} else {
			sticky.removeClass('is-stuck').addClass('not-stuck');
		}
	});
	console.log('nav page');

});})(window, jQuery);

	console.log('nav page');
	*/
})

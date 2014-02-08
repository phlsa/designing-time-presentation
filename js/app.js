var slides = $('.slide');
var currentSlide = 0;
slides.hide();
$(slides[currentSlide]).show();

$('button#next').click(function(e) {
	if ( currentSlide < slides.length-1 ) {
		currentSlide++;
		slides.hide();
		$(slides[currentSlide]).show();
	}
});

$('button#back').click(function(e) {
	if ( currentSlide > 0 ) {
		currentSlide--;
		slides.hide();
		$(slides[currentSlide]).show();
	}
});


$('.move-btn').on('click', function(e) {
	var self = $(e.currentTarget);
	var what = $('#' + self.attr('data-subject') );
	what.toggleClass('moved');

	if (what.attr('id') === 'sq5') {
		_.delay(function() {
			what.toggleClass('move-finished');
		}, 800);
	}
});
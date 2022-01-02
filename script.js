$(function() {
	$('#see-products').click(() => {
		setTimeout(() => {
			$([document.documentElement, document.body]).animate({
		        scrollTop: $("#product-section").offset().top - 75+'px'
		    }, 600);
		});
	});
});
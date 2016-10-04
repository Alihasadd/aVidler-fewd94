$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width() >= 875){
			$('#mobile-nav').hide();
		}
	})


$('#burger').click(function(){
	$('#mobile-nav').slideToggle();
});

})
$(document).ready(function () {
	$('#myForm').submit(function(event){
		console.log(event);

		var the_input = $('#name-input').val();
		console.log(the_input);

		$('#target').html;('the_input');
		e.preventDefault();
	});
});

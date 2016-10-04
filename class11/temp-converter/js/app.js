
$(document).ready(function(){
	var rawTemp;
	var convTemp;
	var rawUnit;
	var convUnit;



	$('#submit').click(function(){
		rawTemp = $('#input').val();
		rawUnit = $('select').val();
		if(rawUnit === 'f'){
			convTemp = (rawTemp - 32)/1.8;
			convUnit = 'C';
		}else{
			convTemp = (rawTemp * 1.8) + 32;
			convUnit = 'F';
		}
		$('#output').html(convTemp + " " + + &deg; + convUnit);
	});
});
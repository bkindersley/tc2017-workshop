var counter = 0;

jQuery(document).ready(function(){

	buttonClicked = function(){
		counter += 1;
		$('#counter').text(counter);
		alert("You have clicked the button "+ counter + " times.");
	}

});
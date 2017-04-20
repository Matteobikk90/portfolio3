$(document).ready(function(){

	var $hamburger = $(".hamburger");
		
		$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		});

	$hamburger.focusout(function(){
	    $(".navbar-collapse").collapse('hide');
	    	$hamburger.removeClass("is-active");
	});
	
});
$(document).ready(function(){
	
	$(".nav a").click( function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	$(".views, .button").click(function() {
		$("html, body").stop(true,true).animate({ scrollTop: $(document).height()/4 }, "slow");
	});
	
	$("#contact").click(function() {
		$("html, body").stop(true,true).animate({ scrollTop: $(document).height() }, "slow");
	});
	
});
$(document).ready(function(){
	
	$(".nav a").click( function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	$(".views").click(function() {
		$("html, body").animate({ scrollTop: $(document).height()/2 }, "fast");
	});
	
	$("#contact").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	});
	
});
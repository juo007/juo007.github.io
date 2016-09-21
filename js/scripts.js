$(document).ready(function(){
	
	$(".nav a").click( function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	$(".views, .button").click(function() {
		$("html, body").animate({ scrollTop: $(document).height()/4 }, "fast");
	});
	
	$("#contact").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "fast");
	});
	
});
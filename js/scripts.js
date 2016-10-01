$(document).ready(function(){
	var page = $("html, body");
	
	$(".nav a").click( function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	$(".views, .next").click(function() {
		
		/*
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
		page.stop();
		});
		
		page.animate({ scrollTop: $(this).height()/4 }, 'slow', function(){
		page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		*/

		$("html, body").stop(true,true).animate({ scrollTo: $(document).height()/4 }, "fast");
				
	});
	
	$("#contact").click(function() {
		$("html, body").stop(true,true).animate({ scrollTop: $(document).height() }, "fast");
	});
	
});
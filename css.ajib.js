

$(document).ready(function(){
	var BASE_URL = $("body").attr("id");
	
	function detect(){
		var sw = screen.width;
		var sh = screen.height;
		var window_height = $(window).height();
		var window_width = $(window).width();
		var tinggi = $(document).height();
		var lebar = $(document).width();
		/*
		alert('Screen resolution is '+window_width+'x'+window_height+'.');
		alert('Screen resolution is '+sw+'x'+sh+'.');
		*/
		
		var global_height = (sh+10);
		
		$("#box_hero").css({"min-height":global_height+"px"});
		$(".box_opacity").css({"min-height":global_height+"px"});
		$("#box_hero").height(global_height+"px");
		$(".box_opacity").height(global_height+"px");
		
		$("#container").css({"min-height":global_height+"px"});
		$("#container").height(global_height+"px");
		
		var tagline = $(".tagline").height();		
		var m_top = (global_height-tagline)/2;
	}
	
	detect();
	/*
	setTimeout(detect(),1000);
	setInterval(detect(),3000);
	*/
	
	$("html").on("click","#toggle",function(e){
		$("#navbar_toggle").toggle();
		$(".search").toggle();
		return false;
	});
	
});


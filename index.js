/*主畫面上色*/
$("#again").hide();
$("#color_colorit").hide();
$("#colorit").on("click" , function(){
	$("#color_black").hide();
	$("#colorit").hide();
	$("#again").show();
	$("#color_colorit").show();
});
$("#again").on("click" , function(){
	$("#color_black").show();
	$("#colorit").show();
	$("#again").hide();
	$("#color_colorit").hide();
});
/*側欄動畫*/
$("#menu").on("click",function(){
	$(".sidebar *").animate({left:"0px"},500);
});
$("#close").on("click",function(){
	$(".sidebar *").animate({left:"-1200px"},500);
});
$("#about_white").mouseenter(function(){
	$("#about_black").show();
	$("#about_white").hide();
	
});
$("#location_white").mouseenter(function(){
	$("#location_black").show();
	$("#location_white").hide();
});
$("#shops_white").mouseenter(function(){
	$("#shops_black").show();
	$("#shops_white").hide();
});

$("#about_black").mouseleave(function(){
	$("#about_black").hide();
	$("#about_white").show();
	
});
$("#location_black").mouseleave(function(){
	$("#location_black").hide();
	$("#location_white").show();
});
$("#shops_black").mouseleave(function(){
	$("#shops_black").hide();
	$("#shops_white").show();
});

$(".about").hide();
$(".location").hide();
$(".shops").hide();
$("#about_black").on("click" , function(){
	$(".about").show();
	$(".main").hide();
	$(".location").hide();
	$(".shops").hide();
	$(".sidebar *").animate({left:"-1200px"},500);
	 });
$("#about_close").on("click" , function(){
	$(".about").hide();
	$(".location").hide();
	$(".shops").hide();
	$(".main").show();
	})
$("#location_black").on("click" , function(){
	$(".location").show();
	$(".about").hide();
	$(".shops").hide();
	$(".main").hide();
	$(".sidebar *").animate({left:"-1200px"},500);
	});
$("#location_close").on("click" , function(){
	$(".about").hide();
	$(".location").hide();
	$(".shops").hide();
	$(".main").show();
	})	
$("#shops_black").on("click" , function(){
	$(".shops").show();
	$(".main").hide();
	$(".about").hide();
	$(".location").hide();
	$(".sidebar *").animate({left:"-1200px"},500);
	});	
$("#shops_close").on("click" , function(){
	$(".about").hide();
	$(".location").hide();
	$(".shops").hide();
	$(".main").show();
	})	
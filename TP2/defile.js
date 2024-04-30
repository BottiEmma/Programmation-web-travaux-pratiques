$(document).ready (function(){
    $("img").hide();
    var sel = $("defile").has("img");
    var i = 0;
    $("img").eq(0).show();
    $("#b").click(function(){
	$("img").eq(i).hide();
	if(i<3){i++;}else{i=0;}
	$("img").eq(i).show();
    });
    $("#b").hide();
    function def(){
	$("img").eq(i).css({
	    position : 'relative'
	}).animate({
	    right : '+=2000'
	});
	 if(i<3){i++;}else{i=0;}
	$("img").eq(i).css({
	    position: 'relative'
	}).animate({
	    show: 'slide'
	});
	
    }
    var int = setInterval(def, 3000);
});

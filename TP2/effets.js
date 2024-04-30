$(document).ready (function(){
    $("select").hide();
    var masque = "Masquer";
    $("#b").click(function(){
	$("select").show("slow");
	$("#b").prop("value","Masquer");
	var clicks = $(this).data('clicks');
	if (clicks){
	    $("select").hide("slow");
	    $("#b").prop("value","Afficher");
	}else{ 
	    $("select").show("slow");
	    $("#b").prop("value","Masquer");
	}
	$(this).data("clicks", !clicks);
    });
    $("p").hide();
    $("#b2").click(function(){
	$("p").show();
	$("p").animate({
	    marginLeft: "150%",
	    height: "toggle"
	}, "slow");
    });
});

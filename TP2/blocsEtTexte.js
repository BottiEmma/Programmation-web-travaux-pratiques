$(document).ready (function(){
    $('.blocRouge').css({border:"red solid", margin:"auto", width:"50%"});
    $('.blocRouge').mouseover(function(){console.log("Attention, vous entrez dans la zone rouge");});
    var nbUp=0;
    var nbBas=0;
    var isDown=false;
    $('.blocRouge').mouseup(function(){
	$(this).css("border-color","red");
	var nouveau = $("<p class='down'>down </p>");
	$('header').append(nouveau);
	nouveau.click(supprime);
	nbBas++;
	nouveau.append(nbBas);
	refreshBlock();
    }).mousedown(function(){
	isDown=true;
	$(this).css("border-color","green");
	var nouveau = $("<p class='up'>up </p>");
	$('header').append(nouveau);
	nouveau.click(supprime);
	nbUp++;
	nouveau.append(nbUp);
	refreshBlock();
    });
    $(document).mouseup(function(){
	if(isDown){
	    $(this).css("border-color","red");
	var nouveau = $("<p class='down'>down </p>");
	$('header').append(nouveau);
	nouveau.click(supprime);
	nbBas++;
	nouveau.append(nbBas);
	refreshBlock();
	    isDown=false;
	}
    });
    var supprime = function(){
	$(this).hide();
	if($(this).hasClass("up")) nbUp--;
	else nbBas--;
	refreshBlock();
    };
    function refreshBlock(){
	$("#haut").text(nbUp);
	$("#bas").text(nbBas);
    };
});

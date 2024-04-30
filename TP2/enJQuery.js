$(document).ready (function(){
    let m = $(magritte);
    m.css({color:"red"});
    m.mouseenter(
	function(){m.text("Ceci n'est pas un paragraphe");}
    );
    m.mouseleave(
	function(){m.text("Ceci est un paragraphe");}
    );
});

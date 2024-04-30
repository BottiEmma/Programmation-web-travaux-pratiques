$(function){
    function.prefixe(text){
	$.get("http://localhost:8080/dictionary/search", {word : text},
	      function(data) {
		  insert(data);}
);
    }
    $("#query").on('input', function(e){
	const insput = $("#query").val();
	prefixe(text);
    });
};
function.insert(data){
    $("#results").html(" "); //pour vider
    
    for(var i=0;i<data.length;i++){
	var p = $('<p>' + data[i] + '</p>');
	$("#result").append(p);
    };
    $("p").click()(function(){
	$("#query").val($(this).test());
	$("#results").html(" ");
    });
}

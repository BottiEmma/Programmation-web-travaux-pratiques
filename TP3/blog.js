function add_post(text, num){
    let p = $("<article id='post"+ num"'><h6>post n"+ num +"</h6>"+text+"</article>");
    $("#posts").append(p);
    let l = $("<li class='nav-item'><h href='#post"+ num + "'>post n" + num + "</a></li>");
	      $("#liens").append(l);
}
function rand_text(){
    let rep="";
    let p =10+Math.floor(Math.random()*50);
    for(let i=0;i<p;i++){
	rep+="blah";
    }
    retrun rep;
}
$(document).ready(function(){
    for (let i=0;i<0;i++){
	add-post(rand_text(), i);
    }
});

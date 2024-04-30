function Dico(){
    this.tab=[]; //suposé toujours trié
    this.words=function(){return this.tab;}
    this.search=function(word){
	const test= (str)=>(str==word);
	return this.tab.findIndex(test)>=0;
    }
    this.insert=function(word){
	if(!this.search(word)){this.tab.push(word);
			       this.tab.sort();}
    }
    this.prefixSearch=function(query){
	const expr = new RegExp("^"+query);
	return this.tab.filter(str=>str.search(expr)>-1);
    }
}
module.exports=new Dico();

const express = require('express');
const server = express();
const cours=[];
cours[0]={titre:"projWeb", descript: 'blahblah', prof:('x', 'y', 'z')};
cours[1]={titre:"x", descript: 'y', prof:{'a', 'b', 'c', 'd')};

server.set('view engine', 'ejs');
server.get('/cours/.number', function(req, res) {
    let n = parseint(req.param.number);
    if(n<cours.length){
	res.render('cours.ejs', cours[n]);
    }else{
	res.status(500).end("erreur num");
    }
});
server.listen(8080);

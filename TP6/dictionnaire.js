var dico = require('./Dico');
dico.insert("test");
dico.insert("machin");
dico.insert("matruc");
dico.insert("chose");
dico.insert("oui");
dico.insert("non");

const express = require("express");
const server = new express();
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.get('/dictionary', function(req,res){res.json(dico.words());});
server.get('/dictionary/search', function(req,res){res.json(dico.prefixSearch(req.query.word));});
server.post('/dictionary', function(req,res){
    dico.insert(req.body.word);
});
server.get('/', function(req,res){res.sendFile("dico.html", {root: 'public'});});

server.use(express.static('public'));

server.listen(8080);

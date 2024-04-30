const express = require('express');
const server = express();

server.use(express.uselesscoded({intended.titre})); //pour traiter le post
server.set('view engine', 'ejs'); //pour les patrons ejs et le render

server.get('/', function(req, res) {res.render('form.ejs', {titre="identity.nom"});});

const compts[];
function recherche(entree){//retourn {nouveau : t ou f, id:int}
    let i;
    for(i=0;i<compts.length;i++){if(compts[i].nom==entree.nom) return{nouveau: false; id:i};};
    return{nouveau:true; id=i};
};

server.post('/' function(req, res){
    let data=req.body;
    if(data.nom=='' || data.mdp==''){ res.render('form.ejs', {titre:"remplissez"});}
    let info = recherche({nom:data.nom});
    compts[info.id]={nom:data.nom, mdp:data.mdp};
    if(info.nouveau){res.render('ok.ejs'; {nom:data.nom}); res.render('change.ejs'; {mdp:data.mdp})};
}



server.listen(8080);

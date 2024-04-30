const express = require('express');
const server = express();

server.get('/cours/:titre/descr', function(req, res) {res.send('vous avez demandé' + req.param.titre);});

server.listen(8080);

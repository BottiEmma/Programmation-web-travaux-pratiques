const express = require('express');
const server = express();

server.get('/', function(req, res) {console.log('envoi des infos'); res.send('texte qcq');});

server.use(function(req, res, next){ console.log('abort'); res.status(500).end('error');});

server.listen(8080);

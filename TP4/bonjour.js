const http = require('http');
const fs = require('fs');

const server = http.createServer( function(req, res){
    fs.readFile('f1', function(err, data) {
	if(err){ res.writeHead(500); res.write('pb interne');
	      }else{
	    let body = data.toString('utf-8');
		  res.writeHead(200, {
		      'Content-Length': body.length,
		      'Content-Type': 'text/plain'
		  });
		  res.write('<html>');
		  res.write('<p>' + body + '</p>');
		  res.write('</html>');
	      }
		  //res.end();
    });
});

server.listen (8080);

var http = require('http')
var fs = require("fs")
var express = require('express');
var app = express();
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./chapter1');

http.createServer(function(request,response){
	//response.writeHead(200,{"Content-Type":"text/plain"})
	//response.end("Hola Mundo Segundo intento")
	fileServer.serve(req, res);
	
	fs.readFile("chapter1/index.html", function(err, data){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	})
}).listen(process.env.PORT)


//setting middleware
//app.use(express.static('/chapter1')); //Serves resources from public folder

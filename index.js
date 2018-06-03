var http = require('http')
var fs = require("fs")
var express = require('express');
var app = express();
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./chapter1/js');


var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
var serve = serveStatic('chapter1/js', {'index': ['index.js']})


http.createServer(function(request,response){
	//response.writeHead(200,{"Content-Type":"text/plain"})
	//response.end("Hola Mundo Segundo intento")
	//fileServer.serve(request, response)
	//serve(request, response, finalhandler(request, response))

	fs.readFile("chapter1/index.html", function(err, data){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	})
	
	
}).listen(process.env.PORT)


//setting middleware
//app.use(express.static('/chapter1')); //Serves resources from public folder

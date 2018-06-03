var http = require('http')
var fs = require("fs")

http.createServer(function(request,response){
	//response.writeHead(200,{"Content-Type":"text/plain"})
	//response.end("Hola Mundo Segundo intento")
	fs.readFile("chapter1/index.html", function(err, data){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(data);
	response.end();
}
}).listen(process.env.PORT)
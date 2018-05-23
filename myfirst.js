var http = require("http");
var dt = require('./myfirstmodule');

http.createServer(function(requet, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write("The date and time are currently: " + dt.myDateTime());

	response.end('\n hello world');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
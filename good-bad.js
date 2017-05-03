var http = require("http");

var GOODPORT = 7000;
var BADPORT = 7500

function praise(request, response){
	response.end("Awesome!");
}

function condemn(request, response){
	response.end("Damn!");
}

var server1 = http.createServer(praise);
var server2 = http.createServer(condemn);


server1.listen(GOODPORT, function(){
	console.log("Server listen on: http://localhost:%s", GOODPORT);
});

server2.listen(BADPORT, function(){
	console.log("Server listen on: http://localhost:%s", BADPORT);
});
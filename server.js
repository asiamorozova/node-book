//server module file

var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "test/plain"});
    response.write("Motorhead");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started")




// var http = require("http"); 

// http.createServer(function(request, response){ 
// response.writeHead(200, {"Content-Type": "text/plan"});
// response.write("Judas Priest rocks");
// response.end();
// }) .listen(8888);



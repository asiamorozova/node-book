//server module file

//add to onRequest() function the logic needed to find out which url path the browser requested
var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + "received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Witchfinder General is cool");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;







// var http = require("http");

// function onRequest(request, response) {
//     console.log("Request received.");
//     response.writeHead(200, {"Content-Type": "test/plain"});
//     response.write("Motorhead");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log("Server has started")




// var http = require("http"); 

// http.createServer(function(request, response){ 
// response.writeHead(200, {"Content-Type": "text/plan"});
// response.write("Judas Priest rocks");
// response.end();
// }) .listen(8888);



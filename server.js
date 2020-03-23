 var http = require("http");
var url = require("url");

function start(route, handle) {
function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
route(handle, pathname, response, request);

// request.setEncoding("utf8");

// request.addListener("data", function(postDataChunk) {
// postData += postDataChunk;
// console.log("Received POST data chunk '"+
// postDataChunk + "'.");
//  });

//  request.addListener("end", function() {
//  route(handle, pathname, response, postData);
//  });
}
 http.createServer(onRequest).listen(8888);

console.log("Server has started")
 }

 exports.start = start;





// //server module file

// //add to onRequest() function the logic needed to find out which url path the browser requested
// var http = require("http");
// var url = require("url");

// function start() {
//     function onRequest(request, response) {
//         var pathname = url.parse(request.url).pathname;
        
//         //console.log("Request for " + pathname + "received.");

//         //route(handle, pathname);

//         response.writeHead(200, {"Content-Type": "text/plain"});
//         //var content = route(handle, pathname)
//         //response.write("Witchfinder General is cool");
//         response.write(body);
//         response.end();
//     }
//     function upload(response) {
//         console.log("Request handler 'upload' was called.");
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write("Hello Upload");
//         response.end();
//          }
        
//     // http.createServer(onRequest).listen(8888);
//     // console.log("Server has started.");
// }

// exports.start = start;
// exports.upload = upload;






// // var http = require("http");

// // function onRequest(request, response) {
// //     console.log("Request received.");
// //     response.writeHead(200, {"Content-Type": "test/plain"});
// //     response.write("Motorhead");
// //     response.end();
// // }

// // http.createServer(onRequest).listen(8888);

// // console.log("Server has started")




// // var http = require("http"); 

// // http.createServer(function(request, response){ 
// // response.writeHead(200, {"Content-Type": "text/plan"});
// // response.write("Judas Priest rocks");
// // response.end();
// // }) .listen(8888);



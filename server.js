//server module file

var http = require("http"); 

http.createServer(function(request, response){ 
response.writeHead(200, {"Content-Type": "text/plan"});
response.write("Judas Priest rocks");
response.end();
}) .listen(8888);


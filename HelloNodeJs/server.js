var http = require("http");
var url = require("url");


function start(route) {
    function onRequest(request, response) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.write("\n\r");
        response.write("just a test for the project!!");
        response.write("\n\r");
        response.write("Go Home!!");
        
        response.write("\n\r");
        response.write("route config:");
        var pathName = url.parse(request.url).pathname;
        
        route(pathName);

        response.write("request path:"+pathName);
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
}

//function start(){
//    console.log("Request handler 'start' was called.");
//}

function upload(){
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;

console.log("nodejs server has start!!");
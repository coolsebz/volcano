console.log("Starting HTTP server: ");

var http = require("http");
var url = require("url");

var port = 8888;


function start (route, handle) {
    function onRequest(request, response) {
    	var postData = "";
    	var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

		if(request.method == 'POST') 
		{
			var data = '';

			request.on('data', function(chunk) {
				data+=chunk;
			});
			request.on('end', function() {
				route(handle, pathname, response, data);
			});
		}
		else 
		{
			response.writeHead(404, {"Content-Type" : "text/plain"});
			console.log("Non POST request");
			response.end();
		}

    }

    http.createServer(onRequest).listen(port);
    console.log("Volcano HTTP server on port " + port + " on 127.0.0.1");

}


exports.start = start;

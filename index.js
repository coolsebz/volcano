var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {}


//POST for the real actions
handle["/"] = requestHandlers.handlePush;


//POST to test te json parsing
// handle["/parse_git_message"] = requestHandlers.parseMessage;


//POST to test the email part
// handle["/send_fake_email"] = requestHandlers.sendEmail;


server.start(router.route, handle);

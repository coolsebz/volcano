// var querystring = require('querystring');
var parser = require('./parser');
var email = require('./email');
var targetServer = require('./targetServer');
var configUtils = require('./configUtils');


//console colors for beautiful typing
//Old school ANSI!
var red, blue, reset, green, white;
red   = '\033[31m';
blue  = '\033[34m';
green = '\033[32m';
white = '\033[37m';
reset = '\033[0m';


var config = {};

configUtils.getOptions( function (err, data) {
    if (err)
    {
        return -1;
    }
    else
    {
        config = data;
        console.log(white + "Read  config file" + reset);
    }
});

//The function that handles a generic git push
function handlePush (response, postData)
{
    var parsed = parser.parseMessage(postData);

    console.log(" this is the parsed data: ");
    console.log(JSON.stringify(parsed));

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end();
}


//The function that handles the email sending
function sendEmail (response, postData)
{
    console.log("EMAIL: finishing job, sending email");
}


//    PRIVATE FUNCTIONS


//function


//module exports
//these are the functions visible from the outside
exports.handlePush = handlePush;
// exports.parseMessage = parseMessage;
// exports.sendEmail = sendEmail;
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

    console.log(blue + "New commit with message: ");
    console.log(white + parsed.commits[0].message + reset);


    //The git pull
    console.log(white + "Getting the latest ... " + reset);
    targetServer.getLatest(config.gitFolder, config.gitRepo);
    console.log(green + "DONE!" + reset);


    //Restarting the server
    console.log(white + "Restarting ... " + reset);
    targetServer.startLatest(config.launch, config.launchArgs);
    console.log(green + "DONE!" + reset);


    console.log(red + getCompleteTime() + reset);

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end();
}


//The function that handles the email sending
function sendEmail (response, postData)
{
    console.log("EMAIL: finishing job, sending email");
}


//    PRIVATE FUNCTIONS


function getCompleteTime ()
{
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    return datetime;
}


//module exports
//these are the functions visible from the outside
exports.handlePush = handlePush;
// exports.parseMessage = parseMessage;
// exports.sendEmail = sendEmail;
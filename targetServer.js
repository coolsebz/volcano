var sys = require('sys')
var exec = require('child_process').exec;
var child;

function getLatest (folder, repo)
{

}

function startLatest (folder, execName)
{

}


//		PRIVATE

function cd (folder)
{
	child = exec("cd " + folder, function (error, stdout, stderr) {
		sys.print('stdout: ' + stdout);
		sys.print('stderr: ' + stderr);
		if (error !== null) {
	    	console.log('exec error: ' + error);
		}
	});
}

function gitPull (repo)
{

}

function start (execName)
{

}

exports.getLatest = getLatest;
exports.startLatest = startLatest;
var sys = require('sys')
var exec = require('child_process').exec;
var child;


function getLatest (folder, repo)
{
	cd(folder);
	gitPull();
}


function startLatest (folder, execName, args)
{
	cd(folder);
	start(execName);
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

function gitPull ()
{
	child = exec("git pull ", function (error, stdout, stderr) {
		sys.print('stdout: ' + stdout);
		sys.print('stderr: ' + stderr);
		if (error !== null) {
	    	console.log('exec error: ' + error);
		}
	});
}

function start (execName, args)
{
	child = exec(execName + " " + args, function (error, stdout, stderr) {
		sys.print('stdout: ' + stdout);
		sys.print('stderr: ' + stderr);
		if (error !== null) {
	    	console.log('exec error: ' + error);
		}
	});
}

exports.getLatest = getLatest;
exports.startLatest = startLatest;
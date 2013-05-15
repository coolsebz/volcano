var fs = require ('fs');
var configFile = "config.json";

function getOptions (callback)
{
	try
	{
		fs.readFile(configFile, function (err, data) {
			if (err) 
			{
				throw err;
			}
			else
			{
				console.log(data.toString());
				callback(null, JSON.parse(data.toString()));
			}
		});
	}
	catch (err)
	{
		console.log("Failed to read the config file > " + configFile);
		console.log("Please make sure the file is there and not under restricted access");
		callback(err, null);
	}
}


exports.getOptions = getOptions;
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
				var parsed = parse(data.toString());
				callback(null, parsed);
			}
		});
	}
	catch (err)
	{
		console.log('\033[31m' + "Failed to read the config file > " + configFile);
		console.log('\033[0m');
		console.log("Please make sure the file is there and not under restricted access");
		callback(err, null);
	}
}

function parse (data)
{
	var parsedData = {};
	try
	{
		parsedData = JSON.parse(data);
	}
	catch (err)
	{
		console.log('\033[31m' + "Invalid config file!" + '\033[0m');
		return null;
	}

	return parsedData;
}

exports.getOptions = getOptions;
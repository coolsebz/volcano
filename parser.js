//Top level message parser
function parseMessage (postData)
{
	return parseJson(postData);
}

function parseJson (plainText)
{
	//this would be the level where the first data could be analyzed
	//stuff like what email pushed what and so on
	var data = {};

	try
	{
		data = JSON.parse(plainText);
	}
	catch(err)
	{
		console.log("Incorrect data posted");
		console.log(err.message);
	}

	return data;
}

function parseOtherFormat (plainText)
{
	throw { 
			name : "NotImplementedException", 
			message : "A custom parser must first be implemented"
		};
}

exports.parseMessage = parseMessage;
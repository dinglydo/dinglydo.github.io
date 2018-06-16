function loadJSON(callback)
{
	var xobj = new XMLHttpRequest();
		xobj.open("GET", "https://api.jsonbin.io/b/5b233147bd4c0f35a0b46958", false);
		xobj.onreadystatechange = function()
		{
			if (xobj.readyState === 4 && xobj.status === 200)
			{
				callback(xobj.responseText);
			}
		}
	xobj.send(null);
}

var ArticlesJSON; // All articles should be stored in this article
loadJSON(function(response)
	{
		ArticlesJSON = JSON.parse(response);
	});
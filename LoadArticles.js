function loadJSON(callback)
{
	var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open("GET", "Articles.json", true);
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
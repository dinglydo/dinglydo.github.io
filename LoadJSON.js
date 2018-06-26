function loadJSON(json, callback)
{
	var xobj = new XMLHttpRequest();
		var githubContent = "https://raw.githubusercontent.com/dinglydo/dinglydo.github.io/master/";
		xobj.open("GET", githubContent + json, true);
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
var WebsitesJSON; // Same goes for websites
loadJSON("Articles.json", function(response)
	{
		LoadedJSON.JSON = ArticlesJSON = JSON.parse(response);
		LoadedJSON.Name = "Articles";
		ListThings();
	});
loadJSON("Websites.json", function(response)
	{
		WebsitesJSON = JSON.parse(response);
	});
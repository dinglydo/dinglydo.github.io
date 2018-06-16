function loadJSON(callback)
{
	var xobj = new XMLHttpRequest();
		xobj.open("GET", "https://raw.githubusercontent.com/dinglydo/dinglydo.github.io/master/Articles.json", false);
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
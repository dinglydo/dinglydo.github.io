var ArticleSideBar = document.getElementById("ArticlesSidebar");
var SelectedItem; // I KNOW THIS IS REALLY BAD CODE...I MIGHT CHANGE IT LATER

function FindIndex(Title)
{
	for (var x = 0; x < ArticlesJSON['Articles'].length; x++)
	{
		if (ArticlesJSON['Articles'][x].Title == Title)
		{
			return x;
		}
	}
	return undefined;
}

function Select(elem)
{
	// ADD SELECT CLASS
	if (SelectedItem != undefined)
		SelectedItem.classList.remove("Selected");
	SelectedItem = elem;
	SelectedItem.classList.add("Selected");
	
	// VIEW ARTICLE
	var Article = document.getElementById("Article");
	var index = FindIndex(elem.innerText);
	var ArticleJSON = ArticlesJSON['Articles'][index];
	var HTML = '<h2><a href="Articles\\' + ArticleJSON.File + '">Article Viewer</a></h2>\n<h4>' + ArticleJSON.Title + '</h4>\n<p><strong>Subject</strong>: ' + ArticleJSON.Subject + '</p>\n<p><strong>Date Published</strong>: ' + ArticleJSON['Date published'] + '</p>\n<hr>\n<p><strong>Abstract</strong>: '+ ArticleJSON.Abstract + '</p>\n';
	Article.innerHTML = HTML;
}

window.onload = function()
{
	var Articles = [];
	var HTML = "<ul>\n";
	for (var x = 0; x < ArticlesJSON['Articles'].length; x++)
	{
		Articles.push(ArticlesJSON['Articles'][x]);
		HTML += '<li><a href="#" onclick="Select">' + Articles[x].Title + '</a></li>\n';

	}
	HTML += '</ul>\n';
	ArticleSideBar.innerHTML += HTML;
	var LIs = ArticlesSidebar.getElementsByTagName("li");
	Select(LIs[0]); // Select the first element

	for (var x = 0; x < LIs.length; x++)
	{
		LIs[x].addEventListener("click", function(){Select(this);});
	}
}
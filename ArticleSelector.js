// I KNOW THIS IS REALLY BAD CODE...I MIGHT CHANGE IT LATER
var ArticleSideBar = document.getElementById("ArticlesSidebar");
var SelectedItem;
var LoadedJSON = {JSON : {}, Name : ""}; // ListState can either be ARTICLES or WEBSITES

function FindIndex(Title)
{
	for (var x = 0; x < LoadedJSON.JSON['Things'].length; x++)
	{
		if (LoadedJSON.JSON['Things'][x].Title == Title)
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
	var ArticleJSON = LoadedJSON.JSON['Things'][index];
	var HTML = '<h2><a target="_blank" href="' + ArticleJSON.File + '">Open File</a></h2>\n<h4>' + ArticleJSON.Title + '</h4>\n<p><strong>Tags</strong>: ' + ArticleJSON.Tags + '</p>\n<p><strong>Date Published</strong>: ' + ArticleJSON['Date published'] + '</p>\n<hr>\n<p><strong>Description</strong>: '+ ArticleJSON.Description + '</p>\n';
	Article.innerHTML = HTML;
}

function ListThings()
{
	ArticleSideBar.innerHTML = '<h2><a href="#" onclick="ChangeListState()">'+ LoadedJSON.Name +'</a></h2>';
	var Things = [];
	var HTML = "<ul>\n";
	for (var x = 0; x < LoadedJSON.JSON['Things'].length; x++)
	{
		Things.push(LoadedJSON.JSON['Things'][x]);
		HTML += '<li><a href="#" onclick="Select">' + Things[x].Title + '</a></li>\n';

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

function ChangeListState()
{
	if (LoadedJSON.JSON === ArticlesJSON)
	{
		LoadedJSON.JSON = WebsitesJSON;
		LoadedJSON.Name = "Websites";
		ListThings();
	}
	else
	{
		LoadedJSON.JSON = ArticlesJSON;
		LoadedJSON.Name = "Articles";
		ListThings();
	}
}

// Global variables are defined in data.js

init();

function init() // Initializes the site by loading everything neccessary
{
	renderCategories();
	loadCategories();
	select(Projects[SelectedCategory].Link);
	loadProjects(SelectedCategory, projectsElement);
}

function renderCategories()
{
	for (var key in Projects)
	{
		var html = "<li id='" + key + "'onclick='categoryChangeEvent(this)' class>" + key + "</li>";
		categories.innerHTML += html;
	}
}

function loadCategories() // Loads the HTML document of the categories
{
	var categories = document.getElementById("categories");
	for (var key in Projects)
		Projects[key].Link = document.getElementById(key);
}

function select(element) // Underlines the category in CSS, hence why it's "selected"
{
	for (var key in Projects)
		if (Projects[key].Link == element)
		{
			element.className = "selected";
			SelectedCategory = key;
		}
		else Projects[key].Link.className = "";
}

function loadProjects(category, parent) // Loads projects from Projects and displays them according to the category
{
	parent.innerHTML = "";
	for (var index in Projects[category])
	{
		if (index != "Link")
		addProject(Projects[category][index], parent);
	}
}

function addProject(project, parent) // Adds a project and displays
{
	var html = generateHTML(project.Name, project.Description, project.ImagePath, project.Link, project.Date);
	parent.innerHTML += html;
}

function generateHTML(name, description, imagePath, link, date) // Generates the HTML of a project
{
	var header;
	if (imagePath == "None")
		header = '<div><a href="' + link + '" target="_blank"></a>';
	else
		header = '<div><a href="' + link + '" target="_blank"><img src="' + imagePath + '"></a>';
	var h1 = '<h1><a href="' + link + '" target="_blank">' + name + '</a></h1>';
	var date = "<i>Last updated: " + date + "</i>"
	var p = "<p>" + description + "</p>";
	return header + h1 + date + p + "</div>";
}

function categoryChangeEvent(element)
{
	select(element);
	loadProjects(SelectedCategory, projectsElement);
}

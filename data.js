var Projects = 
{
	"Software" : 
	[
		{
			"Name" : "Job Tracker",
			"Description" : "This is an application that is meant to track any person's job by keeping logs of when the shift starts and ends. The goal was to write it as modular as possible, while also including unit tests. However, due to a lack of time, this project has been cancelled.",
			"ImagePath" : "JobTracker.png",
			"Link" : "https://github.com/dinglydo/JobTracker",
			"Date" : "October 2019" // Latest update
		},

		{
			"Name": "Chip8 Interpreter",
			"Description" : "This project is merely a highlight in my hobby. Last I worked on it was 2 years ago, so it's buggy and the code is ugly, however, it was a step up from anything else I was doing, hence why it's showcased here.",
			"ImagePath": "Chip8.jpg",
			"Link" : "https://github.com/dinglydo/Chip8-Interpreter",
			"Date" : "May 2018"
		},
	],

	"Articles":
	[
		{
			"Name" : "What Are Moles?",
			"Description" : "Describes what a mole is and what it isn't, in a single page. Article was ported from my site to Medium for easier access.",
			"ImagePath" : "Moles.jpg",
			"Link" : "https://medium.com/@amrojjeh/what-are-moles-ec867a145ad5",
			"Date" : "November 2018"
		},
		{
			"Name" : "Dimensional Analysis",
			"Description" : "How to intuively think of Dimensional Analysis, in a single page",
			"ImagePath" : "DA.png",
			"Link" : "https://medium.com/@amrojjeh/dimensional-analysis-681170039376",
			"Date" : "November 2019"
		}
	]
}

var SelectedCategory = "Software";
var projectsElement = document.getElementById("projects");

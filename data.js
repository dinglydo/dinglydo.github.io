var Projects = 
{
	"Software": 
	[
		{
			"Name": "Discord Deception Games",
			"Description": "A Town of Salem inspired discord bot. Includes a bunch of mini-games. Custom games coming soon, almost ready for release.",
			"ImagePath": "bot.jpg",
			"Link":"https://github.com/Persian-Eagle/Town-of-Salem-Bot",
			"Date": "November 2020"
		},
		{
			"Name": "Job Tracker",
			"Description": "This is an application that is meant to track any person's job by keeping logs of when the shift starts and ends. The goal was to write it as modular as possible, while also including unit tests. However, due to a lack of time, this project has been cancelled.",
			"ImagePath": "JobTracker.png",
			"Link": "https://github.com/dinglydo/JobTracker",
			"Date": "October 2019" // Latest update
		},
		{
			"Name": "Chip8 Interpreter",
			"Description": "This project is merely a highlight in my hobby. Last I worked on it was 2 years ago, so it's buggy and the code is ugly, however, it was a step up from anything else I was doing, hence why it's showcased here.",
			"ImagePath": "Chip8.jpg",
			"Link": "https://github.com/dinglydo/Chip8-Interpreter",
			"Date": "May 2018"
		}
	],
	"Education":
	[
		{
			"Name": "Recursion",
			"Description": "A simple explanation of recursion",
			"ImagePath": "https://miro.medium.com/max/2400/0*Q46XI8JJjmOHMdL7",
			"Link": "https://amrojjeh.medium.com/recursion-932aeac3f669?sk=b87ed7083f5daebbc91d8f1793ffe80b",
			"Date": "January 2021"
		},
		{
			"Name": "1024 or 1000?",
			"Description": "There is a misunderstanding that occurs much too often between developers. Is a killobit 1024 or 1000 bits?",
			"ImagePath": "https://miro.medium.com/max/2400/1*7ilUOC7hinanyhbc8JkqYA.png",
			"Link": "https://amrojjeh.medium.com/1024-or-1000-22b7a01efe29?sk=dee2586d3bf0b2bccaa800e9e3035f7d",
			"Date": "May 2020"
		}
	]
}

var SelectedCategory = "Software";
var projectsElement = document.getElementById("projects");

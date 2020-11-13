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
	"MDF":
	[
		{
			"Name": "MDF #1: DDG Overview",
			"Description": "A brief overview of what's being worked on",
			"ImagePath": "https://miro.medium.com/max/700/1*11So2GzqQNkqUTJpPBbtdQ.png",
			"Link": "https://dinglydo.medium.com/monday-development-facts-1-bff9bc969719?sk=c973ebcfc48bc42bc7feb4466c258442",
			"Date": "November 2020"
		}
	]
}

var SelectedCategory = "Software";
var projectsElement = document.getElementById("projects");

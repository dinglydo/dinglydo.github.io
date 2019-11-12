var Projects = 
{
	"Software" : 
	[
		{
			"Name" : "Job Tracker",
			"Description" : "This is an application that is meant to track any person's job by keeping logs of when the shift starts and ends. The goal was to write it as modular as possible, while also including unit tests. However, due to a lack of time, this project has been cancelled. I'll consider picking it up once again later.",
			"ImagePath" : "JobTracker.png",
			"Link" : "https://github.com/dinglydo/JobTracker",
			"Date" : "October 2019" // Latest update
		},

		{
			"Name": "Chip8 Interpreter",
			"Description" : "This program is meant to interpret basic chip8 instructions. Everything works except for sound. It's written in C++ and SDL. Chip8 is a virtual processor that is meant to teach programmers how to emulate CPU instructions.",
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
		}
	]
}

var SelectedCategory = "Software";
var projectsElement = document.getElementById("projects");
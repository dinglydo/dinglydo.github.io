var Projects = 
{
	"Software" : 
	[
		{
			"Name" : "Party bot",
			"Description" : "A Town of Salem inspired discord bot. Includes a bunch of mini-games. Custom games coming soon, almost ready for release.",
			"ImagePath" : "bot.jpg",
			"Link" :"https://github.com/Persian-Eagle/Town-of-Salem-Bot",
			"Date" : "June 2020"
		},
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
		}
	],

	"Articles":
	[
		{
			"Name" : "It was worth a shot",
			"Description" : "The first story to build on the world set by the Doctor's Note",
			"ImagePath": "camp.svg",
			"Link" : "https://medium.com/@amrojjeh/it-was-worth-a-shot-cd7af5fe1ba1?source=friends_link&sk=8a7a6d5ec270c275e5eaf6520c253dbf",
			"Date" : "July 2020"
		},
		{
			"Name" : "Doctor's Note",
			"Description": "A story I wrote out of context to act as a rough sketch for a world that's getting built on, as shown by the newer story, <i>It Was Worth a Shot</i>.",
			"ImagePath" : "doctor.svg",
			"Link" : "https://medium.com/@amrojjeh/doctors-note-455b4b3ec221?source=friends_link&sk=f8a2410e08bad2a841530263b5c462e8",
			"Date": "July 2020"
		},
		{
			"Name" : "The Grading System",
			"Description" : "My thoughts on the current American high school grading system.",
			"ImagePath" : "grading_system.jpg",
			"Link" : "https://medium.com/@amrojjeh/the-grading-system-9e3adf8ccff9?sk=2b73a880d69f3c57ff633fbc92431c9f",
			"Date" : "May 2020"
		},
		{
			"Name" : "1024 or 1000?",
			"Description" : "There is a misunderstanding that occurs much too often between developers. Is a kilobit 1024 or 1000 bits?",
			"ImagePath" : "1024 or 1000.png",
			"Link" : "https://medium.com/@amrojjeh/1024-or-1000-22b7a01efe29?sk=dee2586d3bf0b2bccaa800e9e3035f7d",
			"Date" : "May 2020"
		},
		{
			"Name" : "Dimensional Analysis",
			"Description" : "How to intuively think of Dimensional Analysis, in a single page",
			"ImagePath" : "DA.png",
			"Link" : "https://medium.com/@amrojjeh/dimensional-analysis-681170039376",
			"Date" : "November 2019"
		},
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

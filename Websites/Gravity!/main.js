window.onload = function()
{
	var canvas = document.getElementsByTagName("canvas")[0],
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		button = document.getElementsByTagName("button")[0];

	var sun = Particle.create(width / 2, height / 2, 0, 0),
		planet1 = Particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2),
		planet2 = Particle.create(width / 2 - 200, height / 2, 10, Math.PI / 2),
		planetMass = 0;

	function gravitateSun()
	{
		if (planetMass == 0)
		{
			planetMass = 100;
			button.innerText= "Sun does gravitate";
		}
		else 
		{
			planetMass = 100;
			button.innerText= "Sun does not gravitate";			
		}
	}

	button.addEventListener("click", gravitateSun);

	sun.mass = 20000;


	update();

	function update()
	{
		planet1.mass = planetMass;
		planet2.mass = planetMass;
		console.log(planetMass);
		context.clearRect(0, 0, width, height);

		sun.gravitateTo(planet1);
		sun.gravitateTo(planet2);
		sun.update();

		planet1.gravitateTo(sun);
		planet1.gravitateTo(planet2);
		planet1.update();

		planet2.gravitateTo(sun);
		planet2.gravitateTo(planet1);
		planet2.update();

		context.beginPath();
		context.fillStyle = "#ffff00";
		context.arc(sun.position.getX(), sun.position.getY(), 30, 0, Math.PI * 2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = "#ff0000";
		context.arc(planet1.position.getX(), planet1.position.getY(), 5, 0, Math.PI *2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = "#0000ff";
		context.arc(planet2.position.getX(), planet2.position.getY(), 5, 0, Math.PI *2, false);
		context.fill();

		requestAnimationFrame(update);
	}
}
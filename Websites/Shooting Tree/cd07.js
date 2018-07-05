var Vector = 
{
	_x : 1,
	_y : 1,

	create : function(x, y)
	{
		var obj = Object.create(this);
		obj.setX(x);
		obj.setY(y);
		return obj;
	},

	setX: function(value)
	{
		this._x = value;
	},

	getX : function()
	{
		return this._x;
	},

	setY : function(value)
	{
		this._y = value;
	},

	getY : function()
	{
		return this._y;
	},

	setAngle : function(angle)
	{
		var length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getAngle : function()
	{
		return Math.atan2(this._y, this._x);
	},

	setLength : function(length)
	{
		var angle = this.getAngle(); 
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getLength : function()
	{
		return Math.sqrt(this._x * this._x + this._y * this._y);
	},

	add : function(v2)
	{
		return Vector.create(this._x + v2.getX(), this._y + v2.getY());
	},

	subtract : function(v2)
	{
		return Vector.create(this._x - v2.getX(), this._y - v2.getY());
	},

	multiply : function(value) 
	{
		return Vector.create(this._x * value, this._y * value);
	},

	divide : function(value) 
	{
		return Vector.create(this._x / value, this._y / value);
	}
};

var Particle = 
{
	position: null,
	velocity: null,
	gravity: null,

	create : function(x, y, speed, direction, grav)
	{
		var obj = Object.create(this);
		obj.position = Vector.create(x, y);
		obj.velocity = Vector.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		obj.gravity = Vector.create(0, grav | 0);
		return obj;
	},

	accelerate : function(accel)
	{
		this.velocity = this.velocity.add(accel);
	},

	update : function()
	{
		this.accelerate(this.gravity);
		this.position = this.position.add(this.velocity);
	}
};

window.onload = function()
{
	var canvas = document.getElementsByTagName("canvas")[0],
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var ship = Particle.create(width / 2, height / 2, 0, 0),
		thrust = Vector.create(0,0),
		angle = 0,
		turningLeft = false,
		turningRight = false,
		thrusting = false,
		bullets = [];

	document.body.addEventListener("keydown", function(event)
		{
			switch (event.keyCode)
			{
				case 38: // up
					thrusting = true;
					break;
				case 37: // left
					turningLeft = true;
					break;
				case 39: // right
					turningRight = true;
					break;
				case 32:
					shoot(bullets, ship.position, angle);
				default:
					break;
			}
		});

	document.body.addEventListener("keyup", function(event)
		{
			switch (event.keyCode)
			{
				case 38: // up
					thrusting = false;
					break;
				case 37: // left
					turningLeft = false;
					break;
				case 39: // right
					turningRight = false;
					break;
				default:
					break;
			}
		});

	update();

	function update()
	{
		context.clearRect(0, 0, width, height);
		console.log(angle);
		if (turningLeft)
			angle -= 0.05;
		if (turningRight)
			angle += 0.05;

		thrust.setAngle(angle);
		if (thrusting)
			thrust.setLength(0.1);
		else
			thrust.setLength(0);

		ship.accelerate(thrust);
		ship.update();

		context.save();
		context.translate(ship.position.getX(), ship.position.getY());
		context.rotate(angle);
		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(-10, -7);
		context.lineTo(-10, 7);
		context.lineTo(10, 0);
		if (thrusting)
		{
			context.moveTo(-10, 0);
			context.lineTo(-18, 0);
		}
		context.fill();
		context.restore();

		if (ship.position.getX() > width)
			ship.position.setX(0);
		if (ship.position.getX() < 0)
			ship.position.setX(width);
		if (ship.position.getY() > height)
			ship.position.setY(0);
		if (ship.position.getY() < 0)
			ship.position.setY(height);

		for (var i = 0; i < bullets.length; i++)
		{
			var bullet = bullets[i];
			bullet.update();
			context.save();
			context.translate(bullet.position.getX(), bullet.position.getY());
			context.rotate(bullet.velocity.getAngle());
			context.moveTo(-10,0);
			context.lineTo(10, 0);
			context.stroke();
			context.restore();
			if (bullet.position.getX() > width)
				bullet.position.setX(0);
			if (bullet.position.getX() < 0)
				bullet.position.setX(width);
			if (bullet.position.getY() > height)
				bullet.position.setY(0);
			if (bullet.position.getY() < 0)
				bullet.position.setY(height);
		}

		requestAnimationFrame(update);
	}
}

function shoot(bullets, vec, angle)
{
	var bullet = Particle.create(vec.getX(), vec.getY(), 5, angle);
	bullets.push(bullet);
}

function randomElement(array)
{
	return array[Math.floor(Math.random() * array.length)];
}
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

	create : function(x, y, speed, direction)
	{
		var obj = Object.create(this);
		obj.position = Vector.create(x, y);
		obj.velocity = Vector.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		return obj;
	},

	update : function()
	{
		this.position = this.position.add(this.velocity);
	}
};

var p = [],
	numParticles = 100;

window.onload = function()
{
	var canvas = document.getElementsByTagName("canvas")[0],
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	canvas.addEventListener("click", explode);

	for (var i = 0; i < numParticles; i++)
	{
		p.push(Particle.create(width / 2, height / 2, Math.random() * 50, Math.random() * Math.PI * 2));
	}

	update();

	function update()
	{
		console.log(p.length);
		context.clearRect(0, 0, width, height);
		for (var i = p.length - 1; i >= 0; i--)
		{
			if (p[i].position.getX() > width)
			{
				p.splice(i, 1);
				continue;
			}
			if (p[i].position.getX() < 0)
			{
				p.splice(i, 1);
				continue;
			}
			if (p[i].position.getY() > height)
			{
				p.splice(i, 1);
				continue;
			}
			if (p[i].position.getY() < 0)
			{
				p.splice(i, 1);
				continue;
			}
			p[i].update();
			context.beginPath();
			context.arc(p[i].position.getX(), p[i].position.getY(), 10, 0, Math.PI * 2, false);
			context.fill();
		}
		requestAnimationFrame(update);
	}
}

function explode(e)
{
	for (var i = 0; i < numParticles; i++)
	{
		p.push(Particle.create(e.clientX, e.clientY, Math.random() * 50, Math.random() * Math.PI * 2));
	}
}
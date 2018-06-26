window.onload = function()
{
	var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d");
	canvas.width = canvas.height = gameSize;

	canvas.addEventListener("click", cellClicked);

	function draw()
	{
		function drawGrid(canvas, ctx)
		{
			ctx.strokeStyle = (VICTORY == 0 ? "black" : (game.Turn == XPLAYER ? "red" : "blue"));
			for (let i = 0; i < cells - 1; i++)
			{
				ctx.beginPath();
				ctx.moveTo(cellSize * (i + 1), 0);
				ctx.lineTo(cellSize * (i + 1), canvas.height);
				ctx.stroke();
			}
			for (let i = 0; i < cells - 1; i++)
			{
				ctx.beginPath();
				ctx.moveTo(0, cellSize * (i + 1));
				ctx.lineTo(canvas.width, cellSize * (i + 1));
				ctx.stroke();
			}
		}
		
		function drawX(x, y)
		{
			ctx.beginPath();
			ctx.moveTo(x * cellSize, y * cellSize);
			ctx.lineTo(x * cellSize + cellSize, y * cellSize + cellSize);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(x * cellSize, (y * cellSize) + cellSize);
			ctx.lineTo(x * cellSize + cellSize, y * cellSize);
			ctx.stroke();
		}

		function drawO(x, y)
		{
			var centerX = ((x * cellSize) + (x * cellSize + cellSize)) / 2;
			var centerY = ((y * cellSize) + (y * cellSize + cellSize)) / 2;

			ctx.beginPath();
			ctx.ellipse(centerX, centerY, cellSize / 2, cellSize / 2, 0, 0, Math.PI * 2, false);
			ctx.stroke();
		}
		drawGrid(canvas, ctx);
		for (let x = 0; x < cells; x++)
		{
			for (let y = 0; y < cells; y++)
			{
				if (game.board[cells * y + x] === XPLAYER)
				{
					ctx.strokeStyle = "blue";
					drawX(x, y);
				}
				else if (game.board[cells * y + x] == OPLAYER)
				{
					ctx.strokeStyle = "red";
					drawO(x, y);
				}
			}
		}
		requestAnimationFrame(draw);
	}

	draw();
}
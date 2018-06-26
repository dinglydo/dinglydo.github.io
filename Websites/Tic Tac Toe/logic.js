function xyTo1D(x, y)
{
	return cells * y + x;
}

function setCell(x, y, value)
{
	if (x < 0)
		return -1;
	if (y < 0)
		return -1;
	if (x > cells - 1)
		return -1;
	if (y > cells - 1)
		return -1;
	game.board[xyTo1D(x, y)] = value;
	return 0;
}

function getCell(x, y)
{
	if (x < 0)
		return -1;
	if (y < 0)
		return -1;
	if (x > cells - 1)
		return -1;
	if (y > cells - 1)
		return -1;
	return game.board[xyTo1D(x, y)];
}


function switchTurns()
{
	if (game.Turn == XPLAYER)
		game.Turn = OPLAYER;

	else
		game.Turn = XPLAYER;
}

function getSelectedCell(event, struct)
{
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	struct.x = Math.floor(mouseX / cellSize);
	struct.y = Math.floor(mouseY / cellSize);
}

var cellClicked = function(event)
{
	var selectedCell = {x: 0, y: 0};
	getSelectedCell(event, selectedCell);
	if (getCell(selectedCell.x, selectedCell.y) !== EMPTY)
		return;
	setCell(selectedCell.x, selectedCell.y, game.Turn);
	switchTurns();
	gameOver();
}

function gameOver()
{
	checkTie();
	checkColumns();
	checkRows();
	checkDiags();
}

function checkDiags()
{
	var diag1 = 0;
	var diag2 = 0;
	var prevPlayer = getCell(0, 0);
	var Player = prevPlayer;
	// Diag1
	for (var x = 0; x < cells; x++)
	{
		if (getCell(cells - x - 1, cells - x - 1) !== EMPTY)
		{
			prevPlayer = Player;
			Player = getCell(cells - x - 1, cells - x - 1);
			diag1++;
		}
		if (prevPlayer != Player)
		{
			console.log("break 1");
			break;
		}
	}
	if (diag1 == cells && prevPlayer == Player)
	{
		Victory(Player);
	}


	// Diag2
	prevPlayer = getCell(cells - 1, 0);
	Player = prevPlayer;
	for (var x = 0; x < cells; x++)
	{
		if (getCell(x, cells - x - 1) !== EMPTY)
		{
			prevPlayer = Player;
			Player = getCell(x, cells - x - 1);
			diag2++;
		}
		if (prevPlayer != Player)
		{
			console.log("break 2");
			break;
		}
	}
	if (diag2 == cells && prevPlayer == Player)
	{
		Victory(Player);
	}
}

function checkTie()
{
	var whiteCells = cells * cells;
	for (var x = 0; x < cells; x++)
	{
		for (var y = 0; y < cells; y++)
		{
			if (getCell(x, y) !== EMPTY)
				whiteCells--;
		}
	}
	if (whiteCells === 0)
	{
		Victory(0, true);
	}
}

function checkColumns()
{
	var column = 0;
	for (var x = 0; x < cells; x++)
	{
		column = 0;
		var prevPlayer = getCell(x, 0);
		var Player = getCell(x, 0);
		for (var y = 0; y < cells; y++)
		{
			if (getCell(x, y) !== EMPTY)
			{
				column++;
				prevPlayer = Player;
				Player = getCell(x, y);
			}
			if (prevPlayer !== Player)
				break;
		}
		if (column === cells && prevPlayer === Player)
		{
			Victory(Player);
		}
	}
}

function checkRows()
{
	var rows;
	for (var y = 0; y < cells; y++)
	{
		rows = 0;
		var prevPlayer = getCell(0, y);
		var Player = getCell(0, y);
		for (var x = 0; x < cells; x++)
		{
			if (getCell(x, y) !== EMPTY)
			{
				rows++;
				prevPlayer = Player;
				Player = getCell(x, y);
			}
			if (prevPlayer !== Player)
				break;
		}
		if (rows === cells && prevPlayer == Player)
		{
			Victory(Player);
		}
	}
}

function Victory(Player, tie)
{
	Player = (Player == 1) ? "X" : "O";
	if (!tie)
		document.getElementsByTagName("p")[0].innerText = Player + " WON!";
	else
		document.getElementsByTagName("p")[0].innerText = "TIE";
	canvas.removeEventListener("click", cellClicked);
}
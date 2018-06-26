var EMPTY = 0
var XPLAYER = 1
var OPLAYER = 2
var cells = parseInt(location.search.substr(1));
var cellSize = 100;
var gameSize = cellSize * cells;

var game = 
{
	board : [],
	Turn : XPLAYER
}

for (var x = 0; x < cells * cells; x++)
{
	game.board[x] = EMPTY;
}
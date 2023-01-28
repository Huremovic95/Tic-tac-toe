let gridCells = document.getElementsByClassName("cell");
let GameOverText = document.getElementById("game-over-text");
let restart = document.getElementById("restart");

const winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // oblique
];
// creates a array with 9 empty spaces
let spaces = Array.from(Array(9).keys());

let oTurn = "O";
let xTurn = "X";
let currentPlayer = xTurn;

function startGame (){

    for (let i = 0; i < gridCells.length; i++) {
		gridCells[i].innerText = '';
		gridCells[i].addEventListener('click', cellActivated, false);
}
}

function cellActivated (cell){

    updateCell(cell.target.id, currentPlayer)
}

function updateCell(cellId, currentPlayer){
    spaces[cellId] = currentPlayer;
    document.getElementById(cellId).innerText = currentPlayer;
}

startGame();
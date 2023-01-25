let gridCells = document.getElementsByClassName("cell");
let GameOverText = document.getElementById("game-over-text");
let restart = document.getElementById("restart");

const winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // oblique
];
// creates a array with 9 empty spaces
let spaces = Array(9).fill(null);

let oTurn = "O";
let xTurn = "X";
let currentPlayer = xTurn;

function startGame (){

    gridCells.forEach(cell => cell.addEventListener("click", cellActivated));

}

function cellActivated (){

    let cellId = this.getAttribute("data-value");
    
    if (spaces[cellId] === null){
        updateCell(this, cellId)
    }
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

startGame();
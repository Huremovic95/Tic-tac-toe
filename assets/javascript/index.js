let gridCells = document.getElementsByClassName("cell");
let GameOverText = document.getElementById("game-over-text");
let restart = document.getElementById("restart");
let turnMessage = document.getElementById ("turn-message");

const winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // oblique
];
// creates an array thats 9 numbers long
let spaces = Array.from(Array(9).keys());

let oTurn = "O";
let xTurn = "X";
let currentPlayer = xTurn;

function startGame (){
    turnMessage.innerText = `${currentPlayer}'s turn`;
    
    for (let i = 0; i < gridCells.length; i++) {
		gridCells[i].innerText = '';
		gridCells[i].addEventListener('click', cellActivated);
}
}

function cellActivated (cell){
    //if cell is not yet in use
    if (typeof spaces[cell.target.id] == 'number'){
    //cell.target.id takes the specifik id of the cell clicked
    updateCell(cell.target.id, currentPlayer);
    checkWinner();
}
}

function updateCell(cellId, currentPlayer){
    spaces[cellId] = currentPlayer;
    document.getElementById(cellId).innerText = currentPlayer;
    changePlayer();
}

function changePlayer(){
    if (currentPlayer === xTurn){
        currentPlayer = oTurn;
    } else {
    currentPlayer = xTurn
    }

    turnMessage.innerText = `${currentPlayer}'s turn`;
}

startGame();
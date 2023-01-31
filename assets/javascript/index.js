let gridCells = document.getElementsByClassName("cell");
let GameOverText = document.getElementById("game-over-text");
let restart = document.getElementById("restart");
let turnMessage = document.getElementById("turn-message");
let winnerText = document.getElementById("game-over-text");

let winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // oblique
];
// 9 times null array
let spaces = Array(9).fill(null);

let gameRunning = false;

let oTurn = "O";
let xTurn = "X";
let currentPlayer = xTurn;

function startGame (){
    turnMessage.innerText = `${currentPlayer}'s turn`;
    gameRunning = true;
    
    for (let i = 0; i < gridCells.length; i++) {
		gridCells[i].innerText = '';
		gridCells[i].addEventListener('click', cellActivated);
}
}

function cellActivated (cell){
    if (gameRunning){
   //cell.target.id takes the specifik id of the cell clicked
    let id = cell.target.id;
    //if cell is not yet in use
    if (!spaces[id]){
    updateCell(id, currentPlayer);
}}
    checkWinner();
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

// https://stackoverflow.com/questions/66001788/tic-tac-toe-winning-condition-checks-confused
function checkWinner(){
    let roundWon = false;

        for (let i = 0; i < winCondition.length; i++) {
            let win = winCondition[i];
            let a = spaces[win[0]];
            let b = spaces[win[1]];
            let c = spaces[win[2]];
            
            if (a === null || b === null || c === null) {
                continue;
            }
            
            if (a === b && b === c) {
                roundWon = true;
                break
            }
}

if (roundWon){
    changePlayer();
    winnerText.innerText = `${currentPlayer} has won`;
    gameRunning = false;
}

}


startGame();
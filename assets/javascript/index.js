let gridCells = document.getElementsByClassName("cell");
let GameOverText = document.getElementById("game-over-text");
let restartButton = document.getElementById("restart");
let turnMessage = document.getElementById("turn-message");
let winnerText = document.getElementById("game-over-text");
let endGame = document.getElementById("end-game");
let firstPlayerScore = document.getElementById("player1-score");
let secondPlayerScore = document.getElementById("player2-score");

let spaces = '';
let winCondition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
];

let gameRunning = false;
let gamesPlayed = 1;

let oTurn = "O";
let xTurn = "X";
let currentPlayer = xTurn;
let xScore = 0;
let oScore = 0;

function startGame (){
    // array with 9 null's and resets everytime function is called
    spaces = Array(9).fill(null);
    // when start end-game function isn't visible
    endGame.style.display = "none";
    gameRunning = true;
    // if gamesplayed is even O starts.
    if(gamesPlayed % 2 === 0){
        currentPlayer = oTurn;
    } else {
        currentPlayer = xTurn;
    }

    turnMessage.innerText = `${currentPlayer}'s turn`;
    firstPlayerScore.innerText = `X Player Score: ${xScore}`;
    secondPlayerScore.innerText = `O Player Score: ${oScore}`;
    
    for (let i = 0; i < gridCells.length; i++) {
		gridCells[i].innerText = ' ';
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
    if(gameRunning){
    changePlayer();
    winnerText.innerText = `${currentPlayer} has won`;}
    if (currentPlayer === xTurn){
        xScore++;
    } else {
        oScore++;
    }
    gameRunning = false;
    endGame.style.display = "grid";
    //if spaces does not include a null (so all cells are filled)
} else if (!spaces.includes(null)) {
    winnerText.innerText = "It's a draw";
    gameRunning = false;
    endGame.style.display = "grid";
}
}
/* tried having an eventlistener for the start-game-btn did not work
tested if the game always starts this way and it does */
startGame();

restartButton.addEventListener("click", restart);

function restart() {
    gamesPlayed ++;
    startGame();
}
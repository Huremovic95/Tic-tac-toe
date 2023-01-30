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
}
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

function checkWinner(){
    let roundWon = false;

  for (let i = 0; i < winCondition.length; i++){
     /*because winconditon are 9 arrays nested in one array,
    got to split the arrays in 3 different variables */
    let win = winCondition[i];
    let cellOne = spaces[win[0]];
    let cellTwo = spaces[win[1]];
    let cellThree = spaces[win[2]];

    if(cellOne == "" || cellTwo == "" || cellThree == ""){
            continue;
        }
    if(cellOne == cellTwo && cellTwo == cellThree){
            roundWon = true;
            break;
        }
} 

  if(roundWon){
        winnerText.textContent = `${currentPlayer} wins!`;
    }
    else if(!spaces.includes('number')){
        winnerText.textContent = `Draw!`;
    }

}

startGame();
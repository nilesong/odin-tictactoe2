const mainDiv = document.querySelector('.mainDiv');
let gameDiv = document.querySelectorAll('.gameDiv');
const winDiv = document.querySelector('.winDiv');
const playerDisplay = document.querySelector('.playerDisplay');
let winnerDisplay = document.createElement('div');
winDiv.appendChild(winnerDisplay);

//Gameboard & Player initialization
const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']
    let playerOne = 'P1';
    let playerTwo = 'P2';
    return { board, playerOne, playerTwo }
})()
let player = gameBoard.playerOne;

//Initialize 3x3 display & refresh gameDiv eventListener
const displayController = (() => {
    const displayArrayToGrid = () => {
        const board = gameBoard.board;
        const boardDiv = document.createElement('div');
        boardDiv.className = 'boardDiv';
        for (let i = 0; i < 9; i++) {
            const array1 = document.createElement('div');
            array1.textContent = board[i];
            array1.className = 'gameDiv';
            boardDiv.appendChild(array1);
        }
        mainDiv.appendChild(boardDiv)
        boxEventListener();
    }
    return { displayArrayToGrid };
})()

//Create eventListener after 3x3 is created
function boxEventListener() {
    gameDiv = document.querySelectorAll('.gameDiv');
    gameDiv.forEach((div, index) => {
        div.addEventListener('click', function () {
            if (player === gameBoard.playerOne && !div.textContent) {
                gameBoard.board[index] = 'X';
                div.textContent = 'X';
                player = gameBoard.playerTwo;
                playerDisplay.textContent = gameBoard.playerTwo;
                winCheck();
            } else if (player === gameBoard.playerTwo && !div.textContent) {
                gameBoard.board[index] = 'O';
                div.textContent = 'O';
                player = gameBoard.playerOne;
                playerDisplay.textContent = gameBoard.playerOne;
                winCheck();
            }
        })
    })
}

//Win Check function - for modification to shorter code
function winCheck() {
    //HORIZONTAL
    if ((gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X') || (gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O')) {
        if (gameBoard.board[0] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    } else if (gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X' || (gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O')) {
        if (gameBoard.board[3] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    } else if (gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X' || (gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O')) {
        if (gameBoard.board[6] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    }
    //VERTICAL
    else if (gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X' || (gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O')) {
        if (gameBoard.board[0] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    } else if (gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X' || (gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O')) {
        if (gameBoard.board[1] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    } else if (gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X' || (gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O')) {
        if (gameBoard.board[2] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    }
    //DIAGONAL
    else if (gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X' || (gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O')) {
        if (gameBoard.board[0] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    } else if (gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X' || (gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O')) {
        if (gameBoard.board[2] === 'X') {
            winnerDisplay.textContent = 'P1 WIN!'
        } else {
            winnerDisplay.textContent = 'P2 WIN!'
        }
        player = '';
    }
    else {
        return;
    }
    winDiv.appendChild(resetButton);
}

function gameReset() {
    const boardDiv = document.querySelector('.boardDiv');
    boardDiv.remove();
    reset.arrayReset();
    reset.boardReset();
    reset.playerReset();
    reset.winnerReset();
    displayController.displayArrayToGrid();
    resetButton.remove();
}

const reset = (() => {
    const arrayReset = () => {
        gameBoard.board = ['', '', '', '', '', '', '', '', ''];
    }
    const boardReset = () => {
        gameDiv.forEach((div) => {
            div.textContent = '';
        })
    }
    const playerReset = () => {
        player = gameBoard.playerOne;
        playerDisplay.textContent = player;
    }
    const winnerReset = () => {
        winnerDisplay.textContent = '';
    }
    return { arrayReset, boardReset, playerReset, winnerReset };
})()

//Start button
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', function () {
    displayController.displayArrayToGrid();
    startButton.remove();
})

//Reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'RESET GAME'
resetButton.addEventListener('click', gameReset)


// Functions to add
// 1. CSS
// 2. AI opponent
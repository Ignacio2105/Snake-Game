// Elementos HMTL
const board= document.getElementById('board');
const scoreBoard= document.getElementById('scoreBoard');
const startButton= document.getElementById('start');
const finishOver= document.getElementById('gameOver');

//Configuracion del juego
const boardSize = 10;
const snakeSize = 100;
const squareTypes = {
    emptySquare : 0,
    snakeSquare : 1,
    foodSquare : 2
};

const directions ={
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowLeft: -1,
    ArrowRight: 1
};

// Variable de los juegos
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;


'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.on('line', (line) => {
  console.log(line);
})

rl.question('What\'s your move?', (response) => {
  console.log('Response ', response);

});

const game = new TicTacToe();


var TicTacToe = function() {
  
  this.board = new Board();
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.turn = 0;
}

TicTacToe.prototype.makeMove = function(row, column) {
  if (!this.board.isValidMove[row, column]) {
    console.log('Invalid move. Please make a valid move.');
    return;
  } else {
    if (this.turn % 2) {
      // player 1 
      this.board.updateBoard(this.player1.getMarker());
    } else {
      // player 2
      this.board.updateBoard(this.player2.getMarker());
    }

    // check for winner
    if (this.board.hasWinner()) {
      console.log((this.turn % 2) ? "Player 1 has won!" : "Player 2 has won!")
      rl.close();
    } else {
      this.turn++;
    }
  }
};

TicTacToe.prototype.method_name = function(first_argument) {
  // body...
};

var Player = function(marker) {
  // marker = O or X
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
};

var Board = function() {

  // each row/column is a tuple with marker, and a number value
  this.storage = 
    [[null,null,null], 
     [null,null,null], 
     [null,null,null]];

  // this.turn = ;
}

Board.prototype.hasWinner = function() {
  // TODO: FUNCTIONAL PARADIGM
  // check board for horizontal win



  // check board for vertical win
  // check board for diagonal win


};

Board.prototype.getPlayer = function(first_argument) {
  // body...
};

Board.prototype.isValidMove = function(row, column) {
  return this.storage[row][column] === null;
};

Board.prototype.printBoard = function() {
  console.log(`
    [${this.storage[0,0]}][${this.storage[1,0]}][${this.storage[2,0]}]\n
    [${this.storage[0,1]}][${this.storage[1,1]}][${this.storage[2,1]}]\n
    [${this.storage[0,2]}][${this.storage[1,2]}][${this.storage[2,2]}]\n
    `)
};

Board.prototype.updateBoard = function(row, column, marker) {
  // body...
  this.storage[row, column] = marker;
};



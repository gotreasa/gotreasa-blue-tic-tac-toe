const { Board } = require('./Board');

class Game {
  constructor() {
    this.board = new Board();
    this.board.squares = new Array(9).fill(' ');
    this.PLAYER_X = 'X';
    this.PLAYER_O = 'O';
    this.nextPlayer = this.PLAYER_X;
  }

  getNextPlayer() {
    if (this.nextPlayer === this.PLAYER_X) {
      this.nextPlayer = this.PLAYER_O;

      return this.PLAYER_X;
    }
    this.nextPlayer = this.PLAYER_X;

    return this.PLAYER_O;
  }

  fillSquare(position, marker) {
    this.board.squares[position] = marker;
  }

  fillSquares(order) {
    order.forEach((position) => {
      this.fillSquare(position, this.getNextPlayer());
    });

    return this.board.squares;
  }

  getGrid() {
    return `${this.board.squares[0]}|${this.board.squares[1]}|${this.board.squares[2]}
-+-+-
${this.board.squares[3]}|${this.board.squares[4]}|${this.board.squares[5]}
-+-+-
${this.board.squares[6]}|${this.board.squares[7]}|${this.board.squares[8]}`;
  }
}

module.exports = {
  Game,
};

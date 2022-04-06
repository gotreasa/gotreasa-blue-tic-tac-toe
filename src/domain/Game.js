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

    return this.getBoardState();
  }

  getBoardState() {
    return this.board.getSquares();
  }

  getGameStatus() {
    return `${this.PLAYER_X}_WON`;
  }
}

module.exports = {
  Game,
};

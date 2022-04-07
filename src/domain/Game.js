const { Board } = require('./Board');

const doMarksMatch = (squares) =>
  squares[0] === squares[1] && squares[1] === squares[2] && squares[0] !== ' ';

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
    const squares = this.board.getSquares();
    if (doMarksMatch([squares[0], squares[1], squares[2]])) {
      return `${squares[0]}_WON`;
    }
    if (doMarksMatch([squares[3], squares[4], squares[5]])) {
      return `${squares[3]}_WON`;
    }
    if (doMarksMatch([squares[6], squares[7], squares[8]])) {
      return `${squares[6]}_WON`;
    }
    if (doMarksMatch([squares[0], squares[3], squares[6]])) {
      return `${squares[0]}_WON`;
    }
    if (doMarksMatch([squares[1], squares[4], squares[7]])) {
      return `${squares[1]}_WON`;
    }
    if (doMarksMatch([squares[2], squares[5], squares[8]])) {
      return `${squares[2]}_WON`;
    }

    return `${squares[0]}_WON`;
  }
}

module.exports = {
  Game,
};

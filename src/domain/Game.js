const { Board } = require('./Board');
const {
  LEFT_COLUMN,
  MIDDLE_COLUMN,
  RGHT_COLUMN,
  TOP_ROW,
  MIDDLE_ROW,
  BOTTOM_ROW,
  BACKWARD_DIAGONAL,
  FORWARD_DIAGONAL,
} = require('../constants/positions');

class Game {
  constructor() {
    this.board = new Board();
    this.board.squares = new Array(9).fill(' ');
    this.PLAYER_X = 'X';
    this.PLAYER_O = 'O';
    this.nextPlayer = this.PLAYER_X;
  }

  getNextPlayer() {
    return this.getStepCount() % 2 === 0 ? this.PLAYER_X : this.PLAYER_O;
  }

  getStepCount() {
    return this.getBoardState().filter((square) => square !== ' ').length;
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

  doMarksMatch(positions) {
    const squares = this.board.getSquares();

    return (
      squares[positions[0]] === squares[positions[1]] &&
      squares[positions[1]] === squares[positions[2]] &&
      squares[positions[1]] !== ' '
    );
  }

  getGameStatus() {
    const squares = this.board.getSquares();
    if (this.doMarksMatch(LEFT_COLUMN)) {
      return `${squares[0]}_WON`;
    }
    if (this.doMarksMatch(MIDDLE_COLUMN)) {
      return `${squares[3]}_WON`;
    }
    if (this.doMarksMatch(RGHT_COLUMN)) {
      return `${squares[6]}_WON`;
    }
    if (this.doMarksMatch(TOP_ROW)) {
      return `${squares[0]}_WON`;
    }
    if (this.doMarksMatch(MIDDLE_ROW)) {
      return `${squares[1]}_WON`;
    }
    if (this.doMarksMatch(BOTTOM_ROW)) {
      return `${squares[2]}_WON`;
    }
    if (this.doMarksMatch(BACKWARD_DIAGONAL)) {
      return `${squares[0]}_WON`;
    }
    if (this.doMarksMatch(FORWARD_DIAGONAL)) {
      return `${squares[2]}_WON`;
    }
    if (squares.includes(' ')) {
      return `${this.getNextPlayer()}_TURN`;
    }

    return 'DRAW';
  }
}

module.exports = {
  Game,
};

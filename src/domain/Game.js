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
  }

  getNextPlayer() {
    return this.getStepCount() % 2 === 0 ? this.PLAYER_X : this.PLAYER_O;
  }

  getCurrentPlayer() {
    return (this.getStepCount() - 1) % 2 === 0 ? this.PLAYER_X : this.PLAYER_O;
  }

  getStepCount() {
    return this.getBoardState().filter((square) => square !== ' ').length;
  }

  fillSquare(position, marker) {
    this.board.squares[position] = marker;
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

  getColumnWinners() {
    return (
      this.doMarksMatch(LEFT_COLUMN) ||
      this.doMarksMatch(MIDDLE_COLUMN) ||
      this.doMarksMatch(RGHT_COLUMN)
    );
  }

  getRowWinners() {
    return (
      this.doMarksMatch(TOP_ROW) ||
      this.doMarksMatch(MIDDLE_ROW) ||
      this.doMarksMatch(BOTTOM_ROW)
    );
  }

  getDiagonalWinners() {
    return (
      this.doMarksMatch(FORWARD_DIAGONAL) ||
      this.doMarksMatch(BACKWARD_DIAGONAL)
    );
  }

  getWinner() {
    return (
      this.getColumnWinners() ||
      this.getRowWinners() ||
      this.getDiagonalWinners()
    );
  }

  hasRemainingMoves() {
    const squares = this.board.getSquares();

    return squares.includes(' ');
  }

  getGameStatus() {
    if (this.getWinner()) {
      return this.getWinnerState();
    }
    if (this.hasRemainingMoves()) {
      return this.getNextTurnState();
    }

    return 'DRAW';
  }

  getNextTurnState() {
    return `${this.getNextPlayer()}_TURN`;
  }

  getWinnerState() {
    return `${this.getCurrentPlayer()}_WON`;
  }
}

module.exports = {
  Game,
};

const { Board } = require('./Board');

const LEFT_COLUMN = [0, 1, 2];
const MIDDLE_COLUMN = [3, 4, 5];
const RGHT_COLUMN = [6, 7, 8];
const TOP_ROW = [0, 3, 6];
const MIDDLE_ROW = [1, 4, 7];
const BOTTOM_ROW = [2, 5, 8];
const BACKWARD_DIAGONAL = [0, 4, 8];
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

    return `${squares[2]}_WON`;
  }
}

module.exports = {
  Game,
};

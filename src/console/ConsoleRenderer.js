const { EMPTY_BOARD } = require('../constants/boardSquares');
const {
  TOP_ROW_LEFT,
  TOP_ROW_CENTRE,
  TOP_ROW_RIGHT,
  MIDDLE_ROW_LEFT,
  MIDDLE_ROW_CENTRE,
  MIDDLE_ROW_RIGHT,
  BOTTOM_ROW_LEFT,
  BOTTOM_ROW_RIGHT,
  BOTTOM_ROW_CENTRE,
} = require('../constants/positions');
const { Game } = require('../domain/Game');

const GAME_STATUS = {
  X_TURN: 'Player X, it is your turn!',
  O_TURN: 'Player O, it is your turn!',
  O_WON: 'Player O won!',
  X_WON: 'Player X won!',
  DRAW: 'The game has ended in a draw!',
};

class ConsoleRenderer {
  constructor(game = new Game()) {
    this.game = game;
  }

  getGameStatus() {
    return GAME_STATUS[this.game.getGameStatus()];
  }

  print() {
    let firstLine = `Player ${this.game.getCurrentPlayer()}:`;
    if (
      JSON.stringify(this.game.getBoardState()) === JSON.stringify(EMPTY_BOARD)
    ) {
      firstLine = 'Starting a new game';
    }
    this.game.output = `${firstLine}
${this.getGrid()}
${this.getGameStatus()}\n`;
    console.log(this.game.output);
  }

  getGrid() {
    const squares = this.game.board.getSquares();

    return `${squares[TOP_ROW_LEFT]}|${squares[TOP_ROW_CENTRE]}|${squares[TOP_ROW_RIGHT]}
-+-+-
${squares[MIDDLE_ROW_LEFT]}|${squares[MIDDLE_ROW_CENTRE]}|${squares[MIDDLE_ROW_RIGHT]}
-+-+-
${squares[BOTTOM_ROW_LEFT]}|${squares[BOTTOM_ROW_CENTRE]}|${squares[BOTTOM_ROW_RIGHT]}`;
  }
}

module.exports = { ConsoleRenderer };

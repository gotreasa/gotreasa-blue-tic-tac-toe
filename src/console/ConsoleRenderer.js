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
    this.game.output = `${this.getGrid()}
${this.getGameStatus()}\n`;
    console.log(this.game.output);
  }

  getGrid() {
    const squares = this.game.board.getSquares();

    return `${squares[0]}|${squares[1]}|${squares[2]}
-+-+-
${squares[3]}|${squares[4]}|${squares[5]}
-+-+-
${squares[6]}|${squares[7]}|${squares[8]}`;
  }
}

module.exports = { ConsoleRenderer };

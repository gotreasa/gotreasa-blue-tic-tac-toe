const { Game } = require('../domain/Game');

class ConsoleRenderer {
  constructor() {
    this.game = new Game();
  }

  print() {
    this.game.output = `Game Board Creation…
      ${this.getGrid()}
      Board Created.
      The game will start with player X`;
    console.log(this.game.output);

    return this.game.output;
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

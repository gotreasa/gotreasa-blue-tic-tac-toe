const { Game } = require('../domain/Game');

class ConsoleRenderer {
  constructor() {
    this.game = new Game();
  }

  print() {
    this.game.output = `Game Board Creation…
      ${this.game.getGrid()}
      Board Created.
      The game will start with player X`;
    console.log(this.game.output);

    return this.game.output;
  }
}

module.exports = { ConsoleRenderer };

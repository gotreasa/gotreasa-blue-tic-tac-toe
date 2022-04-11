const { Game } = require('../domain/Game');
const { Bot } = require('./Bot');

class GameController {
  constructor() {
    this.game = new Game();
    this.bot = new Bot(this.game);
  }

  getNextMove() {
    console.log(this);

    return 2;
  }
}
module.exports = {
  GameController,
};

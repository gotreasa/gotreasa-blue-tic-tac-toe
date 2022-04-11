const { Game } = require('../domain/Game');
const { Bot } = require('./Bot');

class GameController {
  constructor() {
    this.game = new Game();
    this.bot = new Bot(this.game);
  }

  getNextMove() {
    return this.bot.getNextMove();
  }

  move() {
    this.game.fillSquare(this.getNextMove(), 'X');
  }
}
module.exports = {
  GameController,
};

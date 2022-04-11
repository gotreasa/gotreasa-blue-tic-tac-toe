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
    const marker = this.game.getNextPlayer();
    const emptyPosition = this.getNextMove();
    this.game.fillSquare(emptyPosition, marker);
  }
}
module.exports = {
  GameController,
};

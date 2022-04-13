const { END_STATUSES } = require('../constants/statuses');
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

  getEntireGame() {
    const result = [];
    let gameStatus = '';
    while (!END_STATUSES.includes(gameStatus)) {
      gameStatus = this.game.getGameStatus();
      result.push({
        board: this.game.getBoardState(),
        status: gameStatus,
      });
      this.move();
    }

    return result;
  }
}
module.exports = {
  GameController,
};

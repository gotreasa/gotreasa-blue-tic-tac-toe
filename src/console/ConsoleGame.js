const { END_STATUSES } = require('../constants/statuses');
const { GameController } = require('../controller/GameController');
const { ConsoleRenderer } = require('./ConsoleRenderer');

class ConsoleGame {
  constructor() {
    this.controller = new GameController();
    this.renderer = new ConsoleRenderer(this.controller.game);
    this.durationInMilliseconds = 2000;
  }

  async play() {
    while (!END_STATUSES.includes(this.controller.game.getGameStatus())) {
      this.renderer.print();
      this.controller.move();
      // eslint-disable-next-line no-await-in-loop
      await this.wait();
    }
    this.renderer.print();
  }

  async wait() {
    await new Promise((resolve) => {
      setTimeout(resolve, this.durationInMilliseconds);
    });
  }
}
module.exports = {
  ConsoleGame,
};

const { GameController } = require('../controller/GameController');
const { ConsoleRenderer } = require('./ConsoleRenderer');

const END_STATUSES = ['X_WON', 'O_WON', 'DRAW'];

class ConsoleGame {
  constructor() {
    this.controller = new GameController();
    this.renderer = new ConsoleRenderer(this.controller.game);
    this.durationInMilliseconds = 2000;
  }

  async play() {
    this.renderer.print();
    while (!END_STATUSES.includes(this.controller.game.getGameStatus())) {
      this.controller.move();
      this.renderer.print();
      // eslint-disable-next-line no-await-in-loop
      await this.wait();
    }
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

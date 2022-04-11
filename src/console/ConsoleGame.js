const { GameController } = require('../controller/GameController');
const { ConsoleRenderer } = require('./ConsoleRenderer');

const wait = async (durationInMilliseconds) => {
  await new Promise((resolve) => {
    setTimeout(resolve, durationInMilliseconds);
  });
};

class ConsoleGame {
  constructor() {
    this.controller = new GameController();
    this.renderer = new ConsoleRenderer(this.controller.game);
  }

  play() {
    this.renderer.print();
    this.controller.move();
    wait(2000);
  }
}
module.exports = {
  ConsoleGame,
};

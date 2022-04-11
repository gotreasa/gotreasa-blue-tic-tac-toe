const { GameController } = require('../controller/GameController');
const { ConsoleRenderer } = require('./ConsoleRenderer');

class ConsoleGame {
  constructor() {
    this.controller = new GameController();
    this.renderer = new ConsoleRenderer(this.controller.game);
  }

  play() {
    this.renderer.print();
    this.controller.move();
  }
}
module.exports = {
  ConsoleGame,
};

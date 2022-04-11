const { GameController } = require('../controller/GameController');

class ConsoleGame {
  constructor() {
    this.controller = new GameController();
  }

  play() {
    this.controller.move();
  }
}
module.exports = {
  ConsoleGame,
};

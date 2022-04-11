class Bot {
  constructor(game) {
    this.game = game;
  }

  getNextMove() {
    let position;

    do {
      position = Math.floor(Math.random() * 9);
    } while (this.game.getBoardState()[position] !== ' ');

    return position;
  }
}
module.exports = {
  Bot,
};

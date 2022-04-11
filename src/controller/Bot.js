class Bot {
  constructor(game) {
    this.game = game;
  }

  getNextMove() {
    const position = Math.floor(Math.random() * 9);
    console.log('The position', this.game.getBoardState()[position]);

    return position;
  }
}
module.exports = {
  Bot,
};

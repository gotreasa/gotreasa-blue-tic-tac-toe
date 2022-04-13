const { GameController } = require('../controller/GameController');

const playGame = () => {
  const gameController = new GameController();

  return gameController.getEntireGame();
};

module.exports = {
  playGame,
};

const {
  Given,
  When,
  Then,
  And,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');
const { GameController } = require('../../src/controller/GameController');

let gameController;
let step;

Given('a new game controller', () => {
  gameController = new GameController();
});

And(/^moves already taken (.*)$/, (stepsString) => {
  const steps = JSON.parse(stepsString);
  gameController.game.board.squares = steps;
});

When('stepping with the bot', () => {
  step = gameController.getNextMove();
});

Then(/^the bot moves to an empty square$/, () => {
  expect(gameController.game.getBoardState()[step]).toBe(' ');
});

Fusion('gameController.feature');

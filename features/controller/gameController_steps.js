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
let output;

Given('a new game controller', () => {
  gameController = new GameController();
});

And(/^steps already taken (.*)$/, (stepsString) => {
  const steps = JSON.parse(stepsString);
  gameController.game.fillSquares(steps);
});

When('stepping with the bot', () => {
  output = gameController.getNextMove();
});

Then(/^the bot moves to an empty square (.*)$/, (position) => {
  expect(output).toBe(position);
});

Fusion('gameController.feature');

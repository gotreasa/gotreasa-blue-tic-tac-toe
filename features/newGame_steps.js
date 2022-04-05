const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { Game } = require('../src/domain/Game');

let game;
let output;

Given('a new game', () => {
  game = new Game();
});

When('getting the board', () => {
  output = game.getGrid();
});

Then('the board is empty', () => {
  expect(output).toBe(' | | \n-+-+-\n | | \n-+-+-\n | | ');
});

Fusion('newGame.feature');

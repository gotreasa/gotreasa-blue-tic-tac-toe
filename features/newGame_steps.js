const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { Game } = require('../src/domain/ticTacToe');

let game;

Given('a new game', () => {
  game = new Game();
});

When('getting the board', () => {
  game.getGrid();
});

Then('the grid is empty', () => {
  expect(game.getGrid()).toBe(' | | \n-+-+-\n | | \n-+-+-\n | | ');
});

Fusion('newGame.feature');

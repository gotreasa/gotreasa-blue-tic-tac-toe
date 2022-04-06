const {
  Given,
  And,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { Game } = require('../../src/domain/Game');

let game;
let output;

Given('a new game', () => {
  game = new Game();
});

And(/^the squares are marked as follows (.*)$/, (squaares) => {
  game.board.getSquares = jest.fn(() => JSON.parse(squaares));
});

When('the game status is checked', () => {
  output = game.getGameStatus();
});

Then(/^(.*) has won$/, (mark) => {
  expect(output).toBe(`${mark}_WON`);
});

Fusion('gameStatuses.feature');

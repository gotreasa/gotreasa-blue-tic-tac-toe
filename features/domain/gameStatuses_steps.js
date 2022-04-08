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

And(/^the squares are marked as follows (.*)$/, (squares) => {
  game.board.getSquares = jest.fn(() => JSON.parse(squares));
});

When('the game status is checked', () => {
  output = game.getGameStatus();
});

Then(/^(.*) has won$/, (mark) => {
  expect(output).toBe(`${mark}_WON`);
});

Then('game ends in a draw', () => {
  expect(output).toBe(`DRAW`);
});

Then(/^(.*) is next to take a turn$/, (mark) => {
  expect(output).toBe(`${mark}_TURN`);
});

Fusion('gameStatuses.feature');

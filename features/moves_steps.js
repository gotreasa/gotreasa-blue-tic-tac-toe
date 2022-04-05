const {
  Given,
  When,
  Then,
  And,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { Game } = require('../src/domain/Game');

let game;
let output;

Given('a new game', () => {
  game = new Game();
});

And(/^steps (.*)$/, (stepsString) => {
  const steps = JSON.parse(stepsString);
  game.fillSquares(steps);
});

When('getting the board state', () => {
  output = game.getGrid();
});

Then(/^the board ([\s\S]*) are returned$/, (squares) => {
  expect(output).toContain(squares);
});

When('checking who takes the next move', () => {
  output = game.getNextPlayer();
});

Then("it's player X turn", () => {
  expect(output).toBe('X');
});

And(/^the next mark is (.*)$/, (nextMark) => {
  game.nextPlayer = nextMark;
});

Then(/^the next mark is updated to (.*)$/, (futureMark) => {
  expect(game.nextPlayer).toBe(futureMark);
});

Fusion('moves.feature');

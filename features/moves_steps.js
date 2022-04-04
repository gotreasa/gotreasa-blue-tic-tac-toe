const {
  Given,
  When,
  Then,
  And,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { Game } = require('../src/domain/ticTacToe');

let game;
let output;

Given('a new game', () => {
  game = new Game();
});

And(/^steps (.*)$/, (stepsString) => {
  const steps = JSON.parse(stepsString);
  game.setOrder(steps);
  game.fillSquares();
});

When('getting the board state', () => {
  output = game.getGrid();
});

Then(/^the board ([\s\S]*) are returned$/, (squares) => {
  expect(output).toContain(squares);
});

Fusion('moves.feature');

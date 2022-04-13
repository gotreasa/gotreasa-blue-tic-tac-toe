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
  steps.forEach((position, index) => {
    game.fillSquare(position, index % 2 === 0 ? 'X' : 'O');
  });
});

When('getting the board state', () => {
  output = game.getBoardState();
});

Then(/^the board ([\s\S]*) are returned$/, (squaresString) => {
  const squares = JSON.parse(squaresString);
  expect(output).toEqual(squares);
});

When('checking who takes the next move', () => {
  output = game.getNextPlayer();
});

Then("it's player X turn", () => {
  expect(output).toBe('X');
});

And(/^the step count is (.*)$/, (stepCount) => {
  game.getStepCount = jest.fn();
  game.getStepCount.mockReturnValue(stepCount);
});

Then(/^the next mark is (.*)$/, (nextMark) => {
  expect(game.getNextPlayer()).toBe(nextMark);
});

Fusion('moves.feature');

const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { ConsoleRenderer } = require('../../src/console/ConsoleRenderer');
const { ConsoleGame } = require('../../src/console/ConsoleGame');

let consoleRenderer;
let consoleGame;

console.log = jest.fn();

Given('a new consoleRenderer', () => {
  consoleRenderer = new ConsoleRenderer();
});

When('printing the initial state', () => {
  consoleRenderer.print();
});

Then('the board is printed', () => {
  expect(console.log).toHaveBeenCalledWith(
    expect.stringContaining(' | | \n-+-+-\n | | \n-+-+-\n | | '),
  );
});

Given('a new console game', () => {
  consoleGame = new ConsoleGame();
  jest.spyOn(consoleGame.controller, 'move');
  jest.spyOn(consoleGame.renderer, 'print');
  consoleGame.wait = jest.fn().mockResolvedValue();
});

When('playing the game', async () => {
  await consoleGame.play();
});

Then('the bot is taking steps one at a time', () => {
  expect(consoleGame.controller.move).toHaveBeenCalled();
});

Then('the board is printed after each move', () => {
  expect(consoleGame.renderer.print).toHaveBeenCalled();
});

Then('the game status is printed after each move', () => {
  expect(console.log).toHaveBeenCalledWith(
    expect.stringContaining('Player X, it is your turn'),
  );
});

Then(/^there is a (\d+) second pause between each step$/, (expectedSeconds) => {
  expect(setTimeout).toHaveBeenCalledWith(
    expect.anything(),
    expectedSeconds * 1000,
  );
});

Then('the game ends with one of the end game statuses', () => {
  expect(console.log).toHaveBeenCalledWith(
    expect.stringMatching(
      /(Player X won!)|(Player O won!)|(The game has ended in a draw!)/,
    ),
  );
});

Fusion('consoleGame.feature');

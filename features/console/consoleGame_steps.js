const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { ConsoleRenderer } = require('../../src/console/ConsoleRenderer');

let consoleRenderer;
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

Fusion('consoleGame.feature');

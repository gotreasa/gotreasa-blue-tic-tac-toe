const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const { ConsoleGame } = require('../../src/console/ConsoleGame');

let consoleGame;

console.log = jest.fn();
beforeEach(() => {
  jest.spyOn(global, 'setTimeout');
});

Given('a new console game', () => {
  consoleGame = new ConsoleGame();
  jest.spyOn(consoleGame.controller, 'move');
  jest.spyOn(consoleGame.renderer, 'print');
  consoleGame.durationInMilliseconds = 1;
});

When('playing the game', async () => {
  await consoleGame.play();
});

Then(/^there is a (\d+) second pause between each step$/, () => {
  expect(setTimeout).toHaveBeenCalledWith(expect.anything(), 1);
});

Fusion('consoleGamePauses.feature');

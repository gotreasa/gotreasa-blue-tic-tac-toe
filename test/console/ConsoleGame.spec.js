const { toHaveBeenCalledAfter } = require('jest-extended');

expect.extend({ toHaveBeenCalledAfter });

const { ConsoleGame } = require('../../src/console/ConsoleGame');

describe('Console Game', () => {
  let consoleGame;

  beforeEach(() => {
    consoleGame = new ConsoleGame();
    consoleGame.controller.move = jest.fn();
    consoleGame.renderer.print = jest.fn();
    consoleGame.controller.game.getGameStatus = jest.fn();
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    consoleGame.controller.move.mockReset();
  });

  test('should make a move when the game is played', () => {
    consoleGame.play();
    expect(consoleGame.controller.move).toHaveBeenCalled();
  });

  test('should print the board state when the game is played', () => {
    consoleGame.play();
    expect(consoleGame.renderer.print).toHaveBeenCalled();
  });

  test('should wait 2 seconds before the next move', () => {
    consoleGame.play();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000);
  });

  test('should print the final outcome of the board', () => {
    consoleGame.controller.game.getGameStatus.mockReturnValue('DRAW');
    consoleGame.play();
    expect(consoleGame.renderer.print).toHaveBeenCalledAfter(
      consoleGame.controller.game.getGameStatus,
    );
  });
});

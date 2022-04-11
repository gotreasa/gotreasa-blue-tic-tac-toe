const { ConsoleGame } = require('../../src/console/ConsoleGame');

describe('Console Game', () => {
  let consoleGame;

  beforeEach(() => {
    consoleGame = new ConsoleGame();
    consoleGame.controller.move = jest.fn();
    consoleGame.renderer.print = jest.fn();
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

  test('should make a print the board state when the game is played', () => {
    consoleGame.play();
    expect(consoleGame.renderer.print).toHaveBeenCalled();
  });

  test('should wait 2 seconds before the next move', () => {
    consoleGame.play();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000);
  });
});

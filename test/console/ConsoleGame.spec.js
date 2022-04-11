const { ConsoleGame } = require('../../src/console/ConsoleGame');

describe('Console Game', () => {
  let consoleGame;

  beforeEach(() => {
    consoleGame = new ConsoleGame();
    consoleGame.controller.move = jest.fn();
  });

  afterEach(() => {
    consoleGame.controller.move.mockReset();
  });

  test('should make a move when the game is played', () => {
    consoleGame.play();
    expect(consoleGame.controller.move()).toHaveBeenCalled();
  });
});

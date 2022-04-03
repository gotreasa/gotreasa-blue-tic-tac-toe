const { Game } = require('../../src/domain/ticTacToe');

describe('Starting a Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('should have an 9 empty square', () => {
    expect(game.squares).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });
});

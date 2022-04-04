const { Game } = require('../../src/domain/ticTacToe');

describe('Starting a Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('should have an 9 empty squares', () => {
    expect(game.squares).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  test("should the board's empty state", () => {
    expect(game.getGrid()).toBe(' | | \n-+-+-\n | | \n-+-+-\n | | ');
  });
});

describe('Existing game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test.each`
    steps | expectedSquares
    ${[]} | ${[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
  `(
    'should get the board state as $expectedSquares when the steps are $steps',
    ({ steps, expectedSquares }) => {
      game.setOrder(steps);
      game.fillSquares();
      expect(game.squares).toEqual(expectedSquares);
    },
  );
});

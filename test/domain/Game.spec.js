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
    steps        | expectedBoard
    ${[]}        | ${' | | \n-+-+-\n | | \n-+-+-\n | | '}
    ${[0]}       | ${'X| | \n-+-+-\n | | \n-+-+-\n | | '}
    ${[0, 1]}    | ${'X|O| \n-+-+-\n | | \n-+-+-\n | | '}
    ${[0, 1, 2]} | ${'X|O|X\n-+-+-\n | | \n-+-+-\n | | '}
  `(
    'should get the board state as $expectedBoard when the steps are $steps',
    ({ steps, expectedBoard }) => {
      game.setOrder(steps);
      game.fillSquares();
      expect(game.getGrid()).toEqual(expectedBoard);
    },
  );
});

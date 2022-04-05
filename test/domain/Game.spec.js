const { Game } = require('../../src/domain/Game');

const INITIAL_BOARD = ' | | \n-+-+-\n | | \n-+-+-\n | | ';

describe('Starting a Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockReset();
  });

  test('should have an 9 empty squares', () => {
    expect(game.squares).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  test("should the board's empty state", () => {
    expect(game.getGrid()).toBe(INITIAL_BOARD);
  });

  test('should start with player X', () => {
    expect(game.getNextPlayer()).toBe('X');
  });

  test('should print the initial game board', () => {
    game.print();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(INITIAL_BOARD),
    );
  });
});

describe('Existing game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test.each`
    steps        | expectedBoard
    ${[]}        | ${INITIAL_BOARD}
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

  test.each`
    nextMark | futureMark
    ${'X'}   | ${'O'}
    ${'O'}   | ${'X'}
  `(
    'should return $futureMark as the next player when the current is $nextMark',
    ({ nextMark, futureMark }) => {
      game.nextPlayer = nextMark;
      game.getNextPlayer();
      expect(game.nextPlayer).toBe(futureMark);
    },
  );
});

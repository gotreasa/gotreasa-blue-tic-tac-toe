const { Game } = require('../../src/domain/Game');

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
    expect(game.board.squares).toEqual([
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
    ]);
  });

  test('should start with player X', () => {
    expect(game.getNextPlayer()).toBe('X');
  });
});

describe('Existing game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test.each`
    steps        | expectedBoard
    ${[]}        | ${[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
    ${[0]}       | ${['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
    ${[0, 1]}    | ${['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
    ${[0, 1, 2]} | ${['X', 'O', 'X', ' ', ' ', ' ', ' ', ' ', ' ']}
  `(
    'should get the board state as $expectedBoard when the steps are $steps',
    ({ steps, expectedBoard }) => {
      game.fillSquares(steps);
      expect(game.getBoardState()).toEqual(expectedBoard);
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

  test.each`
    status     | squares                                          | condition
    ${'X_WON'} | ${['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' ']} | ${'top row win'}
    ${'O_WON'} | ${[' ', 'X', 'X', 'O', 'O', 'O', 'X', ' ', ' ']} | ${'middle row win'}
    ${'X_WON'} | ${[' ', 'O', 'O', ' ', ' ', ' ', 'X', 'X', 'X']} | ${'bottom row win'}
    ${'X_WON'} | ${['X', 'O', ' ', 'X', 'O', ' ', 'X', ' ', ' ']} | ${'left column win'}
    ${'O_WON'} | ${[' ', 'O', 'X', 'X', 'O', ' ', 'X', 'O', ' ']} | ${'middle column win'}
    ${'X_WON'} | ${[' ', 'O', 'X', ' ', 'O', 'X', ' ', ' ', 'X']} | ${'right column win'}
    ${'X_WON'} | ${['X', 'O', ' ', 'X', ' ', ' ', 'O', ' ', 'X']} | ${'back diagonal win'}
  `(
    'should return status of $status for $condition where the board is filled out as $squares',
    ({ status, squares }) => {
      game.board.squares = squares;
      expect(game.getGameStatus()).toBe(status);
    },
  );
});

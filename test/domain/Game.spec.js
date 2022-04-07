const { Game } = require('../../src/domain/Game');

const TOP_ROW_X_WIN = ['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' '];
const MIDDLE_ROW_O_WIN = [' ', 'X', 'X', 'O', 'O', 'O', 'X', ' ', ' '];
const BOTTOM_ROW_X_WIN = [' ', 'O', 'O', ' ', ' ', ' ', 'X', 'X', 'X'];
const LEFT_COLUMN_X_WIN = ['X', 'O', ' ', 'X', 'O', ' ', 'X', ' ', ' '];
const MIDDLE_COLUMN_O_WIN = [' ', 'O', 'X', 'X', 'O', ' ', 'X', 'O', ' '];
const RIGHT_COLUMN_X_WIN = [' ', 'O', 'X', ' ', 'O', 'X', ' ', ' ', 'X'];
const BACKWARD_DIAGONAL_X_WIN = ['X', 'O', ' ', ' ', 'X', ' ', 'O', ' ', 'X'];
const FORWARD_DIAGONAL_O_WIN = [' ', 'X', 'O', 'X', 'O', ' ', 'O', 'X', ' '];

const EMPTY_SQUARES = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

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
    expect(game.board.squares).toEqual(EMPTY_SQUARES);
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
    ${[]}        | ${EMPTY_SQUARES}
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
    status     | squares                    | condition
    ${'X_WON'} | ${TOP_ROW_X_WIN}           | ${'top row win'}
    ${'O_WON'} | ${MIDDLE_ROW_O_WIN}        | ${'middle row win'}
    ${'X_WON'} | ${BOTTOM_ROW_X_WIN}        | ${'bottom row win'}
    ${'X_WON'} | ${LEFT_COLUMN_X_WIN}       | ${'left column win'}
    ${'O_WON'} | ${MIDDLE_COLUMN_O_WIN}     | ${'middle column win'}
    ${'X_WON'} | ${RIGHT_COLUMN_X_WIN}      | ${'right column win'}
    ${'X_WON'} | ${BACKWARD_DIAGONAL_X_WIN} | ${'back diagonal win'}
    ${'O_WON'} | ${FORWARD_DIAGONAL_O_WIN}  | ${'forward diagonal win'}
  `(
    'should return status of $status for $condition where the board is filled out as $squares',
    ({ status, squares }) => {
      game.board.squares = squares;
      expect(game.getGameStatus()).toBe(status);
    },
  );
});

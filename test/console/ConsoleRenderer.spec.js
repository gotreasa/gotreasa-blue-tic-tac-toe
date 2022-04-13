const { ConsoleRenderer } = require('../../src/console/ConsoleRenderer');
const {
  EMPTY_BOARD,
  TOP_ROW_X_WIN,
} = require('../../src/constants/boardSquares');

const INITIAL_BOARD = ' | | \n-+-+-\n | | \n-+-+-\n | | ';

describe('Starting a ConsoleRenderer', () => {
  let consoleRenderer;

  beforeEach(() => {
    consoleRenderer = new ConsoleRenderer();
    consoleRenderer.game.board.getSquares = jest.fn();
    consoleRenderer.game.board.getSquares.mockReturnValue([...EMPTY_BOARD]);
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockReset();
    consoleRenderer.game.board.getSquares.mockReset();
  });

  test('should print the initial game board', () => {
    consoleRenderer.print();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(INITIAL_BOARD),
    );
  });

  test('should get the empty state of the board', () => {
    expect(consoleRenderer.getGrid()).toBe(' | | \n-+-+-\n | | \n-+-+-\n | | ');
  });

  test('should indicate the start of the game', () => {
    consoleRenderer.print();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Starting a new game'),
    );
  });
});

describe('Printing the state of the game', () => {
  let consoleRenderer;

  beforeEach(() => {
    consoleRenderer = new ConsoleRenderer();
    consoleRenderer.game.getGameStatus = jest.fn();
    consoleRenderer.game.getCurrentPlayer = jest.fn();
    consoleRenderer.game.board.getSquares = jest.fn();
    consoleRenderer.game.board.getSquares.mockReturnValue(TOP_ROW_X_WIN);

    console.log = jest.fn();
  });

  test.each`
    status      | expectedStatus
    ${'X_TURN'} | ${'Player X, it is your turn'}
    ${'O_TURN'} | ${'Player O, it is your turn'}
    ${'O_WON'}  | ${'Player O won!'}
    ${'X_WON'}  | ${'Player X won!'}
    ${'DRAW'}   | ${'The game has ended in a draw!'}
  `(
    'should include the game status as "$expectedStatus" when the game status is $status',
    ({ status, expectedStatus }) => {
      consoleRenderer.game.getGameStatus.mockReturnValue(status);
      consoleRenderer.print();
      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining(expectedStatus),
      );
    },
  );

  test('should indicate the player taking the move', () => {
    consoleRenderer.game.getCurrentPlayer.mockReturnValue('X');
    consoleRenderer.print();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Player X:'),
    );
  });
});

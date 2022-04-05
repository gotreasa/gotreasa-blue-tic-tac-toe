const { ConsoleRenderer } = require('../../src/console/ConsoleRenderer');

const INITIAL_BOARD = ' | | \n-+-+-\n | | \n-+-+-\n | | ';

describe('Starting a ConsoleRenderer', () => {
  let consoleRenderer;

  beforeEach(() => {
    consoleRenderer = new ConsoleRenderer();
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockReset();
  });

  test('should print the initial game board', () => {
    consoleRenderer.print();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(INITIAL_BOARD),
    );
  });
});

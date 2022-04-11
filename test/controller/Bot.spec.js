const { Bot } = require('../../src/controller/Bot');
const { Game } = require('../../src/domain/Game');

describe('Game bot', () => {
  beforeEach(() => {
    Math.random = jest.fn();
  });

  afterEach(() => {
    Math.random.mockReset();
  });

  test.each`
    board                                            | position | positionGuesses
    ${['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']} | ${3}     | ${[3]}
    ${['X', 'O', ' ', ' ', 'X', ' ', ' ', ' ', ' ']} | ${6}     | ${[6]}
    ${['X', 'O', ' ', ' ', 'X', 'X', ' ', ' ', ' ']} | ${8}     | ${[1, 2, 5, 6]}
  `(
    'should move to empty position $position for board $board',
    ({ board, position, positionGuesses }) => {
      const game = new Game();
      const bot = new Bot(game);
      game.getBoardState = jest.fn(() => board);
      positionGuesses.forEach((positionGuess) => {
        Math.random.mockReturnValueOnce(positionGuess / 9);
      });
      expect(bot.getNextMove()).toBe(position);
    },
  );
});

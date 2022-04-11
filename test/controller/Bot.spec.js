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
  `(
    'should move to empty position $position for board $board',
    ({ board, position, positionGuesses }) => {
      const game = new Game();
      const bot = new Bot(game);
      game.getBoardState = jest.fn(() => board);
      positionGuesses.forEach((positionGuess) => {
        Math.random.mockReturnValue(positionGuess);
      });
      expect(bot.getNextMove()).toBe(position);
    },
  );
});

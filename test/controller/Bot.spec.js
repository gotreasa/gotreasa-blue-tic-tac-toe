const {
  TOP_ROW_LEFT,
  TOP_ROW_CENTRE,
  MIDDLE_ROW_LEFT,
  MIDDLE_ROW_CENTRE,
  MIDDLE_ROW_RIGHT,
  BOTTOM_ROW_LEFT,
  BOTTOM_ROW_RIGHT,
} = require('../../src/constants/positions');
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
    board                                            | position            | positionGuesses
    ${['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']} | ${MIDDLE_ROW_LEFT}  | ${[MIDDLE_ROW_LEFT]}
    ${['X', 'O', ' ', ' ', 'X', ' ', ' ', ' ', ' ']} | ${BOTTOM_ROW_LEFT}  | ${[BOTTOM_ROW_LEFT]}
    ${['X', 'O', ' ', ' ', 'X', 'X', ' ', ' ', ' ']} | ${BOTTOM_ROW_RIGHT} | ${[TOP_ROW_LEFT, TOP_ROW_CENTRE, MIDDLE_ROW_CENTRE, MIDDLE_ROW_RIGHT, BOTTOM_ROW_RIGHT]}
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

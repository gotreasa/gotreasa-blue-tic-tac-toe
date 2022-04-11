const { GameController } = require('../../src/controller/GameController');
const { EMPTY_BOARD } = require('../constants/boardSquares');

describe('Game controller', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
    gameController.game.getBoardState = jest.fn();
    gameController.bot.getNextMove = jest.fn();
    gameController.game.fillSquare = jest.fn();
  });

  afterEach(() => {
    gameController.game.getBoardState.mockReset();
    gameController.bot.getNextMove.mockReset();
    gameController.game.fillSquare.mockReset();
  });

  test.each`
    board                                            | movePosition
    ${EMPTY_BOARD}                                   | ${2}
    ${['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']} | ${3}
  `(
    'should have bot place mark $expectedMark in postion $markPosition for $board',
    ({ board, movePosition }) => {
      gameController.game.getBoardState.mockReturnValue(board);
      gameController.bot.getNextMove.mockReturnValue(movePosition);
      gameController.getNextMove();
      expect(gameController.getNextMove()).toBe(movePosition);
    },
  );

  test.each`
    board          | movePosition | expectedMark
    ${EMPTY_BOARD} | ${2}         | ${'X'}
  `(
    'should have bot place mark $expectedMark in postion $markPosition for $board',
    ({ board, movePosition, expectedMark }) => {
      gameController.game.getBoardState.mockReturnValue(board);
      gameController.bot.getNextMove.mockReturnValue(movePosition);
      gameController.move();
      expect(gameController.game.fillSquare).toHaveBeenCalledWith(
        expectedMark,
        movePosition,
      );
    },
  );
});

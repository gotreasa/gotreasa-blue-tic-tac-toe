const { GameController } = require('../../src/controller/GameController');
const { EMPTY_BOARD } = require('../constants/boardSquares');

describe('Game controller', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
    gameController.game.getBoardState = jest.fn();
    gameController.bot.getNextMove = jest.fn();
    gameController.game.fillSquare = jest.fn();
    gameController.game.getNextPlayer = jest.fn();
    gameController.game.getGameStatus = jest.fn();
  });

  afterEach(() => {
    gameController.game.getBoardState.mockReset();
    gameController.bot.getNextMove.mockReset();
    gameController.game.fillSquare.mockReset();
    gameController.game.getNextPlayer.mockReset();
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
    board                                            | movePosition | expectedMark
    ${EMPTY_BOARD}                                   | ${2}         | ${'X'}
    ${['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']} | ${3}         | ${'O'}
  `(
    'should have bot place mark $expectedMark in postion $markPosition for $board',
    ({ board, movePosition, expectedMark }) => {
      gameController.game.getBoardState.mockReturnValue(board);
      gameController.bot.getNextMove.mockReturnValue(movePosition);
      gameController.game.getNextPlayer.mockReturnValue(expectedMark);
      gameController.move();
      expect(gameController.game.fillSquare).toHaveBeenCalledWith(
        movePosition,
        expectedMark,
      );
    },
  );

  test('should play game until no more moves left', () => {
    gameController.game.getBoardState
      .mockReturnValueOnce(EMPTY_BOARD)
      .mockReturnValueOnce(['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '])
      .mockReturnValueOnce(['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '])
      .mockReturnValueOnce(['X', 'O', ' ', 'X', ' ', ' ', ' ', ' ', ' '])
      .mockReturnValueOnce(['X', 'O', 'O', 'X', ' ', ' ', ' ', ' ', ' '])
      .mockReturnValueOnce(['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' ']);
    gameController.game.getGameStatus
      .mockReturnValueOnce('X_TURN')
      .mockReturnValueOnce('O_TURN')
      .mockReturnValueOnce('X_TURN')
      .mockReturnValueOnce('O_TURN')
      .mockReturnValueOnce('X_TURN')
      .mockReturnValueOnce('X_WON');
    expect(gameController.getEntireGame()).toEqual([
      {
        board: EMPTY_BOARD,
        status: 'X_TURN',
      },
      {
        board: ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        status: 'O_TURN',
      },
      {
        board: ['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        status: 'X_TURN',
      },
      {
        board: ['X', 'O', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
        status: 'O_TURN',
      },
      {
        board: ['X', 'O', 'O', 'X', ' ', ' ', ' ', ' ', ' '],
        status: 'X_TURN',
      },
      {
        board: ['X', 'O', 'O', 'X', ' ', ' ', 'X', ' ', ' '],
        status: 'X_WON',
      },
    ]);
  });
});

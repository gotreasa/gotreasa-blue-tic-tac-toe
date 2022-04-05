const { Board } = require('../../src/domain/Board');

describe('Get the state of the board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test('should return the markers in each of the squares', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    board.squares = squares;
    expect(board.getSquares()).toEqual(squares);
  });
});

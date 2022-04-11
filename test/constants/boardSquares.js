const EMPTY_BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const TOP_ROW_X_WIN = ['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' '];
const MIDDLE_ROW_O_WIN = [' ', 'X', 'X', 'O', 'O', 'O', 'X', ' ', ' '];
const BOTTOM_ROW_X_WIN = [' ', 'O', 'O', ' ', ' ', ' ', 'X', 'X', 'X'];
const LEFT_COLUMN_X_WIN = ['X', 'O', ' ', 'X', 'O', ' ', 'X', ' ', ' '];
const MIDDLE_COLUMN_O_WIN = [' ', 'O', 'X', 'X', 'O', ' ', 'X', 'O', ' '];
const RIGHT_COLUMN_X_WIN = [' ', 'O', 'X', ' ', 'O', 'X', ' ', ' ', 'X'];
const BACKWARD_DIAGONAL_X_WIN = ['X', 'O', ' ', ' ', 'X', ' ', 'O', ' ', 'X'];
const FORWARD_DIAGONAL_O_WIN = [' ', 'X', 'O', 'X', 'O', ' ', 'O', 'X', ' '];
const DRAW_BAORD = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];

module.exports = {
  EMPTY_BOARD,
  TOP_ROW_X_WIN,
  MIDDLE_ROW_O_WIN,
  BOTTOM_ROW_X_WIN,
  LEFT_COLUMN_X_WIN,
  MIDDLE_COLUMN_O_WIN,
  RIGHT_COLUMN_X_WIN,
  BACKWARD_DIAGONAL_X_WIN,
  FORWARD_DIAGONAL_O_WIN,
  DRAW_BAORD,
};

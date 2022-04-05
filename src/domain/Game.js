class Game {
  constructor() {
    this.squares = new Array(9).fill(' ');
    this.PLAYER_X = 'X';
    this.PLAYER_O = 'O';
    this.nextPlayer = this.PLAYER_X;
  }

  getNextPlayer() {
    if (this.nextPlayer === this.PLAYER_X) {
      this.nextPlayer = this.PLAYER_O;

      return this.PLAYER_X;
    }
    this.nextPlayer = this.PLAYER_X;

    return this.PLAYER_O;
  }

  setOrder(order) {
    this.order = order;
  }

  fillSquares() {
    this.order.forEach((value, index) => {
      this.squares[value] = index % 2 === 0 ? 'X' : 'O';
    });

    return this.squares;
  }

  getGrid() {
    return `${this.squares[0]}|${this.squares[1]}|${this.squares[2]}
-+-+-
${this.squares[3]}|${this.squares[4]}|${this.squares[5]}
-+-+-
${this.squares[6]}|${this.squares[7]}|${this.squares[8]}`;
  }
}

module.exports = {
  Game,
};

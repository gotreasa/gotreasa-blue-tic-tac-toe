class Game {
  constructor() {
    this.squares = new Array(9).fill(' ');
    this.PLAYER_X = 'X';
    this.PLAYER_O = 'O';
    this.nextPlayer = this.PLAYER_X;
  }

  getNextPlayer() {
    if (this.getNextPlayer === this.PLAYER_O) {
      this.getNextPlayer = this.PLAYER_X;

      return this.PLAYER_O;
    }

    return this.PLAYER_X;
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

  print() {
    this.output = `Game Board Creation…
  ${this.getGrid()}
  Board Created.
  The game will start with player X`;
    // for (let i = 0; i < 0; i += 1) {

    // }
    console.log(this.output);

    return this.output;
  }
}
const game = new Game();
game.setOrder([8, 7, 5, 6, 0, 1, 2, 4, 3]);
// game.fillSquares();
game.print();

module.exports = {
  Game,
};

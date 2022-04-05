# TicTacTe Backlog

### ✅ US1 - An empty board is generated at the start of the game

#### ✅ UAT1.1

```
  Given a new game
  When getting the board
  Then the board is empty
```

### ✅ US2 - Get the current game board

#### ✅ UAT2.1

```
  Given a new game
  And steps <steps>
  When getting the board state
  Then the board <squares> are returned

  Examples:
    | steps  | squares                           |
    | []     | " | | \n-+-+-\n | | \n-+-+-\n | | " |
    | [0]    | "X| | \n-+-+-\n | | \n-+-+-\n | | " |
    | [0,1]  | "X|O| \n-+-+-\n | | \n-+-+-\n | | " |
    | [0,1,2]| "X|O|X\n-+-+-\n | | \n-+-+-\n | | " |
```

### ✅ US3 - Players take turns to mark the board

#### ✅ UAT3.1

```
  Given a new game
  When checking who takes the next move
  Then it's player X turn
```

#### ✅ UAT3.2

```
Given a new game
And the next mark is <next mark>
When checking who takes the next move
Then the next mark is updated to <future mark>

Examples:
| next mark | future mark |
| X         | O           |
| O         | X           |
```

### ✅ US4 - Printing the initial board

#### ✅ UAT4.1

```
Given a new game
When printing the initial state
Then the board is printed
```

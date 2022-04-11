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

### 🚧 US5 - Winning game statuses

#### ✅ UAT5.1 - Horizontal win

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ["X", "X", "X", "O", "O", " ", " ", " ", " "] | X    |
  | [" ", "X", "X", "O", "O", "O", "X", " ", " "] | O    |
  | [" ", "O", "O", " ", " ", " ", "X", "X", "X"] | X    |
```

#### ✅ UAT5.2 - Vertical win

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ["X", "O", " ", "X", "O", " ", "X", " ", " "] | X    |
  | [" ", "O", "X", "X", "O", " ", "X", "O", " "] | O    |
  | [" ", "O", "X", " ", "O", "X", " ", " ", "X"] | X    |
```

#### ✅ UAT5.3 - Diagonal win

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ["X", "O", " ", " ", "X", " ", "O", " ", "X"] | X    |
  | [" ", "X", "O", "X", "O", " ", "O", "X", " "] | O    |
```

### ✅ US6 - Game ends in a draw

#### ✅ UAT6.1 - Game end in a draw

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then game ends in a draw
```

### ✅ US7 - Next turn status

#### ✅ UAT7.1 - Next turn status

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> is next to take a turn

  Examples:
  | squares                                       | mark |
  | ["X", "O", " ", "X", " ", " ", "O", " ", " "] | X    |
  | [" ", "X", "O", "X", "O", " ", " ", "X", " "] | O    |
```

### 🚧 US8 - Bot versus Bot playing the game

#### 🚧 UAT8.1 - Bot makes a move

```
Given a new game controller
And steps already taken <steps>
When stepping with the bot
Then the bot moves to an empty square <position>

        Examples:
            | steps                                          | position |
            | ["X", "O", " ", " ", " ", " ", " ", " ", " " ] | 3        |
            | ["X", "O", " ", "X", " ", " ", " ", " ", " " ] | 6        |
```

### ⚠ US9 - Console running the game

#### ⚠ UAT9.1 - Making the moves

```
  Given a new console game
  When playing the game
  Then the bot is taking steps one at a time
```

#### ⚠ UAT9.2 - The board is printed after each move

```
  Given a new console game
  When playing the game
  Then the board is printed after each step
```

#### ⚠ UAT9.3 - The latest status is printed after each move

```
  Given a new console game
  When playing the game
  Then the game status is printed after each step
```

#### ⚠ UAT9.4 - The game pauses between each step

```
  Given a new console game
  When playing the game
  Then there is a 2 second pause between each step
```

#### ⚠ UAT9.5 - The game ends when an end game status is reached

```
  Given a new console game
  When playing the game
  Then the game ends when an end game status is reached
```

### ⚠ US10 - Bot versus API

#### ⚠ UAT10.1 - API health

```
  Given an API consumer
  When the health is checked
  Then HTTP OK is returned
```

#### ⚠ UAT10.2 - The board moves are returned

```
  Given an API consumer
  When the game endpoint is called
  Then board representation of each move is returned
```

#### ⚠ UAT10.2 - The game status is returned for each move

```
  Given an API consumer
  When the game endpoint is called
  Then the game status for each move is returned
```

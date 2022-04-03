# TicTacTe Backlog

### 🚧 US1 - An empty board is generated at the start of the game

#### 🚧 UAT1.1

```
  Given a new game
  When getting the board
  Then the grid is empty
```

### ⚠ US2 - Get the current game board

#### ⚠ UAT2.1

```
  Given a new game
  And steps <steps>
  When getting the board state
  Then the board <squares> are returned

  Examples:
    | steps | squares                                |
    | []     | [" "," "," "," "," "," "," "," "," "] |
    | [0]    | ["X"," "," "," "," "," "," "," "," "] |
    | [0,1]  | ["X","O"," "," "," "," "," "," "," "] |
    | [0,1,2]| ["X","O","X"," "," "," "," "," "," "] |
```

### ⚠ US3 - Players take turns to mark the board

#### ⚠ UAT3.1

```
  Given a new game
  When checking who takes the next move
  Then it's player X turn
```

#### ⚠ UAT3.2

```
  Given <previous mark> has made
  When checking who takes the next move
  Then it's player <next makr> turn

  Examples:
    | previous mark | next mark
    | X             | O
    | O             | X
```

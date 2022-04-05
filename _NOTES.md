# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠ TODO

## Pomodoro 1

- 🚧 UAT1.1

```
  Given a new game
  When getting the board
  Then the grid is empty
```

- ⚠ UAT2.1

```
  Given a new game
  And steps <steps>
  When getting the board state
  Then the board <squares> are returned

  Examples:
    | steps  | squares                           |
    | []     | " | | \n-+--+- | | \n-+--+- | | " |
    | [0]    | "X| | \n-+--+- | | \n-+--+- | | " |
    | [0,1]  | "X|O| \n-+--+- | | \n-+--+- | | " |
    | [0,1,2]| "X|O|X\n-+--+- | | \n-+--+- | | " |
```

## Pomodoro 2

- ✅ UAT1.1

```
  Given a new game
  When getting the board
  Then the grid is empty
```

- 🚧 UAT2.1

```
  Given a new game
  And steps <steps>
  When getting the board state
  Then the board <squares> are returned

  Examples:
    | steps  | squares                           |
    | []     | " | | \n-+--+- | | \n-+--+- | | " |
    | [0]    | "X| | \n-+--+- | | \n-+--+- | | " |
    | [0,1]  | "X|O| \n-+--+- | | \n-+--+- | | " |
    | [0,1,2]| "X|O|X\n-+--+- | | \n-+--+- | | " |
```

## Pomodoro 3

- ✅ UAT2.1

```
  Given a new game
  And steps <steps>
  When getting the board state
  Then the board <squares> are returned

  Examples:
    | steps  | squares                           |
    | []     | " | | \n-+--+- | | \n-+--+- | | " |
    | [0]    | "X| | \n-+--+- | | \n-+--+- | | " |
    | [0,1]  | "X|O| \n-+--+- | | \n-+--+- | | " |
    | [0,1,2]| "X|O|X\n-+--+- | | \n-+--+- | | " |
```

- 🚧 UAT3.1

```
  Given a new game
  When checking who takes the next move
  Then it's player X turn
```

## Pomodoro 4

- ✅ UAT3.1

```

Given a new game
When checking who takes the next move
Then it's player X turn

```

- 🚧 UAT3.2

```

Given <previous mark> has made
When checking who takes the next move
Then it's player <next makr> turn

Examples:
| previous mark | next mark
| X | O
| O | X

```

## Pomodoro 5

- ✅ UAT3.2

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

- ✅ TD1: Rename ticTacToe to Game
- ✅ TD2: Remove all commented lines
- ✅ TD3: Remove the execution of the Game class

## Pomodoro 6

- ✅ UAT4.1

```
Given a new game
When printing the initial state
Then the board is printed
```

- ✅ TD4: Remove dummy test and class
- 🚧 TD5: Move getGrid to ConsoleRender class
- ⚠ TD6: Move print to ConsoleRender class
- ⚠ TD7: Combine setOrder and fillSquares
- ⚠ TD8: Update fillSquares to use getNextPlayer()

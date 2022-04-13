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
- ⚠ TD5: Move getGrid to ConsoleRender class
- ✅ TD6: Move print to ConsoleRender class
- ⚠ TD7: Combine setOrder and fillSquares
- ⚠ TD8: Update fillSquares to use getNextPlayer()

## Pomodoro 7

- ⚠ TD5: Move getGrid to ConsoleRender class
- ✅ TD7: Combine setOrder and fillSquares
- ✅ TD8: Update fillSquares to use getNextPlayer()
- ✅ TD9: extract squares into board class

## Pomodoro 8

- ✅ TD5: Move getGrid to ConsoleRender class
- ✅ Plan out the backlog for the domain

## Pomodoro 9

- 🚧 UAT5.1 - Horizontal win

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' '] | X    |
  | [' ', 'X', 'X', 'O', 'O', 'O', 'X', ' ', ' '] | O    |
  | [' ', 'O', 'O', ' ', ' ', ' ', 'X', 'X', 'X'] | X    |
```

## Pomodoro 10

- ✅ UAT5.1 - Horizontal win

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ['X', 'X', 'X', 'O', 'O', ' ', ' ', ' ', ' '] | X    |
  | [' ', 'X', 'X', 'O', 'O', 'O', 'X', ' ', ' '] | O    |
  | [' ', 'O', 'O', ' ', ' ', ' ', 'X', 'X', 'X'] | X    |
```

- ✅ UAT5.2 - Vertical win

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

## Pomodoro 11

- ✅ UAT5.3 - Diagonal win

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ['X', 'O', ' ', 'X', ' ', ' ', 'O', ' ', 'X'] | X    |
  | [' ', 'X', 'O', 'X', 'O', ' ', 'O', 'X', ' '] | O    |
```

- 🚧 Refactor the Game status

## Pomodoro 12

- ✅ UAT6.1 - Game end in a draw

```
  Given a new game
  And the squares are marked as follows <squares>
  When the game status is checked
  Then game ends in a draw
```

- 🚧 UAT7.1 - Next turn status

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

## Pomodoro 13

- ✅ UAT7.1 - Next turn status

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

## Pomodoro 14

- 🚧 TD10: extract out the completexity from getGameStatus
- ⚠ TD11: rmeove this.nextPlayer

## Pomodoro 15

- ✅ TD10: extract out the completexity from getGameStatus
- ✅ TD11: rmeove this.nextPlayer
- 🚧 Develop backlog for Bot playing against Bot

## Pomodoro 16

- ✅ TD14: fix up the Pact verification on PactFlow

## Pomodoro 17

- ✅ Create the rest of the backlog for the API and console

## Pomodoro 18

- ✅ TD15: Update the jest config to prevent it causing problems when the pact files are updated
- 🚧 UAT8.1 - Bot makes a move

```
  Given a new game
  And a bot
  And steps already taken <steps>
  When stepping with the bot
  Then the bot moves to an empty square <position>

        Examples:
            | steps                                          | position |
            | ["X", "O", " ", " ", " ", " ", " ", " ", " " ] | 3        |
            | ["X", "O", " ", "X", " ", " ", " ", " ", " " ] | 6        |
```

- ⚠ UAT9.1 - Making the moves

```
  Given a new console game
  When playing the game
  Then the bot is taking steps one at a time
```

## Pomodoro 19

- 🚧 UAT8.1 - Bot makes a move

```
  Given a new game
  And a bot
  And steps already taken <steps>
  When stepping with the bot
  Then the bot moves to an empty square <position>

        Examples:
            | steps                                          | position |
            | ["X", "O", " ", " ", " ", " ", " ", " ", " " ] | 3        |
            | ["X", "O", " ", "X", " ", " ", " ", " ", " " ] | 6        |
```

- ⚠ UAT9.1 - Making the moves

```
  Given a new console game
  When playing the game
  Then the bot is taking steps one at a time
```

## Pomodoro 20

- ✅ UAT8.1 - Bot makes a move

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

## Pomodoro 21

- 🚧 UAT9.1 - Making the moves

```
  Given a new console game
  When playing the game
  Then the bot is taking steps one at a time
```

## Pomodoro 22

- ✅ UAT9.1 - Making the moves

```
  Given a new console game
  When playing the game
  Then the bot is taking steps one at a time
```

- ✅ UAT9.2 - The board is printed after each move

```
  Given a new console game
  When playing the game
  Then the board is printed after each step
```

## Pomodoro 23

- 🚧 UAT9.3 - The latest status is printed after each move

```
  Given a new console game
  When playing the game
  Then the game status is printed after each step
```

## Pomodoro 24

- ✅ UAT9.3 - The latest status is printed after each move

```
  Given a new console game
  When playing the game
  Then the game status is printed after each step
```

- ✅ UAT9.4 - The game pauses between each step

```
  Given a new console game
  When playing the game
  Then there is a 2 second pause between each step
```

## Pomodoro 25

- 🚧 UAT9.5 - The game ends when an end game status is reached

```
  Given a new console game
  When playing the game
  Then the game ends when an end game status is reached
```

## Pomodoro 26

- ✅ UAT9.5 - The game ends when an end game status is reached

```
  Given a new console game
  When playing the game
  Then the game ends when an end game status is reached
```

## Pomodoro 27

- ✅ Define the OpenAPI specification
- ✅ UAT10.1 - API health

```
  Given an API consumer
  When the health is checked
  Then HTTP OK is returned
```

## Pomdoro 28

- 🚧 UAT10.2 - The board moves are returned

```
  Given an API consumer
  When the game endpoint is called
  Then board representation of each move is returned
```

- ⚠ UAT10.2 - The game status is returned for each move

```
  Given an API consumer
  When the game endpoint is called
  Then the game status for each move is returned
```

## Pomdoro 29

- 🚧 UAT10.2 - The board moves are returned

```
  Given an API consumer
  When the game endpoint is called
  Then board representation of each move is returned
```

## Pomdoro 30

- 🚧 UAT10.2 - The board moves are returned

```
  Given an API consumer
  When the game endpoint is called
  Then board representation of each move is returned
```

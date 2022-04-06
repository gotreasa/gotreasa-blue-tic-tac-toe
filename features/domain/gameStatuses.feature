Feature: Game status

Scenario Outline: Horizontal win
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ["X", "X", "X", "O", "O", " ", " ", " ", " "] | X    |
  | [" ", "X", "X", "O", "O", "O", "X", " ", " "] | O    |
  | [" ", "O", "O", " ", " ", " ", "X", "X", "X"] | X    |

Scenario Outline: Vertical win
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then <mark> has won

  Examples:
  | squares                                       | mark |
  | ["X", "O", " ", "X", "O", " ", "X", " ", " "] | X    |
  | [" ", "O", "X", "X", "O", " ", "X", "O", " "] | O    |
  | [" ", "O", "X", " ", "O", "X", " ", " ", "X"] | X    |

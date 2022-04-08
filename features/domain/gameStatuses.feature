Feature: Game status

Scenario Outline: Horizontal <row> row win 
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then <mark> has won

  Examples:
  | squares                                       | mark | row    |
  | ["X", "X", "X", "O", "O", " ", " ", " ", " "] | X    | top    |
  | [" ", "X", "X", "O", "O", "O", "X", " ", " "] | O    | middle |
  | [" ", "O", "O", " ", " ", " ", "X", "X", "X"] | X    | bottom |

Scenario Outline: Vertical <column> column win
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then <mark> has won

  Examples:
  | squares                                       | mark | column |
  | ["X", "O", " ", "X", "O", " ", "X", " ", " "] | X    | left   |
  | [" ", "O", "X", "X", "O", " ", "X", "O", " "] | O    | middle |
  | [" ", "O", "X", " ", "O", "X", " ", " ", "X"] | X    | right  |

Scenario Outline: <direction> Diagnal win
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then <mark> has won

  Examples:
  | squares                                       | mark | direction |
  | ["X", "O", " ", " ", "X", " ", "O", " ", "X"] | X    | Backward  |
  | [" ", "X", "O", "X", "O", " ", "O", "X", " "] | O    | Forward   |

Scenario Outline: Game ends in a draw
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then game ends in a draw

  Examples:
  | squares                                       |
  | ["X", "O", "X", "X", "O", "X", "O", "X", "O"] |

Scenario Outline: Next turn is <mark>
Given a new game
And the squares are marked as follows <squares>
When the game status is checked
Then <mark> is next to take a turn

  Examples:
  | squares                                       | mark |
  | ["X", "O", " ", "X", " ", " ", "O", " ", " "] | X    |
  | [" ", "X", "O", "X", "O", " ", " ", "X", " "] | O    |

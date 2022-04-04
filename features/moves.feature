Feature: Player moves

Scenario Outline: The board correctly reflects the player's moves
Given a new game
And steps <steps>
When getting the board state
Then the board <squares> are returned

  Examples:
    | steps  | squares                           |
    | []     |  \| \| \n-+-+-\n \| \| \n-+-+-\n \| \|  |
    | [0]    | X\| \| \n-+-+-\n \| \| \n-+-+-\n \| \|  |
    | [0,1]  | X\|O\| \n-+-+-\n \| \| \n-+-+-\n \| \|  |
    | [0,1,2]| X\|O\|X\n-+-+-\n \| \| \n-+-+-\n \| \|  |

Scenario: Player X takes the first move
Given a new game
When checking who takes the next move
Then it's player X turn
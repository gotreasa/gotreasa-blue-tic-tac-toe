Feature: Player moves

    Scenario Outline: The board correctly reflects the players moves <steps>
        Given a new game
        And steps <steps>
        When getting the board state
        Then the board <squares> are returned

        Examples:
            | steps   | squares                                       |
            | []      | [" ", " ", " ", " ", " ", " ", " ", " ", " "] |
            | [0]     | ["X", " ", " ", " ", " ", " ", " ", " ", " "] |
            | [0,1]   | ["X", "O", " ", " ", " ", " ", " ", " ", " "] |
            | [0,1,2] | ["X", "O", "X", " ", " ", " ", " ", " ", " "] |

    Scenario: Player X takes the first move
        Given a new game
        When checking who takes the next move
        Then it's player X turn

    Scenario Outline: Players alternative turns - <next_mark>
        Given a new game
        And the step count is <step_count>
        When checking who takes the next move
        Then the next mark is <next_mark>

        Examples:
            | step_count | next_mark |
            | 3          | O         |
            | 0          | X         |

Feature: Controller manage the bot versus bot game

    Scenario: Bot makes a move

        Given a new game controller
        And a bot
        And steps already taken <steps>
        When stepping with the bot
        Then the bot moves to an empty square <position>

        Examples:
            | steps                                          | position |
            | ["X", "O", " ", " ", " ", " ", " ", " ", " " ] | 3        |
            # | ["X", "O", " ", "X", " ", " ", " ", " ", " " ] | 6        |
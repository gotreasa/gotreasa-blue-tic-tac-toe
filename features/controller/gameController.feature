Feature: Controller manage the bot versus bot game

    Scenario Outline: Bot makes a move

        Given a new game controller
        And steps already taken <steps>
        When stepping with the bot
        Then the bot moves to an empty square

        Examples:
            | steps                                          |
            | ["X", "O", " ", " ", " ", " ", " ", " ", " " ] |
            | ["X", "O", " ", "X", " ", " ", " ", " ", " " ] |

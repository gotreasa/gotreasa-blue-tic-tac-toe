Feature: Controller manage the bot versus bot game

    Scenario Outline: Bot makes a move based on board <board>

        Given a new game controller
        And moves already taken <board>
        When stepping with the bot
        Then the bot moves to an empty square

        Examples:
            | board                                          |
            | ["X", "O", " ", " ", " ", " ", " ", " ", " " ] |
            | ["X", "O", " ", "X", " ", " ", " ", " ", " " ] |

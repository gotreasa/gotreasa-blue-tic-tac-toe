Feature: Console Game Pauses

    Scenario: The game pauses between each step
        Given a new console game
        When playing the game
        Then there is a 2 second pause between each step

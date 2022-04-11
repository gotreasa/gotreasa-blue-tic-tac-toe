Feature: Console Game

    Scenario: Printing the initial board
        Given a new consoleRenderer
        When printing the initial state
        Then the board is printed

    Scenario: Making the moves
        Given a new console game
        When playing the game
        Then the bot is taking steps one at a time

Feature: Console Game

    Scenario: Printing the initial board
        Given a new consoleRenderer
        When printing the initial state
        Then the board is printed

    Scenario: Making the moves
        Given a new console game
        When playing the game
        Then the bot is taking steps one at a time

    Scenario: The board is printed after each move
        Given a new console game
        When playing the game
        Then the board is printed after each move

    Scenario: The latest status is printed after each move
        Given a new console game
        When playing the game
        Then the game status is printed after each move
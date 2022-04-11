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

    Scenario: The game pauses between each step
        Given a new console game
        When playing the game
        Then there is a 2 second pause between each step

    Scenario Outline: The game ends when an end game status <endStatus> is reached
        Given a new console game
        And the game status is <gameStatus>
        When playing the game
        Then the game ends with the status <humanReadableStatus>
        Examples:
            | endStatus | humanReadableStatus           |
            | X_WIN     | Player X won!                 |
            # | O_WIN     | Player O won!                 |
            # | DRAW      | The game has ended in a draw! |
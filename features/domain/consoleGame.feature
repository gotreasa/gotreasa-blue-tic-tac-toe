Feature: Console Game

Scenario: Printing the initial board
Given a new consoleRenderer
When printing the initial state
Then the board is printed

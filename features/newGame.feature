Feature: Start a Tic Tac Toe game

Scenario: Creating an empty board
Given a new game
When getting the board
Then the board is empty

Scenario: Printing the initail board
Given a new game
When printing the initial state
Then the board is printed

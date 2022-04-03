Feature: Start a Tic Tac Toe game

Scenario: Creating an empty board
Given a new game
When getting the board
Then the grid is empty

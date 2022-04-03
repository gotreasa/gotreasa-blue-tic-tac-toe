# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠ TODO

## Pomodoro 1

- 🚧 UAT1.1

```
  Given a new game
  When getting the board
  Then the grid is empty
```

- ⚠ UAT2.1

```
  Given a new game
  And steps <steps>
  When getting the board state
  Then the board <squares> are returned

  Examples:
    | steps | squares                                |
    | []     | [" "," "," "," "," "," "," "," "," "] |
    | [0]    | ["X"," "," "," "," "," "," "," "," "] |
    | [0,1]  | ["X","O"," "," "," "," "," "," "," "] |
    | [0,1,2]| ["X","O","X"," "," "," "," "," "," "] |
```

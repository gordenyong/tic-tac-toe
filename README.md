# Tic Tac Toe
This project is about designing a tic tac toe game through html,css and javascript. The first player that interacts with the game gets the first choice(X), whereas the second player gets the second choice(O) where their moves are always alternating until one of the players has drawn a row of three symbols or until no one can win. 

## Play my game :)
https://gordenyong.github.io/ticTacToe/

## Planning
### Basic game appearance
- Game title
- create 9 boxes for X and O's (look at warmup12 for reference)
- CSS for each box size

### Recognizing player turns
- There are a max of 9 choices (5 for player 1 and 4 for player 2)
- Use remainder operator to get even and odd numbers (choices for player X and O)
- Define a variable choice and add 1 everytime the function runs

### Player 1 move code
- Adds cross to clicked box (warmup12 for reference)
- Add winning combinations (if else statements)
- If one of the winning combinations is fullfilled, display "Player 1 has won"

### Player 2 move code
- Adds O's to clicked box
- If one of the winning combinations is fullfilled, display "Player 2 has won"

### Check if results are tie
- If theres no winner, console log "Its a tie" (when choice=9)

## Cool tech used
- Added restart game button 

## Future features (things to add when i have time)
- An animation background 
- Background music
- Sound effect when box is clicked (maybe different sounds for each player)
- A scoreboard to keep track of the points

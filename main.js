var clickBox1 = document.querySelector('.box1')
var clickBox2 = document.querySelector('.box2')
var clickBox3 = document.querySelector('.box3')
var clickBox4 = document.querySelector('.box4')
var clickBox5 = document.querySelector('.box5')
var clickBox6 = document.querySelector('.box6')
var clickBox7 = document.querySelector('.box7')
var clickBox8 = document.querySelector('.box8')
var clickBox9 = document.querySelector('.box9')

var column1 = document.querySelector('.column-1')
var column2 = document.querySelector('.column-2')
var column3 = document.querySelector('.column-3')

var resultDisplay = document.querySelector('.result-display')
column1.addEventListener('click', playerMove)
column2.addEventListener('click', playerMove)
column3.addEventListener('click', playerMove)



var choice = 1
var playerXwin 
var playerOwin

function playerMove(event) {
    var boxClicked = event.target
    console.log(boxClicked)
    if (boxClicked.tagName.toLowerCase() === 'div') {
        if (boxClicked.textContent == ""){
            if (choice%2!=0){
                if (playerXwin!=true){
                    boxClicked.innerText = "X"
                }
                if (clickBox1.textContent=="X" && clickBox2.textContent=="X" && clickBox3.textContent=="X" ){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox4.textContent=="X" && clickBox5.textContent=="X" && clickBox6.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox7.textContent=="X" && clickBox8.textContent=="X" && clickBox9.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox1.textContent=="X" && clickBox4.textContent=="X" && clickBox7.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox2.textContent=="X" && clickBox5.textContent=="X" && clickBox8.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox3.textContent=="X" && clickBox6.textContent=="X" && clickBox9.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox1.textContent=="X" && clickBox5.textContent=="X" && clickBox9.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox3.textContent=="X" && clickBox5.textContent=="X" && clickBox7.textContent=="X"){
                    playerXwin = true
                    resultDisplay.innerText = "Player X wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (choice==9){
                    resultDisplay.innerText = "Its a draw"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }
                console.log(choice)
                choice++
                

            }else if (choice%2==0){
                if (playerOwin!=true){
                    boxClicked.innerText = "O"
                }
                
                if (clickBox1.textContent=="O" && clickBox2.textContent=="O" && clickBox3.textContent=="O" ){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox4.textContent=="O" && clickBox5.textContent=="O" && clickBox6.textContent=="O"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox7.textContent=="O" && clickBox8.textContent=="O" && clickBox9.textContent=="O"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox1.textContent=="O" && clickBox4.textContent=="O" && clickBox7.textContent=="O"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox2.textContent=="O" && clickBox5.textContent=="O" && clickBox8.textContent=="O"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox3.textContent=="O" && clickBox6.textContent=="O" && clickBox9.textContent=="X"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox1.textContent=="O" && clickBox5.textContent=="O" && clickBox9.textContent=="O"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (clickBox3.textContent=="O" && clickBox5.textContent=="O" && clickBox7.textContent=="O"){
                    playerOwin = true
                    resultDisplay.innerText = "Player O wins"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }else if (choice==9){
                    resultDisplay.innerText = "Its a draw"
                    column1.removeEventListener('click', playerMove)
                    column2.removeEventListener('click', playerMove)
                    column3.removeEventListener('click', playerMove)
                }
                console.log(choice)
                choice++
                
            }
        }
    }   
}













let scoreSheet = document.querySelector('.display')





// When the button is clicked its shown
const rock = document.querySelector(".rock").addEventListener('click',function(){
    game("rock")
})
const paper = document.querySelector(".paper").addEventListener('click',function(){
    game("paper")
})
const siccors = document.querySelector(".siccors").addEventListener('click',function(){
    game("siccors")
})
// Displays messages when som1 Wins
const playerWins = 'You Win'
const computerWins = 'Computer Win'
const draw = 'Draw';
// Updates Text of Players
const humanText = document.querySelector('.human')
const computerText = document.querySelector('.computer')

let humanScore = 0;
let computerScore = 0;



function game(human){
    const options = ['rock','papers','siccors'];
    const computer = options[Math.floor(Math.random() * options.length)];
    if (human === computer){
        scoreSheet.innerText = draw;
}else if((human === 'rock' && computer === 'siccors') || 
(human === 'siccors' && computer === 'paper') || 
(human === 'paper' && computer === 'rock')){
    scoreSheet.innerText = playerWins;
    humanScore ++
    humanText.innerText = `Player: ${humanScore}`;
}else{
    scoreSheet.innerText = computerWins;
    computerScore ++
    computerText.innerText = `Computer: ${computerScore}`;
}
winner()
}
function disable(){
    if(computerScore === 5 || humanScore === 5 ){
        rock.removeEventListener('click', game);
        paper.removeEventListener('click', game);
        siccors.removeEventListener('click', game);

    }
}

function winner(){
    if (computerScore === 5){
        scoreSheet.innerText = 'Computer Won the Game';
        resetScore()
        disable()

    }else if(humanScore === 5) {
        scoreSheet.innerText = "You Won the Game";
        resetScore()
       disable()
    }
    
}





const reset = document.querySelector('.restart')
function resetScore(){
    document.querySelector(".human").innerText = "Player: ";
    document.querySelector(".computer").innerText = "Computer: ";
    computerScore = 0;
    humanScore = 0;

}
reset.addEventListener('click', resetScore)


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
const playerWins = 'You Win'
const computerWins = 'Computer Win'
const draw = 'Draw';



function game(human){
    const options = ['rock','papers','siccors'];
    const computer = options[Math.floor(Math.random() * options.length)];
    if (human === computer){
        scoreSheet.innerText = draw;
}else if((human === 'rock' && computer === 'siccors') || 
(human === 'siccors' && computer === 'paper') || 
(human === 'paper' && computer === 'rock')){
    scoreSheet.innerText = playerWins;
}else{
    scoreSheet.innerText = computerWins;
}

}






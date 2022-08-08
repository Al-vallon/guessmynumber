'use strict'
window.addEventListener("DOMContentLoaded", (event) => {
    
    let secretNumber = Math.trunc(Math.random()*20) +1;
    let scoredec = 20;
    let highscoredec = 20;

    const message = document.querySelector('.message');
    const win = document.querySelector('.win');
    const check = document.querySelector('.check');
    const reset = document.querySelector('.reset');
    const score = document.querySelector('.score');
    const highscore = document.querySelector('.highscore');

    console.log(secretNumber);    

    check.addEventListener('click', function (){
        const guess = Number(document.querySelector('.guess').value);

        if(!guess){
            message.textContent = '❌ Sorry, can you entrer a valid number, please';
        } else if ( guess == secretNumber){
            message.textContent = '🎉 Yoo hoo, great Job, you find the secret number !! 🎉';
            win.style.display = 'inline';
        }
        
        if (guess > secretNumber){
            message.textContent = '⏫ too high !!';
            scoredec--
            score.textContent = scoredec;
            highscoredec--;
            highscore.textContent = highscoredec

        } else if (guess < secretNumber){
            message.textContent = '⏬ too low !!';
            // scoredec--
            // score.textContent = scoredec;
            // highscoredec--;
            // highscore.textContent = highscoredec
            
        }
        
    })


    reset.addEventListener('click', function(){
        secretNumber = Math.trunc(Math.random()*20) +1;
        win.style.display = 'none';
        message.textContent = 'Starting guess . . .';
        score.textContent = 20;
        document.querySelector('.guess').value = '';
    });

    
    




    console.log("Loaded");
});
'use strict'
window.addEventListener("DOMContentLoaded", (event) => {
    
    let secretNumber = Math.trunc(Math.random()*20) +1;
    let scoredec = 10;
    let highscoredec = 10;
    console.log(secretNumber);

    const win = document.querySelector('.win');
    const loose = document.querySelector ('.loose');
    const check = document.querySelector('.check');
    const reset = document.querySelector('.reset');
    const score = document.querySelector('.score');
    const highscore = document.querySelector('.highscore');
    const enter = document.querySelector('.validPseudo');
    const audio  = new Audio('https://www.televisiontunes.com/uploads/audio/Breaking%20Bad.mp3');
    const laugth = new Audio('https://www.fesliyanstudios.com/play-mp3/3976');
    const h2 = document.querySelector('.hello');
    // let inputPseudo = document.querySelector('.pseudo')


    const message = function (message){
        document.querySelector('.message').textContent = message;
    };
    
    pseudo
    enter.addEventListener('click', function(){
        localStorage.setItem('pseudo', pseudo.value);
            if(localStorage.getItem('pseudo')!== null){
                h2.textContent = `Welcome ${localStorage.getItem('pseudo')} 🤘`
            }
    });
    
    check.addEventListener ('click', function (){
        const guess = Number(document.querySelector('.guess').value);

        //no input
        if(!guess){
            message('❌ Sorry, can you entrer a valid number, please');
        
        // when player wins
        } else if ( guess == secretNumber){
            message('🎉 Yoo hoo, great Job, you find the secret number !! 🎉');
            win.style.display = 'inline';
            audio.play();

            if(scoredec > highscoredec){
                highscoredec = scoredec
                highscore.textContent = highscoredec;
            }
        
        } else if (guess !== secretNumber) {
            if(scoredec > 1){
                message(guess > secretNumber ? '⏫ too high !!': '⏬ too low !!');
                scoredec--;
                score.textContent = scoredec;
                highscoredec--
                highscore.textContent = highscoredec
            } else {
                message('😿 You loose the game 😿');
                loose.style.display = 'inline';
                score.textContent = 0;
                laugth.play();
                }      
        }         
    });


    reset.addEventListener('click', function(){
        secretNumber = Math.trunc(Math.random()*20) +1;
        win.style.display = 'none';
        loose.style.display = 'none';
        message('Starting guess . . .');
        score.textContent = 10;
        scoredec = 10
        document.querySelector('.guess').value = '';
    });
    console.log("Loaded");
});
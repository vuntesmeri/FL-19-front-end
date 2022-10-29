import { arr, random } from './func';
import {
    game, x, computerScore, playerScore, totalScore, computerChoice,
    playerChoice, gameRound, roundWinner
} from './variable';

function gameplay(playerRound, computerRound, playerChoose, compChoose, round, playerTotal, computerTotal) {
    game.addEventListener('click', (event) => {
        playerChoose = event.target;
        if (playerChoose.children.length === 0) {
            playerChoice.innerText = `${playerChoose.id}`;
            gameRound.innerText = `- ${round}`;
            compChoose = arr(game, random(x));
            computerChoice.innerText = `${compChoose.id}`;
            if (playerChoose.id === compChoose.id) {
                roundWinner.innerText = `DEAD HEAT`;
            } else {
                if (playerChoose.id === 'ROCK' && compChoose.id === 'SCICCORS' ||
                    playerChoose.id === 'SCICCORS' && compChoose.id === 'PAPER' ||
                    playerChoose.id === 'PAPER' && compChoose.id === 'ROCK') {
                    roundWinner.innerText = `YOU'VE WON`;
                    playerRound++;
                    
                } else {
                    roundWinner.innerText = `YOU'VE LOST`;
                    computerRound++;
                    
                }
                
                if (computerRound === x || playerRound === x) {
                    if (playerRound > computerRound) {
                        playerTotal++;
                        roundWinner.innerText = `congratulations!`
                    } else {
                        computerTotal++;
                        roundWinner.innerText = `it's a pity!`
                    }
                    round++;
                    totalScore.innerText = `${playerTotal} : ${computerTotal}`;
                    computerRound = 0;
                    playerRound = 0;
                }
            }
            playerScore.innerText = playerRound;
            computerScore.innerText = computerRound;
        }   
    })
   
}

export { gameplay};
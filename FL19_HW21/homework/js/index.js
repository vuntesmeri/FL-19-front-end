import './../scss/style.scss';
import {
    playerRound, computerRound, playerChoose, compChoose, round,
    playerTotal, computerTotal, resetButton
} from './variable';
import { gameplay } from './start';

gameplay(playerRound, computerRound, playerChoose, compChoose, round, playerTotal, computerTotal);

resetButton.addEventListener('click', () => {
    window.location.reload();
});
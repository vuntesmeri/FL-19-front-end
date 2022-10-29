let round = 1;
const x = 3;
let playerChoose;
let compChoose;
let playerRound=0;
let computerRound=0;
let playerTotal = 0;
let computerTotal = 0;
const playerChoice = document.querySelector('.player-choice');
const gameRound = document.querySelector('.round span');
const roundWinner = document.querySelector('.round-winner')
const computerChoice = document.querySelector('.computer-choice');
const totalScore = document.querySelector('.total-score');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const game = document.querySelector('.game');
const resetButton = document.querySelector('.reset-button');

export {
    game, computerScore, playerScore, totalScore, computerChoice,
    playerChoice, playerChoose, compChoose, playerRound,
    computerRound, gameRound, roundWinner, round, playerTotal, computerTotal, x, resetButton
}
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
}

function round(range, prize, attempt, total, random_number) {
    if (attempt > 0) {
        const gess = prompt(`Choose a roulette pocket number from 0 to ${range}
Attempts left: ${attempt}
Total prize: ${total}
Possible prize on current attempt: ${prize}`, '');
        if (Number(gess) === random_number) {
            total += prize;
            let conf = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`)
            if (!conf) {
                alert(`Thank you for your participation. Your prize is: ${total}$`);
                task2();
            }else {
                range = range + sum;
                prizes = prizes * mult;
                attempt = f_attempt;
                game(range, prizes, attempt, total);
            }
        }else {
            attempt = attempt - 1;
            prize = prize / mult;
            round(range, prize, attempt, total, random_number);
        }
    }else {
        alert(`Thank you for your participation. Your prize is: ${total} $`);
        task2();
    }   
}

function game(range, prizes, attempt, total) {
    const random_number = rand(0, range);
    const prize = prizes;
    round(range, prize, attempt, total, random_number);
}
const f_range = 8;
const f_prizes = 100;
const f_attempt = 3;
const mult = 2;
const sum = 4;
let range;
let prizes;
let attempt;
const total = 0;

function task2() {
    let newGame = confirm('Do you want to play a game?');
    if (!newGame) {
        alert('You did not become a billionaire, but can.');
    }else {
        range = f_range;
        prizes = f_prizes;
        attempt = f_attempt;
        game(range, prizes, attempt, total);
    }
}



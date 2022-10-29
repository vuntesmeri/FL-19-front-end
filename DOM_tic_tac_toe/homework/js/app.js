import { dictionary } from './dictionary.js';

function checkWords() {
    let randomIndex = Math.floor(Math.random() * (dictionary.length + 1))
    return dictionary[randomIndex];
}

let checkWord = checkWords();
let wordDict = {};
let log = '';
let now;
const cells = 29;
const col = 5;
let per = '';

// changing focus function and check language and amount of letters inside each cell
function focus(event) {
    log = event.target;
    per = log.closest('.row')
    now = Number(log.id);
    wordDict[log.id] = log.value;
    if (log.value.match(/[а-їґ]{1}/)) {
        if (now < cells) {
            document.getElementById(`${now + 1}`).focus();
        } else {
            document.getElementById(`${now}`).focus();
        }
    } else {
        log.value = '';
        alert('enter a word in Ukrainian')
    }
}

// complete cleaning of the board
function resetAll() {
    for (let el of element.children) {
        for (let input of el.children) {
            input.value = '';
            input.classList.remove('green');
            input.classList.remove('rose');
            input.classList.remove('grey');
        }
    }
    element.children[0].disabled = false;
    for (let i = 1; i < element.children.length; i++) {
        element.children[i].disabled = true;
    }
    wordDict = {};
    document.getElementById(0).focus();
    checkWord = checkWords();
}

// checking words
function checkers() {    
    let word = Object.values(wordDict).join('');
    if (word.length === col) {
        if (word === checkWord) {
            alert('Congratulations! You won.');
        }
        if (!dictionary.includes(word)) {
            alert('Not in word list');
            //cleaning row
            let cell = per.children;
            for (let elem of cell) {
                log = document.getElementById(`${elem.id}`);
                log.value = '';
            }
            wordDict = {};
            log = document.getElementById(`${cell[0].id}`);
            log.focus();
        } else {
            /*eslint-disable guard-for-in*/
            let arr = Object.entries(wordDict);
            for (let prop in arr) {
                let ind = checkWord.search(RegExp(`${arr[prop][1]}`, 'g'));
                //adding color class to exect id
                if (ind === 0 - 1) {
                    document.getElementById(`${arr[prop][0]}`).classList.add('grey');
                } else {
                    if (arr[prop][1] === checkWord[prop]) {
                        document.getElementById(`${arr[prop][0]}`).classList.add('green');
                    } else {
                        document.getElementById(`${arr[prop][0]}`).classList.add('rose');
                    }
                }
            }
            if (log.id >= cells && word !== checkWord) {
                alert('Game over.');
            } else {
                wordDict = {};
                if (word !== checkWord) {
                    per.disabled = true;
                    per.nextElementSibling.disabled = false;
                    log = document.getElementById(`${now + 1}`);
                    log.focus();
                } else {
                    per.disabled = true;
                }
            }
        }
    } else {
        document.getElementById(now + 1).focus();
    }
}

let element = document.querySelector('.table');
element.addEventListener('input', () => {
    focus(event);
});
let resetElements = document.querySelector('.reset');
resetElements.addEventListener('click', () => {
    resetAll(0);
});
let checkElement = document.querySelector('.check');
checkElement.addEventListener('click', checkers);

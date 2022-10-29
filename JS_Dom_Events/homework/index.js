document.addEventListener('DOMContentLoaded', game);
let field = '';
let log = '';
const colnum = 3;
const rownum = 3;
const totalcell = colnum * rownum; 
function game() {
    /*eslint-disable no-magic-numbers*/
    function container() {
     field = document.querySelector('.container');
        for (let i = 0; i < rownum; i++) {
            for (let j = 0; j < colnum; j++){
                field.innerHTML += `<div id= "${i}${j}" class="tile"></div>`;
            }
        }
        log = document.getElementById('11');
        log.focus();
        return field;
    }
    container();

    document.addEventListener('keydown', function (event) {
        event.target = 'body';
        if (event.key === 'ArrowRight' && log.nextSibling) {
            log.classList.remove('active');
            log = log.nextSibling;
            log.classList.add('active');
        } else if (event.key === 'ArrowLeft' && log.previousElementSibling) {
            log.classList.remove('active');
            log = log.previousElementSibling;
            log.classList.add('active')
        } else if (event.key === 'Enter') {
            reset.blur();
            choose(event);  
        }
        return log;
    });

    let player = '';
    let round = 0;
    let gamecountrow = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let gamecountcol = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let gamecountcross = [[0, 0, 0], [0, 0, 0],[0, 0, 0]];
    let announcer = document.querySelector('.announcer');
    let avatar = document.querySelector('.icons');
    avatar.addEventListener('dragstart', () => {
        drag(event);
    });
   
    let divo = document.querySelector('.avatar-container');
    let place = divo.parentElement;
    place.addEventListener('drop', () => {
        drop(event)
    });
    place.addEventListener('dragover', () => {
        allowDrop(event);
    });

    function arrCreate(i, j, player) {
        gamecountrow[i][j] = player;
        gamecountcol[j][i] = player;
        if (i === j){
            gamecountcross[0][j] = player;
        }
        if (Number(i) + Number(j) === 2) {
            gamecountcross[1][j] = player;
        }
    }

    function choose() {
        if (announcer.classList.contains('hide')) {
            if (round % 2 === 0) {
                player = 'X';
            } else {
                player = 'O'
            }
            document.querySelector('.display-player').innerHTML = `${player}`;
            if (event.key === 'Enter') {
                log;
            } else {
                log = event.target;
            }
            if (!log.textContent) {
                log.classList.add(`player${player}`);
                log.innerHTML = `${player}`;
                let i = log.id[0];
                let j = log.id[1];
                if (player === 'O') {
                    arrCreate(i, j, player)
                } else {
                    arrCreate(i, j, player)
                }
            } else {
                round--;
            }
            for (let i = 0; i < rownum; i++) {
                let rowww = '';
                let colll = '';
                let cross = '';
                for (let j = 0; j < colnum; j++) {
                    rowww += gamecountrow[i][j];
                    colll += gamecountcol[i][j];
                    cross += gamecountcross[i][j];
                    if (rowww === 'XXX' || colll === 'XXX' || cross === 'XXX') {
                        announcer.classList.remove('hide');
                        announcer.innerHTML = `Player ${player} Won`;
                    
                    } else if (rowww === 'OOO' || colll === 'OOO' || cross === 'OOO') {
                        announcer.classList.remove('hide');
                        announcer.innerHTML = `Player ${player} Won`;
                    }
                }
            }
            if (round === totalcell-1 && announcer.classList.contains('hide')){
             announcer.classList.remove('hide');
             announcer.innerHTML = `Dead Heat`;
            }
        } else {
            event.stopPropagation();         
        }
        round++;
    }
    
    function rounds() {
        field.addEventListener('click', () => {
        choose();
        });
    }
    rounds();

    function allowDrop(event) {
        if (event.target.tagName === 'DIV' && !event.target.hasChildNodes()) {
            event.preventDefault();
        } else {
            event.stopPropagation();
        }
    }
    function drop(event) {
        event.preventDefault();
        let exect = event.dataTransfer.getData('text');
        event.target.appendChild(document.querySelectorAll(`[data-item="${exect}"]`)[0]);
    }

    function drag(event) {
        if (event.currentTarget.children.length > 2) {
            event.dataTransfer.setData('text', event.target.dataset.item);
        } else {
            event.preventDefault();
        }
    }

    let reset = document.getElementById('reset');
    reset.addEventListener('click', clear);
    
    function clear() {
        let per = field.children;
        for (let el of per) {
            el.classList.remove('playerO', 'playerX');
            el.classList.remove('active');
            el.innerText = '';
        }
        announcer.classList.add('hide');
            log = document.getElementById('11')
            round = 0;
            player = 'X';   
            document.querySelector('.display-player').innerHTML = `${player}`;
            for (let elem = 0; elem < rownum; elem++){
                gamecountcol[elem].length = 0;
                gamecountrow[elem].length = 0;
                gamecountcross[elem].length = 0;
        }
    }
}
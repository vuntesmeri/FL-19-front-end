// import { diary, monthButton } from './diary';
import { drowMonth } from './month'
import{toMonthName, lastDate} from './var'


function drowdays(board1, event) {
    if (event.target.innerText) {
       
        const dataid = Number(event.target.dataset.id);
        const datayear = event.target.dataset.year;
        let textMonth = getMonthText(datayear, toMonthName(dataid), dataid, true)|| 'Start Your Diary. Click On Date.';
        let textYear = getYearText(datayear) || 'Start Your Diary. Click On Date.';
        const nextButton = document.querySelector('.nexty');
        const backButton = document.querySelector('.backy');
        if (event.target.classList[0] === 'monthname') {
            nextButton.classList.add('hide');
            backButton.classList.add('hide');
            board1.innerHTML = `<div class="mboard"></div>`;
            const mboard = document.querySelector('.mboard');
           
            drowMonth(datayear, dataid, mboard, 'day1', 'week1', 'center');
            mboard.innerHTML += `<div class="diary monthdiary">
            <div class="namediary">Diary Of ${toMonthName(dataid)}</div><hr>
            <div class="textm">${textMonth}</div></div>`
            mboard.innerHTML += `<div class="diary yeardiary">
            <div class="namediary">Diary Of ${datayear}</div><hr>
            <div class="texty">${textYear}</div></div>`
            let prev = document.querySelector('.prevm');
            let next = document.querySelector('.nextm');
            prev.classList.remove('hide');
            next.classList.remove('hide');
        }
        if (event.target.classList[0] === 'center') {
            console.log('this.event',this.event.target)
            nextButton.classList.remove('hide');
            backButton.classList.remove('hide');
            monthBoard(datayear);
        }
    }
}

function setdays(board1) {
    board1.addEventListener('click', (event) => {
    event.preventDefault();
        drowdays(board1, event);
    });
   
}
function getMonthText(year, month, monthnum, d) {
    let textm = '';
    for (let i = 1; i <= lastDate(year, monthnum); i++) {
        if (localStorage.getItem(`${year}/${month}/${i}`)) {
            if (d) {
                textm += `<p><u>${i}</u></p><p>${localStorage.getItem(`${year}/${month}/${i}`)}</p>`
            } else {
                textm += `<p>${localStorage.getItem(`${year}/${month}/${i}`)}</p>`
            }
        } else {
            textm += '';
        }
    }
    return textm;
}
function getYearText(year) {
    let texty = '';
    for (let i = 1; i <= 12; i++){
        texty += getMonthText(year, toMonthName(i), i) ?
            `<p><u>${toMonthName(i)}</u></p><p>${getMonthText(year, toMonthName(i), i, false)}</p>` : '';
    }
    return texty;
}

function monthBoard(year) {
    const board1 = document.querySelector('.board1');
    board1.innerHTML = `<div class="board"></div>`;
    const board = document.querySelector('.board')
    for (let month = 1; month < 13; month++) {
        drowMonth(year, month, board, 'day', 'week','monthname');
    }
    setdays(board1);
}

export {monthBoard}
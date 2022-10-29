import { date, toMonthName, lastDate, firstDay, x } from './var';
import {diaryF} from './diary'

 function drowMonth(year, month, board, day, week, btn) {
     board.innerHTML += `
     <div class="monthboard">
     <div class="fullmonth">
    <p class="monthname prevm hide" data-id=${month - 1} data-year=${year}>${toMonthName(month - 1)||''}</p>
    <p class="${btn}" data-id=${month} data-year=${year}>${toMonthName(month)}</p>
    <p class="monthname nextm hide" data-id=${month + 1} data-year=${year}>${toMonthName(month + 1)|| ''}</p>
    </div>
    <div class="${week}">
        <p>Mo</p>
        <p>Tu</p>
        <p>We</p>
        <p>Th</p>
        <p>Fr</p>
        <p>Sa</p>
        <p>Su</p>
    </div>
    <hr>
    <br>
    <div id="${month}" class="month"></div>
    </div>`;
    let yy = document.getElementById(`${month}`);
    for (let i = 1; i < lastDate(year, month) + firstDay(year, month); i++) {
        let tt = i + 1 - firstDay(year, month);
        if (i < firstDay(year, month)) {
            yy.innerHTML += `<div></div>`;
        } else {
            if (Number(year) === date.getFullYear() && month === date.getMonth() + 1 && tt === date.getDate()) {
                yy.innerHTML += `<div id="${year} ${month} ${tt}" class="${day} red">${tt}</div>`
            }else {
                yy.innerHTML += `<div id="${year} ${month} ${tt}" class="${day}">${tt}</div>`;
            }
        }
     }
     diaryF(x);
}


export { drowMonth };

import { x, date} from './var';
import { monthBoard } from './date';

function birthInput() {
    x.innerHTML = `<input type='text' class='birth' placeholder="put your birth year" size="4"> `;
    const birthDate = document.querySelector('.birth');
    let reg = /[1-2]{1}[0-9]{1}[0-9]{2}/g;
    birthDate.addEventListener('input', () => {
        if (birthDate.value.length === 4 && reg.test(birthDate.value)) {
            localStorage.setItem('year', `${Number(birthDate.value)}`);
            start(Number(birthDate.value));
        }
    });
}


function start(birthDate) {
    console.log(birthDate);
    x.innerHTML = `<div class="calendar"></div>`;
    const y = document.querySelector('.calendar');
    yearDrow(y, birthDate);
}

function yearDrow(y, birthDate) {
    console.log(birthDate);
    y.innerHTML += `<div class="year-0"><p class="backyear">${birthDate}</p></div>`
    for (let el = birthDate+1; el <= birthDate + 99; el++) {
        if (el === date.getFullYear()) {
            let ff = document.querySelector(`.year-${el-birthDate-1}`);
                ff.innerHTML += `<div class="year-${el-birthDate} red"><p class="backyear">${el}</p></div>`
        } else {
            let ff = document.querySelector(`.year-${el-birthDate-1}`);
            ff.innerHTML += `<div class="year-${el-birthDate}">${el}</div>`;
        }
    }
    // <p class="backyear"></p>
    chooseYear(y, birthDate);
        move(y);
}

let chooseYear = (y, birthDate) => y.addEventListener('click', (event) => {
     
    if (event.target.children.length === 0) {
        let year = event.target.innerText;
        return yearPlace(year, birthDate);
    }
})
function titleYear(year) {
    x.innerHTML = `<section class="fullyear">
            <div class="years">
            <p class="backy">${Number(year) - 1}</p>
            <div class="head">${year}</div>
            <p class="nexty">${Number(year) + 1}</p>
            </div>
            <div class="board1">
            </div>
            </section>`;
    return monthBoard(year);
}


function yearPlace(year, birthDate) {
    console.log(birthDate);
    titleYear(year);

    const nextButton = document.querySelector('.nexty');
    nextButton.addEventListener('click', () => {
        yearPlace(nextButton.innerText, birthDate)
    });
    
    const backButton = document.querySelector('.backy');
    backButton.addEventListener('click', () => {
        yearPlace(backButton.innerText, birthDate)
    });

    const backyear = document.querySelector('.head');
    backyear.addEventListener('click', () => {
        start(birthDate);
    });
}

function move(y) {
    for (let i = 0; i <= 12; i++) {
        (function (i) {
            setTimeout(function () {
                let kk = document.querySelector(`.year-${i}`)
                kk.classList.add('child')
            }, 30 * i);
        })(i);
    }
    for (let i = 13; i <= 24; i++) {
        (function (i) {
            setTimeout(function () {
                let kk = document.querySelector(`.year-${i}`)
                kk.classList.add('youth')
            }, 30 * i);
        })(i);
    }
    for (let i = 25; i <= 48; i++) {
        (function (i) {
            setTimeout(function () {
                let kk = document.querySelector(`.year-${i}`)
                kk.classList.add('active')
            }, 30 * i);
        })(i);
    }
    for (let i = 49; i <= 72; i++) {
        (function (i) {
            setTimeout(function () {
                let kk = document.querySelector(`.year-${i}`)
                kk.classList.add('travel')
            }, 30 * i);
        })(i);
    }
    for (let i = 73; i < y.children.length; i++) {
        (function (i) {
            setTimeout(function () {
                let kk = document.querySelector(`.year-${i}`)
                kk.classList.add('wisdom')
            }, 30 * i);
            //     y.children[i].classList.add('wisdom')
            // }, 30 * i);
        })(i);
    }
            // (function (i) {
            //     setTimeout(function () {
            //         y.children[i].classList.remove('play')
            //     }, 51 * i);
            // })(i);
        
    }

export {yearPlace, birthInput}
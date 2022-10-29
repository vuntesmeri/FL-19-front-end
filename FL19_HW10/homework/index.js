let clickClick = 0;
const time = 5000;

const btnStart = document.querySelector('.start');
btnStart.addEventListener('click', catcher);

const btnBestResult = document.querySelector('.best-result');
btnBestResult.addEventListener('click', () => {
    const bestValue = sessionStorage.getItem('best');
    alert(`Best result is: ${bestValue}`);
})
const btnBestAllResult = document.querySelector('.best-for-all');
btnBestAllResult.addEventListener('click', () => {
    const allValue = localStorage.getItem('best');
    alert(`Best result for the whole time is: ${allValue.split(' ')[0]} by ${allValue.split(' ')[1]}`)
})

const btnClearResult = document.querySelector('.clear-result');
btnClearResult.addEventListener('click', () => {
    sessionStorage.setItem('best','0');
    alert('Best result is cleared');
})

const btnClearAllResult = document.querySelector('.clear-result-for-all');
btnClearAllResult.addEventListener('click', () => {
    localStorage.setItem('best','0 null');
    alert('Best of all result is cleared');
})

function catcher() {
    try {
        clickClick = 0;
        valueName();
    } catch (error) {
        alert(error);
    } 
}

function countClick() {
    clickClick += 1;
    return clickClick;
}

function bestResult() {
    const best = sessionStorage.getItem('best');
    if (best === null || Number(best) < clickClick) {
        sessionStorage.setItem('best', `${clickClick}`);
    } 
}
function bestAllResult(nicknames) {
    const allbest = localStorage.getItem('best');
    if (allbest === null || Number(allbest.split(' ')[0]) < clickClick){
        localStorage.setItem('best', `${clickClick} ${nicknames}`);
    }
}

function valueName() {
    const nicknames = document.getElementById('nickname').value;
    if (nicknames.trim().length === 0) {
        throw 'Empty nickname';
    } else {
        const btnClick = document.querySelector('.click');
        btnClick.addEventListener('click', countClick);
        timedOut(nicknames);
    }
}

function timedOut(nicknames) {
    setTimeout(() => {
        alert(`You clicked ${clickClick} times`);
        bestResult();
        bestAllResult(nicknames);
    }, time);
}


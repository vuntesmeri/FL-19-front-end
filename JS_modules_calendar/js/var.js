const x = document.querySelector('.main');
const date = new Date();

function toMonthName(month) {
    const monthes = ['January', 'Fabruary', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    return monthes[month-1]
}

function lastDate(year, month) {
    let date = new Date(year, Number(month) - 1);
    let date1 = new Date(year, month)
    let day = (date1-date)/1000/60/60/24;
    return Math.floor(day)
}

function firstDay(year, month) {
    let date = new Date(year, month - 1);
    let firstday = date.getDay() === 0 ? 7 : date.getDay();
    return firstday
}

function saveText(date, textclas) {
    const textArea = document.querySelector(`.${textclas}`);
    console.log(textArea)
    localStorage.setItem(`${date}`, `${textArea.value}` )
}

export {x, date, toMonthName, lastDate, firstDay, saveText}
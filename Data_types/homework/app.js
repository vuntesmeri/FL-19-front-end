// #1
function extractCurrencyValue(param) {
  let currency = parseInt(param);
  let max = 16;
  return currency.toString().length > max ? BigInt(currency) : currency;
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) { 
    for (prop in obj) {
        if (Boolean(obj[prop]) === false) {
            delete obj[prop];
        }
    }
    return obj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }


// #3

function getUnique(param) {
    return Symbol(param);
} 

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
    const millisecStart = Date.parse(new Date(startDate));
    const millisecEnd = Date.parse(new Date(endDate));
    const millisecDifference = Math.abs(millisecStart - millisecEnd);
    const diffDate = new Date(millisecDifference);
    const month = diffDate.getMonth();
    const year = diffDate.getFullYear();
    let amountDays = diffDate.getDate()-1;
    let amountMonth = month;
    const allYearMonth = 12;
    const firstYear = 1970;
    const week = 7;

    for (let j = firstYear; j <= year; j++) {
        if (j < year) {
            for (let i = 1; i <= allYearMonth; i++) {
                let date = new Date(j, i, 0);
                amountMonth += 1;
                amountDays += date.getDate()
            }
        }else if (j === year) {
            for (let i = 1; i <= month; i++) {
                let date = new Date(j, i, 0);
                amountDays += date.getDate();
            }
        }
    }
    const amountWeeks = Math.floor(amountDays / week);
    return `The difference between dates is: ${amountDays} day(-s), ${amountWeeks} week(-s), ${amountMonth} month(-s)`;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArrayWithSet(arr) {
    const filtered = new Set(arr);
    const filteredSet = [...filtered];
    return filteredSet;
}


function filterArrayWithoutSet(arr) {
    const filteredArr = arr.reduce((arrr, el) => {
        if (!arrr.includes(el)) {
            arrr.push(el)
        } return arrr;
    }, [])
    return filteredArr;
}

console.log(filterArrayWithoutSet([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

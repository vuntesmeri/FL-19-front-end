// #1
function calculateSum(arr) {
  try {
    let sum = arr.reduce((a, b) => {
      return a + b;
    });
  return sum; 
  } catch (e) {
      if (!Array.isArray(arr)) {
      console.log('not an Array')
    }
  }
}
/* eslint-disable-next-line  no-magic-numbers */
console.log(calculateSum([1, 2, 3, 4, 5])); //15 

// #2
function isTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return true;
  }
  return false;
}
/* eslint-disable-next-line  no-magic-numbers */
console.log(isTriangle(2, 6, 7)); //true 
/* eslint-disable-next-line  no-magic-numbers */
console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
  try {
    let wordToArr = word.toLowerCase().split('')
    for (let ell of wordToArr) {
      if (wordToArr.indexOf(ell) !== wordToArr.lastIndexOf(ell)) {
        return false;
      }
    } 
    return true
  } catch (e) {
    if (typeof word !== 'string') {
    console.log('not a string')
    }
  }
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
  let drow = word.split('').reverse().join('');
  if (word === drow) {
    return true;
  }
  return false;
}
console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
  let month = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return `${ dateObj.getDate()} of ${month[dateObj.getMonth()]}, ${dateObj.getFullYear()}`;
}

console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
  let regex = new RegExp(`${letter}`, 'gi');
  let theSame = str.match(regex) || [];
  return theSame.length;
}

console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
  let countRep = arr.reduce((arrr, el) => {
    !Object.keys(arrr).includes(el) ? arrr[el] = 1 : arrr[el] += 1;
    return arrr
  }, {});
  return countRep
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }
 
// #8
function calculateNumber(arr) {
  let arrToString = arr.join('');
  return parseInt(arrToString, 2);
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9

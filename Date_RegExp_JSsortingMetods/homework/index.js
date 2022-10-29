// #1
function getWeekDay(date) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[new Date(date).getDay()];
}
/* eslint-disable-next-line  no-magic-numbers */
console.log(getWeekDay(new Date(2020, 9, 22)));
console.log(getWeekDay(new Date()));
console.log(getWeekDay(new Date('2020/09/22')));
console.log(getWeekDay(Date.now()));
/* eslint-disable-next-line  no-magic-numbers */
console.log(getWeekDay(100000000000));

//#2
function getAmountDaysToNewYear() {
    const dayNow = new Date();
    const year = dayNow.getFullYear()+1;
    const hour = dayNow.getUTCHours();
    const minute = dayNow.getMinutes();
    const second = dayNow.getSeconds();
    const NewYear = new Date(Date.UTC(year, 0, 1, hour, minute, second));
    /* eslint-disable-next-line  no-magic-numbers */
    return (Date.parse(NewYear) - Date.parse(dayNow)) / 1000 / 60 / 60 / 24;
}
console.log(getAmountDaysToNewYear());


//#3
function getApprovedToPass(birthday) {
    const permitionAge = 18;
    const today = new Date();
    let diffYear;
    const diffMonth = today.getMonth() - birthday.getMonth();
    const diffDays = today.getDate() - birthday.getDate();

    if (diffMonth < 0 || diffMonth === 0 && diffDays < 0) {
        diffYear = today.getFullYear() - birthday.getFullYear() - 1;
    } else {
        diffYear = today.getFullYear() - birthday.getFullYear()
    }
    
    if (diffYear >= permitionAge) {
        return `Hello adventurer, you may pass!`
    } else if (diffYear < permitionAge - 1) {
        return `Hello adventurer, you are to young for this 
            quest wait for ${permitionAge - diffYear} years more)!`
    } else if (diffYear === permitionAge - 1 && diffMonth === 0 && diffDays === 0) {
       return `Hello adventurer, you are to young for this 
            quest wait for ${permitionAge - diffYear} years more)!` 
    } else {
        return `Hello adventurer, you are to young for this 
            quest wait for few more months)!`
    }
}
/*eslint-disable no-magic-numbers*/
const birthday410 = new Date(2004, 4, 10);
const birthday409 = new Date(2004, 4, 9);
const birthday411 = new Date(2004, 4, 11);
const birthday310 = new Date(2004, 5, 10);
const birthday311 = new Date(2004, 5, 11);
const birthday309 = new Date(2004, 5, 9);
const birthday510 = new Date(2005, 5, 10);
const birthday511 = new Date(2005, 5, 11);
const birthday509 = new Date(2005, 5, 9);
/*eslint-enable no-magic-numbers */
console.log(getApprovedToPass(birthday410));
console.log(getApprovedToPass(birthday409));
console.log(getApprovedToPass(birthday411));
console.log(getApprovedToPass(birthday310));
console.log(getApprovedToPass(birthday311));
console.log(getApprovedToPass(birthday309));
console.log(getApprovedToPass(birthday510));
console.log(getApprovedToPass(birthday511));
console.log(getApprovedToPass(birthday509));




//#4
function transformStringToHtml(element) {
    // let tag = element.match(/(?<=tag=)("\w*")/g)[0].replaceAll('"', '')
    let elTag = element.match(/^tag="\w+"/g);
    let tag = elTag[0].split('=')[1].replaceAll('"', '');
    let clasS = element.match(/class=".+\b"/g);
    let elStyle = element.match(/style={.+}/g);
    let style = elStyle[0].replace('{', '"').replace('}', '"');
    let elValue = element.match(/value=".+"/g);
    let value = elValue[0].split('=')[1].replaceAll('"', '');
    return `<${tag} ${clasS} ${style}>${value}</${tag}>`;
}

const elementP = 'tag="p" class="text" style={color: #aeaeae;} value="Aloha!"';
const elementDiv = 'tag="div" class="main" style={width: 50%;} value="Hello World!"';
console.log(transformStringToHtml(elementP));
console.log(transformStringToHtml(elementDiv));

//#5
function isValidIdentifier(myVar) {
    if (typeof myVar === 'string') {
        const one = new RegExp(/.+/, 'gi');
        const two = new RegExp(/[^\w$]/, 'gi');
        const three = new RegExp(/^[\D]/, 'g')
        const identifier = one.test(myVar) && !two.test(myVar) && three.test(myVar);
        return identifier;
    } else {
        return 'TypeError';
    }
}

console.log(isValidIdentifier('myVar!')); // false
console.log(isValidIdentifier('myVar$')); // true
console.log(isValidIdentifier('myVar_1')); // true
console.log(isValidIdentifier('1_myVar')); // false
console.log(isValidIdentifier('')); // false
console.log(isValidIdentifier()); // false


//#6
function capitalize(str) {
    let capitalStr = str.replace(/\b\w/g, (firstLetter) => {
        return firstLetter.toUpperCase()
    });
    return capitalStr;
}

const testStr = 'My name is John Smith. I am 27.';
console.log(capitalize(testStr)); // "My Name Is John Smith. I Am 27.

//#7
function isValidPassword(str) {
    const minpasswordLength = 8;
    const firstRule = (/[A-Z]/g).test(str);
    const secondRule = (/[a-z]/g).test(str);
    const thirdRule = (/[0-9]/g).test(str);
    const fourthRule = (/$/).exec(str)['index'] >= minpasswordLength;

    if (typeof str === 'string') {
        let q = firstRule && secondRule && thirdRule && fourthRule;
        if (!firstRule) {
            q += '(no uppercase letter)';
        }
        if (!secondRule) {
            q += '(no lowercase letter)';
        }
        if (!thirdRule) {
            q += '(no numbers)';
        }
        if (!fourthRule) {
            q += '(too short)';
        }
        return q;
    } else {
        return 'error'
    }
}

console.log(isValidPassword('agent007')); // false (no uppercase letter)
console.log(isValidPassword('AGENT007')); // false (no lowercase letter)
console.log(isValidPassword('AgentOOO')); // false (no numbers)
console.log(isValidPassword('Age_007')); // false (too short)
console.log(isValidPassword('Agent007')); // true
console.log(isValidPassword('agent')); // false


//#8
function bubbleSort(arr, count=1) {
  let len = arr.length;
  for (let i = 0; i < len-count; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
  }
  if (count === len-1) {
    return arr;
  } else {
    count += 1;
    return bubbleSort(arr, count);
  }
}
/*eslint-disable-next-line no-magic-numbers*/
console.log(bubbleSort([0, 8, 3, 2, 6, 2, 7, 10, 1, -1]));


//#9
function sortByItem(obj) {
    if (Object.keys(obj).toString() === 'item,array') {
        let array = obj['array'];
        let item = obj['item'];
    /* eslint-disable-next-line  no-magic-numbers */
        array.sort((a, b) => a[item] > b[item] ? +1 : -1);
        return array;
    } else {
        return 'not an object';
    }

}
const inventory = [
{ name: 'milk', brand: 'happyCow', price: 2.1}, 
{ name: 'chocolate', brand: 'milka', price: 3},
{ name: 'beer', brand: 'hineken', price: 2.2},
{ name: 'soda', brand: 'coca-cola', price: 1}
];
console.log(sortByItem({item: 'name', array: inventory}))


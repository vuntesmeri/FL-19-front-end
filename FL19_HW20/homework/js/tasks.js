/* eslint-disable no-magic-numbers */
//1
function getMaxEvenElement(arr) {
    let arr1 = arr.reduce(function(cur, next){
        return !(next % 2) ? [...cur, ...next] : [...cur];
    }, []);
    return Math.max(...arr1);
}

const arr = ['1', '3', '4', '2', '5'];
console.log(getMaxEvenElement(arr));
//2
let a = 3;
let b = 5;
[a, b] = [b, a]
console.log(a);
console.log(b);
//3

function getValue(a) {
    return a ?? '_';
}

console.log(getValue(0));
console.log(getValue(4));
console.log(getValue('someText'));
console.log(getValue(null));
console.log(getValue(undefined));

//4
function getObjFromArray(arrayOfArrays) {
    const x = Object.fromEntries(arrayOfArrays)
    return Object.assign(x);
}

const arrayOfArrays = [
    ['name', 'dan'],
    ['age', '21'],
    ['city', 'lviv']
];

console.log(getObjFromArray(arrayOfArrays));

//5
function addUniqueId(obj) {
    return { ...obj, id: Symbol() };
}

const obj1 = { name: 'nick' };
console.log(addUniqueId(obj1));
console.log(addUniqueId({ name: 'buffy' }));
console.log(Object.keys(obj1).includes('id'));

//6
function getRegroupedObject(oldobj) {
    const { name, details } = oldobj;
    let { id, age, university } = details;
    return { university, user: { age, firstName: name, id} }
}

const oldobj = {
name: 'willow',
details: { id: 1, age: 47, university: 'LNU' }
};

console.log(getRegroupedObject(oldobj));

//7
function getArrayWithUniqueElements(arr) {
    return [...new Set(arr)];
}

const arrr = [2, 3, 4, 2, 4, 'a', 'c', 'a'];
console.log(getArrayWithUniqueElements(arrr));

//8
function hideNumber(str) {
    return str.slice(str.length - 4, str.length).padStart(10, '*');
}

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));
//9
const isRequired = (...x) => {
    throw new Error(`${x} is required`);
    
} 
function add(a= isRequired('a') , b = isRequired('b')) {
    function f() {
        return [a, b];
    }
    [a, b] = f();
    return a + b;
}


console.log(add(2, 3));
// console.log(add(2));

//10
function* generateIterableSequence(){
    yield 'I';
    yield 'love';
    yield 'EPAM';
}

const generatorObject = generateIterableSequence();
for (let value of generatorObject) {
    console.log(value)
}
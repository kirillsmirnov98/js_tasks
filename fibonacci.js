'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

let test = [];

function fibonacci(length){
    return length < 2 ? test[length] = length : test[length] = fibonacci(length - 1) + fibonacci(length - 2);
}

function createArr(length) {
    let array = [];
    for(let i = 0; i < length; ++i){
        array[i] = fibonacci(i);
    }
    return array;
}

console.log(createArr(arr.length));
console.log(fibonacci(arr.length));
console.log(test);
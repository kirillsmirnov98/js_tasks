'use strict';

let str = ['cat', 'court', 'dress', 'ball', 'brawl', 'element', 'elephant', 'doll'];

function compWords (str) {
    let current, prev;
    let arr = [];
    for(let i = 1; i < str.length; ++i){
        current = str[i];
        prev = str[i - 1];
        if(current[0] == prev[0] && current[current.length - 1] == prev[prev.length - 1])
        {
            arr[i - 1] = true;
        }
        else{
            arr[i - 1] = false;
        }
    };
    return arr;
};

console.log(compWords(str));
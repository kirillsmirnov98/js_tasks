'use strict';

function createMatrix(n) {
    let matrix = new Array(n).fill().map(() => new Array(n).fill());
    let num = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startColumn = 0;
    let endColumn = n - 1;
    while(startRow <= endRow && startColumn <= endColumn){
        for(let i = startColumn; i <= endColumn; ++i){
            matrix[startRow][i] = num;
            num++;
        }
        startRow++;
        for(let j = startRow; j <= endRow; ++j){
            matrix[j][endColumn] = num;
            num++;
        }
        endColumn--;
        for(let a = endColumn; a >= startColumn; a--){
            matrix[endRow][a] = num;
            num++;
        }
        endRow--;
        for(let b = endRow; b >= startRow; b--){
            matrix[b][startColumn] = num;
            num++
        }
        startColumn++;
    }
    return matrix;
}

console.log(createMatrix(3));
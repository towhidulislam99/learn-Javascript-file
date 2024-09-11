
let array = [2, 4, 6, 7, 8, 9];
let copyarray = [];

array.forEach(myFunc);

function myFunc(value){
    copyarray.push(value)
}

console.log(copyarray);


let number = [0, 3, 8, 6, 8, 2];
let copyNum = number.map(myNums);

function myNums(x){
return x;
}

console.log(copyNum);




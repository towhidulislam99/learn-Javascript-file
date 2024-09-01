function printSomething(){
    console.log("I am Human");
    console.log("I am Human");
    console.log("I am Human");
    console.log("I am Human");
    console.log("I am Human");
    console.log("I am Human");
    console.log("I am Human");
    console.log("I am Human");
}

printSomething();

function toCalculculate(a,b){
    const value = a + b;
    return value;
}

const result = toCalculculate(10, 20);
const result1 = toCalculculate(40, 50);
const result2 = toCalculculate(60, 70);

console.log(result, result1, result2)

function farhenhiteCalculate(celcius){
    const farhenhite = ( celcius * 9/5) + 32;
    return farhenhite
}

const celcius = 30;

const farhenhite = farhenhiteCalculate(celcius);

console.log(farhenhite);


function addition(a, b){
    sum = a + b;
    return sum;
}

addition(200, 20);
console.log (sum)

const multiplication = (x, y) => {
    const mul = x * y;
    return mul;
};

const result6 = multiplication(200, 10);
console.log(result6);


let factorial = (num) => {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
};

const valuePai = factorial(10);
console.log(valuePai);

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
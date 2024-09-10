let sum = (a, b) => {
    return a + b;
}

console.log(sum(90, 80));

let evenNumber = (number) => {
    if(number % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("odd");
        
    }
}

evenNumber(77);
evenNumber(200);
evenNumber(99);
evenNumber(23);


let age = 17;

let welcome = (age > 18) ? () => console.log("Welcome") : () => console.log("Gretting");

welcome();


function showMessage (){
    console.log("Hello Message");
    
};



showMessage();

function commentMessage(){
    let message = "How are You Man"
    console.log(message);  
};

commentMessage()

//console.log(message);

let name = "John Kobir"

function showName(){
 let name = "Bob Ahmed";
 let value = `Client Name is ${name}`;
 console.log(value);
 
};



showName();
console.log(`Function Outside Name is: ${name}`);

function receiveMessage(from, text){
    console.log(`Dear ${from} and the Message is: ${text}`);
    
};

receiveMessage('John Doe', 'You are From Australia')


function showCount(count){
    let value = count ?? 'Empty';
    console.log(value);
}



showCount('i am here');
showCount();
showCount(null);

function sum(a, b){
    let addition = a + b;
    console.log(`The two Value Sum Is: ${addition}`);
};

sum(10, 30);
sum(50, 90);


function checkAge(age){
    if(age > 18){
        return true;
    }
    else{
        console.log("Do you have permission from your parents?");
        
    }

}

let age = 20;

if(checkAge(age)){
    console.log("Access granted");
}
else{
    console.log("Access deniged");
    
}



// function showPrime(n){

//     nextPrime: for (let i = 2; i < n; i++){
//         for (let j = 2; j < i; j++){
//             if(i % j == 0) continue nextPrime;
//         }
//         console.log(i);
        
//     }
// }

// showPrime(40);

function showPrime(n){
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;

        console.log(i);
        
    }
}

function isPrime(n){
    for(let i =2; i < n; i++){
        if(n % i == 0) return false;
    }

    return true;
}

showPrime(50);


function grettingPeople(age) {
    let message;

    if (age > 18) {
        message = "Are You Pass This Barrier";
    } else {
        message = "You are not Pass this Barrier";
    }

    welcome(message);
}

function welcome(message) {
    console.log(message);
}

grettingPeople(20);

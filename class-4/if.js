let year = prompt('Please write your age here?', '');

let age = Number(year);

if (isNaN(age) || age <= 0) {
    console.log("Please enter a valid age.");
} else if (age < 18) {
    console.log("You are not eligible for this content.");
} else {
    console.log("Congratulations! Watch unlimited movies and videos.");
}


let accessAllowed;

let year1 = prompt('How old are you?', '');
let age1 = Number(year1);

if ( age1 > 18){
    accessAllowed = true;
}
else{
    accessAllowed = false;
}

console.log(accessAllowed);

const boyos =20;
let permission = boyos > 18 ? true : false;


let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

let result;
if(a + b < 4){
    result = 'Below';
}
else {
    result = 'Over';
}



let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
console.log(counterElement, plusBtn, minusBtn)

let counter = 0;

let counterUpdate = (value) =>{
    counter = counter + value;
    counterElement.textContent = counter;

    if(counter >= 10){
        plusBtn.setAttribute('disabled', true);
    }

    else{
        plusBtn.removeAttribute('disabled', false);
    }

    //Minus button Disable

    if(counter <= 0){
        minusBtn.setAttribute('disabled', true);
    }

    else{
        minusBtn.removeAttribute('disabled', false);
    }


};

plusBtn.addEventListener('click', () =>{

    counterUpdate(1);

})

minusBtn.addEventListener('click', ()=>{
    counterUpdate(-1);
})

const data = document.getElementById('ban');
data.innerText = 'I Love my Country'
console.log(data);
// const data1 = data.innerText
// console.log(data1);
//  const data2 = data.innerHTML
//  console.log(data2);

const value = document.getElementsByTagName('p')
console.log(value);

const span1 = document.getElementsByClassName('spandata')
console.log(span1);


document.getElementById("p2").style.color = "blue";
const pra = document.getElementById("p3");
pra.style.backgroundColor = "red";
pra.style.color = "white";
pra.style.fontSize = "20px";
pra.style.fontWeight = "bold";

const time = document.getElementById("timebtn");
time.onclick = seeTime;

function seeTime(){
    document.getElementById("timep").innerHTML = Date();
}


document.getElementById('eventbtn').addEventListener('click', myFunction);

function myFunction(){
    alert("hellow World!")
}





 


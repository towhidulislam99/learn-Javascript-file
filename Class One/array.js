const fruitsName = ["apple", "Banana", "Mango", "Orange", "Angur"];
console.log(fruitsName.length);
console.log(fruitsName);
console.log(fruitsName[1])

const array2 = [1, 2, 3, 4, [3, 9], 8];
console.log(array2[4][1]);

fruitsName.push("cherry");
console.log(fruitsName)

fruitsName.pop();
console.log(fruitsName)

fruitsName.unshift("cherry")
console.log(fruitsName)

fruitsName.shift()
console.log(fruitsName)

array2.forEach(function(value){
    console.log(value);
})

fruitsName.forEach(fruit=>{
    console.log(fruit);
})

const color = ["White", "Black", "Majenda", "Yellow", "Green", "Blue"];
console.log(color.map(col=>{
    return col.toUpperCase();
}))

const color2 = color.filter(fil=>{
    return fil.length == 4;
})

console.log(color2)

const color3 = color.find(fi=>{
    return fi.length == 5;
})

console.log(color3);

let person = {
    personName : "Alice",
    age : 20,
    address: {
        vill:"Zedda",
        post:"Zedda State",
    },
    isStudent: true

}
console.log(person)
person.address.post = "Mokka"
person.email = "admin@gmail.com"
console.log(person)
console.log(person.address.post)


let product = [
    {id:"1", name:"Hp ZiteBook", price:20000,},
    {id:"2", name:"Hp NoteBook", price:30000,},
    {id:"3", name:"Hp EliteBook", price:60000,},
]

console.log(product)
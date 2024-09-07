let user;
console.log(user ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

// || returns the first truthy value.
// ?? returns the first defined value.


let height = 0;
console.log(height || 100);
console.log(height ?? 100);


let h = null;
let w =null;
let area = (h ?? 100) * (w ?? 50);
console.log(area);



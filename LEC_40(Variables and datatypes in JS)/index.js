console.log("Sucessfully Linked");

var age1=25; //treated as global variable
console.log(age1);

function solve(){
    var age2=50; //treated as functional variable
    console.log(age2);
}
solve();
// console.log(age2); gives error


let a=10;
console.log(a);
{
    let b=10;
}
// console.log(b); gives error

// let a=50; reinitialization is not allowed
a=30; //reassignment is allowed
console.log(a);
a="Apple" //even if in different datatypes Dynimically typed
console.log(a);

const x=40; //final value;
// x=30; gives error
console.log(x);

let marks=true;
console.log(typeof(marks));


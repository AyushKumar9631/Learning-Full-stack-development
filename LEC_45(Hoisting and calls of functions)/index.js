console.log("Working");

sayMyName("Ayush");


//function gets on top on its current scope
function sayMyName(name){
    console.log(name)
}

console.log(age);
//any var variable is also decleared before execution of program 
var age=25;
//initialization is done only after actual line
console.log(age);

//function hoisting doesnt occur for function expression
//fxn();   gives error
let fxn= function(){
    console.log("Hii");
}
fxn();   //works fine



//assign function to a variable
let greet= function(){
    console.log("Gretting for the day");
}
greet();

//pass function as a parameter
function greetMe(greet, name){
    console.log("Hii! ", name);
    greet();
}
greetMe(greet, "Ayush");


//return a function;
function solve(num1){
    return function(num2){
        return num1*num2;
    };
}
let ans=solve(5);
console.log(ans(11));


//storing in array
const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]
let first=arr[0];
console.log(first(10,5));
console.log(arr[1](10,5));
console.log(arr[2](10,5));




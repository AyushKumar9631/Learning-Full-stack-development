console.log("working");

//function declearation
function sayMyName(){
    console.log("Ayush");
}

//function call
sayMyName();

//print till n
function printCounting(num){
    for(let n=1; n<=num; n++){
        console.log(n);
    }
}
printCounting(5);

//average
function average(num1, num2){
    return (num1+num2)/2;
}
console.log(average(56,89));

function getMyName(firstName, lastName){
    return firstName+" "+lastName;
}
console.log(getMyName("Ayush","Kumar"));


//another way to decleare function
let square= function(a){
    return a*a;
};

let result=square(6);
console.log(result);

//Arrow function similaiar to lambda function
const fxn1= (a,b) => a-b;
console.log(fxn1(5,7));
//also
const fxn2= (a,b) =>{
    return a-b;
}
console.log(fxn2(5,7));

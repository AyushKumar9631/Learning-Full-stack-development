//scope
var a=15; //global scope

function fxn() {
    var b=15; //function scope
}

{
    var c=19; //block scope generally inside loops and is else
}

//---------------------------------------
//execution context
//two phases- memeory phase and execution phase
//already studied about this

//---------------------------------------
//dynamic scoping and lexical scoping
//lexical scoping- what you can ascess is fully determined by its physical addr- followed in js
//dynamic scoping- what you can ascess is fully determined from where it is calling- not followed ny js
let v=12;

function fxn1(){
    console.log(v);
}

function fxn2(){
    let v=13;
    fxn1();
}

fxn2();
//12 when lexical
//13 when dynamic

//---------------------------------------
//clousers- a function when returns a function which uses a variable of parent function
function outer(){
    let v2=10;
    return function(){
        console.log(v2);
    }
}

//use- make function variable private, encapsulation

let inner= outer();
console.log(typeof(inner));
inner(); //as long as inner has some refrence all the variables used by it is not collected by GC

//eg. private counter

function count(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    };
}

let myCounter= count();
myCounter();
myCounter();

let myCounter2= count();
myCounter2();
myCounter2();

//eg. encapsulation
function clickLimiter(l=5){
    let click=0;

    return function(){

        if(click<l){
            click++;
            console.log(`clicked: ${click} times`);
        }
        else{
            console.log("Click limit reached");
        }  
    }
}

let myclick=clickLimiter(3);
myclick();
myclick();
myclick();
myclick();
//you cannot change click couter as it is encapsulated

 






//call, apply and bind

let obj={
    name: "ayush",
    age: 19
}

function fxn1(){
    console.log(this);
    console.log(this.age);
}
fxn1();
fxn1.call(obj);

function fxn2(a, b, c){
    console.log(this,a,b,c);
    
}
fxn2.call(obj, "hello", "High", "why");
fxn2.apply(obj, ["hello again", "hii again", "why??"]); //same with different syntax
let fnc=fxn2.bind(obj, 1,2,3); //not call but binds and create a copy of bound function to be stored in a variable
fnc();
 
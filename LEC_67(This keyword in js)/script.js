//this keyword is a special keyword -> special special word

//global scope
console.log("Global scope: " +this); //refers to window

//function scope
function fxn(){
    console.log("function scope: "+ this); //again window

}
fxn();

//method scope
let obj={
    name: "ayush",

    //es5 function
    sayName: function(){
        console.log("Inside es5 Method: "+this); //refers to the object;
        console.log(this.name);

        function inner1(){
            console.log("inside es5 function of method"+this); //refers to window again;
        }
        inner1();

        let inner2= () =>{
            console.log("inside arrow function of method"+this);
        }
        inner2();
    },

    //arrow function
    sayName2: ()=>{
        console.log("Inside arrow Method: "+this); //now refers to window again
    }
}
obj.sayName();
obj.sayName2();

//event handler
document.querySelector("h1").addEventListener("click", function(){
    console.log("Inside event handler: "+this); //refers to the element on which event listener is applied
})

//classes
class Abcd{
    constructor(){
        console.log("Inside class: "+this); //refere to class itself
        this.a=12;
    }
}
new Abcd();
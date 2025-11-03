console.log("Working!!");
console.log(" ");
//Arithmatic Binary operators
//binary operator
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(2**b);
console.log(" ");

//unary operator
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);
console.log(" ");

//assignment operator
console.log(a=10);
a+=8;
console.log(a);
console.log(" ");

//comparision operator
console.log(10>5);
console.log(10<5);
console.log("10"==10); //loose equality
console.log("10"=== 10); //strict equality
console.log(" ");

//ternary operator
let age=17;
console.log((age>=18)? "Can Vote": "Cannot Vote");
console.log( " ");

//logical operators
console.log((a==5) || (5==5));
console.log((a==5) && (5==5));
console.log(!(a==5) && (5==5));
console.log(false || "Babbar");
console.log(" ");

//bitwise operator
console.log(2&5);
console.log(2|5);
console.log(~1);
console.log(2^5);
console.log(5<<4);
console.log(100>>4);
console.log(-5<<1)
console.log(" ");

//conditionals
//if-else
let marks=80;
if(marks>90) console.log("Grade A");
else if(marks>80) console.log("Grade B");
else console.log("Fail");
console.log(" ");

//switch case
switch(marks){
    case 90: console.log("Grade A");
    break;
    case 80: console.log("Grade B");
    break;
    default: console.log("Fail"); 
}
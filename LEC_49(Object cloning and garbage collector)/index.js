console.log("Working");

let obj={
    age: 12,
    wt: 80,
    ht: 180
};

//objects are dynamic in nature
console.log(obj);
obj.color="White";
console.log(obj);

//object cloning

//spread operator
console.log("spread operator");
let obj2={...obj};
console.log(obj2);
obj.age=19;
console.log("Src",obj);
console.log("Dest",obj2);
console.log(" ")

//assign method
console.log("Assign Method");
let obj3=Object.assign({}, obj);
console.log(obj3);
obj.age=24;
console.log("Src",obj);
console.log("Dest",obj3);

obj2.msg="Helo";
obj2.ht=168;
let obj4=Object.assign({}, obj, obj2);
console.log(obj4)
let obj5=Object.assign({}, obj2, obj);
console.log(obj5);
console.log(" ");

//iteration method
console.log("Iterative method");
let obj6={};
for(let key in obj){
    obj6[key] =obj[key];
}
console.log(obj6);
obj6.color="Black";
console.log(obj);
console.log(obj6);
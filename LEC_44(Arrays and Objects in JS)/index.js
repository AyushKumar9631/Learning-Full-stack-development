console.log("working");

//objects
let obj={
    name:"Ayush",
    age: 5,
    height: "6ft",
    weight: 85,
    greet: function(){
        console.log("Hii");
    }

};

//for in
for(let key in obj){
    console.log(key,": ", obj[key]);
}

console.log(obj);
obj.greet();
console.log(typeof(obj));

//Arrays
let arr=[1,2,3,4,5,"Ayush",true];
console.log(arr[1]);
console.log(arr[6]);

let arr2= new Array("apple", "Ball", "cat");
console.log(arr2[2]);

//functions
arr.push("Banana") //adds elements at last
console.log(arr);

arr.pop()  //removes last element
console.log(arr);

arr.shift() //removes first element
console.log(arr);

arr.unshift("Love")  //add to first position
console.log(arr);

let arr3=arr.slice(1,4); //creates subarray deep copy
console.log(arr3);
arr3[0]=10;
console.log(arr);
console.log(arr3);

arr.splice(3,2,'Kunal'); //replace beginindex, number of index to replace, replaced item
console.log(arr);
arr.splice(3,0,"Not replaced");
console.log(arr);

let arr4= [10,20,30,11,21,51];
let arr5=arr4.map((num) => num*num);  //performs function for each element
console.log(arr5);
arr4.map((num, index) => console.log(num +" "+ index)); //can also take index as parameter

//filter an array according to boolean function provided
let arr6=arr4.filter((num) => num%2==0);
console.log(arr6);
console.log(arr.filter((s) => typeof(s)==="string"));

//performs action on every element and produces a single result
let ans=arr4.reduce((acc,curr) =>{
            return acc+curr;
        },0);
console.log(ans);

//sort
console.log(arr4.sort((a,b) => b-a));
console.log(arr4); //true copy

//index of
console.log(arr4.indexOf(20));

//for each
arr.forEach((value, index) =>{
    console.log("Number: "+ value+" / Index: "+index);
});

//length
console.log(arr.length);

//for of
for(let val of arr){
    console.log(val);
}
let str="Ayush Kumar"
for(let index in str){
    console.log(index);
}
for(let char of str){
    console.log(char);
}

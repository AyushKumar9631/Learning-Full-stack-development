//local storage-> stores data on browser and stores it in browser and avl even if browser is colsed
//session storage-> avl till tab open
//cache-> little data

//local storage

//to store data
localStorage.setItem("keyv","value");

//to get item
var val=localStorage.getItem("keyv");
console.log(val);

//to remove
console.log(localStorage.getItem("keyv"));
localStorage.removeItem("keyv");
console.log(localStorage.getItem("keyv"));

//to update item set item hi update krta h much like hashset in java
localStorage.clear();

//session storage-same syntax

//cookies- browser automatically sents this data to server on page reload
document.cookie="age=19";

//all storage only takes string to be stored.
//to store object or array we need JSON for conversion
let a=["apple", "ball"];
let s=JSON.stringify(a); //to make the string
console.log(s);
let b=JSON.parse(s); //to get back
console.log(b);



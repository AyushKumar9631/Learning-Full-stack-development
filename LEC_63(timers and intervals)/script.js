//this will execute the function in 5sec
let tm=setTimeout(function(){
    console.log("hello");
}, 5000);

//this will execite the function repeaditly at an interval of 1sec
let ti=setInterval(function(){
    console.log('hii');
}, 1000);

//to stop
clearTimeout(tm);
clearInterval(ti);


let main= document.querySelector(".main");
var count=10;
let f=setInterval(function(){
    main.textContent=count;
    if(count==0) clearInterval(f);
    count--;  
}, 1000);



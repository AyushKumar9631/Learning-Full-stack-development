console.log('working');

function sayMyname(){
    console.log("Ayush");
}

function sayMyname2(){
    console.log("Ayush2");
}

setTimeout(sayMyname2, 1000)
setTimeout(sayMyname, 1); //this is a asynchronous code as it does not guarantee it will execute at unpredictable time
//asynchronous code is kept away from main thread to prevent blocking

//to handle asynchronous code event loop is used
//event loop has three parts
// call stack: whenever call stack gets async code it redirects it to browser
// browser: browser handles the interruption and send it to call back stack
//call back stack: call back stack waits for the call stack to be empty and the forwards it to call stack where it finally it gets executed
console.log("end");
for(let i=0; i<1000; i++) console.log(i);
console.log("working");

//a way of handling asynchronous codes in a synchronous way
//a promise is a object which either resolve or reject a task

// let fp= new Promise((resolve, reject) =>{
//     console.log("Babbar");
//     // resolve(1001);
//     reject(new Error("Internal server error"));
// });


// let fp2= new Promise((resolve, reject) =>{

//     setTimeout(function sayMyname(n= "Ayush"){
//         console.log(n);
//     }, 10000);

//     resolve(1);
// });

let promise1= new Promise((resolve, reject)=>{
    let success=true;
    if(success) resolve("Promise fulfilled");
    else reject ("promise rejected");
});

// promise1.then((message)=> {
//     console.log("Message Recieved: " + message);
// }).catch((error)=>{
//     console.log("Error recieved:"+ error);
// })

promise1.then((message)=> {
    console.log("Message Recieved 1: " + message);
    return "second msg";
}).then((m)=>{
   console.log("Second msg recieved: "+ m);
}).catch((error)=>{
    console.log("Error recieved:"+ error);
}).finally(()=>{
    console.log("This will print anyway");
});


let promise2= new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "First");
});
let promise3= new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, "Second");
});
let promise4= new Promise((resolve, reject)=>{
    setTimeout(reject, 4000, "third");
});

Promise.all([promise2, promise3, promise4])
.then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.error("An error occured");
})


console.log("working");

//async await is used to execute async code as sync
//async always return a promise

async function getdata(){
    setTimeout(function(){
        console.log("this is a sync code");
    }, 3000);
}

// let output= getdata();
// console.log(output); 

//always write await in aync function

//fetch APT
async function getData(){
    let response= await fetch('https://jsonplaceholder.typicode.com/posts');
    let data= await response.json();
    console.log(data);
}

//task
//prepare url or api endpoint -> sync
//fetch data -> async 
//process data -> sync
//since proceesing of data cant be done without fetching fetch data need to be awaited

// getData();

const myHeader= new Headers();
myHeader.append("Content-Type", "application/json");

const url= 'https://jsonplaceholder.typicode.com/posts';

const options={
    method: "POST",
    body: JSON.stringify({username: "Ayush Kumar"}),
    headers: myHeader,
};

async function postData(){
    const res= await fetch(url, options);
    let d= await res.json();
    console.log("My data:" + d);
}

async function fxn(){
    await postData();
    await getData();
}

// fxn();

async function Post2(){
    const p2= await fetch('https://dummyjson.com/posts/add', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            title: 'I am Ayush Kumar.',
                             userId: 5,
                            /* other post data */
                        })
    })

    let d2= await p2.json();
    console.log("My data:" + d2);
}

Post2();






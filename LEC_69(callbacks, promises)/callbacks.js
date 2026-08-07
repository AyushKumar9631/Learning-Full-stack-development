//callback if the function is sent to another function in parameter to be used there is called callback
function fxn(f){
    setTimeout(f,Math.floor(Math.random()*10000));
}

fxn(function(){
    console.log("hey");
});

//lets understand callback in detail
//lets say this function is a library function
function get_name(id, f){
    setTimeout(()=>{
        console.log("name fetched");
        if(id==1) f("ayush");
        else if(id==2) f("Yash");
        else f("Undefined");
    }, 3000)
}

//now we are creating our own function
get_name(1, function(name){
    console.log(`Name fetched is ${name}`);
})
//what are we doing we are sending a library function with the id as well as what we want to do
//for the name associated with that id. the library function accepts id and callbacks out original function
//with the value of name. this is the way to fetch data from extenal
//typically library data gives in JSON output

//lets say we need to fetch data form different functions of the libraries
//lets say after we get name we want post associated with those name. but since both
//get functions are async we cannot just write it sequentially and expect it to run sequentially
//thus we need to go nested function called callbacks hell

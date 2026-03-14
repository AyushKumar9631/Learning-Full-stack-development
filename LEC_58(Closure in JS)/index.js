console.log("working");

//closure is a combination of function and its required data

let name='Kumar';
function init(){
    let name='Ayush';
    function displayName(){
        // let name='kumar';
        console.log(name);
    }

     return displayName;
}

let displayName=init();

displayName();
//how is it possible we are uotside the block wher name was initailized and delclared
//yet we can use displayfunc outside the block to ascess the name which should have been removed
//this is closure where a function is binded with its required resources
//since the fxn is returned it linked val is also binded hence preserved
//required resource is not copied but its refrence is passed 
//it must also be noted that inner name variable is binded rather than outer name var as it is closer
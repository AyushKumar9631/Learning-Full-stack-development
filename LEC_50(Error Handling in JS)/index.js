console.log("Working");
//errorhandling
try{
    console.log("Try block start here");
    console.log(x);

    console.log("Try block ends here");
}catch(e){
    console.log("error catched inside catch block");
    console.log("err: ", e);
}
finally{
    console.log("Inside Finally block");
}


//custom error
try{
    console.log(x);
}catch{
    throw new Error("phle X ko declear kro");
}
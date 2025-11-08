console.log("Working");

var age=15;  //global variable

console.log(age+ " outside");
{
    console.log(age+" in block")
}
if(true) console.log(age+" inside if-else");
for(let i=0; i<1; i++) console.log(age+" inside loop");
function print(){
    console.log(age+" inside function");
}
print();




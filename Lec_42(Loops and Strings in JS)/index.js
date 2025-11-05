console.log("working");

//1 to n
for ( let i=1 ; i<=10 ; i++){
    console.log(i);
}
console.log(" ");

//n to 1
for(let i=10; i>0; i--){
    console.log(i);
}
console.log(" ");

//use of break;
for(let i=1; i<=10; i++){
    if(i==4){
        console.log("Loop broken");
        break;
    }
    console.log(i);
}
console.log(" ");

//use of continue;
for(let i=1; i<=10; i++){
    if(i==4 || i==6 || i==8){
        console.log("Current itration skipprd");
        continue;
    }
    console.log(i);
}
console.log(" ");

//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
console.log(" ");

//do while loop
i=1;
do{
    console.log(i);
    i++;
}while(i<=5);
console.log(" ");

//Strings
let name1="a string ";
console.log(typeof(name1));

let name2=`love
babbar              here string remain as it is
this is`;

console.log(name2);

let name3= new String("Name");
console.log(name3);

console.log(name1+ name3);

let name4=` ${name1} and ${name3}`;
console.log(name4);

console.log(name4.length);
console.log(name4.toUpperCase());
console.log(name4.substring(1,3));
console.log(" ");

let sentence="This is a sentence";
let words=sentence.split(" ");
console.log(words);
console.log(words.join(", "));

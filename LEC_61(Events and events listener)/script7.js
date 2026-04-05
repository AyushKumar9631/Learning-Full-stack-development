let inp=document.querySelector("input");
let span= document.querySelector("span");
let h1=document.querySelector("h1");

inp.addEventListener("input", function(){
    var l=inp.value.length;
    if(l<=20){
        h1.textContent="Total Characters left : "
        span.textContent= 20-l;
        span.style.color="black";
    }
    else{
        h1.textContent="Characters exceeded : "
        span.textContent= l-20;
        span.style.color="red";
    } 


    

});

let count=0;
let progress=document.querySelector(".progress");
let b=document.querySelector("#b");
let a=document.querySelector("#a");

let f=setInterval(() => {
    progress.style.width=count+"%";
    b.textContent=count+"%";



    if(count===100){
        a.textContent="downloaded."
        clearInterval(f);
    } 
    count++;
    }, 1000);
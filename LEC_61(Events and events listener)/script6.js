document.querySelector("#nav")
.addEventListener("click", function(){
    alert("Navigation clicked");
});

document.querySelector("#main")
.addEventListener("click", function(){
    alert("main clicked");
}, true);

let ul=document.querySelector("ul");
ul.addEventListener("click", function(e){
    e.target.classList.toggle("lt");
});
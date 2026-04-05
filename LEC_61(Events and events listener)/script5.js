let abcd=document.querySelector("#abcd");
let h1= document.querySelector("h1")

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor="yellow";
});

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor="red";
});

window.addEventListener("mousemove", function(e){
    h1.textContent=e.clientX+"px  "+e.clientY+"px"
    abcd.style.top= (e.clientY-100)+"px";
    abcd.style.left= (e.clientX-100)+"px";
})
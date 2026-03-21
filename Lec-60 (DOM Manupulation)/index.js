console.log('Working');


//fetching
let abcd=document.getElementById("abcd");
console.log(abcd);

let defg=document.getElementsByClassName("defg");
console.log(defg);

let h1=document.querySelector("h1");
console.log(h1);

let h2=document.querySelectorAll("h1");
console.log(h2);

//manupulation
console.dir(h1);
h1.textContent="<P>this is dynamically changed</p>";
h1.innerHTML="<i>this is dynamically changed</i>";
// h1.hidden=true;

//getattr, setattr, removeattr
let a=document.querySelector("a");
// a.href="https://www.google.com";
//or
a.setAttribute("href", "https://www.google.com");
let url=a.getAttribute("href");
a.innerText=url;

let img=document.querySelector("img");
img.src="https://images.unsplash.com/photo-1773061941695-43568f71bee9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.style.width="400px";

a.removeAttribute("href");

//create element
let h3=document.createElement("h2");
h3.innerText="This para is dynamically created";
document.body.appendChild(h3);
document.body.prepend(h3);

// h3.remove();
console.dir(h3);
// h3.style.color="red";
h3.style.fontFamily="Gilroy";
h3.classList.add("ulu");
h3.classList.remove("ulu");
h3.classList.toggle("ulu");
h3.classList.toggle("ulu");

document.querySelector("#abcd").textContent="welcome brother";


let lis= document.querySelectorAll("li");
console.log(lis);
lis.forEach( function(val) {
    console.log(val.textContent);
});

//or
for(let i=0; i<lis.length; i++){
    console.log(lis[i].textContent);
}

let p=document.querySelector("p");
p.innerHTML="<b>updated</b>";

let di=document.querySelector("div");
di.setAttribute("title", "hurray");

let u=document.querySelector("ul");
let l=document.createElement("li");
l.textContent="elephant";
u.appendChild(l);

l=document.querySelector("li");
u.removeChild(l);

lis=document.querySelectorAll("li");
for(let i=0; i<lis.length; i+=2){
    lis[i].classList.add("highlight");
}


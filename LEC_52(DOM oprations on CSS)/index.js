let para=document.getElementById("spara");
console.log(para);
para.innerText="This is the new text of second para changed via js";
para.style.backgroundColor="yellow";
para.style.fontSize="30px";

let para2=document.getElementById("fpara");
console.log(para2.style.cssText);
para2.style.cssText="background-color:black;font-size:40px;color:white; padding:10px; border-radius:10px;";

let fdiv=document.getElementById("fdiv");
console.log(fdiv);
fdiv.setAttribute("class","mydiv");
console.log("class ==mdiv element is printed below");
console.log(document.getElementsByClassName("mydiv"));
fdiv.setAttribute("style", "padding: 2rem; "); //replaces the existing style attribute

let sdiv=document.getElementById("sdiv");
console.log(sdiv.className);
sdiv.className="mydiv2"; //update existion class name
console.log("class ==mydiv2 element is printed below");
console.log(document.getElementsByClassName("mydiv2"));

//.classlist can be used to get, add, remove, toggle or check for class name of an element
sdiv.className="apple ball cat dog";
console.log(sdiv.classList);
sdiv.classList.add("elephant");
console.log(sdiv.classList);
sdiv.classList.remove("ball");
console.log(sdiv.classList);
sdiv.classList.toggle("cat");
sdiv.classList.toggle("fish");
console.log(sdiv.classList);
console.log(sdiv.classList.contains("dog"));
console.log(sdiv.classList.contains("cat"));

console.log("working");
let a=document.getElementById("fpara");
console.log(a);
console.log(typeof(a));

console.log(document.querySelectorAll(".apple"));

// console.log($0);

console.log(document);
let body=document.body;
console.log(body);
console.log(body.innerHTML);
// body.innerHTML="This is the body of the document";

let element=document.querySelector("#fdiv");
console.log(element.textContent);

//will give the text content of all children element as shown in screen
console.log(element.innerText);

let fheading = document.createElement('h1');
fheading.textContent="This is a heading created by script code";
console.log(fheading);
element.appendChild(fheading);

let para=document.createElement('p');
para.textContent="This is a paragraph created by script code";
element.appendChild(para);

let p1=document.createElement('p');
p1.textContent="This is a paragraph created by script code and inserted beforebegin";
element.insertAdjacentElement("beforebegin",p1);

let p2=document.createElement('p');
p2.textContent="This is a paragraph created by script code and inserted afterbegin";
element.insertAdjacentElement("afterbegin",p2);

let p3=document.createElement('p');
p3.textContent="This is a paragraph created by script code and inserted beforeend";
element.insertAdjacentElement("beforeend",p3);

let p4=document.createElement('p');
p4.textContent="This is a paragraph created by script code and inserted afterend";
element.insertAdjacentElement("afterend",p4);

element.removeChild(element.querySelector("h1"));
console.log(element.parentElement);
console.log('working');

//performance.now() method is used to caln method

//code 1
const t1=performance.now();

for(let i=1; i<=100; i++){
    let para=document.createElement('p');
    para.textContent='This is para'+ i;
    // para.style.backgroundColor='aqua';
    document.body.appendChild(para);
}

const t2=performance.now();
console.log('Total time takken by code 1: ' + (t2-t1));

//code 2 better

const t3=performance.now();
let mydiv=document.createElement('div');
// mydiv.style.backgroundColor='purple';

for(let i=1; i<=100; i++){
    let para=document.createElement('p');
    para.textContent='This is para'+ (i+100);
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);
const t4=performance.now();
console.log('Total time takken by code 2: ' + (t4-t3));


//code 3 best
const t5=performance.now();

let fragment=document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let para=document.createElement('p');
    para.textContent='This is para'+ (i+200);
    fragment.appendChild(para);
}
document.body.appendChild(fragment);

const t6=performance.now();
console.log('Total time takken by code 2: ' + (t6-t5));


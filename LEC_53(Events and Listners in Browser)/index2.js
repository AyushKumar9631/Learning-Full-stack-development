console.log("working");

let paras= document.querySelectorAll('p');

//not a good practice
// for(let i=0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener('click', function(){
//         alert("You have clicked on para "+ (i+1));
//     })
// }


//better but can be improved
function fxn(event){
    if(event.target.nodeName==='SPAN'){
        alert("You have clicked on tag which says "+ event.target.textContent);
    }
}

// for(let i=0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener('click', fxn);
// }

let container= document.getElementById("wrapper");
document.addEventListener('click', fxn);
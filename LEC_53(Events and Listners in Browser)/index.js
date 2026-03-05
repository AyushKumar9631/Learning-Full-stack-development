console.log("workng");
let fpara = document.getElementById("fpara");
console.log(fpara);

function changeText(event){
    console.log(event);
    fpara.innerText = "Dont touch me please";
}

fpara.addEventListener("click", changeText);
// fpara.removeEventListener("click", changeText);

//default action
let anchor=document.getElementById("anchor");
anchor.addEventListener("click", function(event){
    event.preventDefault();
    anchor.textContent="Clicked";
});



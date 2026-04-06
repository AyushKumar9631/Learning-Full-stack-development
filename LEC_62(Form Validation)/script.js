let nm=document.querySelector("#name");
let form=document.querySelector("form");
let na=document.querySelector("#n_alert");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(nm.value.length<=2){
        na.style.display="initial";
    }
    else{
        na.style.display="none";
    }

    //mostly people use regex
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(regex.test("@gmail.com"));

})
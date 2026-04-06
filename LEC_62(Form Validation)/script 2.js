let email= document.querySelector("#email");
let pass= document.querySelector("#password");
let form= document.querySelector("form")


form.addEventListener("submit", function(e){
    e.preventDefault();

    let resultdiv=document.querySelector(".result-message");
    resultdiv.textContent="";
    document.querySelector("#passerror").style.display="none";
    document.querySelector("#emailerror").style.display="none";

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    let validemail=emailRegex.test(email.value);
    let validpass=passwordRegex.test(pass.value);
    console.log(validemail);

    if(!validemail) document.querySelector("#emailerror").style.display="initial";

    if(!validpass) document.querySelector("#passerror").style.display="initial";

    if(validemail && validpass){
        
        if(email.value==="marikayush@gmail.com"){
            if(pass.value==="Djabbic@2611"){
                resultdiv.style.color="green";
                resultdiv.textContent="Valid credentials";
            }
            else{
                resultdiv.style.color="red";
                resultdiv.textContent="Inalid credentials";
            }
        }
        else{
            resultdiv.style.color="green";
            resultdiv.textContent="Valid credentials";
        }
    }
});
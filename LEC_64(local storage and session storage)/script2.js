let main=document.querySelector("#main-container");
let theme="dark";

var t=localStorage.getItem("theme");
if(t){
    if(t==="light"){
        main.classList.remove("theme-dark");
        main.classList.add("theme-light");
        localStorage.setItem("theme", "light");
        theme="light";
    }
    else{
        main.classList.add("theme-dark");
        main.classList.remove("theme-light");
        localStorage.setItem("theme", "dark");
        theme="dark";
    }
}
else if(!window.matchMedia('(prefers-color-scheme: dark').matches){
    main.classList.remove("theme-dark");
    main.classList.add("theme-light");
    theme=light;
}

let button=document.querySelector("button");
button.addEventListener("click", function(){
    main.classList.toggle("theme-dark");
    main.classList.toggle("theme-light");

    if(theme==="light") theme="dark";
    else theme="light";
    
    localStorage.setItem("theme", theme);
})

window.matchMedia('(prefers-color-scheme: dark').addEventListener("change", function(){
    if(!window.matchMedia('(prefers-color-scheme: dark').matches){
        main.classList.remove("theme-dark");
        main.classList.add("theme-light");
        theme="light";
        localStorage.setItem("theme", "light");
    }
    else{
        main.classList.add("theme-dark");
        main.classList.remove("theme-light");
        theme="dark";
        localStorage.setItem("theme", "dark");
    }
})
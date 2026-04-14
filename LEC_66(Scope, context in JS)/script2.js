let notification=document.getElementById("toast");

function createToaster(config){

    return function(notificationMessage){
        let div=document.createElement("div");
        div.className=` inline-block bg-${config.backgroundColor} text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300`;
        div.textContent = notificationMessage;
        document.body.appendChild(div);
        setTimeout(()=>{
            div.style.opacity = "0";
        }, config.duration);
        setTimeout(()=>{
            document.body.removeChild(div);
        }, config.duration + 300);  
    }
};

let toaster = createToaster({
    theme: "dark",
    duration: 3000,
    backgroundColor: "gray-800",

});

toaster("This is a dummy notification");
toaster("Download done");

let i=0;

let interval= setInterval(function(){
    toaster(`this is notification ${i++}`);
},1000);

setTimeout(function(){
    clearTimeout(interval);
},10000);


console.log("working");

//example
let h1= document.querySelector("h1");
h1.addEventListener("click", fxn);
function fxn(){
    h1.style.color="red";
}

let p= document.querySelector("p");
p.addEventListener("dblclick", function(){
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde sit voluptates quae itaque voluptatem tempore provident aut, architecto iure laborum recusandae voluptas exercitationem laudantium cupiditate tenetur ipsam optio. Ab fugit natus voluptatem, a at corrupti doloremque dolore inventore quidem distinctio consequatur architecto dignissimos perferendis sit aliquam praesentium consequuntur rerum nam et? Eaque voluptas repellat, repellendus rem, magnam ipsam animi autem quidem quos reprehenderit exercitationem adipisci maiores laboriosam non. Architecto labore hic, aut veniam magnam beatae. Nobis sapiente velit harum accusamus est expedita. Eum, quo quas fuga doloremque omnis soluta ipsum laboriosam, voluptate quibusdam rerum ratione quis saepe nostrum veritatis."
});

//removing event listener requires same function in parameter as event
h1.removeEventListener("click", fxn);

//input event is trigerred when text input is changed
let inp= document.querySelector("input");
let p2=document.querySelector("#para2");
inp.addEventListener("input", function(e){
    // here e is event that is trigerred
    //if h is appended in input the its a event with value h;
    if(e.data!==null) console.log(e.data);
    if(inp.value=="ayush") p2.innerText="Badhiya naam h";
    else p2.innerText="laure ka naam h";
})

//change event is trigerred whenever options are selected or changed
let selec= document.querySelector("select");
let h2=document.querySelector("#device")
selec.addEventListener("change", function(e){
    console.log("Option "+e.target.value+" is selected");
    h2.innerText= "Device Selected: "+ e.target.value;
})

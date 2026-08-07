//this will act as a class in js
function CreatePencil(name, price, color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
    
}

//way to add static variable as well as functions
CreatePencil.prototype.type="stationary";
CreatePencil.prototype.write=function(text){
                            let h1=document.createElement("h1");
                            h1.textContent=text;
                            h1.style.color=this.color;
                            document.body.append(h1);
                        }

//these function that are creted with new keyword are called constructor function
let pencil1= new CreatePencil("natraj",10, "red", "natraj");
let pencil2= new CreatePencil("Doms",10, "black", "Doms");

pencil1.write("kaise ho bhai")
pencil2.write("theek hu bhai")

console.log(pencil1.type);

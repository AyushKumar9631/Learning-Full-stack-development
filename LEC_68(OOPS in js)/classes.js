class Pencil{
    constructor(name, color){
        this.name=name;
        this.color=color;
    }

    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((elem) =>{
            if(elem.style.color===this.color) elem.remove();
        })
    }
}

let p1= new Pencil("Natraj", "black");
let p2= new Pencil("Apsara", "blue");
p1.write("hey")
p2.write("hello")

p1.erase();

//extends
class PencilBox extends Pencil{
    constructor(name, color, number){
        super(name,color);
        this.number=number;
    }
}

let p3=new PencilBox("natraj", "purple", 15);
p3.write("this is written by box class");
console.log("Working");

class Human{
    //properties
    nickName; //public
    #age;  //private
    wight;
    ht;

    constructor(NickName, age, weight, ht){
        this.nickName=NickName;
        this.#age=age;
        this.wight=weight;
        this.ht=ht;
    }

    get getAge(){
        return this.#age;
    }
    set setAge(val = 60){
        this.#age=val;
    }

    walking(){
         console.log(this.nickName+" is walking");
    }

    running(val=20){ // 20 is default value is nothing is added the 20 will be used
        console.log(this.nickName," is running at ", val," km//hr");
    }
}

let rahul=new Human("Rahul", 18, 80, 180);
console.log(rahul.wight);
rahul.walking();
console.log(rahul.getAge);
rahul.setAge= 60;
console.log(rahul.getAge);
rahul.running(); //default value
rahul.running(40);

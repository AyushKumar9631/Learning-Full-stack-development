let form= document.querySelector("form");

const userManager={
    users: [],
    addUser: function(){

    },

    removeUser: function(){

    },

    init: function(){
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function(e){
        e.preventDefault();
        alert("form submitted");
        console.log("form submitted");
    }
}

userManager.init();
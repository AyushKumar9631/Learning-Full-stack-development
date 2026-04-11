
//get divs and elements
let card=document.querySelector(".card");
let form=document.querySelector("form");
let landingDiv= document.querySelector(".landingDiv");

//get inputs
let profileinp=document.querySelector("#imageURLinp");
let nameinp=document.querySelector("#nameinp");
let hometowninp=document.querySelector("#homeTowninp");
let purposeinp=document.querySelector("#Purpose");
let categoryinp=document.querySelector("#categoryinp");

//get buttons
let plus= document.querySelector("#plus");
let close=document.querySelector("#close");
let submit=document.querySelector("#submit");
let up=document.querySelector("#up");
let E=document.querySelector("#E");
let I=document.querySelector("#I");
let U=document.querySelector("#U");
let N=document.querySelector("#N");
let B=document.querySelector("#B");

//get user details
let users=[
    {id: 1, n: "Ayush Kumar", ht: "basantpur, supaul",purpose: "Studying", category:"Emergency", color: "E", pic: "https://plus.unsplash.com/premium_photo-1669632824466-09b2c595aa4c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljc3xlbnwwfHwwfHx8MA%3D%3D"}
]



let totalCount=1;
let curNumber=0;

let s=localStorage.getItem("users");
if(s!==null){
    users=JSON.parse(s);
    totalCount=localStorage.getItem("count");
}


//show first card
function showCard(user){

    card.innerHTML="";
    card.className="card";
    card.classList.add(user.color);
    

    let cardHeader= document.createElement("div");
    cardHeader.classList.add("card-header");

    let profile= document.createElement("img");
    profile.setAttribute("id", "profile-pic");
    profile.setAttribute("src", user.pic);
    profile.setAttribute("alt", "error Loading")

    let n=document.createElement("h3");
    n.setAttribute("id", "card-name");
    n.textContent=user.n;

    cardHeader.appendChild(profile);
    cardHeader.appendChild(n);

    let details= document.createElement("div");
    details.classList.add("details");

    let hometown=document.createElement("h4");
    hometown.textContent="Hometown: " + user.ht;

    let purpose=document.createElement("h4");
    purpose.textContent="Purpose: " + user.purpose;

    let categoty=document.createElement("h4");
    categoty.textContent="Category: " + user.category;

    details.appendChild(hometown);
    details.appendChild(purpose);
    details.appendChild(categoty);

    card.appendChild(cardHeader);
    card.appendChild(details);
}

showCard(users[0]);
let curUsers= users;


//add event listener

//on plus button
plus.addEventListener("click", function(){
    landingDiv.style.display="none";
    form.style.display="flex";
});

//on close button
close.addEventListener("click", function(e){
    e.preventDefault();
    landingDiv.style.display="flex";
    form.style.display="none";
});

//on submit
submit.addEventListener("click", function(e){
    e.preventDefault();
    
    if(profileinp.value.trim()===""){
        alert("Image Url can't be empty");
        return;
    }
    if(nameinp.value.trim()===""){
        alert(" Name can't be empty");
        return;
    }
    if(hometowninp.value.trim()===""){
        alert("fill the details about your hometown");
        return;
    }
    if(purposeinp.value.trim()===""){
        alert("you forgot to fill your purpose");
        return;
    }
    if(categoryinp.value==="P"){
        alert("select your importance level");
        return;
    }

    totalCount++;
    let cat;
    if(categoryinp.value==="E") cat="Emergency";
    else if(categoryinp.value==="I") cat="Important";
    else if(categoryinp.value==="U") cat="Urgent";
    else cat="No rush";

    let user={
        id: totalCount,
        n: nameinp.value,
        ht: hometowninp.value,
        purpose: purposeinp.value,
        category: cat,
        color: categoryinp.value,
        pic: profileinp.value
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("count", totalCount);

    form.reset();

    landingDiv.style.display="flex";
    form.style.display="none";

});

//on up
up.addEventListener("click", function(){
    curNumber--;
    if(curNumber===-1) curNumber=curUsers.length-1;
    showCard(curUsers[curNumber]);
});

//on down
down.addEventListener("click", function() {
    curNumber++;
    if(curNumber=== curUsers.length) curNumber=0;
    showCard(curUsers[curNumber]);
});

//on B
B.addEventListener("click", function(){
    curUsers=users;
    showCard(curUsers[0]);
})

//on E
E.addEventListener("click", function(){
    tempUsers=[];
    users.forEach(function(user){
        if(user.color==="E") tempUsers.push(user);
    });

    if(tempUsers.length===0){
        alert("No info in this category. check later");
    }
    else{
        curUsers=tempUsers;
        showCard(curUsers[0]);
    }
});

//on I
I.addEventListener("click", function(){
    tempUsers=[];
    users.forEach(function(user){
        if(user.color==="I") tempUsers.push(user);
    });

    if(tempUsers.length===0){
        alert("No info in this category. check later");
    }
    else{
        curUsers=tempUsers;
        showCard(curUsers[0]);
    }
});

U.addEventListener("click", function(){
    tempUsers=[];
    users.forEach(function(user){
        if(user.color==="U") tempUsers.push(user);
    });

    if(tempUsers.length===0){
        alert("No info in this category. check later");
    }
    else{
        curUsers=tempUsers;
        showCard(curUsers[0]);
    }
});

N.addEventListener("click", function(){
    tempUsers=[];
    users.forEach(function(user){
        if(user.color==="N") tempUsers.push(user);
    });

    if(tempUsers.length===0){
        alert("No info in this category. check later");
    }
    else{
        curUsers=tempUsers;
        showCard(curUsers[0]);
    }
});
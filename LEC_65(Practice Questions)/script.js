var users = [
    {
        n: "Liam Smith",
        designation: "Web Developer",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvG7mz4HZTQBFVnTZ_cCWcQEWpuVP3pG6mA&s"
    },
    {
        n: "Emma Johnson",
        designation: "Graphic Designer",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLijMBwxZMtCTSmiSuod2LGW0NHQEXVTNEw&s"
    },
    {
        n: "Noah Williams",
        designation: "Data Scientist",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWVUPAuOsGF7X1lC912XzuUIJoNzxIDd1qQ&s"
    },
    {
        n: "Olivia Brown",
        designation: "Marketing Head",
        pic: "https://i.pravatar.cc/156"
    },
    {
        n: "James Jones",
        designation: "UI/UX Specialist",
        pic: "https://i.pravatar.cc/155"
    },
    {
        n: "Sophia Garcia",
        designation: "Content Writer",
        pic: "https://i.pravatar.cc/154"
    },
    {
        n: "Logan Miller",
        designation: "Project Manager",
        pic: "https://i.pravatar.cc/153"
    },
    {
        n: "Ava Davis",
        designation: "HR Manager",
        pic: "https://i.pravatar.cc/152"
    },
    {
        n: "Lucas Rodriguez",
        designation: "DevOps Engineer",
        pic: "https://i.pravatar.cc/300"
    },
    {
        n: "Mia Martinez",
        designation: "Product Owner",
        pic: "https://i.pravatar.cc/150"
    }
];

let container=document.querySelector(".card-container");

function showUsers(user){
    let card=document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", user.n);

    let img=document.createElement("img");
    img.setAttribute("src", user.pic);
    img.classList.add("profile-pic");

    let details=document.createElement("div");
    details.classList.add("details");

    let h3=document.createElement("h3");
    h3.textContent=user.n;
    let p= document.createElement("p");
    p.textContent=user.designation;

    details.appendChild(h3);
    details.appendChild(p);

    card.appendChild(img);
    card.appendChild(details);

    container.appendChild(card);
}

users.forEach((element, idx, users)=> {
    showUsers(element);
});

let searchbar= document.querySelector("input");
searchbar.addEventListener("input", function(e){
    container.innerHTML="";
    let s=searchbar.value.toLocaleLowerCase().replaceAll(" ", "");

    users.forEach(function(user){
        let nam=user.n.toLocaleLowerCase();
        nam=nam.replaceAll(" ", "");
        console.log(nam);
        if(nam.startsWith(s)) showUsers(user);
    });
})



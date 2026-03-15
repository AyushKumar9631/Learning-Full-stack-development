document.addEventListener("DOMContentLoaded", function(){

    const searchButton=document.getElementById("searchButton");
    const userNameInput=document.getElementById("userInput");
    const statscontainer=document.querySelector(".statsContainer");
    const easyProgressCircle=document.querySelector(".easyProgress");
    const mediumProgressCircle=document.querySelector(".mediumProgress");
    const hardProgressCircle=document.querySelector(".hardProgress");
    const easyLabel=document.getElementById(".easyLabel");
    const mediumLabel=document.getElementById(".mediumLabel");
    const hardLabel=document.getElementById(".hardLabel");
    const cardStatsConatiner=document.querySelector(".statsCards");

    //function to check for username syntax
    function validateUserName(userName){
        if(userName.trim()==""){
            alert("username should not be empty");
            return false;
        }
        const regex= /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching=regex.test(userName);
        if(!isMatching){
            alert("invalid username");
        }
        return isMatching;
    }

    //function to check validity of username
    async function fetchuserDetails(userName){
        const url="https://leetcode-stats-api.herokuapp.com/"+userName;
        // console.log(url);
        try{
            
            searchButton.textContent = "Searching...";
            searchButton.disabled=true;
            const response= await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch user details");
            }

            const data= await response.json();
            console.log("login data"+ data);

        }
        catch(error){
            statscontainer.innerHTML= "<p> no data found</p>";
        }
        finally{
            searchButton.textContent = "Search Again";
            searchButton.disabled= false;
        }
    }

    searchButton.addEventListener("click", function(){
        const userName= userNameInput.value;
        console.log("Logged userName:"+ userName);
        if(validateUserName(userName)){
            fetchuserDetails(userName)
        }

    })
})
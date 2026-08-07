//async await is a cleaner way to accept promises

//lets copy previous promise modisied for async await
let pr= new Promise(function(res, rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("resolved with "+ rn);
        else rej("rejected with " +rn);
    }, 3000);
})


async function fxn(){
    try{
        let val=await pr;
        console.log(val);
    }catch(err){
        console.log("error:" ,err);
    }
}

fxn();
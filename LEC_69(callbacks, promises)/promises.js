//promises bypass the need of callbacks

//this is a promise that is going to either resolve or reject our request
//function only accepts two variable and is recognized by order. name could be anything
let pr= new Promise(function(res, rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res(rn);
        else rej(rn);
    }, 3000);
})

//if promise is fulfilled the then plays and if rejected then catch plays.
//there is pending state in that time nothing happens;
pr.then(function(val){
    console.log(`promise is fulfilled with val= ${val}`);
}).catch(function(val){
    console.log(`promise is rejected with val= ${val}`);
});
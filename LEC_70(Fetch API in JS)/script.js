//fetch function is promise based so then and catch we use
fetch("https://randomuser.me/api/")
.then((rawData)=>{
    //we dont get the data but rather the whole data
    //including header and body
    console.log("---------------RAW DATA --------------------")
    console.log(rawData);
    //hence we convert the raw message and good practice is to process the raw data in next then
    return rawData.json();
})
.then((data)=>{
    console.log("---------------DATA--------------");
    console.log(data);
    console.log("-----------Particular Data--------------")
    console.log(data.results[0].name.first)
})
.catch((err)=>{
    console.log(err);
})


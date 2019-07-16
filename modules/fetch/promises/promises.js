let promise = new Promise(function(resolve, reject){
    resolve (
        setTimeout(function(){
            alert("Job is done")
        }, 1000)
    )
})





// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(() => reject(new Error("promise2: Woops!")), 2000)
// })



let promise3 = new promise(function(resolve, reject){
    resolve(console.log("Job Done!"))

    reject(new Error("Job Not Done"))
})

//-------------------
//consuming code 
//.then


let promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Job is Done")
    }, 4000)
})

promise4.then(
    result => alert(result),
    error => alert(error)    
)


//--------------------
//.finally


new Promise((resolve, reject) =>  {
    setTimeout(() => resolve("result"), 2000)
})
.finally(() => alert("promise ready"))
.then(result => alert(result))  //.....then handles the result
.catch(err => alert(error));    //handles the error object 


// async

async function myFun() {
    let myVar = "Hello"
 }
 
 myFun().then(alert("async promise"));
 
 
 // await
 
 function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000);
    });
 }
 
 async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
 
 }
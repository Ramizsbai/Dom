fetch('https://jsonplaceholder.typeicode.com/todos/1')
.then(res => {
    console.log(res);
    return res.json()
})
.then(res => res.map(user => user.username))
.then(userName => {
    console.log(userNames);
    
    document.getElementById("results").innerHTML = userNames;
})
   async function inserirPost(){
document.getElementById("posts").innerHTML= "carregando ...."

let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        title:"Titulo de teste",
        body: "corpo de teste",
        UserID: 5
    }),
    headers:{
        'Content-type':'application/json'
    } 
})

let json = await req.json()
console.log(json)


    }
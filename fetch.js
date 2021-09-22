/* //https://jsonplaceholder.typicode.com/posts
//Async e Await
async function loadPosts(){

    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()

        montarBlog(json)
    
/*     document.getElementById('posts').innerHTML = 'carregando .....'
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(resultado){
    return resultado.json()
})
.then(function(json){

    montarBlog(json)//chamando os posts para a tela
    //document.getElementById('posts').innerHTML= json.length + 'posts'
   // console.log(json)
})
.catch(function(error){
    console.log('deu problema')
}) */
/* }
function montarBlog(lista){//função para exibir os posts
    let html=''
    for( let i in lista){
        html += '<h3>'+lista[i].title+'<h3>'
       html += lista[i].body +'<br/>'
       html += '<hr>'


    }
    document.getElementById('posts').innerHTML= html
} */

//Fetch com POST */
function inserirPost(){

    document.getElementById("posts").innerHTML= "carregando ...."
    fetch('https://jsonplaceholder.typicode.com/posts')

    .then(function(resultado){
        return resultado.json()
    })

    .then(function(json){
        montarBlog(json)
       //document.getElementById("posts").innerHTML= json + 'posts'
 })
    .catch(function(error){
        console.log('erro...')
    }) 
    
}
function montarBlog(lista){

    let html = ''

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>'
        html +=  lista[i].body + '<br/>'
        html += '<hr>'
    }
    document.getElementById("posts").innerHTML = html
}
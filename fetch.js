//https://jsonplaceholder.typicode.com/posts
function loadPosts(){
    document.getElementById('posts').innerHTML = 'carregando .....'
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
})
}
function montarBlog(lista){//função para exibir os posts
    let html=''
    for( let i in lista){
        html += '<h3>'+lista[i].title+'<h3>'
       html += lista[i].body +'<br/>'
       html += '<hr>'


    }
    document.getElementById('posts').innerHTML= html
}
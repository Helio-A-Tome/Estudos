 async function loadPosts(){
    document.getElementById("posts").innerHTML= "carregando...."

            let req =await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await req.json()
            montarBlog(json)


  /*   fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){
        return resultado.json()
    })
    .then(function(json){
        return montarBlog(json)
    })
        .catch(function(error){
            console.log('algo não esta certo...')
        }) */
}
function montarBlog(lista){
    let html = ''

    for( let i in lista){
            html += '<h2>'+ lista[i].title+'</h2>'
            html += lista[i].body + '<br/>'
            html += '<hr>'
    }
    document.getElementById('posts').innerHTML= html
}
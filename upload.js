 async  function enviar(){
     let arquivo = document.getElementById("arquivo").files[0]

     let body = new FormData()
     body.append('titulo', 'bla bla bla')
     body.append('arquivo',arquivo)

     let req = await fetch('http://127.0.0.1:5500/imagens',{
         method:'POST',
         body: body,
         headers:{
             'Content-type':'multipart/form-data'
         }
     })
    // console.log(arquivo)

}
function enviar(){

    //thumbnails com filereader

   /*  let imagem = document.getElementById('tumbs').files[0]
    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.width = 200

    document.getElementById('mostra').appendChild(img) */

     //thumbnails com filereader
    let reader = new FileReader()
    let imagem = document.getElementById('tumbs').files[0]

    reader.onloadend= function(){
        let img = document.createElement('img')
       img.src= reader.result
       img.width=200
       document.getElementById('mostra').appendChild(img)
    }

    reader.readAsDataURL(imagem)

}


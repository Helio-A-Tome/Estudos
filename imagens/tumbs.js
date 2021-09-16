function enviar(){
    let imagem = document.getElementById('tumbs').files[0]
    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.width = 200

    document.getElementById('mostra').appendChild(img)

}
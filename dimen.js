//pega dimensao do scrool=> window.scrollY ou window.scrowX
//window.alert('ola')
//se for em um documento especifico=>scrollleft ou scrollTop=> lembrando de usar document.querySelector() ou outro
function subirTela(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'


    })
    
}//função para a tela subir

function escondebotao(){
   if (window.scrollY === 0 ){
       //oculta botao
       document.querySelector('.scrollbutton').style.display='none'

   } else {
       //mostra botao
       document.querySelector('.scrollbutton').style.display='block'
   }
}/*setInterval(escondebotao,1000)*/
window.addEventListener('scroll',escondebotao)

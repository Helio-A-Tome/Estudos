/* var hora = new Date()

horas = hora.getHours()

if (horas < 12) {
    alert('bom dia')


} else if (horas >= 12 && horas < 18) {
    alert('boa tardE')
} else {
    alert('boa noite')

} */
//var nome = document.getElementById('exempl').innerHTML="Hélio Tomé APRENDENDO JAVASCRIPT "
//var nome = 'Helio'
//document.write(nome)
//var colorir = document.getElementsByClassName('cor')
/*
function amarelo(){
    document.querySelector('#exempl').classList.remove('azul')
    document.querySelector('#exempl').classList.remove('verde')
 window.document.querySelector('#exempl').classList.add('amarelo');

}
function verde(){
    document.querySelector('#exempl').classList.remove('azul')
    document.querySelector('#exempl').classList.remove('amarelo')
    document.querySelector('#exempl').classList.add('verde');

}
function azul(){
    document.querySelector('#exempl').classList.remove('amarelo')
    document.querySelector('#exempl').classList.remove('verde')
    document.querySelector('#exempl').classList.add('azul') ;
}
*/
function trocar(){
    
    if(document.querySelector('button').classList.contains('preto')){
        document.querySelector('button').classList.remove('preto')
        document.querySelector('button').classList.add('vermelho')
        document.getElementById('exempl').classList.add('verde')
        document.getElementById('exempl').classList.remove('amarelo')
    }else {
document.querySelector('button').classList.remove('vermelho')
document.querySelector('button').classList.add('preto')
document.getElementById('exempl').classList.add('amarelo')
document.getElementById('exempl').classList.remove('verde')
    }
}
function trocarTitulo(titulo){
    document.getElementById('titulo').innerHTML = titulo //"trocou os titulos"
    document.getElementById('campo').value = titulo //"trocou o campo"

}
//trocarTitulo("Titulo de Exemplo");
function somar(x,y){
let total = x + y
//document.getElementById('campo').value = total
return total
}
var resultado = somar(6,8)
console.log(resultado)
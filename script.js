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
function amarelo(){
 window.document.querySelector('#exempl').classList.add('amarelo');

}
function verde(){
    document.querySelector('#exempl').classList.add('verde');

}
function azul(){
    document.querySelector('#exempl').classList.add('azul') ;
}
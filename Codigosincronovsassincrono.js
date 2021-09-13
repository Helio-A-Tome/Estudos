/* let nome ='Helio'
let sobrenome = 'Tome'
let nomeCompleto = 'Helio Tome' */
//CODIGO SÍNCRONO
//****************************************CODIGO ASSINCRONO******************************************** */
/* let nome ='Helio'
let sobrenome ='Tome'
let temperatura = maquininha.pegarTemperatura()//assincrono
let nomeCompleto=nome+''+sobrenome */
/*********************************CallBack************************************* */
function alertar(){
 console.log('opa, tudo bem?')
}
let nome = "Helio"
setTimeout(alertar,2000)
let sobrenome = "Tome"
console.log("nome completo : " + nome + ' '+ sobrenome)
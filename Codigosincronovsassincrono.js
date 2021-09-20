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
/* function alertar(){
 console.log('opa, tudo bem?')
}
let nome = "Helio"
setTimeout(alertar,2000)
let sobrenome = "Tome"
console.log("nome completo : " + nome + ' '+ sobrenome) */
/**********************************Promisses*************************************************** */
function pegarTemperatura(){
    return new Promise(function(resolve,reject){
        console.log('pegando temperatura...')
        setTimeout(function(){
            resolve('40 na sombra')
        },2000)
    })
    
}
console.log('codigo antes')
let temp = pegarTemperatura()
console.log('codigo durante')
temp.then(function(resultado){
    console.log('temperatura : '+ resultado)
})
temp.catch(function(error){
    console.log('deu erro' + error)
})
console.log('codigo depois')
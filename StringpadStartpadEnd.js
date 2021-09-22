//padend
//let telefone = '50988888888888'
//let telefone = '98'
//console.log(telefone.padStart(9,'*'))
let cartao ='1234123412341234'
let ultimosDigitos = cartao.slice(-4)
let cartaoMascarado = ultimosDigitos.padStart(16,'*')
console.log('esse é o seu cartão? '+ cartaoMascarado)
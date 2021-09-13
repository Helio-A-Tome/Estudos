/* function addNumeros(...numeros){
   console.log(numeros)
}
addNumeros(5,6,3,1,7,8,9,0,89,12,'tom', "helio") */
function adicionar(nomes,...novosNomes){
    let novoConjunto =[
        ...nomes,
        ...novosNomes
    ]
return novoConjunto
}
let nomes = ['Helio','Matheus']
let outros = adicionar(nomes,'Antonio','Maria','Katia')

console.log(outros)
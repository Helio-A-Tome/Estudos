/*let carros = [
    'Palio',
'Corola',
'Uno',
'Ferrari',
function(){
    console.log('testando 1, 2, 3...')
}]
console.log(carros[4]())
*/
/*
let ingredientes = [
    ['uva','pera','laranja','goiaba'],
    ['arroz','feijao','cebola','alho']
]
console.log(ingredientes[0][3])
*/
/*----------------------------------------------aula 1/4------------------------------------------*/
//let bolo =['ovos','farinha','leite','fermento','baunilha','açucar']
//let ferramentas =['forno','batedeira','colheres', 'bico de confeiteiro']
//bolo.pop()//remove o ultimo item do array
//let res = bolo.toString()//transforma o array em toString
//let res = bolo.join('-')//separa os itens pelo que eu pedir
//let res = bolo.indexOf('farinha')//retorna a posição do item 
//bolo.shift()//remove o primeiro item do array
//bolo.push('chantilly')//adiciona item ao array
//bolo[0] = 'ovos'// alterar o item pelo indice dele
//let res = bolo
//console.log(res)
/*---------------------------------------------- fim aula 1/4------------------------------------------*/
/*----------------------------------------------aula 2/4------------------------------------------*/
//bolo.splice(2,1)//remove um item do array, recebe dois parametros , o indice e a qtdade de itens
// concatenar 2 arrays let res = bolo.concat(ferramentas)
//bolo.sort()//ordena o array  alfabeticamente
//bolo.reverse()//inverte a ordem dos itens
//let res = bolo
/*---------------------------------------------- fim aula 2/4------------------------------------------*/
/*----------------------------------------------aula 3/4------------------------------------------*/
//let lista =[45,6,8,16,26,35,70]
//let lista2 =[]
//lista2 = lista.map(function(item){//metodo certo para mapear e gerar um novo array
//return item * 2
//})
/*
for (let i in lista){
    lista2.push(lista[i]*2)
}
*/
/*
lista2 = lista.filter(function(item){
    if( item < 20){
        return true
    }else{
        return false
    }
})//essa função filtra os parametros que eu precisar, no caso aqui pedi os numeros menores que 20
*/
/*
lista2 = lista.every(function(item){
    if(item < 20){
        return true
    }else{
        return false
    }
})// o every busca todas as condiçoes, se todas forem satisfeitas ,retorna true
*/
/*
lista2=lista.some(function(item){
    if(item > 60){
        return true
    }else{
        return false
    }
})// a função some retorna tru se ao menos um item do array satizfazer a condição desejada
*/
//simplificando as funções
/*
lista2=lista.every(function(item){
    return(item > 40)? true : false// com esse metodo simplifica a função
})
*/
/*---------------------------------------------- fim aula 3/4------------------------------------------*/
/*----------------------------------------------aula 3/4------------------------------------------*/
//let res =lista2
let lista =[
    {id:1,nome:'Helio',sobrenome:'Tome'},
    {id:2,nome:'katia',sobrenome:'Trindade'},
    {id:3,nome:'Matheus',sobrenome:'Costa'}
]
//lista2=[]
let pessoa = lista.find(function(item){

    return (item.id == 1)? true:false

})

// lista2=lista.find(function(item){
//     if(item ==  170){
//         return true
//     }else{
//         return false
//     }
// })
/* lista2=lista.findIndex(function(item){
    if(item ==  70){
        return true
    }else{
        return false
    }
}) */
let res= pessoa
console.log(res)
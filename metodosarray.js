let lista =[45, 4, 9, 16, 25]// ['ovo','farinha','açucar','leite']
lista2 =[]
//let lista2 =['prato','liquidificador', 'forno','batedeira']
//lista [0] ='ovos' // altera o nome do item do array
//lista[4]='fermento'//adiciona itens ao array
/*
 a função map permite modificar os valores no array 
lista2 =lista.map(function(item){
    return item *2
})
*/
/*
for(let i in lista){
    lista2.push(lista[i]*2)
}
*/
//let res = lista.toString()// tranforma o array em string
//let res = lista.join('-')//desfaz o array e separa os itens por algum caractere 
//let res = lista.indexOf('farinha')//indica em qual posição esta o item no array
//lista.pop() //retira oo ultimo item do array//shift()remove o primeiro item do array
 //lista.splice(1, 1)//metodo para apagar item do array, recebe 2 parametros, o index e a qtdade de itens
//res = lista.concat(lista2)// concatena  dois arrays em um so
  //lista.sort()//ordena o array
//res = lista.reverse()reverte a ordem do array
//let res = lista.push('suco de laranja')//adiciona mais um item ao array
//console.log(lista)
/* a função filter ajuda a filtar componentes do array
lista2 = lista.filter(function(item){
    if(item < 20){
        return true
    }else{
        return false
    }

})
*/
//retorna se a condição é falsa ou verdadeira o every analisa todas
/*
lista2 = lista.every(function(item){
    if(item > 20){
        return true
    }else{
        return false
    }
})
*/
//retorna se a condição é falsa ou verdadeira o some analisa alguns
/*
lista2 = lista.some(function(item){
    if(item > 80){
        return true
    }else{
        return false
    }
})
//dentro da função sem o if => return(item >80) ?tru:false
//como não tem nenhum item do array  > 80, a função vai me retornar false

lista2 = lista.some(function(item){
    return (item < 10)? true:false
})
*/
res = lista2
console.log(res)
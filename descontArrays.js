/* let info = ['Helio Tome', 'Tome','Helio','@heliotome']
//let [nomeCompleto, sobrenome, nome, instagram]= info
//let [ nomeCompleto, , ,instagram] = info
//console.log(nomeCompleto, sobrenome, nome, instagram)
let [,,nome,instagram] =info
console.log(nome,instagram) */
/* let [nome, sobrenome] = ['helio','Tome'] 
console.log(nome,sobrenome) */
function criar(){
    return [1,2,3]
}
let numero = criar()
let [a, b ,c] = numero
console.log(a,b,c)
/*-------------------------------------parte 1-------------------*/
let pessoa = {
    nome: 'Helio',
    sobrenome:'Tome',
   // idade: 52,
   // peso:95.5,
   // altura: 1.76,
    social:{
        facebook:'htom',
        instagram:{
            url:'@htom',
            seguidores:1000
        }
    },
    /* nomeCompleto:function(){
        return ` ${this.nome}  ${this.sobrenome} `
    } */
    
}
/* function pegaNome(obj){
        
    return obj.nome + ' '+ obj.sobrenome
} */
function pegarNome({nome,sobrenome,social:{instagram:{url:instagram}}}){
return `${nome}  ${sobrenome} (siga em ${instagram})`
}
console.log(pegarNome(pessoa))
/* let nome = pessoa.nome
let sobrenome = pessoa.sobrenome
let idade = pessoa.idade
let social = pessoa.social.facebook */
//let {nome:pessoaNome,sobrenome,idade} = pessoa//objeto desconstruido e transformado em variavel
//let {nome,sobrenome,idade,pessoa} = pessoa
//console.log(nome,sobrenome,idade = 18)//valor padrao para idade
//console.log(pessoaNome,sobrenome,idade)
/*-------------------------------------fim parte 1-------------------*/
/*-------------------------------------parte 2-------------------*/
//let {facebook, instagram} = pessoa.social
//console.log(pessoa.social)
//let {nome,sobrenome,idade = 52, social:{facebook},nomeCompleto}= pessoa
//let {nome, sobrenome, social:{instagram:{url:instagram, seguidores}}} =pessoa
//let {nome , sobrenome, social:{instagram}} = pessoa
//console.log(nome,sobrenome,instagram)
/*------------------------------------- fim parte 2-------------------*/
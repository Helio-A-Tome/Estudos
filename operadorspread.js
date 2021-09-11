/* let numeros=[1,2,3,4,5]
let outros=[...numeros,6,7,8,9]
console.log(outros) */
/* let info ={
    nome:'Helio',
    sobrenome:'Tome',
    idade:  52
}
let infoNova={
    ...info,
        cidade: 'Santo Andre',
        profissao:'TI'
}
console.log(infoNova) */
let hoje = new Date()
function adicionarInfo(info){
    let novaInfo={
        ...info,
        status:0,
        token:'6rwd6c6dvf8fcc8xc',
        dataCadastro:hoje.getHours() + ':' + hoje.getMinutes()


    }
    return novaInfo
}
console.log(adicionarInfo({nome:'Helio',sobrenome:'Tome',social:'@heliotome'}))
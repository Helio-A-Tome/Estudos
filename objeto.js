let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligar: function(){
        console.log('vrum, vrum')
    },
    acelerar:function(){
        console.log('hihihihhihihi!')
    }
}
console.log(carro['nome'])//esta em desuso
console.log(carro.nome)//mais usada no momento
console.log(carro.ligar())
console.log(carro.acelerar())
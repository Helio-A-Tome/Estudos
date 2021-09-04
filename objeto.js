let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    desligado:false,
    desligar:function(){
       // this.desligado = true
       if(this.ligado == false){
            console.log(" o " + this.modelo + " esta desligado")
        }
    },
    ligar: function(){ 
        this.ligado=true
        console.log("ligando o " + this.modelo)
        console.log('vrum, vrum')
    },
    acelerar:function(){
       if(this.ligado == true){
        console.log('hihihihhihihi!')
       }
       else{
           console.log(this.modelo + " não esta ligado")
       }
    }
}

function partida(){
    carro.ligar()
}
function parar(){
    
    carro.desligar()
}
console.log(carro['nome'])//esta em desuso
console.log(carro.nome)//mais usada no momento
//console.log(carro.ligar())
console.log(carro.acelerar())

//carro.ligar()
carro.acelerar()

//array de objetos
/*
let veiculos=[
    {nome:"FIAT" , modelo:"UNO"},
    {nome:"VV" , modelo:"Fusca"},
    {nome:"FIAT" , modelo:"Palio"},
    {nome:"FIAT" , modelo:"UNO"},
    {nome:"VV" , modelo:"Kombi"},
    {nome:"FIAT" , modelo:"UNO Mille"}

]*/
/*
console.log(veiculos[3,3])
console.log(veiculos.modelo)
    */


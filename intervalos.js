/*
let timer

function continuar(){
timer = setInterval(showTime,1000)
}
function parar(){
clearInterval(timer)
}

function showTime(){

    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h + ':'+ m + ':'+ s

    document.querySelector('.demo').innerHTML = txt
}
*/
function continuar(){
    setTimeout(function (){
        alert('rodou!')
    },2000)
}

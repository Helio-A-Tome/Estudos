let d = new Date()//(2021,8,9 ,12,46)
//let mostra = document.getElementById('data-hora').innerHTML= 'essas são as horas: '+d.getFullYear()//ano
//d.setMonth(8)
//d.setDate(d.getDate() +90)
d.setHours(d.getHours() + 24)
let mostra = document.getElementById('data-hora').innerHTML= 'essas são as horas: '+ d
console.log(d)
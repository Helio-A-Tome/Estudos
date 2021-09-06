//existe 2 tipos de for => for loop e for array
/*
let texto  = ''
for(i  = 0;i< 20;i++){
    texto=texto +i +`<br/>`
}
document.getElementById(`demo`).innerHTML=texto
*/
let carros= ['Ferrari','Fusca','palio','corsa','Fox']

let html ='<ul>'

for(let i in carros){

    html +='<li>'+ carros[i]+ '<li>'
}

html += '</ul>'
document.getElementById("demo").innerHTML=html
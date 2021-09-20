//estrutura
let dia = 6
let diaNome =''
/*
switch(dia){
    case 1:
    diaNome = 'domingo'
    break
    case 2:
        diaNome ='segunda feira'
        break
        case 3:
            diaNome = 'terça feira'
            break
        case 4:
            diaNome  = 'quarta feira'
            break
    case 5:
        diaNome = 'quinta feira'
        break
    case 6:
        diaNome = 'sexta feira'
        break
    case 7:
        diaNome = 'sabado'
        break 

        
}

switch(dia){
    case 7:
        diaNome = 'final de semana'
        break
    case 1:
        diaNome = 'final de semana'
        break
        default:
            diaNome = 'dia de semana'    
            break

} outr variação abaixo
*/
switch(dia){
    case 7:
    case 1:
        diaNome = 'final de Semana'
        break
        default:
            diaNome= 'dia de semana'
            break
}
document.getElementById("dia").innerHTML= diaNome

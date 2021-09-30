let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-direito')
let numeros = document.querySelector('.d-1-3')

    //Controle das áreas da tela aula 4

//variaveis de etapas
let etapaAtual = 0
let numero = ''
let votoBranco= false


function comecarEtapa() {
    
    let etapa = etapas[etapaAtual]
    let votoBranco = false
    let numeroHtml = ''
    let numero = ''
   


    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>'

        } else {
            numeroHtml += '<div class="numero"></div>'
        }

    }
   

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml

}
//Procurando candidato + voto nulo
function atualizaInterface() {
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true
        } else {
            return false
        }

    })
    if (candidato.length > 0) {
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}</br>Partido: ${candidato.partido}`

        let fotosHtml = ''

        for (let i in candidato.fotos) {

            fotosHtml += `<div class="d-1-imagem "> <img class="cand" src="images/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>`

        }

        lateral.innerHTML = fotosHtml

    } else {
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="avisoGrande pisca">VOTO NULO</div>'
    }
    //Procurando candidato + voto nulo


}
//Preenchendo Interface com números
function clicou(n) {

    let elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null) {
        elNumero.innerHTML = n
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if (elNumero.nextElementSibling != null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }

    }
}

function branco() {
    /* if(votoBranco === ''){
        votoBranco = true

        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        numeros.innerHTML=''
        descricao.innerHTML = '<div class="avisoGrande pisca">VOTO EM BRANCO</div>'

    
    } */
    if(votoBranco === ''){
        votoBranco = true

        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        numeros.innerHTML=''
        descricao.innerHTML = '<div class="avisoGrande pisca">VOTO EM BRANCO</div>'

    }else{
        alert('error')
    }
}


function corrige() {
    comecarEtapa()
    document.location.reload()
}

function confirma() {

}
//Preenchendo Interface com números E teclas branco/confirma/corrige
comecarEtapa()
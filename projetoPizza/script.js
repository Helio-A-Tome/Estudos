//declaraçoes de variaveis
let cart =[]
let modalQt=1
let modalKey = 0
//substituir querySelector por uma letra
const c = (el)=>{
    return document.querySelector(el)
}
const cs =(el)=>document.querySelectorAll(el)

pizzaJson.map((item,index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)

    //preencher as informações de pizza-item

    pizzaItem.setAttribute('data-key',index) 
    pizzaItem.querySelector('.pizza-item--img img').src= item .img
    pizzaItem.querySelector('.pizza-item--price').innerHTML= `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML =item.description
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
            e.preventDefault()

            let key = e.target.closest('.pizza-item').getAttribute('data-key')
            modalQt=1
            modalKey = key

            //console.log(pizzaJson[key])
            c('.pizzaBig img').src = pizzaJson[key].img
            c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`

                    //desselecionar o item

                c('.pizzaInfo--size.selected').classList.remove('selected')
               
            //implementando tamanhos das pizzas

            cs('.pizzaInfo--size').forEach((size,sizeIndex)=>{

                if(sizeIndex == 2){
                    
                    size.classList.add('selected')
                }

                size.querySelector('span').innerHTML =pizzaJson[key].sizes[sizeIndex]
              
            })
            //até aqui implementação de tamanho das pizzas
            c('.pizzaInfo--qt').innerHTML=modalQt


            c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
            c('.pizzaInfo--desc').innerHTML= pizzaJson[key].description
            c('.pizzaWindowArea').style.opacity= 0
            c('.pizzaWindowArea').style.display= 'flex'

            setTimeout(()=>{
                c('.pizzaWindowArea').style.opacity = 1

            },200)
           
    })
   
   c('.pizza-area').append(pizzaItem)
  
})
   //eventos do modal
   function fechaModal(){
       c('.pizzaWindowArea').style.opacity = 0
       setTimeout(() => {
           c('.pizzaWindowArea').style.display = 'none'
       },500 );
   }
   //ação do botao cancelar
   cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
     item.addEventListener('click', fechaModal)
   })
//açoes de botao +
   c('.pizzaInfo--qtmais').addEventListener('click',()=>{
       modalQt++
       c('.pizzaInfo--qt').innerHTML=modalQt

   })
   //açoes de botao-
   c('.pizzaInfo--qtmenos').addEventListener('click',()=>{
       if(modalQt > 1){
           modalQt--
           c('.pizzaInfo--qt').innerHTML= modalQt
       }
   })
//seleção de tamanhos
cs('.pizzaInfo--size').forEach((size,sizeIndex)=>{

   size.addEventListener('click',(e)=>{
       c('.pizzaInfo--size.selected').classList.remove('selected')
       size.classList.add('selected')
   })
})
  //adicionar ações ao carrinho de compras
  c('.pizzaInfo--addButton').addEventListener('click',()=>{
    /* //qual é a pizza
    console.log('pizza'+ modalKey)
    //qual o tamanho da pizza */
    let tam =parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'))

    console.log("tamanho: "+ tam)

    let identificador = pizzaJson[modalKey].id+'@'+ tam
   /*  let key = cart.findIndex((item)=>{
        return item.identificador == identificador
    }) */
    //ou
    let key = cart.findIndex((item)=> item.identificador == identificador )

    if(key > -1){

    }else{
      cart.push({
          identificador,
          id:pizzaJson[modalKey].id,
          tam,
          qt:modalQt

      })
      atualizarCarrinho()
      fechaModal()
      
    }


   /*  console.log(tam)
    //quantas pizzas
    console.log(modalQt) */

})
//adicionar evento ao carrinho mobile
c('.menu-openner').addEventListener('click',()=>{
    if(cart.length > 0){
        c('aside').style.left= '0'
    }

})

//adicionar evento ao carrinho mobile
c('.menu-closer').addEventListener('click',()=>{//fechar menu lateral  mobile
c('aside').style.left='100vw'
})
//carrinho de compras 
function atualizarCarrinho(){
    c('.menu-openner span').innerHTML= cart.length // adicionando itens ao carrinho mobile
    if(cart.length > 0){//caso eu tenha itens no carrinho, eu vou mostrar os itens
        c('aside').classList.add('show')
        c('.cart').innerHTML = ''

        let subtotal = 0
        let desconto = 0
        let total = 0

        for( let i in cart){
            
            let pizzaItem =  pizzaJson.find((item)=> item.id == cart[i].id)

            //calculando Subtotal aula 13
            subtotal += pizzaItem.price * cart[i].qt
            

           let cartItem = c('.models .cart--item').cloneNode(true)
           let pizzaSizeName
           switch(cart[i].tam){// tam é o nome da variavel que define o tamanho das pizzas
               case 0:
                   pizzaSizeName = 'P'
                   break
                   case 1:
                       pizzaSizeName = 'M'
                       break
                       case 2:
                           pizzaSizeName = 'G'
                           break

           }
            let pizzaName = `${pizzaItem.name}(${pizzaSizeName})`
           


            c('.cart').append(cartItem)
            cartItem.querySelector('img').src =pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML= pizzaName
            cartItem.querySelector('.cart--item--qt').innerHTML= cart[i].qt

            //adicionando açoes dos botoes do carrinho, aula 13
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
                if(cart[i].qt > 1){
                    cart[i].qt--

                    atualizarCarrinho()
                }else{
                    cart.splice(i, 1)
                }
                atualizarCarrinho()//vai fechar o carrinho qdo eu tirar todos os itens
                   
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{
                cart[i].qt++
                atualizarCarrinho()

            })

             /* let pizzaItem =pizzaJson.find((item)=>{
                return item.id ==cart[i].id
              
            }) */
           
        }
        //calculando desconto ======aula 13

        desconto = subtotal  * 0.1
        total = subtotal - desconto

        //exibindo os valores na tela aula 13
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        c('.total span:last-child').innerHTML= `R$ ${total.toFixed(2)}`

    }else{//caso contario eu removo o carrinho
        c('aside').classList.remove('show')
        c('aside').style.left="100vw"
    }
   

   

}
 //carrinho de compras



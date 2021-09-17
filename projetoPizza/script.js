/* function adicionarPizza(){
    let pizzaItem = document.querySelector('.models ,pizza-item').cloneNode(true)
    //preencher as informações de pizza-item
    document.querySelector('.pizza-area').append(pizzaItem)
} */
//substituir querySelector por uma letra
const c = (el)=>{
    return document.querySelector(el)
}
const cs =(el)=>document.querySelectorAll(el)

pizzaJson.map((item,index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    //preencher as informações de pizza-item
    pizzaItem.querySelector('.pizza-item--img img').src= item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML= `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML =item.description
   
   c('.pizza-area').append(pizzaItem)
  
})
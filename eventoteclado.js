function digitou(e){
    if(e.keyCode== 13 && e.ctrlKey ==true){//enter
        let texto = document.querySelector('#campo').value
        console.log(texto)
    }

}
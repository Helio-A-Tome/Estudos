function menuToogle(){

    /*
    //metodo ainda não ensinado
    let menuArea = document.getElementById("menu-area")//.classList.add('menu-opened')

    if(menuArea.classList.contains('menu-opened')== true){
        menuArea.classList.remove('menu-opened')
    }else{
        menuArea.classList.add('menu-opened')
    }
    */
   let menuArea = document.getElementById("menu-area")

   if(menuArea.style.width == '200px'){

        menuArea.style.width = '0px'
   }else{
       menuArea.style.width = '200px'
   }
    
}
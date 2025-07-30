const pantalla = document.querySelector ("#imagen")  //para capturar imagen 
const btn1 = document.querySelector ("#boton-1")  //para capturar boton 1
const btn2 = document.querySelector ("#boton-2")  //para capturar boton 2
const btn3 = document.querySelector ("#boton-3")  //para capturar boton 3

//2. Funciones
function blancoynegro (){
    console.log("imagen modificada")
    pantalla.style.filter = "grayscale(100%)"

 /*    btn1.style.background = "blueviolet"
    btn1.style.color = "white"
    btn1.style.height = "200px"
    btn1.style.bordeRadius = "50%"  */
}
//3. Eventos
function desenfocar (){
    console.log("imagen desenfocada")
    pantalla.style.filter = "blur(5px)"

}


//4. Eventos
btn1.addEventListener("click", blancoynegro )
btn2.addEventListener("click", desenfocar)



//4. Eventos
function zoomyrotar (){
    console.log("zoom y rotar")
        pantalla.style.transform = "scale(1.5) rotate(45deg)"

    
}


//4. Eventos
btn3.addEventListener("click", zoomyrotar)
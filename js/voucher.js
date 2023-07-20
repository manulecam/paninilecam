// ***********************************************************************************************************
// ***********************************    Función cambiarMensaje()    ****************************************
// * Proposito: Si sale Messi, imprime mensaje de `GANASTE`, si no, el de `PERDISTE`                        //
// * Parametros: - sourceFigurita: ruta de la imagen de la figurita                                         //
//               - codigo: codigo de descuento                                                              //
function cambiarMensaje(sourceFigurita, codigoDescuento) {                                                  //
    if (sourceFigurita == "../images/figu1.jpg") {                                                          //
        document.querySelector('h1').textContent = "¡FELICIDADES, GANASTE!";                                //
        document.querySelector('h2').textContent = `Tu código de descuento es: ${codigoDescuento} `;        //
    }                                                                                                       //
    else {                                                                                                  //
        document.querySelector('h1').textContent = "¡MALA SUERTE, PERDISTE!";                               //
        document.querySelector('h2').textContent = "Esta vez no salió Messi, intentalo nuevamente...";      //
    }                                                                                                       //
}                                                                                                           //
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************   Función cambiarFigurita()    ****************************************
// * Proposito: cambiar (la ruta de) las imagenes de las figuritas y el mensaje en pantalla                 //
// * Parametros: - figuritaAleatoria: numero aleatorio que nos permitirá cambiar la ruta de la imagenes     //
//               - codigo                                                                          //
function cambiarFigurita(figuritaAleatoria, codigoDescuento) {                                              //
    let fuente1 = `../images/figu${figuritaAleatoria}.jpg`;                                                 //
    document.querySelector('.img1').setAttribute('src', fuente1);                                           //
    cambiarMensaje(fuente1, codigoDescuento);                                                               //
}                                                                                                           //
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************          Función main()        ****************************************
function main() {                                                                                           //
    let numeroAleatorio = Math.floor(Math.random() * 18) + 1;                                               //
    let codigo = "SWY7-HTUN-3YF5-CD4D-W3AF";                                                                //
    cambiarFigurita(numeroAleatorio, codigo);                                                               //
}                                                                                                           //
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************        Programa principal      ****************************************
main();                                                                                                     //
// ***********************************************************************************************************
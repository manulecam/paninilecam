// ***********************************************************************************************************
// *********************************      CONSTRUCTOR DE ARTICULOS     ***************************************
// ***********************************************************************************************************

function articulo(codigo, nombre, precio, tipo, cantidad) {
    this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio,
        this.tipo = tipo,
        this.cantidad = cantidad
}

const articulo0 = new articulo(000, "SOBRE DE FIGURITAS X10", 2000, "FIGURITAS", 1);
const articulo1 = new articulo(001, "SOBRE DE FIGURITAS X25", 3750, "FIGURITAS", 1);
const articulo2 = new articulo(002, "ALBUM FIFA WORLD CUP QATAR 2022", 750, "ALBUM", 1);
const articulo3 = new articulo(003, "ALBUM TAPA DURA FIFA WORLD CUP QATAR 2022", 3000, "ALBUM", 1);
const articulo4 = new articulo(004, "ALBUM DE ORO FIFA WORLD CUP QATAR 2022", 7500, "ALBUM", 1);
const articulo5 = new articulo(005, "PROMO ALBUM + X50 SOBRES DE FIGURITAS", 8250, "COMBO", 1);
const articulo6 = new articulo(006, "PROMO ALBUM + X100 SOBRES DE FIGURITAS", 14250, "COMBO", 1);
const articulo7 = new articulo(007, "PROMO ALBUM TAPA DURA + X100 SOBRES DE FIGURITAS", 17250, "COMBO", 1);
const ARTICULOS = [articulo0, articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7];
const CARRITO = [];

// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************       PROGRAMA PRINCIPAL      *****************************************
// ***********************************************************************************************************

let opcionPrincipal = parseInt(prompt("# Bienvenido al menú de compras Panini #\n Elija una opcion para continuar:\n 1. Lista de artículos\n2. Mi carrito\n\n0. Salir"));
menuPrincipal(opcionPrincipal);

// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************          PRIMER NIVEL         *****************************************
// ***********************************************************************************************************

// ***********************************    FUNCION menuPrincipal()    *****************************************
// # Propósito: Llamar al menu principal del programa.
// # Parametros: opcionPrincipal = numero de opcion que elige el usuario.

function menuPrincipal(opcionPrincipal) {
    while (opcionPrincipal != 0) {
        switch (opcionPrincipal) {
            case 1:
                let opcionArticulos = parseInt(prompt("# Elija una opción:\n1. Figuritas\n2. Albumes\n3. Combos\n\n0. Volver"));
                menuArticulos(opcionArticulos);
                break;

            case 2:
                let opcionCarrito = parseInt(prompt("# Elija una opción:\n1. Ver mi carrito\n2. Eliminar articulos\n3. Finalizar compra\n\n0. Volver"));
                menuCarrito(opcionCarrito);
                break;

            default:
                alert("# Opcion inválida. Elija otra opción.");
                break;
        }
        opcionPrincipal = parseInt(prompt("Para continuar, elija una opcion:\n1. Lista de artículos\n2. Mi carrito\n\n0. Salir"));
    }
    alert("Gracias por utilizar nuestra tienda online.");
}

// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************         SEGUNDO NIVEL         *****************************************
// ***********************************************************************************************************

// ***********************************    FUNCION menuArticulos()    *****************************************
// # Propósito: llamar al menú de los artículos. Nos permitira ver los articulos por categoria.
// # Parametros: opcionArticulos = numero de opción elegida por el usuario 

function menuArticulos(opcionArticulos) {
    while (opcionArticulos != 0) {
        switch (opcionArticulos) {
            case 1:
                listarArticulos(ARTICULOS, CARRITO, opcionArticulos);
                break;

            case 2:
                listarArticulos(ARTICULOS, CARRITO, opcionArticulos);
                break;

            case 3:
                listarArticulos(ARTICULOS, CARRITO, opcionArticulos);
                break;

            default:
                alert("Opcion incorrecta");
        }
        opcionArticulos = parseInt(prompt("# Elija una opción:\n1. Figuritas\n2. Albumes\n3. Combos\n\n0. Volver"));
    }
}

// ***********************************************************************************************************



// ***********************************     FUNCION menuCarrito()     *****************************************
// # Propósito: llamar al menú del carrito. Nos permitira ver las distintas opciones de nuestro carrito
// # Parametros: opcionCarrito = numero de opcion elegida por el usuario.

function menuCarrito(opcionCarrito) {
    while (opcionCarrito != 0) {
        switch (opcionCarrito) {
            case 1:
                verCarrito(CARRITO);
                break;

            case 2:
                alert("# Eliminar articulos (en construccion...)");
                // eliminarArticulos();
                break;

            case 3:
                alert("# Finalizar compra (en construccion...)");
                // finalizarCompra();
                break;

            default:
                alert("Opcion incorrecta.");
        }
        opcionCarrito = parseInt(prompt("# Elija una opción:\n1. Ver mi carrito\n2. Eliminar articulos\n3. Finalizar compra\n\n0. Volver"));
    }
}

// ***********************************************************************************************************



// ***********************************************************************************************************
// ***********************************          TERCER NIVEL         *****************************************
// ***********************************************************************************************************

// ******************************    FUNCION listarArticulos(ARTICULOS)    ***********************************
// # Propósito: mostrar los articulos disponibles para comprar.
// # Parametros: ARTICULOS = contiene todos los articulos disponibles.
//               CARRITO = inicialmente vacio, pero cumplira la funcion de carrito de compras 
//                         para almacenar los articulos del usuario.
//               opcionArticulos = opcion elegida por el usuario (posibles: albumes, figuritas o combos).

function listarArticulos(ARTICULOS, CARRITO, opcionArticulos) {
    let deseaAgregar = 0;

    switch (opcionArticulos) {
        // FIGURITAS
        case 1:
            let opcionFiguritas = parseInt(prompt("1. SOBRE DE FIGURITAS X10 - [$2000]\n2. SOBRE DE FIGURITAS X25 - [$3750]\n\n0. Volver"));
            switch (opcionFiguritas) {
                case 1:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo0);
                        alert("Articulo agregado.");
                    }
                    break;

                case 2:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo1);
                        alert("Articulo agregado.");
                    }
                    break;

                case 0:
                    break;

                default:
                    alert("Opcion invalida.")
                    break;
            }
            break;

        // ALBUMES
        case 2:
            let opcionAlbumes = parseInt(prompt("1. ALBUM FIFA WORLD CUP QATAR 2022 - [$750]\n2. ALBUM TAPA DURA FIFA WORLD CUP QATAR 2022 - [$3000]\n3. ÁLBUM DE ORO [$7500]\n\n0. Volver"));
            switch (opcionAlbumes) {
                case 1:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo2);
                        alert("Articulo agregado.");
                    }
                    break;

                case 2:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo3);
                        alert("Articulo agregado.");
                    }
                    break;

                case 3:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo4);
                        alert("Articulo agregado.");
                    }
                    break;

                case 0:
                    break;

                default:
                    alert("Opcion invalida.")
                    break;
            }
            break;

        // COMBOS
        case 3:
            let opcionCombos = parseInt(prompt("1. ALBUM + X50 SOBRES DE FIGURITAS - [$8250]\n2. ALBUM + X100 SOBRES DE FIGURITAS - [$14250]\n3. ALBUM TAPA DURA + X100 SOBRES DE FIGURITAS [$17250]\n\n0. Volver"));
            switch (opcionCombos) {
                case 1:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo5);
                        alert("Articulo agregado.");
                    }
                    break;

                case 2:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo6);
                        alert("Articulo agregado.");
                    }
                    break;

                case 3:
                    deseaAgregar = parseInt(prompt("¿Desea agregar este articulo al carrito? 1=Si / 2=No"));
                    if (deseaAgregar == 1) {
                        CARRITO.push(articulo7);
                        alert("Articulo agregado.");
                    }
                    break;

                case 0:
                    break;

                default:
                    alert("Opcion invalida.")
                    break;
            }
            break;

    }

    return CARRITO;
}

// ***********************************************************************************************************



// ********************************         FUNCION verCarrito()         *************************************
// # Propósito: mostrar los articulos que contiene el carrito
// # Parametros: CARRITO = contiene los articulos agregados de la tienda
function verCarrito(CARRITO) {
    let mostrarArticulos = ""
    let contador = 0
    let precioDescuento = 0
    let precioTotal = 0

    for (let cadaArticulo of CARRITO) {
        console.log(cadaArticulo.nombre)
        contador += 1
        mostrarArticulos += `${contador}. ${cadaArticulo.nombre} - [$${cadaArticulo.precio}]\n`
        precioTotal += cadaArticulo.precio
    }

    precioDescuento = precioTotal - ((precioTotal * 15) / 100)
    alert(mostrarArticulos + `\n#  TOTAL = [$${precioTotal}]  #\n#  CON CODIGO DE DESCUENTO = [$${precioDescuento}]  #`)
}

// ***********************************************************************************************************

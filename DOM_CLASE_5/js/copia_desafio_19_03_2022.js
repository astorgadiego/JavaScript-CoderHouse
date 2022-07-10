cuotas.innerText="SELECCIONE EN CUANTAS CUOTAS DESEA PAGAR"


const cantCuotas = ()=> { 
    for (cant of cuota) {
        const liCuotas = document.createElement("li")
                liCuotas.className = "collection-item"
                liCuotas.innerText = cant
                liCuotas.setAttribute("onclick", `contarcuotas('${cant}')`)
                cuotas.append(liCuotas)
            }
}

const contarcuotas = (cant) => {
    totalCuotas.innerText="Las Cantidad de Cuotas en la que lo pagara será"
    totalCuotas.className="center"
    const cuotaseleccionada = document.createElement("li")
              cuotaseleccionada.className = "collection-item italica-carrito"
              cuotaseleccionada.innerText = cant
              //cuotaseleccionada.id = id //ID dinámico
              //cuotaseleccionada.setAttribute("ondblclick", `eliminarDelCarrito('${id}')`)
              totalCuotas.append(cuotaseleccionada)
}

/*const lista = document.createElement("h5")
              lista.className = "center collection-item italica-carrito"
              lista.innerText = "Su lista de compras es: "
              lista_de_compras.append(lista)

*/



const agregarAlCarrito = (prod)=> { 
    if (prod > "") {   
        const id = prod + "enCarrito" 
        const liCarrito = document.createElement("li")
              liCarrito.className = "collection-item italica-carrito"
              liCarrito.innerText = prod 
              liCarrito.id = id 
              liCarrito.setAttribute("ondblclick", `eliminarDelCarrito('${id}')`)
              listadoCarrito.append(liCarrito)
    }
            
            lista_de_compras.className = "center collection-item italica-carrito"
            lista_de_compras.innerText = "Su lista de compras es: "
}

const cargarProductos = ()=> { 
    for (fruta of productos) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = fruta
                liProductos.setAttribute("onclick", `agregarAlCarrito('${fruta}')`)
                ul.append(liProductos)
            }
}

cargarProductos();
cantCuotas();
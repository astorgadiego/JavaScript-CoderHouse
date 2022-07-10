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

function contarcuotas (cant) {
    totalCuotas.innerText="Las Cantidad de Cuotas en la que lo pagara será"
    totalCuotas.className="center collection-item italica-carrito"
    const cuotaseleccionada = document.createElement("li")
              cuotaseleccionada.className = "collection-item italica-carrito"
              cuotaseleccionada.innerText = cant+" cuotas"
              totalCuotas.append(cuotaseleccionada)
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




cargarProductos();
cantCuotas();
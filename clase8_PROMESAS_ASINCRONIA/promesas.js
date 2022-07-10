//PROMESAS
//LLAMADO
new Promise( (resolve, reject) => {
    //cuerpo de la promesa
})

//---------------------
const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }

    //RESOLVE() O REJECT()
    const eventoFuturo2 = (res) => {
        return new Promise( (resolve, reject) => {
            if (res === true) {
                resolve('Promesa resuelta')
            } else {
                reject('Promesa rechazada')
            }
        })
    }
    
    console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
    console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }
    
        //CON DELAY DEVULEVE EL ESTADO "PENDING"
        const eventoFuturo3 = (res) => {
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
                }, 2000)
            })
        }
        console.log( eventoFuturo(true) ) // Promise { <pending> }
        console.log( eventoFuturo(false) ) // Promise { <pending> }

//.THEN() O CATCH()
eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })

eventoFuturo(false)
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })

    //--PODEMOS CONCATENAR VARIOS THEN O CATCH Y CAEREMOS EN EL CASO QUE CORRESPONDA
    eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
        console.log(error)
    })

eventoFuturo(false)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })

//---------------------
        const prom1= new Promise()
        .then(x=>x+1)  //PRIMERO EJECUTO ESTE THEN
        .then(x=>y=x+2)  //LUEGO EJECUTA ESTE
        .then(y=>y=y*22)  //ESTE NO PORQUE EN ANTERIOR HABRA UN ERROR Y SALTA AL CATCH
        .catch(error=>console.error(error))  //
        .finally(x=>console.log("Esto se muestra si o si"))  //ESTO SE MUESTRA YA SEA QUE HAY UN ERROR O NO 

//En el siguiente ejemplo, tenemos un array de productos vacíos. Al cargar la aplicación queremos simular un delay para la actualización de estos datos y lo haremos llamando una promesa que retorna el array de productos real. Cuando captemos su resolución, en el .then() actualizamos nuestro array y llamamos una función para generar la vista del resultado 

            // función que tras 3 segundo retorna un array de objetos

                const BD = [
                    {id: 1, nombre: 'Producto 1', precio: 1500},
                    {id: 2, nombre: 'Producto 2', precio: 2500},
                    {id: 3, nombre: 'Producto 3', precio: 3500},
                    {id: 4, nombre: 'Producto 4', precio: 3500},
                ]

                const pedirProductos = () => {
                    return new Promise( (resolve, reject) => {
                        setTimeout(() => {
                            resolve(BD)
                        }, 3000)
                    })
                }
                // inicializamos con un array vacío
                    let productos = []

                    const renderProductos = (arr) => {
                        // función que genere la vista de los productos
                    }

                    // asincrónicamente pedimos los datos y generamos la vista
                    pedirProductos()
                        .then((res) => {
                            productos = res
                            renderProductos(productos)
                        })


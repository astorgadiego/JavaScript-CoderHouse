const obtenerDatos = () => {
    fetch(URL)
        .then((response) =>
            response.json()
              )
        .then((data) => {
                    arrayContactos = data
                    //console.table(arrayContactos)
                    cargoGrillaContactos(arrayContactos)
              })
        .catch((error) => {
                        console.error("Se ha producido un error inesperado", error)
                        arrayContactos = [{ id: "UPS!! :(", nombre: ":O", telefono: "D:", email: "XD" }]
              })

    cargoGrillaContactos(arrayContactos)
}
 
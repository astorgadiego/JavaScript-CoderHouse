//CARGAR LA TABLA CONTACTOS CON LOS DATOS DEL ARRAY JSON

/*ASI FUNCIONABA ORIGINALMENTE ANTES DE PASAR EL ARRAY DE OBJETOS A LA CARPETA .JSON
const cargoGrillaContactos = (arr)=> {
      let detalleTabla = ""
      if (arr.length > 0) {
         arr.forEach(contacto => {
             detalleTabla += `<tr>
                                 <td>${contacto.id}</td>
                                 <td>${contacto.nombre}</td>
                                 <td>${contacto.telefono}</td>
                                 <td>${contacto.email}</td>
                              </tr>`
          })
          tbody.innerHTML = detalleTabla
        }
}
*/

//document.addEventListener("DOMContentLoaded", cargoGrillaContactos(arrayContactos))

//ASI FUNCIONA AHORA CON EL ARRAY DE OBJETO EN LA CARPETA .JSON
const cargoGrillaContactos = (arr) => {
   let detalleTabla = ""
   //PUEDO SACAR ESTA VALIDACION PORQUE CUANDO LLAME LA FUNCION ES MUY PROBABLE QUE EL ARRAY NO ESTE VACIO if (arr.length > 0) {
   arr.forEach(contacto => {
      detalleTabla += `<tr>
                          <td>${contacto.id}</td>
                           <td>${contacto.nombre}</td>
                           <td>${contacto.telefono}</td>
                           <td>${contacto.email}</td>
                        </tr>`
   })
   tbody.innerHTML = detalleTabla
}

const obtenerDatos = () => {
   //HAY QUE TRANSFORMAR EL OBJETO QUE ESTA EN FORMATO JSON A JS PARA PODER MANIPULARLO, PARA ELLO EXISTE AJAX/FETCH
   //FETCH USA EL METOO DE PROMESAS. PIDE DATOS DE UN SERVIDOR (URL), EN ESTE EL "SERVIDOR (URL)" ES LOCAL 
   //EL PROGRAMA ESPERA A QUE LLEGUE LA INFORMACION SOLICITADA
   //ESTADOS POSIBLES: PENDING, FULFILLED, REJECTED
   /*1)PETICIONAR LA INFO
     2)VERIFICAR LA INFO
     3)CONVERTIRLA A UN FORMATO MANIPULABLE JS
     4)TRABJAR CON LA INFO
     */
   /*1)PRIMER PASO DE LA RECETA----->*/   fetch(URL)
      /*2)SEGUNDO PASO DE LA RECETA---->*/.then((response) => 
                                                      /*TIENE UN RETURN IMPLICITO*/response.json()
      )
        /*3)TERCER PASO DE LA RECETA--->*/.then((data) => {
                        /*TIENE UN RETURN IMPLICITO*/arrayContactos = data
                                                            //console.table(arrayContactos)
   cargoGrillaContactos(arrayContactos)
})
/*PARA MOMSTRAR ALGUN ERROR SE USA EL METDO CATCH*/
.catch((error)=>{
   console.error("Se ha producido un error inesperado",error)//SE INFORMA AL USUARIO QUE HAY UN ERROR DE DE FORMA CLARA
   arrayContactos=[{id:"UPS!! :(", nombre: ":O", telefono:"D:", email:"XD"}]
})
/*EL METODO FINALLY SE VA A EJECUTAR SEA COMO SEA, CON ERROR O SIN ERROR*/
   .finally(()=>{
   cargoGrillaContactos(arrayContactos)
})
}

document.addEventListener("DOMContentLoaded", obtenerDatos)
/* BONUS TRACK: MISMA VERSION, PERO ASINCRÓNICA
// const obtenerDatosAsync = async ()=> {
//   cargoGrillaContactos(arrayContactos)
      try{
            const respuesta = fetch(URL)
            const arrayContactos = await respuesta.json()
         }
         catch(error){}
         finally{} 
         document.addEventListener("DOMContentLoaded", obtenerDatos)
 */
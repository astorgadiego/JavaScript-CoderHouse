const producto = [{id:1, nombre:"arroz", precio:150},
                  {id:2, nombre:"fideo", precio:150},
                  {id:3, nombre:"pan", precio:150},
                  {id:4, nombre:"flan", precio:150}]  ;

for (const prod of producto){
    let contenedor = document.createElement("div");
    //DEFINIMOS EL INNER HTML DEL ELEMENTO CON UNA PLANTILLA DE TEXTO
    contenedor.innerHTML=`<h2>ID: ${producto.id}</h2>
                          <h2>Producto: ${producto.id}</h2>
                          <h2>$: ${producto.id}</h2>`;  
    document.body.appendChild(contenedor);
}

/*EVENTOS MAS COMUNES

RATON:  mousedown/mouseup: Se oprime/suelta el boton del mouse sobre el elemento
        mouseover/mouseout: El puntero del mouse se mueve sobre o sale del elemento
        mousemove; El movimiento del mouse sobre el elemento
        click: Se activa despues del mouse down o mouse up sobre un elemento valido.

TECLADO:  keydown:Se presiona una tecla
          keyup: Se suelta una tecla.
          change; En una casilla se detecta un cambio en su "valor/value". No se activa mientras uno escribe sino cuando termina de escribir y cambias a otroa casilla
          input: Aca si se deteca un cambio cada vez que se tipea.
          submit: Cuando el formulario es enviado.Se utiliza para confirmar el envio, o anularlo.
          */

//SUBMIT: A VECES NECITAMOS OBTENER INFO CONTEXTUAL DEL EVENTO PARA PODER REALIZAR ACCIONES
//PARA ESO EXISTE UNA VARIABLE QUE SE CREA AUTOMATICAMENTE LLAMADA "EVENTO" (e,ev,evento) QUE LA PODEMOS MANDAR O NO COMO PARAMETRO A LA FUNCION MANEJADORA


//HTML DE REFERENCIA
<form action="" id="fom¿rmulario">
<   input type="text">
    <input type="number ">
    <input type="submit" value="enviar">
    </form>
//CODIGO CSS
let miformulario= document.getElementById("formulario")
miformulario.addEventListener("submit", validarFormulario)
function validarFormulario(e){
    //CANCELAMOS EL COMPORTAMIENTO POR DEFAULT
    e.preventDefautl();
    //OBTENEMOS EL ELEMENTO DESDE EL CUAL SE LANZO EL OBJETO
    let formulario=e.target;
    //OBTENGO EL VALOR DEL PRIMER HIJO <input type="text">
    console.log(formulario.children[0].value);
        //OBTENGO EL VALOR DEL SEGUNDO HIJO <input type="NUMBER">
    console.log(formulario.childre[1].value);
}
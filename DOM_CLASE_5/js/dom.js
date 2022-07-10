//AGREGAR O QUITAR NODOS/EITQUETAS


    //CREO LA ETIQUETA, ETIQUETA LI
let parrafo = document.createElement("li");
    //INSERTO EL HTML INTERNO
parrafo.innerHTML="<h2>Hola mundo</h2>" //EL INNER HTML TRADUCE EL STRING EN CODIGO HTML

//AÑADIT EL ELEMENTO AL HTML CON APPEND() al body o a otra etiqueta del documento actual puede ser un ID

    ID.append(parrafo);
    body.append(parrafo);


//OBTENER DATOS DE INPUT
//OBTENER DATOS DE UN FORMULARIO HTML
        //CODIGO HTML
        <input id="nombre" type ="texto" ></input>
        <input id="edad" type="number"></input>

        //CODIGO JS
        document.getElementById("nombre").value="Homero"
        document.getElementById("edad").value=39

 let parraf =   document.createElement("p");
 parraf.innerHTML=" <h2>Hola Amigos </h2>";
 document.body.appendChild(parraf);       

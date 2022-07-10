//FUNCION CONSTRUCTORA (LA PRIMERA LETRA DE LAS CONSTRUCTORAS VA EN MAYUSCULAS )
function Persona (nombre, edad, calle){
    this.nombre= nombre;
    this.edad=edad;
    this.calle=calle;
    this.saludo=function(s){   //METODO PERSONALIZADO
        console.log("Hola mi saludo es ", s);
    } 
}

const persona1 = new Persona ("Diego", 23, "BELGRANO")

//persona1.saludo("Que tal!")  // QUE TAL ES EL VALOR QUE SE ENVIARA A LA VARIABLE "S" EN LA FUNCION


//IN Y FOR...IN 
console.log("nombre" in persona1)

function listaestrucutradeobj(){
    
    for ( propiedad in persona1)
    console.log(propiedad);
}

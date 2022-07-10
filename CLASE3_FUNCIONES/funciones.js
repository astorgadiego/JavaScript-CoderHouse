//SOLICITAR NOMBRE VARIAS VECES
//DEFINO LA FUNCION CON SUS INSTRUCCIONES
function solicitarNOMBRE() {
    let nombre = prompt("ingrese su nombre");
    alert("El nombre ingresado es "+ nombre);
}

//EN OTRA PARTE DEL CODIGO LLAMO A LA FUNCION LAS VECES QUE NECESITEMOS

//LLAMADO DE FUNCION
solicitarNOMBRE();

solicitarNOMBRE();

//FUNCION PARA SUMAR Y MOSTRAR
let  resultado = 0;
//FUNCION QUE SUMA DOS PARAMETROS
function sumar (numero1, numero2){
    resultado= numero1 + numero2;
}
//OTRA FUNCION QUE MUESTRA EL RESULTADO EN CONSOLA
function mostrar (mensaje){
    alert(mensaje);
    console.log(mensaje);
}
//LLAMAMOS PRIMERO A SUMAR Y DEPSUES A MOSTRAR
sumar(6,3);
mostrar(resultado);

// OPCION TRES: CALCULADORA CON TODOS LOS OPERADORES
function calculadora() {
    let primerNro = prompt("Ingrese el primer número:")
    let segundoNro = prompt("Ingrese el segundo número:")
    let operador = prompt("Tipo de operación a realizar: \n SUMA = + \n RESTA = - \n MULTIPLICACIÓN = * \n DIVISIÓN = /")
        if (!isNaN(primerNro) && !isNaN(segundoNro)) {
            let resultado = obtenerCalculo(primerNro, segundoNro, operador)
            console.log("El resultado del cálculo, es: ", resultado)
        } else {
            console.error("Error: ¡Ambos valores ingresados deben ser numéricos!")
        }
}

function obtenerCalculo(primerNro, segundoNro, operador) { 
    //debugger
    if (operador != null && operador != undefined && operador != "") {
        switch (operador) {
            case "+":
                return parseInt(primerNro) + parseInt(segundoNro)
            case "-":
                return parseInt(primerNro) - parseInt(segundoNro)
            case "*":
                return parseInt(primerNro) * parseInt(segundoNro)
            case "/":
                return parseInt(primerNro) / parseInt(segundoNro)
            // O, en lugar del if(), agregar aquí la opción default: (y eliminar el else())                
        }
    } else {
        return "¡Error!"
    }
}
let nombreUsuario = prompt("Ingrese su nombre de Usuario")

if (nombreUsuario==null){
    console.log("El usuario cancelo su identificacion")
        alert("El usuario cancelo su identificacion")
} 
else if (nombreUsuario != ""){
        console.log("Bienvenido "+nombreUsuario)    
    /*  console.log("Bienvenido",nombreUsuario)*/
        alert ("Bienvenido "+nombreUsuario )
    /* alert ("Bienvenido"+nombreUsuario )*/
}
else{
    console.warn("El usuario no se ha identificado")
    alert("El usuario no se ha identificado")
}

/*---VARIABLE BOOLEANAS----*/
let numero =prompt("Ingrese un numero");
let mayor5= (numero>=5);
if (mayor5){
    alert("LA VARIABLE ES BOOBLEANA");
}
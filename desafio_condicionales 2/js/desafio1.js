let numero = prompt("Ingrese Un numero");
if (numero==null){
    console.log("No ingreso nada");
    alert("NO ingreso nada");
}else if(numero<1000){
    console.log("El numero que ingreso es menor que 1000");
    alert("El numero que ingreso es menor que 1000");
}else if(numero==1000){
    console.log("El numero que ingreso es 1000");
    alert("El numero que ingreso es 1000");
}else if(numero>1000){
    console.log("El numero que ingreso es mayor que 1000");
    alert("El numero que ingreso es mayor que 1000");
}else{
    console.log("Error. Ingrese un numero");
    alert("Error. Ingrese un numero");
}
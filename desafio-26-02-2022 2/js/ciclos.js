let numero 
alert("A CONTINUACION, INGRESE 5 NUMERO")
for (i=1;i<=5;i++){
    numero=prompt("ingese el "+i+"° numero");
    while(numero==null || numero==""){
        console.log("No ingreso nada");
        numero= prompt("NO INGRESO NADA. POR FAVOR. REINGRESE EL "+i+"° NUMERO");
    }
    console.log("El numero que ingreso es", numero)
    console.log(i)
}
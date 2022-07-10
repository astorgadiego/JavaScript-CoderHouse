//EMPEZAMOS CON EL FOR

for (let dia=1; dia<20; dia++){  //Podes usar "i" como ya sabes pero a veces es conveniente usar un nombre mas representativo
    console.log("Dia", dia, "de Febrero")
    alert("Dia "+dia+ " de Febrero")
}

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

/*for (let=i=1;i<=10;i++){
    console.log(i);
}*/
/*let numero=parseInt(prompt("ingese un numero"));  TABLA DEL 10
for (let i=1; i<=10; i++){
    let resultado= numero*i;
    console.log(numero+"X"+i+"="+resultado);
}*/


/*for (let i=1; i<=20; i++){   20 turnos
    let ingnombre= prompt("ing nombre");
    console.log("turno n°"+i+",nombre:"+ ingnombre);
}*/
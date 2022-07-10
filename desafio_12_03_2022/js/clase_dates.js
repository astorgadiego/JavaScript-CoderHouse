const cumple = new Date(1998,11,3)
//console.log(cumple)
console.log(cumple.getFullYear());

/*const dia = new Date ("Dec 25, 2021")
console.log(dia)
console.log(dia.toLocaleString())
console.log(dia.toLocaleDateString())
*/

const inicio = new Date();
for(i=0;i<1000;i++){
    console.log("Haciendo Tiempo")
}

const final =new Date();

console.log("El tramite duro: ", (final-inicio) ,"milisegundos");



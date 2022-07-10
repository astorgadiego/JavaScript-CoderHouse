let nombre ="Diego"  //VARIABLE GLOBAL
function saludar(){
    let nombre = "Pancrasio"  //VARIABLE LOCAL
    console.log("Hola ", nombre);
}

console.log(nombre) // ME MUESTRA LA GLOBAL = DIEGO
saludar(); //ME MUESTRA LA LOCAL =PANCRASIO

//-------------------------
//LA VARIABLES S EDIFERENCIAN SEGUN COMO LA LLAMEMOS 
//VALE DECIR QUE 
function sumar (num1,num2){
    let resultado =num1+num2;
    return resultado;
}

function restar (num1, num2){
    let resultado = num1-num2;
    return resultado;
}


//FUNCIONES ANOMNIMAS Y FUNCIONES FLECHA
//CALCULAR EL PRECIO DE precioproducto +IVA-descuento
const suma = (a,b)=>a+b;
const resta = (a,b)=>a-b;
const IVA = x=>x*0.21;
let precioproducto=500;
let descuento=50;
let nuevoprecio =resta(suma(precioproducto,IVA(precioproducto)),descuento);
console.log(nuevoprecio);
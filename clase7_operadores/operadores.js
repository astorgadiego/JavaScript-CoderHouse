//OPERADOR TERNARIO TIENE UN "RETURN " IMPLICITO
const usuario0 = {
    nombre: Diego,
    edad: 22
}

//declaramos y asiganammos condicionalemente
const permiso= (usuario.edad>=18)?true:false;

//mostramos el mensaje
permiso?alert("puede comprar cerveza"): alert("no puede comprar");


//'operador or
let carrito =[];
function recuperarcarrito(){
  carrito= localStorage.getItem("carrito")||[]//SI NO HAY NADA ALMACENADO EN CARRITO ENTONCES PERMANECERA SIENDO UN ARRAY VACIO
}  

//NULLISH Y COALESING (??)
//SOLO OBTENEMOS NULLISH EN DOS CASOS, CUANDO LA VARIABLE ES NULL O UNDEFINED
console.log(null ??"Nullish")//NULLISH
console.log(undefined??"Nullish")// NULISH
console.log(0 ??"Nullish")//0
console.log(40??"Nullish")// 40
console.log("hOLA mUNDO" ??"Nullish")//hOLA MUNDO
console.log(""??"Nullish")// ""
console.log(NaN ??"Nullish")//NaN
console.log(true??"Nullish")// true
console.log(false ??"Nullish")//false


//ACCESO CONDICIONAL A UN OBJETO
const usuario= {
    nombre:"diego",
    edad: 22,
    cursos:
        {
            javascript: "aprobado"
        }
}

console.log(usuario?.cursos?.javascript||"La Propiedad no exista")//APROBADO
console.log(usuario?.trabajos?.coderhouse||"La Propiedad no exista")//La propieddad no existe

//desesstructuracion
const usuario2={
    nombre:"diego",
    edad:22,
    telefono:{
        cel:12413415,
        casa: null,
        trabajo: 986796796
    }
}

const {nombre,telefono:{trabajo}}=usuario2//MIS VARIABLES SON NOMBRE Y TRABAJO
console.log(nombre)//diego
console.log(trabajo)//986796796

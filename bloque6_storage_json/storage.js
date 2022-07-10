//METODO
// LA DIFEFERENCIA 
//SESSIONSTORAGE: LOS DATOS SE ELIMINAN CUANDO EL USUARIO CIERRA LA PESTAÑA
//LOCALSTORAGE: LOS DATOS PERSISTEN. SOLO CE BORRAN CUANDO SE BORRA EL CACHE O SE REINICIA LA COMPUTADORA
//SETITEM()

//localStorage.setItem(clave,valor)
//clave: nombre para identificar el elemento
//valor: valor/contenido del elemento
localStorage.setItem("bienvenida","hOLA CODER");
localStorage.setItem("es valido", true);
localStorage.setItem("un numero", 20);

//GETITEM(KEY)

localStorage.setItem("seleccionados", [1,2,3])
localStorage.setItem("esvalido", false);
localStorage.setItem("email", "info.mail@gmail.com");
let lista = localStorage.getItem("seleccionados").split(",");//EL PUNTO SPLIT SIRVE PARA OBTENER LOS ELEMENTOS DEL ARRAY ESTEN SEPARADOS POR COMA
let bandera = (localStorage.getItem("esvalido")=="true");
let email = localStorage.getItem("email");
console.log(lista)
console.log(typeof bandera) //BOOLEAN
console.log(typeof email) //STRING

//RECORRER EL STORAGE  SE USA FOR CON EL METODO KEY
for(let i =0; i<localStorage.length; i++){
    let clave: localStorage.key(i);
    console.log("Clave;" + clave);
    console.log("Valor:" + localStorage.getItem(clave));
} 
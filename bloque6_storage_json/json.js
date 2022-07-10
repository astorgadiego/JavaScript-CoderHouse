//STRINGIFY: PASAR DE JS A JSON
const producto1={ id: 2, producto: "Arroz" }
const enjson = JSON.stringify(producto1);
console.log(enjson)// {"id": 2, "producto": "Arroz"}
localStorage.setItem("producto1", enjson );//Se guarda: {id: 2, producto: "Arroz"}

//PARSE: PASAR DE JSON A JS
const enjs=JSON.parse(enjson)
console.log(enjs.producto);// ARROZ


        //PUEDO HACER QUE BUSQUE UN ELEMENTO Y ES ELEMENTO LO PASE A JS
        const producto2=JSON.parse(localStorage.getItem(enjson))
        console.log(producto2.id)// 2 


//ALMCAENAR UN ARRAY DE OBJETOS
        const productos =[{id: 1, comida: "Arroz", precio : 125},{id: 2, comida: "Fideo", precio:50}, { id: 3, comida:"Milanesa",precio:200}]

        const guardarcomida =(clave, valor)=>{
            localStorage.setItem(clave,valor)
        };
        //ALMACENAR PRODUCTO POR PRODUCTO
        for(const lista of productos){
            guardarcomida(lista.id, JSON.stringify(lista))
        }

        //O ALMACENAR EL ARRAY COMPLETO DE UNA
        guardarcomida("listadeproducto", JSON.stringify(productos));

//OBTENER UN ARRAY ALMACENADO
        class Producto{
            constructor (obj){
                this.nombre = obj.producto.tuUpperCase();
                this.precio= parseFloat(obj.precio);
            }
            sumaIva(){
                this.precio=this.precio*1.21;
            }
        }
        //OBTENEMOS EL LISTADO DE PRODUCTOS ALMACENADOS
        const almcenados = JSON.parse(localStorage.getItem("listadeproducto")); //ES LO QUE GUARDE EN EL EJEMPLO ANTERIOR
        const compra =[];
        //ITERAMOS "ALMACENADOS" CON for...of PARA TRNASFORMAR TODOS SUS OBJETOS A TIPO PRODUCTO
        for(const objeto of almcenados){
            compra.push(new Producto(objeto));
        }  
        //AHORA TENEMOS OBJETOS "COMPRA" Y PODEMOS USAR SUS METODOS
        for (const metodo of compra){
            compra.sumaIva();
        }
        
//RECUPERAR DATOS
        let carrito =[];
        let carritoenLs=JSON.stringify(localStorage.getItem("Carrito"))
        //INCIALIZAZO LA APP CON CARRITO COMO ARRAY VACIO O CON EL REGISTRO QUE HAYA QUEDADO EN LS
        if (carritoenLs){
            carrito=carritoenLs;
        }
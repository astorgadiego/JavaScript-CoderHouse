function Catalogo (producto,precio){
    this.producto=producto;
    this.precio=precio;
}


function compra (){

    let producto1 =prompt("Ingrese que producto va a comprar: 1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
    while(producto1==null || producto1==""){
        producto1= prompt("NO INGRESO NADA. POR FAVOR. INGRESE UNA OPCION:1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
    }
    while(producto1=="Fruta"||producto1=="Verdura"||producto1=="Semilla"){
            let resultado= calculadora(producto1)
            carrito.push(new Catalogo(resultado.producto,resultado.precio))
            suma(resultado.precio)
            producto1 =prompt("¿Desea comprar otra cosa?: 1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
            while(producto1==null || producto1==""){
                producto1= prompt("NO INGRESO NADA. POR FAVOR. INGRESE UNA OPCION:1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
            }        
    } 
    if(producto1=="Salir"){
        console.log("Su lista de compras es:")
        console.table(carrito)
        console.log("El total de su compra es $"+acumulador);
    }
    
    
    //alert("Su compra cuesta en total "+ suma()) 
}


function calculadora(producto1){
    switch(producto1){
        case "Fruta":
            const Fruta =new Catalogo (producto1,"300");
            return Fruta;
        break;
        case "Verdura": const Vedura =new Catalogo (producto1,"400");
        return Vedura;
        break;
        case "Semilla": const Semilla =new Catalogo (producto1,"600");
        return Semilla;
        break;
        case "Salir": 
        return;
        default: alert("ERROR!")
    }
}
/*const fruta =new Catalogo (compra(),"300")
const Verdura =new Catalogo ("Vedura","400")
const Semilla =new Catalogo ("Semilla","600")*/

function suma (precio) {
    return acumulador =acumulador+ parseFloat(precio)
}

const carrito=[]








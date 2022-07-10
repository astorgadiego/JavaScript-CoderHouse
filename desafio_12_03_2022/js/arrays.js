const carrito=[]

let producto1 =prompt("Ingrese que producto va a comprar: 1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
while(producto1=="Fruta"||producto1=="Verdura"||producto1=="Semilla"){
    carrito.push((producto1));
    producto1=prompt("¿Desea comprar otra cosa?: 1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
    while(producto1==null || producto1==""){
        producto1= prompt("NO INGRESO NADA. POR FAVOR. INGRESE UNA OPCION:1) Fruta=$300 2) Verdura=$400 3)Semilla=$600 4)Salir");
    }        
}

if(producto1=="Salir"){
    console.log("Su lista de compras es:")
    console.table(carrito)
}



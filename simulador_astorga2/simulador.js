function compra (){
    let producto =prompt("Ingrese que producto va a comprar: 1) Fruta=$300 2) Verdura=$400 3)Semilla=$600");
    let cuotas =parseInt( prompt("Ingrese en cuatas va a querer comprar en 6,12, o 24"));   
    let precioPorCuota= calculadora(producto, cuotas)
    alert("Su precio por cuotas es $ "+ precioPorCuota) 
}

function calculadora(producto,cuotas){
    switch(producto){
        case "Fruta": return 300/cuotas;
        break;
        case "Verdura": return 400/cuotas;
        break;
        case "Semilla": return 600/cuotas;
        break;
        default: alert("ERROR!")
    }
}

compra();
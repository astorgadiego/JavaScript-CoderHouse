function compra(productocomprado){
    let total = parseFloat( productocomprado.precio);
    let acum
    Swal.fire({
                input: "text",
                inputLabel: "Ingrese un numero",
                inputPlaceholder: "Numero solamente",
                confirmButtonText: 'Aceptar',
                html: `<h1 class="mi-clae">Ingrese en cuantas cuotas va a querer comprar </h1> <h1 class="mi-clae">6-12-24 </h1>`
                
            }).then((result)=>{
                    if(result.value===""){
                                            Swal.fire({
                                                        icon: 'error',
                                                        title: 'NO ingreso nada!',
                                                        text: 'Ingrese en cuantas cuotas va a querer comprar',
                                                        footer: '<a href="">Why do I have this issue?</a>',
                                                        input: "text",
                                                        inputLabel: "Ingrese un numero",
                                                        inputPlaceholder: "Numero solamente",
                                                      })
                                           }  
                    else{
                        let cuota=parseInt(result.value)
                        acum= total/cuota
                        Swal.fire({
                                    title : `Cada cuota le va salir : $ ${acum}`, 
                                    icon: "success"
                                 })
                    }
                
                
            })
}



//compra();

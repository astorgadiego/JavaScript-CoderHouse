const retornoCardContenido = (contenido)=> {
    const {tipo,precio_kilo,imagen} = contenido
       let HTMLCard = ""
             HTMLCard += `<div>
             <div>
               <p><h3><strong>${tipo}</strong></h3></p>
               <img loading="lazy" src="${imagen}" title="${tipo}">
             </div>
             <div>
                 <p><h4>$${precio_kilo} El kilo</h4></p>
             </div>
     </div>`
       return HTMLCard
 }

 const retornoElError = ()=> {
    let HTMLCardError = `<div class="center black-text"> 
                            <br><br> 
                            <br><br> 
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                            <br><br> 
                            <h4>:(</h4>
                            <br><br> 
                         </div>`
       return HTMLCardError
 }
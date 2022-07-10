let elemAmostrar=""
const obtengocontenido = (URL)=>{
    fetch(URL)
    .then((response)=>response.json())
    //.then((data)=>console.table(data))
    .then((data)=>{
        const contenidodisponible=data;
        contenidodisponible.forEach(contenido => {
                elemAmostrar+=retornoCardContenido(contenido)
                contenidoDOM.innerHTML=elemAmostrar
        });
    })
    .catch((error)=>{
        contenidoDOM.innerHTML=retornoElError()
    })
    .finally(()=>cargandoDOM.innerHTML="")
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
           obtengocontenido(URL) 
    },3000)
})
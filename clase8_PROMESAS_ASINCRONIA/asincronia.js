//SETTIME OUT
setTimeout(()=>{
    console.log("Proceso Asincronico")
}, 3000)//EL MENSAJE SE MUESTRA UNA VEZ TRANSCURRIDO EL TIMEPO DEFINIDO EL TIEMPO EN EL SEGUNDO PARAMETRO

    //EJENMPLO DE SET TIMEOUT 
        const btn = document.querySelector('#boton')
        const popup = document.querySelector('#popup-mensaje')

        btn.addEventListener('click', () => {
            popup.classList.add('popup-active')

            setTimeout(() => {
                popup.classList.remove('popup-active')
            }, 2500)
        })
        //Aquí se agrega una clase a un elemento tras clickear un botón, y luego se dispara un setTimeout que remueve esa clase del elemento tras 2500 milisegundos. Permite automatizar un evento interactivo.

        //CALL BACK, EVENT LOOP, CALLBACK QUEUE
        console.log("Inicia proceso")

        setTimeout(()=> {
            console.log("Mitad de proceso")
        }, 0)

        console.log("Fin proceso")

        // Inicia proceso
        // Fin proceso
        // Mitad de proceso 

//SETINTERVAL()
setInterval(() => {
    console.log("Tic")
}, 1000) //Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detención o se cierre la aplicación 

//CLEARINTERVAL(REFERENCIA)
            let counter = 0

            const interval = setInterval(() => {
                        counter++
                        console.log("Counter: ", counter)

                        if (counter >= 5) {
                            clearInterval(interval)
                           console.log("Se removió el intervalo")
                        }
                    }, 1000)

//CLEARTIMEOUT()
        //En el siguiente caso, el timeout generado NUNCA llega a ejecutarse:
        console.log("Inicio")

        const fin = setTimeout(() => {
            console.log("fin")
        }, 2000)

        clearTimeout(fin)

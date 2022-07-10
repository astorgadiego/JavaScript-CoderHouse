//TRABAJAREMOS CON LS SWEET ALERT, TOASTTIFY, LUXON

//SWEET ALERT 
// cdn: <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
Btn.addeventlistener("click", ()=>{
                                    swal.fire({
                                                tittle: "Esta seguro de eliminar el producto?",
                                                icon: warning,
                                                showcancelbutton: true,
                                                confirmbuttontext: "Si, seguro",
                                                cancelbutontext: "No , no quiero"
                                            }).then((result)=>{
                                                                if (result.isconfirmed){
                                                                                        swal.fire({
                                                                                                    title: borrado,
                                                                                                    icon: "Sucess",
                                                                                                    text: "El archivo ha sido borrado"
                                                                                                })
                                                                                        }
                                                                })
                                   })

//TOASTIFY()
//LINK A PAGINA DE TOASTIFY: https://apvarun.github.io/toastify-js/
//CDN : AL PRINCIPIO: <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
//      AL FINAL: <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
btn.addeventlistener("click", ()=>{
    toastify({
        text: "Probando Toast",
        duration: 3000
    }).showToast();
})

        //PROPIEDADES: ONCLIK: PODEMOS USAR DIFERTENTES PRPIEDADES, CONSULTAR LA DOCUMENTACION
        btn.addeventlistener("click", ()=>{
            toastify({
                text: "Probando Toast",
                duration: 3000,
                onclick: ()=>{
                    toastify({
                        text:"Clickeaste en el toast",
                        duration: 1500,
                        position: left
                    }).showToast()
                }
            }).showToast();
        })

//LUXON
            //OBJETO
            const dt = Datetime.fromobjext(
                {day: 22,hour:12,month: 2},
                {zone: "America/buenos_aires", numberingSystem: "beng"}
            )
            console.log(dt.toString())//2022-02-22T12:00:00.000-03:00

            //CREAR FECHAS A PARTIR DE UN STRING CON LA NORMA ISO
            DateTime.fromISO("2017-02-15")//MAY 15,2017 AT MIDNIGHT
            DateTime.fromISO("2017-02-15T08:30:00")//MAY 15,2017 AT 08:30

            //TO STRING
            const NOW = DateTime.NOW()
            console.log(NOW.toString()) //RECUPERO LA FECHA EN FORMATO STRING 2022-04-06T16:49.775-3:00

            //SUMA DE FECHAS 
            const dia= DateTime.now()
            console.log(dia.toLocaleString(Datetime.DATETIME_SHORT)) //25/01/2022 14:21 

            const suma= dia.plus((hours:5,minutes:15))
            console.log(suma.toLocaleString(Datetime.DATETIME_SHORT)) //25/01/2022 19:36

            const resta= dia.minus((month:2, days: 20))
            console.log(resta.toLocaleString(Datetime.DATETIME_SHORT)) //15/11/2021 14:21
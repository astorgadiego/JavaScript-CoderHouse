const inputFiltrar = document.querySelector("#filtrar")
const tbody = document.querySelector("tbody")
//LLEVO TODO EL ARRAY DE OBJETOS A LA CARPETA .JSON
let arrayContactos =""
/*const arrayContactos=[
    {
        id: 1,
        nombre: "JASON BOURNE",
        telefono: "11-5388-7554",
        email: "jb@cia.us"
    },
    {
        id: 2,
        nombre: "NICKY PARSONS",
        telefono: "11-8888-0990",
        email: "np@cia.us"
    },
    {
        id: 3,
        nombre: "MARIE KREUTZ",
        telefono: "11-3444-1111",
        email: "mariekr@hotmail.fr"
    }
]*/

const URL ="js/contactos.json"//EQUIVALENTE A PEDIR DATOS DE UN SERVIDOR REMOTO COMO http://api.randomuser.me/

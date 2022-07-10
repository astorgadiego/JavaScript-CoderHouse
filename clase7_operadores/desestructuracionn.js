//desesstructuracion
const usuario2={
    nombre:"diego",
    edad:22,
    telefono:{
        cel:12413415,
        casa: null,
        trabajo: 986796796
    }
}

const {nombre,telefono:{trabajo}}=usuario2//MIS VARIABLES SON NOMBRE Y TRABAJO
console.log(nombre)//diego
console.log(trabajo)//986796796


//DESESTRUCTURACION DE PARAMETROS
        //PODEMOS PASAR DE ESTO 
        const producto ={
            id: 10,
            nombre: "Cursos coder house",
            precio: 2500
        }

        const desestructurar =(item)=>{
            const{id, nombre}=item
            console.log(id, nombre)
        }
        desestrurar(producto);//10 CURSOS CODER HOUSE

        //A ESTO 
        const desestrurar=({id, nombre})=>{
            console.log(id,nombre)
        }
        desestrurar(producto);//10 cursos coder house
        //O CAPTURAR LAS POSICIONES X E Y DEL EVENTO CLICK 
        window.addEventListener("click",({x,y})=>{
            console.log(x,y)
        })

//SPREAD
const nombre1=["DIego", "Nina"];
const nombre2=["Emma","Gloria"];
            //SPREAD DEL ARRAY DENTRO DE UN OBJETO
            const objetonombre={
                ...nombre1,
                ...nombre2
            }

            console.log(objetonombre)// {0:"Diego",1:"Nina",2:"Emma",3:"Gloria"}

            //SPREAD DE OBJETO DENTRO DE OTRO OBJETO
            const alumno1={
                nombre:"Diego",
                curso:"12"
            }
            //ENLISTAMOS TODAS LAS PROPIEDADES Y VALORES DEL ALUMNO DENTRO DE OTRO OBJETO
            const alumno2=[
                ...alumno1
            ]
            console.log(alumno2)//{nombre:"Diego",curso:"12"}
            const alumno3={
                ...alumno1,
                curso: "434",// SOBREESCRIBO O MODIFICO UNA PROPIEDAD
                email: "diego@gmail.com" //AGREGO UNA NUEVA PROPIEDAD
            }
            console.log(alumno3)// nombre:"Diego", curso:"434", email:"diego@gmail.com"

//REST PARAMETERS
 function sumar (...numeros){
     return numeros.reduce((acc,n)=>acc+n,0)
 }

 console.log (sumar(4,2))//6
 console.log(sumar( 10,15,30,5))//60
 console.log(sumar(100,300,50))//450
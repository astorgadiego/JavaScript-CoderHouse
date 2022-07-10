const productos = ['Banana', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango']
const cuota = ["3","6","12"]
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")

const ul = document.getElementById("listadoFrutas") //Dentro de este nodo, cargaré los <li> con los productos
const listadoCarrito = document.getElementById("listadoCarrito") //En este otro, los productos a comprar
const cuotas =document.getElementById("cuotas")
const totalCuotas=document.getElementById("totalCuotas");
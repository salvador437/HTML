//función para el cálculo del factorial de un número
function factorial(n) {
  console.log(`calculando factorial de ${n}`);
  if (n === 0) {
    console.log(`Base 0: devuelve 1`);
    return 1;
  } else {
    console.log(`llamada a factorial de ${n - 1}`);
    const resultado = n * factorial(n - 1);
    console.log(`devolviendo ${resultado}`);
    return resultado;
  }
}

// llamada  a la función factorial.
console.log(factorial(23));

// función para calcular el total de la compra del carrito
function calcularTotalCarrito(carrito) {
  let totalCompra = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad,
    0
  );
  return totalCompra
}  
// Puede ser un objeto más extenso.
const carrito = [
  { nombre: "Camisa", precio: 20, cantidad: 2 },
  { nombre: "Pantalones", precio: 30, cantidad: 1 },
  { nombre: "Zapatos", precio: 50, cantidad: 3 },
  { nombre: "calcetines", precio: 10, cantidad: 2 },
  { nombre: "sudadera", precio: 40, cantidad: 1 },
  { nombre: "guanyes", precio: 70, cantidad: 2 },

];
// * resultado de llamar a la función.
const totalCarrito = calcularTotalCarrito(carrito);
console.log(`El total del carrito es: ${totalCarrito } Euros.`); // imprime 220.

// swap de variables
let a = 5;
let b = 8;

// desestructuración de las variables.
[a, b] = [b, a];

console.log(a, b);

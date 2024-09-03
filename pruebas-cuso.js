//El método console.log()
console.log("Hola Mundo");
console.log(2 + 2);
console.log("¡Hola a todos! Observen este número: ", 5 + 18);

//Mensajes de error por niveles

//Muestra información con todo nivel de detalle.
console.debug("Hola Mundo", [1, 2, 3]);
// 	Muestra mensajes de información.
console.info("nivel correcto");
//Muestra información de advertencia. Aparece destacado en amarillo.OK
console.warn("Precaución");
//Muestra información de error. Aparece destacado en rojo. OK
console.error("Elemento no definido");

//Mostrar una traza de error   OK
console.trace("¡He llegado aquí!");

//Mensaje con estilo CSS   OK
const styles = `
  background:linear-gradient(#884ced, #ec1cce);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%c¡Estudia y practica", styles);
console.log("%c otra prueba ", `background-color:red;color:white;padding:10px;border-radius:9px;font-size:18px`);


//Limpia la consola. Equivalente a escribir clear().  OK
//console.clear();

//Agrupar mensajes.
//En la consola nos aparecera un ► Información a mostrar   OK
console.group("Información a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.groupEnd();

//El método console.table() OK
const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" },
];

console.table(users);

//El método console.assert() OK
console.assert(5 < 10, "5 es menor que 10");
// No ocurre nada
console.assert(5 < 0, "5 es menor que 0");
// Muestra el mensaje indicado con un aviso de error


//El método console.dir() OK
console.log(document.body);
console.dir(document.body);

//Crear benchmarks rápidos (NOTA:en firefox no funciona)
//Contadores
for (let i = 0; i < 5; i++) {
  console.count("test-loop");
}
console.countEnd("test-loop");


//Test de velocidad  (OK en consola navegador)
console.time("test1");
for (let i = 0; i < 10; i++) {
 
  console.timeLog("test1", i);
}
console.timeEnd("test1");


//Test de rendimiento   (no me funciona en firefox)
console.profile();
for (let i = 0; i < 10; i++) {
  console.log("test1", i);
}
console.profileEnd();


//Tipos de datos.................

// Un texto, letra o carácter
const text = "Hola, me llamo Manz";

// Un número (entero o decimal)
const number = 42;

// Un número muy grande (se añade n al final)
const bignumber = 12345678901234567890n;
console.log(tipeof(bignumber));

// Un valor de verdadero o falso
const boolean = true;
console.log(tipeof(boolean));

// Un valor único
const symbol = Symbol("unique");
console.log(tipeof(symbol));


//undefined.................

// Tiene el valor undefined
let notDefined;

// Aunque no es lo habitual, también se puede asignar explícitamente
let sinDefinir = undefined;


//El valor especial null.....

// Caso A
let selectedUser;

// Caso B
let selectedUser2 = null;

//Tipos de datos no primitivos....

// Tipo de dato: Objeto
const user = { name: "ManzDev" };

// Tipo de dato: Array
const users2 = ["ManzDev", "CyberManzDev", "Manz9000"]




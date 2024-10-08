const u1a = Symbol("unique");
const u2a = Symbol("unique");
 
const a = 5;
const b = 23;
console.log(a ^ b);

/*
Prototipado de objetos
*/

let animal = {
  comer(c, d) {
    let a = 2;
    let b = 3;
    console.log(c + d);
  },

  walk() {
    console.log("animal pasea");
  },

  cagar() {
    console.log("animal cagando");
  },

  calcularLetraDNI(dni) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (!/^\d{8}$/.test(dni)) {
      throw new Error("El número del DNI debe tener 8 dígitos.");
    }
    var numero = parseInt(dni, 10);
    var indice = numero % 23;
    console.log(letras[indice]);
    return letras[indice];
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk se toma de la cadena prototipo
longEar.walk(); // Animal da un paseo
rabbit.cagar();
rabbit.calcularLetraDNI(33009007);

console.log(typeof null);
// → true
console.log(typeof undefined);
// → false
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
// y no es visible desde aqui
console.log(x + z);
// → 40

// Test de velocidad
console.time("test1");
for (let i = 0; i < 10; i++) {
  /* Operación costosa */
  console.timeLog("test1", i);
}
console.timeEnd("test1");

const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" },
];

console.table(users);

const styles = `
  background:linear-gradient(#884ced, #ec1cce);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%c¡Hola Manz!", styles);


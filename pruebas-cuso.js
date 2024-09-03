//El método console.log()
console.log("Hola Mundo");
console.log(2 + 2);
console.log("¡Hola a todos! Observen este número: ", 5 + 18);

//Mensajes de error por niveles

//Muestra información con todo nivel de detalle.
console.debug("Hola Mundo", [1, 2, 3]);
// 	Muestra mensajes de información.
console.info("nivel correcto");
//Muestra información de advertencia. Aparece destacado en amarillo.
console.warn("Precaución");
//Muestra información de error. Aparece destacado en rojo.
console.error("Elemento no definido");

//Mostrar una traza de error
console.trace("¡He llegado aquí!");

//Mensaje con estilo CSS
const styles = `
  background:linear-gradient(#884ced, #ec1cce);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%c¡Estudia y practica", styles);
console.log("%c otra prueba ", `background-color:red;color:white;padding:10px;border-radius:9px;font-size:18px`);


//Limpia la consola. Equivalente a escribir clear().
//console.clear();

//Agrupar mensajes.
console.group("Información a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.groupEnd();

# <span style="color:lime"><center>¿Qué son las pseudoclases?</center></span>

Hasta ahora hemos visto como trabajar con selectores básicos y combinadores, sin embargo, CSS ofrece más formas de seleccionar elementos HTML, y una de ellas son las llamadas pseudoclases.

Las pseudoclases se utilizan para hacer referencia a elementos HTML que tengan un cierto comportamiento concreto. Volvamos a recordar el esquema general de sintaxis de CSS, donde ahora añadiremos las pseudoclases, que se definen añadiendo dos puntos antes del nombre de la pseudoclase concreta, de la siguiente forma:

![alt text](./imagenes-las-pseudoclases/sintaxis-pseudoclases.png)

De esta forma, podremos seleccionar elementos que en principio parecen iguales, pero tienen diferentes características de comportamiento. Para entenderlo bien, vamos a ver las categorías o tipos de pseudoclases y ver cuales se encuentran entre ellas.

## <span style="color:violet">Ejemplo de una pseudoclase</span>
La forma de utilizar pseudoclases en nuestro código CSS es, simplemente, añadir : tras la etiqueta o selector y luego añadir el nombre de la pseudoclase. Por ejemplo, una de las pseudoclases más populares, que veremos en el próximo artículo, es :hover.

Cuando utilizamos la pseudoclase :hover, estamos indicando al navegador que de estilo al elemento cuando el usuario coloque su ratón (o dispositivo apuntador) encima de ese elemento.

Veamos un ejemplo, con una etiqueta "a" de enlace:

css:
![alt text](./imagenes-las-pseudoclases/image.png)

html:
![alt text](./imagenes-las-pseudoclases/image-1.png)

vista:
![alt text](./imagenes-las-pseudoclases/image-2.png)


En este caso hacemos lo siguiente:

   - El enlace siempre tendrá un padding de 5 píxeles.
   - El enlace tendrá color rojo de fondo, color blanco de texto y no tendrá subrayado cuando el usuario mueva el ratón por encima.

Existen multitud de pseudoclases CSS, y profundizaremos más sobre ellas en los siguientes artículos.

## <span style="color:violet">Tipos de pseudoclases CSS</span>
Existen múltiples pseudoclases, así que para entenderlas mejor, las categorizamos en las siguientes secciones. Aquellas que sean muy extensas o abundantes, las enlazaremos en un artículo posterior más detallado:

![alt text](./imagenes-las-pseudoclases/image-3.png)
![alt text](./imagenes-las-pseudoclases/image-4.png)
![alt text](./imagenes-las-pseudoclases/image-5.png)

En los siguientes temas aprenderemos a utilizar las pseudoclases de cada categoría.

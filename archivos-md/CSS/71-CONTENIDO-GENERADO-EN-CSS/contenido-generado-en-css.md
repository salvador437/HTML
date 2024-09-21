# <span style="color:lime"><center>Contenido generado en CSS</center></span>

Dentro de la categoría de los pseudoelementos CSS, y quizás uno de los más conocidos, se encuentra la propiedad content. Esta propiedad se utiliza en selectores que incluyen los pseudoelementos ::before o ::after (que explicaremos un poco más adelante), y su objetivo es indicar que vamos a crear contenido antes o después del elemento indicado en cuestión.

Veamos un pequeño resumen de los elementos que participan en esta categoría:

![alt text](./imagenes-contenido-generado-en-css/image.png)

Vamos a explicar como funciona cada uno de ellos.

## <span style="color:violet">La propiedad content</span>
La propiedad content admite parámetros de diverso tipo, incluso concatenando información mediante espacios. Podemos utilizar varios tipos de contenido:

![alt text](./imagenes-contenido-generado-en-css/image-1.png)

Ten en cuenta que la propiedad content sólo funciona dentro de pseudoelementos, como por ejemplo ::before y ::after, los cuales explicaremos a continuación. No puede utilizarse en otros selectores.

## <span style="color:violet">El pseudoelemento ::before</span>
Los pseudoelementos ::before y ::after permiten hacer referencia a «justo antes del elemento» y «justo después del elemento», respectivamente. Además de selectores básicos como clase o id, combinadores, atributos o pseudoclases, puedes añadir un pseudoelemento, precedido por ::.

En el caso del pseudoelemento ::before, el navegador se encargará de añadir contenido antes del inicio de la etiqueta de apertura del elemento que has seleccionado con el resto del selector:

css:
![alt text](./imagenes-contenido-generado-en-css/image-2.png)

html:
![alt text](./imagenes-contenido-generado-en-css/image-3.png)

vista:
![alt text](./imagenes-contenido-generado-en-css/image-4.png)

En este caso, estamos añadiendo el texto « justo antes de los elementos <q> que aparezcan en nuestro documento, además de pintarlos de color gris. De esta forma, podemos generar información (usualmente con fines decorativos) que no existe en el HTML, pero que por circunstancias de diseño sería más apropiado colocar en el código CSS.

## <span style="color:violet">Pseudoelemento ::after</span>
De la misma forma, tenemos el pseudoelemento ::after, que permitirá añadir contenido después de la etiqueta de cierre en cuestión. Vamos a completar el código anterior, utilizando también un ::after y añadiendole más estilos a la propia etiqueta:

css:
![alt text](./imagenes-contenido-generado-en-css/image-5.png)

html:
![alt text](./imagenes-contenido-generado-en-css/image-6.png)

vista:
![alt text](./imagenes-contenido-generado-en-css/image-7.png)

Ahora, como se puede ver en la demo, el ejemplo es mucho más sencillo de entender visualmente, a la vez que posee cierta semántica que lo hace más fácil de entender, no sólo para humanos, sino también para una máquina, sistemas automatizados o desarrolladores que quieran interactuar con la información y comprenderla.

## <span style="color:violet">La función attr()</span>
Es interesante recalcar la utilidad de la función CSS attr(A). Esta función se puede utilizar en la propiedad content para recuperar el valor del atributo HTML especificado en A.

Vamos a ampliar el ejemplo anterior, añadiéndole al elemento q un atributo con el autor de ese mensaje:

css:
![alt text](./imagenes-contenido-generado-en-css/image-8.png)

html:
![alt text](./imagenes-contenido-generado-en-css/image-9.png)

vista:
![alt text](./imagenes-contenido-generado-en-css/image-10.png)

En este ejemplo, añadimos el contenido del atributo data-author de las etiquetas "q" para mostrarlo en la página entre paréntesis. Observa que la concatenación (unión) de los carácteres en CSS se hace simplemente con espacios, abriendo y cerrando las comillas para indicar los textos. Esto puede realizarse con cualquier etiqueta y atributo que desees.

El uso de la función attr() podría ser muy útil en ciertos casos, como por ejemplo, en una página que muestra enlaces y el usuario va a imprimir. Podríamos utilizar medios de impresión que apliquen un CSS especial, donde el contenido de los atributos href en las etiquetas "a" sean mostrados, ya que en una impresión no podemos hacer doble clic en los textos subrayados (con enlace):

css:
![alt text](./imagenes-contenido-generado-en-css/image-11.png)

html:
![alt text](./imagenes-contenido-generado-en-css/image-12.png)

vista:
![alt text](./imagenes-contenido-generado-en-css/image-13.png)

Truco: También se puede utilizar la función url() para añadir una imagen al contenido generado, tal y como lo hacemos en la propiedad background, por ejemplo.


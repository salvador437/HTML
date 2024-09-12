# <span style="color:lime"><center>Dimensiones en CSS</center></span>

Al trabajar con CSS, una de las primeras cosas que debemos aprender es la de dar tamaño o establecer dimensiones a un elemento HTML. Es algo relativamente sencillo, pero que se puede complicar mucho y que tiene muchos matices y aspectos a tener en cuenta.

## <span style="color:violet">Las propiedades width y height.</span>
Para dar tamaños específicos a los diferentes elementos de un documento HTML, necesitaremos asignarles valores a las propiedades width (ancho) y height (alto):

![alt text](./imagenes-dimensiones-css/image.png)

En el caso de indicar el valor auto, el navegador se encargará de darle el tamaño que considere más apropiado, dependiendo de su contenido. Ten en cuenta que este valor es el que tienen por defecto estas propiedades. De no indicar un valor concreto, width y height tendrán el valor auto.

Es importante recalcar que el tamaño automático dado a un elemento depende del tipo de elemento (bloque, en línea...). Este tema lo veremos en un capítulo posterior.

Hay que ser muy conscientes de que, sin indicar valores de ancho y alto para una caja, el elemento generalmente toma el tamaño que debe respecto a su contenido, mientras que si indicamos un ancho y alto concretos, estamos obligando mediante CSS a tener un aspecto concreto y podemos obtener resultados similares al siguiente (conocida broma de CSS) si su contenido es más grande que el tamaño que hemos obligado a tener:

![alt text](./imagenes-dimensiones-css/css-is-awesome.png)

 - En el próximo artículo hablaremos de [Desbordamiento CSS](https://lenguajecss.com/css/modelo-de-cajas/overflow/), donde veremos que ocurre cuando el contenido sobrepasa el tamaño del contenedor y la correspondiente propiedad overflow.

## <span style="color:violet">Rangos de dimensiones.</span>
Otra forma de lidiar con esto, es utilizar las propiedades hermanas de width: por un lado, min-width y max-width y por otro, sus equivalentes de height: min-height y max-height.

![alt text](./imagenes-dimensiones-css/image-1.png)

Con estas propiedades, en lugar de establecer un tamaño fijo, establecemos unos rangos máximos y mínimos, donde el ancho o alto podría variar entre esos valores:

CSS:
![alt text](./imagenes-dimensiones-css/image-2.png)
HTML:
![alt text](./imagenes-dimensiones-css/image-3.png)
VISTA:
![alt text](./imagenes-dimensiones-css/image-4.png)

En este caso, puedes probar a redimensionar la ventana de demostración (esquina inferior-derecha). Hemos definido un tamaño máximo de ancho de 800px, y un mínimo de 300px. A la misma vez, le aplicamos un width de 100% para que intente ocupar el máximo posible, siempre respetando los límites anteriores: nunca superará los 800px y nunca será más pequeño de los 300px.

Como resultado, el cuadrado será flexible y se irá haciendo más pequeño hasta llegar a su límite inferior, donde aparecerá la barra de desplazamiento inferior.

 - Ojo: Las propiedades de mínimos min-width y min-height por defecto tienen valor 0, mientras que las propiedades de máximos max-width y max-height, tienen por defecto valor none.

## <span style="color:violet">Valores intrínsecos.</span>
Hay algunos valores especiales denominados valores de tamaño intrínseco. Estos valores son palabras clave que establecen tamaños concretos, dependiendo del tamaño interior del elemento.

![alt text](./imagenes-dimensiones-css/image-5.png)

Esto se entiende muy fácilmente con el siguiente ejemplo:

CSS:
![alt text](./imagenes-dimensiones-css/image-6.png)
HTML:
![alt text](./imagenes-dimensiones-css/image-7.png)
VISTA:
![alt text](./imagenes-dimensiones-css/image-8.png)

De momento, la función fit-content() no está soportada en navegadores.

## <span style="color:violet">La propiedad aspect-ratio.</span>
La propiedad aspect-ratio permite cambiar la proporción de aspecto entre los valores width y height de una imagen u objeto desde CSS. De esta forma, podemos asegurarnos de que las imágenes no se deformarán o tendrán una relación de aspecto no adecuada en nuestras páginas, sin necesidad de darle un tamaño concreto de ancho y alto al elemento.

Los valores de la propiedad aspect-ratio son:

![alt text](./imagenes-dimensiones-css/image-9.png)


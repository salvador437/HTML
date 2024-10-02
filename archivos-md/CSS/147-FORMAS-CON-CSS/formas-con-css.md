# <span style="color:lime"><center>Formas con CSS</center></span>

En muchas situaciones puede ser interesante crear formas geométricas o formas orgánicas para representar ciertos elementos, y que se adapten a nuestro gusto. Hacerlo con código nos permite que sea sencillo adaptarse a situaciones cuando hagamos modificaciones y evitamos diseños más rígidos creados con imágenes.

## <span style="color:violet">Cuadrado</span>
Probablemente, la forma más sencilla que ya estaremos acostumbrados a crear es un cuadrado. Sin embargo, aprovechemos para organizar bien el código y observar como podemos hacer que nuestro código sea más legible y fácil de comprender y modificar:

css:
![alt text](./imagenes-formas-con-css/image.png)

html:
![alt text](./imagenes-formas-con-css/image-1.png)

vista:
![alt text](./imagenes-formas-con-css/image-2.png)

En este caso, utilizamos las variables CSS --size para el tamaño del cuadrado, que es el mismo de ancho que de alto, y --gradient para guardar el gradiente de colores.

## <span style="color:violet">Rectángulo</span>
En el caso de querer generar un rectángulo, la diferencia es que no utilizamos el mismo tamaño de ancho y de alto, sino que utilizaremos la variable --w para el width (ancho) y --h para el height (alto):

css:
![alt text](./imagenes-formas-con-css/image-3.png)

html:
![alt text](./imagenes-formas-con-css/image-4.png)

vista:
![alt text](./imagenes-formas-con-css/image-5.png)

Como en el anterior, también tenemos la variable --gradient para el degradado del elemento.

## <span style="color:violet">Círculo</span>
Volvamos al ejercicio del cuadrado donde usamos el mismo tamaño para ancho y alto. Ahora, utilizamos la propiedad border-radius para redondear las esquinas del elemento. Si lo hacemos utilizando PERCENT, al 50% conseguiremos el valor máximo para redondear, independientemente del tamaño que tenga el elemento:

css:
![alt text](./imagenes-formas-con-css/image-6.png)

html:
![alt text](./imagenes-formas-con-css/image-7.png)

vista:
![alt text](./imagenes-formas-con-css/image-8.png)

Si además cambiamos el tamaño de ancho con un alto diferente, tendríamos un óvalo o círculo ovalado.

## <span style="color:violet">Semicírculo</span>
Ahora, si al círculo anterior, le hacemos algunas modificaciones en el border-radius podemos conseguir un semicírculo. La idea es tener también la varible --half-size que es la mitad de --size.

Además de esto, observa que border-radius utiliza el formato de x e y, es decir, border-radius: x x x x / y y y y. Los valores colocados a la izquierda del slash / son los valores de redondeo de esquinas en x, mientras que los valores a la derecha del slash / son los valores de redondeo de esquinas en y:

css:
![alt text](./imagenes-formas-con-css/image-9.png)

html:
![alt text](./imagenes-formas-con-css/image-10.png)

vista:
![alt text](./imagenes-formas-con-css/image-11.png)

Obviamente, modificando la posición de estos valores, podríamos conseguir semicírculos en diferentes posiciones.

## <span style="color:violet">Triángulo</span>
Este ejemplo resulta más interesante y complejo. Esta es una forma antigua de crear un triángulo con CSS. Se aprovecha de que los navegadores, si creas un border con diferentes colores los une formando una unión triangular. Esto, unido a que le reducimos el tamaño a 0, hace que se forme una especie de triángulo:

css:
![alt text](./imagenes-formas-con-css/image-12.png)

html:
![alt text](./imagenes-formas-con-css/image-13.png)

vista:
![alt text](./imagenes-formas-con-css/image-14.png)

Sólo restaría cambiar los bordes que no interesan a transparent y ya lo tendríamos. La limitación de este método es que estamos obligados a utilizar sólo un color, ya que es un color de borde.

A continuación tenemos otra forma de generar un triángulo, que puede ser interesante en otras situaciones. En este nuevo ejemplo, creamos una forma con la función polygon(), en forma de triángulo con 3 puntos clave, y la recortamos con clip-path:

css:
![alt text](./imagenes-formas-con-css/image-15.png)

html:
![alt text](./imagenes-formas-con-css/image-16.png)

vista:
![alt text](./imagenes-formas-con-css/image-17.png)

Lo bueno de este método es que si que permite utilizar imágenes o gradientes de fondo.

## <span style="color:violet">Bocadillo (Message globe)</span>
Veamos ahora como hacer un globo de texto, un mensaje o bocadillo, de los que se utilizan en comics para que los personajes muestren un diálogo. Esto sería tan fácil como crear un cuadrado (también se podría redondear con border-radius si se desea) y añadirle un triángulo que haga de dirección.

El globo de texto va a ser el elemento con clase .message y el triángulo de flecha va a ser el ::after del .message. Observa el siguiente fragmento de código:

css:
![alt text](./imagenes-formas-con-css/image-18.png)
![alt text](./imagenes-formas-con-css/image-19.png)

html:
![alt text](./imagenes-formas-con-css/image-20.png)

vista:
![alt text](./imagenes-formas-con-css/image-21.png)

En este caso, utilizamos un position: absolute y lo bajamos con bottom para que la flecha aparezca por debajo del elemento.

## <span style="color:violet">Hoja (Leaf)</span>
La siguiente forma simula la hoja de un árbol, donde simplemente utilizamos border-radius alternando el redondeo para que afecte sólo a dos esquinas. De esta forma, y junto a un gradiente de colores verdes, le dan el aspecto de hoja de árbol:

css:
![alt text](./imagenes-formas-con-css/image-22.png)

html:
![alt text](./imagenes-formas-con-css/image-23.png)

vista:
![alt text](./imagenes-formas-con-css/image-24.png)

## <span style="color:violet">Gota (Tear))</span>
En esta nueva forma, conseguimos una gota dibujando un rectángulo que tiene las esquinas inferiores redondeadas. Luego, aplicamos un recorte con clip-path que recorta en forma triangular por la parte superior, y mantiene todo por la parte inferior:

css:
![alt text](./imagenes-formas-con-css/image-25.png)

html:
![alt text](./imagenes-formas-con-css/image-26.png)

vista:
![alt text](./imagenes-formas-con-css/image-27.png)

Otra forma de dibujar la gota podría ser un rectángulo recortado, que tenga un ::after o ::before circular, que haga de la parte de la gota.

## <span style="color:violet">Corazón (Heart)</span>
En este caso, creamos un corazón, que estará compuesto por tres elementos: el elemento con clase .heart y dos elementos más, el ::after y el ::before. Con el primero, crearemos un cuadrado rotado, para el "cuerpo" del corazón, y con el ::after y el ::before crearemos dos círculos que superpondremos sobre el cuadrado rotado, consiguiendo el corazón:

css:
![alt text](./imagenes-formas-con-css/image-28.png)
![alt text](./imagenes-formas-con-css/image-29.png)
![alt text](./imagenes-formas-con-css/image-30.png)

html:
![alt text](./imagenes-formas-con-css/image-31.png)

vista:
![alt text](./imagenes-formas-con-css/image-32.png)

Hemos utilizado las variables --x e --y para simplificar código y generalizar.

## <span style="color:violet">Huevo (Egg)</span>
En este caso, jugamos con border-radius para conseguir la forma perfecta para crear un huevo. El truco está en conseguir el tamaño perfecto que coincida con la forma de los redondeos de las esquinas:

css:
![alt text](./imagenes-formas-con-css/image-33.png)

html:
![alt text](./imagenes-formas-con-css/image-34.png)

vista:
![alt text](./imagenes-formas-con-css/image-35.png)

## <span style="color:violet">Luna (Moon)</span>
Por último, vamos a crear una luna en un eclipse. En este ejemplo, observa que hemos creado las variables --size donde le damos un tamaño a la luna. Luego, en su interior, aplicamos una máscara con mask-image que será un gradiente radial en forma circular, que aplicaremos en el círculo para restar su interior y quedarnos con el borde de la luna.

Con los sliders de las variables --x e --y, podemos modificar la posición del gradiente utilizado en la máscara y comprobar como quedaría:

css:
![alt text](./imagenes-formas-con-css/image-36.png)

js:
![alt text](./imagenes-formas-con-css/image-37.png)

html:
![alt text](./imagenes-formas-con-css/image-38.png)

vista:
![alt text](./imagenes-formas-con-css/image-39.png)
![alt text](./imagenes-formas-con-css/image-40.png)
![alt text](./imagenes-formas-con-css/image-41.png)
![alt text](./imagenes-formas-con-css/image-42.png)
![alt text](./imagenes-formas-con-css/image-43.png)
![alt text](./imagenes-formas-con-css/image-44.png)
![alt text](./imagenes-formas-con-css/image-45.png)
![alt text](./imagenes-formas-con-css/image-46.png)
![alt text](./imagenes-formas-con-css/image-47.png)
![alt text](./imagenes-formas-con-css/image-48.png)
![alt text](./imagenes-formas-con-css/image-49.png)
![alt text](./imagenes-formas-con-css/image-50.png)
![alt text](./imagenes-formas-con-css/image-51.png)
![alt text](./imagenes-formas-con-css/image-52.png)
![alt text](./imagenes-formas-con-css/image-53.png)

Como ves, todo se basa en descomponer la forma que deseas en formas geométricas básicas. Si quieres crear una forma concreta, lo mejor es que hagas esa tarea de separación y luego las unas. En algunos casos puede ser más complejo porque pueden añadirse ciertas limitaciones, como que sólo permite utilizar colores planos o similares.



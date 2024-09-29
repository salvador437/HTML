# <span style="color:lime"><center>Barras de desplazamiento</center></span>

Una necesidad bastante común en un sitio web, es la de estilar o dar estilo a las barras de desplazamiento del navegador (o de una de las secciones o partes de la página) para que estén más acorde con el diseño del sitio, ya que las barras de progreso por defecto del sistema muchas veces no encajan con el «look and feel» del sitio web.

Para ello, tenemos una serie de propiedades interesantes que veremos a continuación, y que son las que deberían utilizarse en primer lugar.

## <span style="color:violet">Dar estilo a las barras de progreso</span>
Para dar estilo a las barras de progreso tenemos las siguientes propiedades en el estándar:

![alt text](./imagenes-barras-de-desplazamiento/image.png)

Veamos un ejemplo de estas propiedades aplicadas a una sección de texto:

css:
![alt text](./imagenes-barras-de-desplazamiento/image-1.png)

html:
![alt text](./imagenes-barras-de-desplazamiento/image-2.png)![alt text](imagenes-barras-de-desplazamiento/image-3.png)
vista:
![alt text](./imagenes-barras-de-desplazamiento/image-4.png)

## <span style="color:violet">La propiedad scrollbar-gutter</span>
La palabra gutter hace referencia a un «canal», espacio o hueco que se puede configurar a la hora de crear barras de desplazamiento.

![alt text](./imagenes-barras-de-desplazamiento/image-5.png)

La última opción, both-edges, realmente es un valor que se puede añadir a las anteriores para indicar esa característica.

Veamos algunos ejemplos:

![alt text](./imagenes-barras-de-desplazamiento/image-6.png)

## <span style="color:violet">Estilar barras de progreso (legacy)</span>
Lo que hemos visto anteriormente es la forma oficial para estilar una barra de desplazamiento. Sin embargo, en muchas situaciones nos puede parecer insuficiente, ya que necesitamos mayor personalización.

Existen mecanismos de personalización más avanzados que explicaremos a continuación, sin embargo, el gran problema de estos mecanismos es que están desarrollados por y para el motor webkit (Safari), y por extensión blink (Chrome y Edge), pero al no ser estandares, no funcionan ni planean funcionar en servo (Firefox).

El punto bueno, es que son mucho más personalizables (y complejos) que las propiedades anteriores. Si aún así te interesa utilizarlos, veamos una explicación.

Para utilizar estos mecanismos de personalización debemos utilizar unos pseudoelementos propios de los navegadores basados en webkit o blink. Estos pseudoelementos se escriben prefijados de ::-webkit- y funcionan de una forma particular.

Cuidado al utilizar los pseudoelementos ::-webkit-, no puedes usarlos con Nesting ni unirlos a otros fragmentos de código. Deben ser individuales ya que el navegador los procesa de forma aislada.

## <span style="color:violet">Scrollbar con ::-webkit-scrollbar)</span>
Comencemos con el pseudoelemento ::-webkit-scrollbar, que nos permite dar estilo a la barra de desplazamiento en conjunto. Antes de comenzar, examina el código de .container y observa que estamos cambiando el tamaño del elemento e indicando un overflow-y: scroll para forzar a que haya barra de desplazamiento en el eje Y (vertical).

Una vez hecho esto, podemos utilizar nuestra pseudoclase con el elemento que queramos, o con body si queremos aplicarlo a la barra de desplazamiento global del navegador:

css:
![alt text](./imagenes-barras-de-desplazamiento/image-7.png)

html:
![alt text](./imagenes-barras-de-desplazamiento/image-8.png)

js:
![alt text](./imagenes-barras-de-desplazamiento/image-9.png)

vista:
![alt text](./imagenes-barras-de-desplazamiento/image-10.png)

Observa que aquí lo único que hacemos es cambiar el color de fondo de la barra de desplazamiento y el tamaño de ancho de la misma. Sin embargo, no contiene nada porque aún no falta estilar las demás partes, que veremos a continuación.

## <span style="color:violet">El fondo con ::-webkit-scrollbar-track</span>
Con el pseudoelemento ::-webkit-scrollbar-track podemos cambiar el fondo por donde se desplaza la barra de desplazamiento. Ten en cuenta que existe tanto un track como un track-piece, donde este último es una región más interna por donde se puede mover la barra de desplazamiento:

![alt text](./imagenes-barras-de-desplazamiento/image-11.png)

Normalmente, con utilizar track nos basta, pero si quieres ver bien la diferencia añade un margin: 10px a cada elemento y verás rápidamente la porción que ocupa cada uno.

## <span style="color:violet">La barra con ::-webkit-scrollbar-thumb</span>
Además, también tenemos el pseudoelemento ::-webkit-scrollbar-thumb que aplica estilos a la barra de desplazamiento propiamente dicha. Probablemente, es el elemento más importante de los que hemos visto:

![alt text](./imagenes-barras-de-desplazamiento/image-12.png)

Observa que podemos usar :hover para cambiar estilo cuando mueves el ratón por encima (o :active para cuando pulsas). Vamos a añadir el código que hemos visto hasta ahora al ejemplo inicial anterior:

css:
![alt text](./imagenes-barras-de-desplazamiento/image-13.png)
![alt text](./imagenes-barras-de-desplazamiento/image-14.png)

Si lo quisieras podrías añadir otras propiedades interesantes. Por ejemplo, un border-radius: 10px al thumb para hacer que la barra de desplazamiento esté redondeada. Recuerda que no todas las propiedades CSS funcionan en este pseudoelemento.

## <span style="color:violet">Los botones con ::-webkit-scrollbar-button</span>
Observa que hasta ahora puedes mover la barra de desplazamiento tanto arrastrando el thumb como pulsando en las zonas vacías del track. Sin embargo, es posible que quieras añadir los clásico botones de desplazamiento, si te parece más intuitivo.

Esto se hace con el pseudoelemento ::-webkit-scrollbar-button, que se puede configurar bastante:

![alt text](./imagenes-barras-de-desplazamiento/image-15.png)

Si añades este fragmento de código, verás que aparecen a los extremos unos cuadraditos que son los botones de las barras de desplazamiento. Sin embargo, por defecto aparecen sin icono, ni nada en su interior. Vamos a ponerle solución.

## <span style="color:violet">Modificadores para los botones</span>
Existen varios modificadores para nuestros botones, que podemos utilizar en ::-webkit-scrollbar-button:

![alt text](./imagenes-barras-de-desplazamiento/image-16.png)

Ten en cuenta que estos modificadores se añaden al final y son acumulables, por lo que puedes usar varios. Veamos un ejemplo donde además, utilizamos background para añadir un icono SVG para las flechas. En este caso lo hacemos con svg inline, pero se puede perfectamente hacer con un fichero externo .svg:

![alt text](./imagenes-barras-de-desplazamiento/image-17.png)

En lugar de :increment o :decrement también podemos utilizar :start o :end, que puede ser más intuitivo en el caso de necesitarlo.

## <span style="color:violet">El redimensionador con ::-webkit-resizer</span>
En algún caso podríamos necesitar tener un redimensionador. Para ello, en el CSS del elemento se suele indicar la propiedad resize``con los valores both, horizontalovertical`. Si lo hacemos, veremos que en una esquina nos aparece un redimensionador.

![alt text](./imagenes-barras-de-desplazamiento/image-18.png)

Este redimensionador se puede estilar utilizando el pseudoelemento ::-webkit-resizer. Veámoslo en funcionamiento con todo lo anterior que hemos aprendido en este artículo:

css:
![alt text](imagenes-barras-de-desplazamiento/image-19.png)
![alt text](imagenes-barras-de-desplazamiento/image-20.png)
![alt text](imagenes-barras-de-desplazamiento/image-21.png)

html:
![alt text](imagenes-barras-de-desplazamiento/image-22.png)

vista:
![alt text](imagenes-barras-de-desplazamiento/image-23.png)

## <span style="color:violet">Mejora progresiva</span>
Recuerda que las propiedades iniciales que vimos son las propiedades estándar y las que deberíamos utilizar en primer lugar. Luego, si queremos mayor personalización para los navegadores que lo soporten, podríamos añadir este mecanismo orientado a webkit o blink.

La mejor forma de realizar esto, es utilizar la regla @supports, donde podemos definir como queremos utilizarlo:

![alt text](imagenes-barras-de-desplazamiento/image-24.png)



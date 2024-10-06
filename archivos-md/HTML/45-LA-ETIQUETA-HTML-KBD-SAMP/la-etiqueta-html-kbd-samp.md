# <span style="color:lime"><center>La etiqueta HTML < kbd > y < samp >.<center></center></span>

En un documento HTML podríamos querer representar la entrada de datos o información por parte del usuario. Por ejemplo, en un documento debemos representar lo que debe indicar el usuario para realizar una acción.

Esta entrada de datos, generalmente, se hace por medio de un teclado, aunque también podrían utilizarse otras vías como comandos de voz o similares.

## <span style="color:orange">La etiqueta < kbd >.</span>
La etiqueta < kbd > se utiliza precisamente para representar la entrada de datos por parte del usuario. El nombre de la etiqueta proviene de keyboard, ya que tradicionalmente siempre se ha utilizado el teclado para proporcionar información por parte del usuario.

El ejemplo más común y fácil de entender es la entrada de datos mediante combinaciones de teclado para realizar una acción determinada.

## <span style="color:orange">Combinaciones de teclas.</span>
Veamos un ejemplo práctico de la etiqueta < kbd >. Necesitamos indicar al lector que al pulsar una cierta combinación de teclas, podrá abrir una nueva pestaña en el navegador.

Para ello, haremos lo siguiente:

html:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image.png)

vista:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image-1.png)

Ahora, podemos aprovechar CSS para dar estilo a estas etiquetas y que simulen ser teclas del teclado:

html:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image-2.png)

css:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image-3.png)

vista:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image-4.png)

## <span style="color:orange">La etiqueta < samp >.</span>
La etiqueta < samp > es la opuesta a la etiqueta < kbd >. Si la última representa la entrada de datos por parte del usuario a la máquina, la etiqueta < samp > nos permite representar la salida de la información que proviene de una máquina, hacia el usuario.

Mediante esta etiqueta podemos mostrar la salida de un programa o sistema a un usuario:

html:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image-5.png)

vista:
![alt text](./imagenes-la-etiqueta-html-kbd-samp/image-6.png)

De esta forma, podemos indicar tanto entrada como salida de datos desde una máquina.


# <span style="color:lime"><center>Pseudoelementos: ¿Qué son?</center></span>

Hasta ahora, hemos visto selectores básicos, atributos, combinadores y pseudoclases. Sin embargo, existe una última categoría, un poco más extraña y fuera de lo común, pero que en muchos casos nos puede resultar bastante interesante para dar estilo en ciertas situaciones.

Los pseudoelementos son una característica de CSS que permite hacer referencias a «comportamientos virtuales no tangibles».

¿Qué significa esto? Dicho de otra forma: Los pseudoelementos permiten seleccionar y dar estilo a elementos que no existen en el HTML, o que no son un simple elemento en sí. La sintaxis de los pseudoelementos está precedida de dos puntos dobles (::) para diferenciarlos de las pseudoclases, las cuales sólo tienen dos puntos (:).

![alt text](./imagenes-pseudoelementos/sintaxis-pseudoelementos.png)

La sintaxis con :: no surgió desde los inicios de CSS, por lo que aún hoy en día es posible encontrar fragmentos de código desactualizados que utilizan pseudoelementos como ::before o ::after con la sintaxis de pseudoclase: :before y :after.

## <span style="color:violet">Tipos de pseudoelementos</span>
Existen varios tipos de pseudoelementos, que se encuentran organizados en categorías. Puedes encontrarlos en la siguiente tabla:

![alt text](./imagenes-pseudoelementos/image.png)

## <span style="color:violet">Otros pseudoelementos</span>
Al margen de los pseudoelementos anteriores, explicados en su respectiva sección, nos quedan algunos pseudoelementos sin catalogar.

Vamos a repasarlos:

![alt text](./imagenes-pseudoelementos/image-1.png)

Veamos cada uno de ellos.

## <span style="color:violet">Pseudoelemento ::marker</span>
El pseudoelemento ::marker sirve para hacer referencias a los signos o marcas de la listas (ol o ul), en el caso de que queramos que tengan un estilo diferente al del texto de la lista.

En este ejemplo se aplica el estilo a los elementos <li> de los ítems de una lista "ul":

css:
![alt text](./imagenes-pseudoelementos/image-2.png)

html:
![alt text](./imagenes-pseudoelementos/image-3.png)

vista:
![alt text](./imagenes-pseudoelementos/image-4.png)

Ten en cuenta que ciertas propiedades CSS puede que no tengan efecto en este pseudoelemento. Sin embargo, propiedades como font-size, color o content funcionarán correctamente.

## <span style="color:violet">Pseudoelemento ::backdrop</span>
El pseudoelemento ::backdrop nos permite aplicar estilos como oscurecer o desenfocar el fondo detrás de un elemento para darle más protagonismo al elemento que está en primer plano. Este pseudoelemento debe utilizarse en un diálogo o mensaje modal <dialog>, que comunica información importante y hay que prestarle atención y poner el foco en él.

Veamos un pequeño ejemplo:

css:
![alt text](./imagenes-pseudoelementos/image-5.png)

html:
![alt text](./imagenes-pseudoelementos/image-6.png)

js:
![alt text](./imagenes-pseudoelementos/image-7.png)

vista:
![alt text](./imagenes-pseudoelementos/image-8.png)

En este caso, el pseudoelemento ::backdrop aplicará los estilos al contenido de fondo del diálogo, sin que afecte al mismo. También se podría utilizar con una imagen de fondo, junto a la propiedad CSS backdrop-filter con el valor blur(3px) (o similar). En ese caso, se desenfocaría la imagen y se le restará importancia al fondo y el usuario se centrará en el mensaje o la información de primer plano.

## <span style="color:violet">Pseudoelemento ::placeholder</span>
Mediante el pseudoelemento ::placeholder podemos dar estilos particulares a los elementos <input> que tienen el atributo placeholder definido. El atributo placeholder sirve para indicar una sugerencia o mensaje de ayuda o de información con la finalidad de ese campo de texto, normalmente una ayuda de lo que deben escribir o similar.

css:
![alt text](./imagenes-pseudoelementos/image-9.png)

html:
![alt text](./imagenes-pseudoelementos/image-10.png)

vista:
![alt text](./imagenes-pseudoelementos/image-11.png)
Con ::placeholder podremos cambiar este color, por ejemplo, que suele ser un gris apagado por defecto. Ten en cuenta que afectará sólo al mensaje de placeholder, no a las dimensiones del propio elemento "input".

## <span style="color:violet">Pseudoelemento ::file-selector-button</span>
El pseudoelemento ::file-selector-button hace referencia al <button> que se incluye dentro de un elemento <input type="file">, o lo que es lo mismo, un botón para enviar ficheros a través de un formulario. De esta forma, podemos personalizar la apariciencia del botón del formulario.

css:
![alt text](./imagenes-pseudoelementos/image-12.png)

html:
![alt text](./imagenes-pseudoelementos/image-13.png)

vista:
![alt text](./imagenes-pseudoelementos/image-14.png)
![alt text](./imagenes-pseudoelementos/image-15.png)


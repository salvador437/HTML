# <span style="color:lime">Listas CSS</span>

Al crear listas HTML mediante las etiquetas "ol" o "ul", dichas etiquetas poseen propiedades CSS específicas para alterar el estilo o características de las marcas o viñetas que se crean a la izquierda de los items de la lista, mediante la etiqueta HTML "li".

## <span style="color:violet">Propiedades CSS para listas</span>
Por ejemplo, a continuación tenemos las propiedades principales de las listas:

![alt text](./imagenes-listas-css/image.png)

## <span style="color:violet">La propiedad list-style-image</span>
A través de la propiedad list-style-image podemos indicar la URL de una imagen para utilizarla a modo de icono o viñeta en cada ítem de la lista, es decir, en cada ítem "li". Esta propiedad, por defecto, tiene el valor none, o lo que es lo mismo, no establece ninguna imagen por cada ítem de la lista.

css:
![alt text](./imagenes-listas-css/image-1.png)

html:
![alt text](./imagenes-listas-css/image-2.png)

vista:
![alt text](./imagenes-listas-css/image-3.png)

Un detalle a tener en cuenta, es que esta propiedad se puede usar tanto en los ítems "li" de cada punto de la lista, como en sus contenedores "ul" o "ol".

## <span style="color:violet">La propiedad list-style-position</span>
Por otro lado, la propiedad list-style-position permite establecer una indentación a todos los ítems de la lista, estableciendolos desplazados a la derecha (inside), el lado interior de la lista, o sin desplazar (outside), el lado exterior de la lista, opción por defecto.

css:
![alt text](./imagenes-listas-css/image-4.png)

html:
![alt text](./imagenes-listas-css/image-5.png)

vista:
![alt text](./imagenes-listas-css/image-6.png)

## <span style="color:violet">La propiedad list-style-type</span>
La tercera propiedad, list-style-type nos permite indicar que tipo de viñetas tendrán las listas (en el caso de no estar utilizando ningun imagen). Se establecen varios grupos que veremos en el siguiente apartado. Cada uno de ellos se puede utilizar con cualquier tipo de lista, pero generalmente, se recomienda tener en cuenta el tipo de lista. Por ejemplo, si tenemos una lista "ul" (no ordenada), aunque es posible, quizás una viñeta numerada no tenga mucho sentido.

Por defecto, las listas "ul" (no numeradas) utilizan la opción disc por defecto, mientras que las listas "ol" (numeradas) utilizan la opción decimal por defecto, mostrando una lista numérica decimal.

## <span style="color:violet">Viñetas CSS para las listas</span>
A través de la propiedad list-style-type que hemos mencionado podemos cambiar el tipo de viñeta que utilizaremos en una lista a nuestro antojo. Conviene conocer todos los tipos que existen, que aunque algunos son muy sencillos, tenemos muchos otros que dependen de los idiomas, sistemas numéricos u otros aspectos.

## <span style="color:violet">Listas con símbolos</span>
Este primer grupo, especialmente indicado para listas sin orden "ul", por ejemplo, donde se utilizará un símbolo como viñeta que no representa ningún orden específico:

![alt text](./imagenes-listas-css/image-7.png)

## <span style="color:violet">Listas numéricas</span>
Si lo que queremos es establecer una lista numerada "ol", los valores recomendados deberían ser uno de los siguientes:

![alt text](./imagenes-listas-css/image-8.png)

Ten en cuenta que en algunos navegadores o sistemas operativos puede que los apartados anteriores no se muestren correctamente, ya que los está generando a partir de la compatibilidad del navegador utilizado.

## <span style="color:violet">Listas alfabéticas</span>
En el caso de querer utilizar una lista numerada "ol", pero querer "numerarla" con letras, es posible con alguna de estas posibilidades:

![alt text](./imagenes-listas-css/image-9.png)

## <span style="color:violet">Listas complejas</span>
Dentro de las listas complejas podemos encontrar un primer grupo japonés, un segundo grupo coreano y un tercer grupo chino:

![alt text](./imagenes-listas-css/image-10.png)

## <span style="color:violet">El pseudoelemento ::marker</span>
Al utilizar listas, puedes utilizar el pseudoelemento ::marker para hacer referencia a la viñeta en cuestión. De esta forma, podrás cambiar los estilos de dicha viñeta o retocarlos. Observa el siguiente ejemplo:

css:
![alt text](./imagenes-listas-css/image-11.png)

html:
![alt text](./imagenes-listas-css/image-12.png)

vista:
![alt text](./imagenes-listas-css/image-13.png)

Ten en cuenta que no es posible utilizar cualquier propiedad en este pseudoelemento, y solo es posible utilizar algunas propiedades como color, content u otras.

## <span style="color:violet">Atajo: La propiedad list-style</span>
Como en la mayoría de propiedades de CSS, existe una propiedad "shorthand" de atajo que nos permite indicar los valores anteriores en una sola propiedad. Para ello, utilizaremos list-style con el orden aconsejado siguiente:

css:
![alt text](./imagenes-listas-css/image-14.png)

html:
![alt text](./imagenes-listas-css/image-15.png)

vista:
![alt text](./imagenes-listas-css/image-16.png)

Observa que en primer lugar utilizaremos el valor de la propiedad list-style-type, en segundo lugar el valor de la propiedad list-style-position y en tercer y último lugar, el valor de la propiedad list-style-image. En caso de no necesitar indicar alguno de ellos, simplemente podemos omitirlo.


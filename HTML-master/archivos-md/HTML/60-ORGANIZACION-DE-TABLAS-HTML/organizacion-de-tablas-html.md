# <span style="color:lime"><center>Organización de tablas HTML.<center></center></span>

Por defecto, al crear una tabla, el navegador se encarga de irla creando a medida que va leyendo las etiquetas, por lo que la tabla se crea en el orden que se han especificado sus elementos, desde arriba hacia abajo.

Sin embargo, podemos utilizar una serie de etiquetas contenedoras semánticas para tablas que nos permitirán incluso establecer la zona de la tabla donde deben aparecer, de forma que el navegador se encarga de reorganizarla a la hora de renderizar.

Estas etiquetas semánticas son las siguientes:

![alt text](./imagenes-organizacion-de-tablas-html/image.png)

Supongamos la siguiente tabla:

html:
![alt text](./imagenes-organizacion-de-tablas-html/image-1.png)
![alt text](./imagenes-organizacion-de-tablas-html/image-2.png)

css:
![alt text](./imagenes-organizacion-de-tablas-html/image-3.png)

vista:
![alt text](./imagenes-organizacion-de-tablas-html/image-4.png)

A estas etiquetas de tabla y atributos que ya hemos visto en artículos anteriores, podemos añadir las mencionadas nuevas etiquetas, definiendo así la zona donde aparecerán las diferentes partes de la tabla, aunque no tengan el orden correcto.

## <span style="color:orange">La etiqueta < caption >.</span>
La etiqueta < caption > debe aparecer en el interior de la tabla < table > y como primer elemento inmediato. En su interior, se establece una leyenda que hará referencia a la tabla, donde podemos describirla o dar contexto sobre los datos que contiene.

Si visualmente queremos que el < caption > aparezca en otra parte, podemos utilizar una propiedad CSS para ello:

![alt text](./imagenes-organizacion-de-tablas-html/image-5.png)

Por defecto, esta propiedad caption-side viene establecida a top, pero podemos darle valor bottom para colocar abajo la leyenda.

## <span style="color:orange">Agrupaciones de partes de la tabla.</span>
Las etiquetas < thead >, < tbody > y < tfoot > son las etiquetas semánticas de agrupación de las tablas. Con ellas podemos definir mediante estas etiquetas "invisibles", la zona donde queremos que aparezca cada parte de la tabla.

Por ejemplo, observa que en el siguiente fragmento de código, se ha colocado intencionadamente la etiqueta < tfoot > al principio de la tabla, antes de < tbody > y < thead >. Aunque lo normal no es hacer esto, comprobarás que aunque el footer esté en primer lugar, en la tabla será renderizado al final.

Veamos el fragmento de código:

html:
![alt text](./imagenes-organizacion-de-tablas-html/image-6.png)
![alt text](./imagenes-organizacion-de-tablas-html/image-7.png)

css:
![alt text](./imagenes-organizacion-de-tablas-html/image-8.png)

vista:
![alt text](./imagenes-organizacion-de-tablas-html/image-9.png)

Esto nos puede servir para crear tablas de forma más precisa sin tener que mantener una estructura lógica y realista (aunque siempre se recomienda hacerlo). En algunos lenguajes de programación puedes necesitar construir la tabla de forma dinámica a medida que se procesan ciertos detalles, por lo que esto podría ser bastante útil e interesante.


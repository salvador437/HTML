# <span style="color:lime">La etiqueta HTML < s >.</span>

En ciertas ocasiones nos puede interesar marcar un fragmento de texto como irrelevante o impreciso, de forma que se muestre que la información estuvo presente durante un tiempo, pero se ha modificado posteriormente.

## <span style="color:orange">La etiqueta < s >.</span>
La etiqueta < s > nos permite marcar fragmentos de texto para destacar su irrelevancia en la actualidad. Ejemplos de esto podría ser textos donde la información ha cambiado, o no es la actual. Un ejemplo claro, podría ser el precio de un producto: durante un tiempo fue su precio, pero actualmente tiene otro debido a una oferta.

html:
![alt text](./imagenes-la-etiqueta-html-s/image.png)

vista:
![alt text](./imagenes-la-etiqueta-html-s/image-1.png)

Ten en cuenta que, aunque por defecto visualmente se muestra un texto tachado, los usos de la etiqueta < s > no incluyen las ediciones de documentos: marcar un fragmento de texto como eliminado, o destacar un nuevo fragmento añadido. Para eso, tenemos las etiquetas < ins > y < del >.

## <span style="color:orange">La etiqueta < strike > .</span>
En versiones antiguas de HTML, se utilizaba una etiqueta <strike> para marcar textos como tachados. Como esto era sólo un aspecto visual y en HTML5 nos movemos a un mundo semántico, esa etiqueta dejó de tener sentido en HTML, por lo que actualmente se trata de una etiqueta obsoleta.

Hoy en día, si queremos utilizar algo similar, se recomienda utilizar < span > junto a la propiedad CSS text-decoration: line-through, que marca el texto visualmente tachado. Otras etiquetas interesantes pueden ser la mencionada < s >, o la etiqueta para marcar eliminaciones de textos < del >.

Esta etiqueta está marcada como obsoleta, por lo que ya no existe en HTML5. No debe ser utilizada, aunque algunos navegadores aún la interpreten por motivos de retrocompatibilidad.


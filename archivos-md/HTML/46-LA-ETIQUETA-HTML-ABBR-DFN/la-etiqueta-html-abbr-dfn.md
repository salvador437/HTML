# <span style="color:lime"><center>La etiqueta HTML < abbr > y < dfn >.<center></center></span>

Es posible que escribiendo un documento web nos interese definir palabras, conceptos, o abreviar términos. Para ello, tenemos una serie de etiquetas interesantes, vamos a pasar a explicarlas.

## <span style="color:orange">La etiqueta < abbr >.</span>
La etiqueta < abbr > nos permite indicar una abreviatura o acrónimo, colocando en el interior el término abreviado, y opcionalmente, en el atributo title el término expandido o completo.

Veamos un ejemplo para ver como funciona:

html:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image.png)

vista:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-1.png)

El término Km es un acrónimo de Kilómetro. Con este ejemplo anterior, podríamos estar utilizando correctamente la etiqueta < abbr >. Sin embargo, es posible indicar en el atributo title el significado expandido del término, dando así más información:

html:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-2.png)

vista:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-3.png)

En resumen, con esta etiqueta podremos definir:

   - Acrónimos: Bit (BInary digiT), Teleñeco (TELEvisión muÑECO), etc...
   - Abreviaturas: cm (CentíMetro), hr (HoRas), min (MINutos), etc...

No todas las abreviaturas requieren el uso de la etiqueta < abbr >. Por ejemplo, si no necesitamos aclarar una abreviatura (está clara en el contexto) o simplemente ya se ha aclarado anteriormente, no es necesario utilizar la etiqueta < abbr >.

## <span style="color:orange">La etiqueta < dfn >.</span>
La etiqueta < dfn > permite establecer el término de una definición, que posteriormente se va a detallar. Por ejemplo, observa el siguiente fragmento de código:

html:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-4.png)

vista:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-5.png)

Sin embargo, esto se podría complicar un poco y utilizar simultáneamente una definición y una abreviatura. Veamos como podríamos escribir el marcado HTML de una combinación de ambas:

html:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-6.png)

vista:
![alt text](./imagenes-la-etiqueta-html-abbr-dfn/image-7.png)

Recuerda también que puedes hacer uso de elementos como < dl >, < dt > y < dd > para crear una lista de descripciones donde tengas múltiples etiquetas < dfn >. Puedes ver más información en [lista de descripciones](https://lenguajehtml.com/html/agrupacion/etiqueta-html-dl/).


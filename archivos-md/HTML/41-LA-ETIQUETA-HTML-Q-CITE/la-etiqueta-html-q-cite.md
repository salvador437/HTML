# <span style="color:lime">La etiqueta HTML < q > y < cite >.</>

Si al redactar un texto en un documento web necesitamos hacer referencia a otra cosa, probablemente tengamos dudas de que elemento HTML utilizar para hacer la referencia. Existen varias etiquetas HTML que podrían ser apropiadas, vamos a explicar como funcionan y en que casos debemos utilizarlas:

![alt text](./imagenes-la-etiqueta-html-q-cite/image.png)

## <span style="color:orange">La etiqueta <q>.</>
La etiqueta HTML < q > se utilizar para hacer referencia a una frase o mensaje desde otra fuente o contexto. Casos de uso típicos son citar una frase, un mensaje entrecomillado de otra persona, etc. Sin embargo, algunos casos no son los más apropiados para esta etiqueta < q >:

   - ✅ Citar frases, mensajes entrecomillados, etc...
   - ❌ Título de una obra
   - ❌ Nombre de una persona
   - ❌ Enlace de navegación a otra página

Así pues, un uso correcto de la etiqueta < q > podría ser el siguiente:

![alt text](./imagenes-la-etiqueta-html-q-cite/image-1.png)

## <span style="color:orange">El atributo cite.</>
Obsérvese que en esta etiqueta disponemos de un atributo opcional cite, mediante el cuál podemos hacer referencia a una URL donde aparece la fuente a la que hacemos referencia (en el siguiente ejemplo, a la ficha de la película de Batman), que es de donde procede la frase:

![alt text](./imagenes-la-etiqueta-html-q-cite/image-2.png)

En algunos casos, estas frases se pueden simplemente citar entre comillas sin necesidad de utilizar la etiqueta < q >. Sin embargo, en el caso de que utilicemos la etiqueta < q >, no debemos añadir el entrecomillado, ya que el propio navegador lo hará por nosotros.
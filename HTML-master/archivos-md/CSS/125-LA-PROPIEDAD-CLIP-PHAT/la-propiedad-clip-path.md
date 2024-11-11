# <span style="color:lime"><center>La propiedad clip-path</center></span>

Hace algún tiempo, existió una propiedad CSS llamada clip, cuya intención era permitir recortes con ciertas formas como rectángulos. Sin embargo, hoy en día ha sido marcada como obsoleta, en favor de una nueva propiedad llamada clip-path.

## <span style="color:violet">La propiedad clip-path</span>
Esta propiedad permite realizar un recorte con una forma concreta, ocultando toda la región externa del recorte. Su utilización es muy sencilla y permite realizar formas muy flexibles y versátiles.

La sintaxis de la propiedad es la siguiente:

![alt text](image.png)

La propiedad clip-path en general puede tomar estos tres tipos de valores:

   - none, el valor por defecto, donde no utilizamos ningún tipo de recorte (o lo desactivamos si lo había).
   - SHAPE, es decir, una forma básica específica
   - url(), donde indicamos una imagen SVG para utilizar un recorte personalizado usado en su interior mediante <clipPath>.

## <span style="color:violet">Formas básicas de recorte</span>
Con la propiedad clip-path podemos crear recortes con formas geométricas básicas, utilizando las siguientes funciones:

![alt text](image-1.png)

Estas formas básicas de recorte nos permiten establecer unos parámetros para definir así la forma geométrica detalladamente. Por ejemplo, observa como utilizamos la propiedad polygon():

css:
![alt text](image-2.png)

html:
![alt text](image-3.png)

vista:
![alt text](image-4.png)

Observa que indicamos 3 puntos de corte:

   - 0 0: El punto inicial
   - 100% 0: El segundo punto, arriba a la derecha
   - 50% 100%: El punto final, abajo al medio

El recorte sería el siguiente:

![alt text](clip-path-polygon.png)

Si quieres saber más sobre estos recortes, en este artículo explicamos esta y otras formas geométricas básicas diferentes que pueden ser utilizadas mediante la propiedad de clip-path.

## <span style="color:violet">Usando un SVG de recorte</span>
Además de las formas básicas, también podemos utilizar código SVG (o una imagen SVG externa) que contengan una definición de un elemento clipPath>. De esta forma, desde CSS le indicamos que utilice dicho recorte en una zona de nuestra página, pudiendo ayudarnos de SVG para hacer formas mucho más específicas.

La sintaxis es la siguiente, donde se hace referencia a un fichero externo mediante url():

![alt text](image-5.png)
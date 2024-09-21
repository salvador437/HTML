# <span style="color:lime"><center>Pseudoelementos tipográficos</center></span>

Aunque ::before y ::after suelen ser los ejemplos de pseudoelementos más frecuentes, existen muchos otros pseudoelementos. Por ejemplo, dentro de una categoría de pseudoelementos tipográficos, podemos encontrar los pseudoelementos ::first-letter o ::first-line:

![alt text](./imagenes-pseudoelementos-tipograficos/image.png)

## <span style="color:violet">El pseudoelemento ::first-letter</span>
El pseudoelemento ::first-letter, como su propio nombre indica, permite seleccionar y dar estilo a la primera letra del texto indicado. Así podremos recrear el efecto clásico de cuentos infantiles o algunas otras obras, donde la primera letra se establece mucho más grande que el resto del texto y con una tipografía decorativa mucho más llamativa.

css:
![alt text](./imagenes-pseudoelementos-tipograficos/image-1.png)

html:
![alt text](./imagenes-pseudoelementos-tipograficos/image-2.png)

vista:
![alt text](./imagenes-pseudoelementos-tipograficos/image-3.png)

En el caso del pseudoelemento ::first-letter, le damos estilo a la primera letra del texto, a la cuál le colocamos una tipografía (que cargamos de Google Fonts) y le establecemos un tamaño de texto mayor.

![alt text](./imagenes-pseudoelementos-tipograficos/first-letter-first-line.png)

Existe otro pseudoelemento denominado ::first-line, que explicamos a continuación.

## <span style="color:violet">El pseudoelemento ::first-line</span>
Por otro lado, el pseudoelemento ::first-line es muy útil para aplicar un estilo solamente a la primera línea del texto indicado. Puede ser interesante si queremos cambiar algún detalle, pero que afecte exclusivamente a la primera línea, independientemente del tamaño que tenga (lo calcula el navegador).

css:
![alt text](./imagenes-pseudoelementos-tipograficos/image-4.png)

html:
![alt text](./imagenes-pseudoelementos-tipograficos/image-5.png)

vista:
![alt text](./imagenes-pseudoelementos-tipograficos/image-6.png)

Obviamente, se puede aplicar a otros elementos o clases en el selector de CSS, en este caso lo hemos hecho a un elemento de párrafo "p", ya que se trata de un párrafo de texto.
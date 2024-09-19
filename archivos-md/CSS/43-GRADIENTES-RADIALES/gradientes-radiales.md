# <span style="color:lime"><center>Gradientes radiales</center></span>

Dentro de la categoría de gradientes tenemos una función que permite crear los llamados gradientes radiales. Estos son un tipo de degradado con formas circulares o elípticas. Para crearlos, sólo tenemos que utilizar la función radial-gradient() en lugar de la más conocida y frecuente función linear-gradient().

## <span style="color:violet">La función radial-gradient()</span>
Dentro de los gradientes radiales también tenemos diferentes modalidades. Como mínimo, debemos escoger una forma específica entre circle y ellipse (que si no es indicada, se usará ellipse), y los colores del gradiente a utilizar:

![alt text](./imagenes-gradientes-radiales/radial-gradient.png)

Veamos la sintaxis de las diferentes modalidades:

![alt text](./imagenes-gradientes-radiales/image.png)

Y ahora, apliquemos estas modalidades en algunos ejemplos de código con sus diferentes parámetros:

css:
![alt text](./imagenes-gradientes-radiales/image-1.png)

html:
![alt text](./imagenes-gradientes-radiales/image-2.png)

vista:
![alt text](./imagenes-gradientes-radiales/image-3.png)
![alt text](./imagenes-gradientes-radiales/image-4.png)

## <span style="color:violet">Forma del gradiente radial</span>
El primer parámetro de la función radial-gradient() es la forma del gradiente radial, que puede ser circle o ellipse, esta última la opción por defecto que se seleccionará de no indicar ninguna explícitamente.

![alt text](./imagenes-gradientes-radiales/image-5.png)

Donde el tamaño SIZE puede ser uno de los siguientes valores:

![alt text](./imagenes-gradientes-radiales/image-6.png)

Veamos algunos ejemplos:

css:
![alt text](./imagenes-gradientes-radiales/image-7.png)

html:
![alt text](./imagenes-gradientes-radiales/image-8.png)

vista:
![alt text](./imagenes-gradientes-radiales/image-9.png)

## <span style="color:violet">Posición del gradiente</span>
A cualquiera de las formas del gradiente se le puede indicar una posición específica para colocarlo en el fondo. Para ello, solo tenemos que indicar la palabra clave at, seguido del lugar donde queremos colocarlo:

![alt text](./imagenes-gradientes-radiales/image-10.png)

Un pequeño ejemplo para ilustrar como dar posición a un gradiente:

css:
![alt text](./imagenes-gradientes-radiales/image-11.png)

html:
![alt text](./imagenes-gradientes-radiales/image-12.png)

vista:
![alt text](./imagenes-gradientes-radiales/image-13.png)

Por su parte, indicar los colores del gradiente se hace exactamente de la misma forma que en los [gradientes lineales](https://lenguajecss.com/css/gradientes/linear-gradient/), salvo que en este caso, seguirán la forma circular o elíptica escogida.

## <span style="color:violet">La función repeating-radial-gradient()</span>
En lugar de utilizar la función radial-gradient() podemos utilizar la función repeating-radial-gradient() para indicar un patrón de colores que se repetirá continuamente.

El truco está en que los tamaños SIZE indicados a continuación del color, teniendo en cuenta que no debe llegar al 100%, y el navegador se encargará de completarlos y repetirlos una y otra vez hasta que no quede más espacio en el elemento HTML seleccionado:

css:
![alt text](./imagenes-gradientes-radiales/image-14.png)

html:
![alt text](./imagenes-gradientes-radiales/image-15.png)

vista:
![alt text](./imagenes-gradientes-radiales/image-16.png)

Como se puede ver, el patrón de colores se ajusta a los tamaños indicados y el navegador se encarga de repetirlos una y otra vez, lo que puede sernos de utilidad en muchas ocasiones.
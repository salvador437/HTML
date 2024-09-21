# <span style="color:lime"><center>Pseudoclases de estado</center></span>

Existen una serie de pseudoclases para comprobar el estado visual de un elemento que se considera modal, es decir, que «centran» la interacción del usuario en un elemento principal (y sus hijos) y no permiten la interacción con otros elementos hasta que se cierre ese elemento principal.

Estas pseudoclases son las siguientes:

![alt text](./imagenes-pseudoclases-de-estado/image.png)

Expliquemos un poco cada una de ellas.

## <span style="color:violet">La pseudoclase :fullscreen</span>
Mediante la pseudoclase :fullscreen podemos seleccionar elementos que se encuentren en modo pantalla completa, lo que habitualmente se realiza mediante la API FullScreen de Javascript.

html:
![alt text](./imagenes-pseudoclases-de-estado/image-1.png)

css:
![alt text](./imagenes-pseudoclases-de-estado/image-2.png)

js:
![alt text](./imagenes-pseudoclases-de-estado/image-3.png)

vista:
![alt text](./imagenes-pseudoclases-de-estado/image-4.png)

## <span style="color:violet">La pseudoclase :modal</span>
Mediante la pseudoclase :modal se puede seleccionar un elemento que está actuando como una ventana o elemento modal, o lo que es lo mismo, un elemento que centra la atención del usuario y no permite interacción con otros elementos que no son sus hijos.

En el ejemplo anterior, modificando :fullscreen por :modal continuaría siendo válido y funcionando porque un elemento a pantalla completa con .requestFullscreen() también es un elemento modal, ya que no permite interacción con otros elementos fuera de él hasta que se cierre el modo pantalla completa.

html:
![alt text](./imagenes-pseudoclases-de-estado/image-5.png)

css:
![alt text](./imagenes-pseudoclases-de-estado/image-6.png)

js:
![alt text](./imagenes-pseudoclases-de-estado/image-7.png)

vista:
![alt text](./imagenes-pseudoclases-de-estado/image-8.png)
![alt text](./imagenes-pseudoclases-de-estado/image-9.png)

También ten en cuenta que existe la posibilidad de que múltiples elementos sean modales, aunque sólo uno de ellos sea el que se encuentre activo y capaz de recibir interacciones.

En este ejemplo, hemos utilizado una etiqueta <dialog> para crear ventanas de diálogo, en este caso, una ventana modal. Puedes aprender más en este artículo sobre ventanas de [diálogo con HTML](https://lenguajehtml.com/html/interactivas/etiqueta-html-dialog/).


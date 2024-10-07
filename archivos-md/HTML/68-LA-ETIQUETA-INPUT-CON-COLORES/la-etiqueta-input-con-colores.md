# <span style="color:lime"><center>La etiqueta < input > con colores.<center></center></span>

En HTML5 se ha incluido un nuevo campo de entrada < input > que permite al usuario seleccionar un color específico. Dicho campo facilita una interfaz de usuario conocida como color picker, es decir, una ventana de diálogo selectora de colores que permite al usuario elegir un color específico de una rueda de colores o un sistema alternativo, generalmente dentro de uno de los diferentes modelos de [colores de CSS](https://lenguajecss.com/css/colores/codigos-color/).

## <span style="color:orange">El atributo type="color".</span>
La etiqueta que utilizaremos para mostrar esta interfaz será < input >, utilizando el atributo type al valor color. Ten en cuenta que el interfaz del color picker puede variar dependiendo del sistema operativo. Mientras en Windows saldrá de una forma, en dispositivos Apple o Android saldrá de otra:

![alt text](./imagenes-la-etiqueta-input-con-colores/image.png)

El usuario puede elegir un color en su interfaz de selección de colores y este color es guardado en el atributo value en formato hexadecimal.

html:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-1.png)

vista:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-2.png)
![alt text](./imagenes-la-etiqueta-input-con-colores/image-3.png)
![alt text](./imagenes-la-etiqueta-input-con-colores/image-4.png)

## <span style="color:orange">Color por defecto.</span>
También se puede indicar un atributo value para establecer un color por defecto. Este valor debe estar en formato hexadecimal, con o sin #. Sin embargo, otros esquemas de color como palabras clave (red, tomato, green, etc...), RGB, HSL, HWB, OKLCH u otras no serán válidas:

html:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-5.png)

vista:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-6.png)
![alt text](./imagenes-la-etiqueta-input-con-colores/image-7.png)
![alt text](./imagenes-la-etiqueta-input-con-colores/image-8.png)

Este campo puede ser potenciado combinándose con la etiqueta HTML < datalist >. Lo veremos en otro artículo más adelante, donde explicaremos como funciona.

## <span style="color:orange">Personalizar apariencia.</span>
Vamos a echar un vistazo a la forma de personalizar este campo de entrada. Para ello, utilizaremos CSS y unos pseudoelementos especiales para los campos de entrada de color.

![alt text](./imagenes-la-etiqueta-input-con-colores/image-9.png)

Veamos un ejemplo, donde modificamos los estilos para convertir el < input > de Color Picker en un elemento circular. Observa que utilizamos el background: none para quitar el color por defecto que tiene este campo. En el resto, le damos estilo para redondear las esquinas y añadirle un borde.

css:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-10.png)

html:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-11.png)

vista:
![alt text](./imagenes-la-etiqueta-input-con-colores/image-12.png)
![alt text](./imagenes-la-etiqueta-input-con-colores/image-13.png)

Ten en cuenta que la ventana de diálogo del Color Picker no es posible editarla con CSS, ya que es la que proporciona el sistema operativo. Windows, Mac/iOS, Linux o Android tienen su propio color picker particular.

Recuerda que esta API aún no es estable, por lo que hay que añadir el prefijo -webkit para dar soporte a navegadores basados en Chromium, y el prefijo -moz para dar soporte a Firefox. Cuando sea estable, simplemente escribiremos el código sin prefijos.

Ten en cuenta que no se pueden combinar dos selectores con prefijos diferentes, como es el caso de ::-webkit- y ::-moz-, ya que si el navegador no reconoce uno de ellos, ignorará y descartará el resto del selector.


# <span style="color:lime"><center>Textos con degradados</center></span>

En ciertas ocasiones nos gustaría utilizar textos con colores degradados. Sin embargo, podemos pensar que es algo imposible de realizar, puesto que la propiedad color para dar color a un texto no soporta gradientes. Aunque esto es cierto, existen algunos «trucos» para conseguir textos con gradientes.

## <span style="color:violet">Creando textos con gradiente</span>
Vamos a empezar por crear un pequeño fragmento de código CSS donde establecemos una tipografía, con un grosor bold y un tamaño concreto. Además, colocamos un degradado de fondo y un color de texto blanco:

css:
![alt text](./imagenes-textos-con-degradados/image.png)

html:
![alt text](./imagenes-textos-con-degradados/image-1.png)

vista:
![alt text](./imagenes-textos-con-degradados/image-2.png)

¡Un momento, Manz! Me has estafado. ¡No era esto lo que yo quería con «Texto con degradado». No te preocupes, esto es sólo un primer paso para hacer lo que buscas, en las siguientes líneas lo modificaremos.

## <span style="color:violet">La propiedad background-clip</span>
Existe una propiedad algo desconocida denominada background-clip. La mencionamos más en detalle en el post sobre [la propiedad background-image](https://lenguajecss.com/css/imagenes-y-fondos/propiedad-background-image/) y relacionadas. Sin embargo, esta propiedad, tiene un valor text no estándar, que viene muy bien para casos como este.

Observa que en el ejemplo anterior, hemos añadido el background-clip: text y parece que deja de funcionar el background-image:

css:
![alt text](./imagenes-textos-con-degradados/image-3.png)

html:
![alt text](./imagenes-textos-con-degradados/image-4.png)

js:
![alt text](./imagenes-textos-con-degradados/image-5.png)

vista:
![alt text](./imagenes-textos-con-degradados/image-6.png)
![alt text](./imagenes-textos-con-degradados/image-7.png)
![alt text](./imagenes-textos-con-degradados/image-8.png)

Sin embargo, lo que está ocurriendo es que background-clip: text está indicando al navegador, que recorte el fondo justo con el contorno del texto. Lo que ocurre, es que, como tenemos el color de texto en blanco, tapa este recorte y parece que ha inhabilitado el fondo, que en realidad se sigue efectuando.

Si cambiamos el valor de color a transparent o algún valor con canal alfa o transparencia, veremos el gradiente de fondo.

► Más sobre la propiedad [background-clip.](https://lenguajecss.com/css/imagenes-y-fondos/propiedad-background-image/#la-propiedad-background-clip-origin)

## <span style="color:violet">La propiedad -webkit-text-fill-color</span>
Hay que saber que el color: transparent con el background-clip: text puede que no funcione bien en algunos navegadores, por lo que suele ser más seguro utilizar la propiedad -webkit-text-fill-color.

Esta propiedad no es una propiedad estándar, sin embargo, está bien soportada en los navegadores actuales y se puede utilizar para conseguir el mismo efecto anterior, pero con mayor grado de compatibilidad.

Observa el siguiente ejemplo:

css:
![alt text](./imagenes-textos-con-degradados/image-9.png)

html:
![alt text](./imagenes-textos-con-degradados/image-10.png)

vista:
![alt text](./imagenes-textos-con-degradados/image-11.png)

Como puedes ver, se sigue observando el gradiente sin necesidad de usar color: transparent. Además, hemos modificado el gradiente añadiendole puntos de parada. Recuerda que puedes utilizar otros tipos de gradiente, como radial o cónico, y utilizar propiedades que los modifiquen.

## <span style="color:violet">Crear textos con bordes gradientes</span>
De la misma forma que hemos visto hasta ahora, podemos utilizar la propiedad -webkit-text-stroke que explicamos en el artículo contorno en tipografías. Esta propiedad hace lo mismo que -webkit-text-fill-color, pero en lugar de con el relleno, con el borde.

Esto nos permitiría establecer un color: white en nuestro texto, pero luego, con -webkit-text-stroke volver transparente el borde o contorno del texto y que se refleje el gradiente que tenemos de fondo:

css:
![alt text](./imagenes-textos-con-degradados/image-12.png)

html:
![alt text](./imagenes-textos-con-degradados/image-13.png)

vista:
![alt text](./imagenes-textos-con-degradados/image-14.png)

Recuerda que ciertas propiedades que hemos mencionado no son estándar, por lo que hay que incluir el prefijo -webkit en dichas propiedades.

## <span style="color:violet">Crear textos con imagen</span>
Si ya has trabajado con imágenes y gradientes en CSS, como te habrás imaginado, igual que utilizamos gradientes podemos utilizar imágenes, por lo que también podríamos crear un texto que en lugar de un degradado utilice una imagen.

Observa este ejemplo. Simplemente hemos cambiado el background-image por una imagen, en lugar de utilizar un gradiente:

css:
![alt text](./imagenes-textos-con-degradados/image-15.png)

html:
![alt text](./imagenes-textos-con-degradados/image-16.png)

vista:
![alt text](./imagenes-textos-con-degradados/image-17.png)

## <span style="color:violet">Crear textos con gradientes animados</span>
Y como habrás podido imaginar, también podemos animar los gradientes si queremos conseguir algún efecto un poco más llamativo. Para ello, creamos una [animación CSS](https://lenguajecss.com/css/animaciones/animaciones/), y posteriormente, le damos un tipo a la variable CSS --angle, para que el navegador sepa como debe crear su animación:

css:
![alt text](./imagenes-textos-con-degradados/image-18.png)
![alt text](./imagenes-textos-con-degradados/image-19.png)

html:
![alt text](./imagenes-textos-con-degradados/image-20.png)

vista:
![alt text](./imagenes-textos-con-degradados/image-21.png)

Como ves, varias formas interesantes de crear textos con degradados o imágenes.
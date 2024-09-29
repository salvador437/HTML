# <span style="color:lime"><center>Alinear y centrar con Grid CSS</center></span>

l igual que con la maquetación Flex CSS, Grid incorpora un sistema para alinear elementos que se basa en Flex y es incluso más potente, ya que permite la alineación de elementos en dos dimensiones, así como centrar o colocar elementos hijos del contenedor Grid.

## <span style="color:violet">Propiedades de alineación</span>
Existen una serie de propiedades que se pueden utilizar para colocar y ajustar nuestra cuadrícula grid o ajustar los ítems a lo largo de ella, de forma sencilla y cómoda. Algunas de estas propiedades probablemente ya las conocerás del módulo CSS flex, sin embargo, en grid pueden tener un comportamiento diferente.

Dichas propiedades pueden afectar al 1️⃣ eje principal o al 2️⃣ eje secundario del grid y son las siguientes:

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image.png)

Estas propiedades se aplican sobre el elemento contenedor padre, sin embargo, afectan tanto al contenedor como al comportamiento de los elementos hijos.

Antes de continuar, un pequeño resumen:

   - justify-items: Alinea los elementos (hijos) en horizontal (eje principal) dentro de cada celda.
   - align-items: Alinea los elementos (hijos) en vertical (eje principal) dentro de cada celda.
   - justify-content: Alinea el contenido (la cuadricula) en horizontal (eje secundario) en el contenedor padre.
   - align-content: Alinea el contenido (la cuadricula) en vertical (eje secundario) en el contenedor padre.

Es importante tener en cuenta que el grid se define mediante las propiedades vistas en el tema anterior. Con estas cuatro propiedades veremos como colocar los ítems hijos dentro de cada celda de la cuadrícula, o la colocación de la cuadrícula en el elemento padre contenedor.

De esta forma, podemos controlar prácticamente todos los aspectos de posicionamiento de grid. Mantén el valor stretch en todas las propiedades y ve variando una por una a diferentes valores, para ver las diferencias:
 
justify-items: start
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-2.png)

justify-items: end
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-3.png)

justify-items: center
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-4.png)


justify-items: stretch
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-5.png)


align-items: start
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-6.png)

align-items: end
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-7.png)

align-items:  center
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-8.png)

align-items: stretch
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-9.png)

justify-content: start
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-10.png)

justify-content: end
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-11.png)

justify-content: center
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-12.png)

justify-content: space-between
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-13.png)

justify-content: around
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-14.png)

justify-content: space-evenly
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-15.png)


align-content: start
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-16.png)

align-content: end
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-17.png)

align-content: center
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-18.png)

align-content: stretch
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-19.png)

align-content: space-between
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-20.png)

align-content: space-around
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-21.png)

align-content: space-evenly
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-22.png)

# <span style="color:lime"><center>Alineación de elementos</center></span>
## <span style="color:violet">La propiedad justify-items</span>
La primera propiedad, justify-items sirve para colocar los ítems de un contenedor grid a lo largo de sus celdas correspondientes, siempre en el eje principal (por defecto, en horizontal). Los valores que puede tomar esta propiedad son los siguientes:

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-23.png)

## <span style="color:violet">La propiedad align-items</span>
De forma análoga, la propiedad align-items sirve para colocar los ítems de un contenedor grid a lo largo de sus celdas correspondientes, pero en lugar de el eje principal, las coloca en el eje secundario (por defecto, en vertical). Los valores que puede tomar son los mismos que la propiedad anterior.

# <span style="color:lime"><center>Alineación de contenido</center></span>
## <span style="color:violet">La propiedad justify-content</span>
La propiedad justify-content permite modificar la distribución del contenido de la cuadrícula en su contenedor padre, a lo largo de su eje principal (por defecto, el horizontal). Los valores que puede tomar son los siguientes:

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-24.png)

## <span style="color:violet">La propiedad align-content</span>
De forma análoga, la propiedad align-content sirve para colocar el contenido de la cuadrícula en su contenedor padre, pero a lo largo de su contenedor secundario (por defecto, el vertical). Los valores que puede tomar son exactamente los mismos que la propiedad anterior.

Vamos a partir de un escenario con el siguiente código HTML y CSS, donde planteamos unas bases y profundizaremos en las propiedades anteriormente mencionadas:

css:
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-25.png)

html:
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-26.png)

vista:
![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-27.png)

Observa que tenemos 6 elementos hijos, dentro de un contenedor donde hemos creado un grid de 2 columnas x 3 filas (en rojo, realmente es invisible). Observa hemos aplicado las cuatro propiedades indicadas en la tabla de arriba con el valor center. A continuación, vamos a variar sólo una de ellas cada vez, colocando el valor end para observar su repercusión.

Este sería el resultado al aplicar cada una de las propiedades individuales anteriores:

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/alinear-grid-css.png)

## <span style="color:violet">Alineaciones específicas</span>
En el caso de que queramos que uno de los ítems hijos tenga una distribución diferente al resto, podemos aplicar en el elemento hijo la propiedad justify-self (eje principal) o align-self (eje secundario) sobreescribiendo su distribución su general, y aplicando una específica.

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-28.png)

Recuerda que estas propiedades funcionan exactamente igual que sus análogas justify-items o align-items y tienen los mismos valores, sólo que en lugar de indicarse en el elemento padre contenedor, se hace sobre un elemento hijo y repercute en dicho elemento hijo específicamente.

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-29.png)

Con ellas conseguiremos que nuestro código sea más simple, menos texto y más directo:

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-30.png)

## <span style="color:violet">Orden de los elementos</span>
Por último, tenemos la propiedad order. Funciona exactamente igual que como funciona en flex. Es una propiedad mediante la cual podemos modificar y establecer un orden de los elementos mediante números que actuarán como «peso» del elemento:

![alt text](./imagenes-Alinear-y-centrar-con-Grid-CSS/image-31.png)

Por defecto, todos los elementos hijos de un contenedor flex tienen establecido un order por defecto al valor 0. Si indicamos una propiedad order con un valor numérico diferente, recolocará los ítems según dicho número, colocando antes los elementos con un número order más pequeño (incluso números negativos) y los elementos con números más altos después.
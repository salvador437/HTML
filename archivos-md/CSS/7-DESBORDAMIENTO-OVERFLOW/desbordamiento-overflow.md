# <span style="color:lime"><center>Desbordamiento (Overflow)</center></span>

Como vimos en el artículo anterior, si tenemos suficiente contenido en un elemento y hemos forzado el tamaño de ancho y/o alto del elemento para que tenga un tamaño específico (que es más pequeño que su contenido), se va a producir el caso en el que su contenido no tiene suficiente espacio, por lo que se producirá un desbordamiento CSS:

![alt text](./imagenes-desbordamiento-overflow/css-is-awesome.png)

Para controlar estos casos, tenemos a nuestra disposición la propiedad overflow en CSS, donde podremos definir el comportamiento adecuado.

## <span style="color:violet">La propiedad overflow.</span>
A continuación, en esta tabla, puedes encontrar las propiedades CSS disponibles para controlar el desbordamiento CSS:

![alt text](./imagenes-desbordamiento-overflow/image.png)

Observa que las dos primeras son para indicar el desbordamiento en ejes específicos, mientras que la última se puede utilizar como propiedad de atajo para definir dos valores diferentes, uno para cada eje, o directamente un sólo valor que se aplicará por igual a ambos ejes.

## <span style="color:violet">Valores de overflow.</span>
Por defecto, el valor indicado es visible, que indica que siempre que ocurra un desbordamiento, el contenido sea visible y aparezca como la imagen anterior. Otras opciones son las siguientes, donde no se permite desbordamiento:

![alt text](./imagenes-desbordamiento-overflow/image-1.png)

Así se vería un cuadrado con texto, cuando se desborda su contenido, dependiendo de si utilizamos en la propiedad overflow los valores visible, hidden o scroll:

![alt text](./imagenes-desbordamiento-overflow/overflow-css.png)

En CSS se añaden las propiedades overflow-x y overflow-y para modificar el comportamiento del desbordamiento de cada eje individual, sin afectar al otro. Antiguamente solo era posible hacerlo con overflow para ambos ejes. Estas propiedades son útiles cuando no quieres mostrar alguna barra de desplazamiento, habitualmente, la barra de desplazamiento horizontal.


# <span style="color:lime"><center>Redondeos y módulos en CSS</center></span>

Las funciones escalonadas se denominan así porque al aplicarlas sobre determinados valores, permiten crear una gráfica en forma de escalones. Esta serie de funciones CSS permiten redondear números, calcular el módulo o el resto. Vamos a ver cada una de ellas, por separado.

## <span style="color:violet">La función round().</span>
La función round() permite redondear valores, es decir, prescindir de pequeñas diferencias en las cantidades, teniendo en cuenta sólo unidades superiores.

![alt text](./imagenes-y-redondeos-en-css/image.png)

Observa el siguiente ejemplo, donde puedes ver como funciona la función round():

css:
![alt text](./imagenes-y-redondeos-en-css/image-1.png)

html:
![alt text](./imagenes-y-redondeos-en-css/image-2.png)

vista:
![alt text](./imagenes-y-redondeos-en-css/image-3.png)

Ten en cuenta que, si indicamos un valor de interval igual a 0, entonces el redondeo no será válido (realmente devuelve NaN), por lo que ignora la propiedad..

## <span style="color:violet">Tipos de redondeos.</span>
Si queremos un tipo de redondeo específico, podemos indicar un primer parámetro en la función round() y establecer la estrategia de redondeo:

![alt text](./imagenes-y-redondeos-en-css/image-4.png)

Si no se especifica ninguna estrategia de redondeo en round(), por defecto se usa nearest.

Veamos algunos ejemplos:

css:
![alt text](./imagenes-y-redondeos-en-css/image-5.png)

html:
![alt text](./imagenes-y-redondeos-en-css/image-6.png)

vista:
![alt text](./imagenes-y-redondeos-en-css/image-7.png)

## <span style="color:violet">La función mod().</span>
La función mod() de CSS, permite realizar el módulo de un número, que no es más que obtener el resto de la división de un número entre otro. Veamos un ejemplo utilizándolo en CSS:

css:
![alt text](./imagenes-y-redondeos-en-css/image-8.png)

html:
![alt text](./imagenes-y-redondeos-en-css/image-9.png)

vista:
![alt text](./imagenes-y-redondeos-en-css/image-10.png)

Esta operación suele ser muy utilizada en programación para realizar cálculos incrementales y acotar los límites, de modo que cuando se superen, se vuelvan al valor inicial. De esta forma siempre te encuentras del rango deseado:

![alt text](./imagenes-y-redondeos-en-css/image-11.png)

## <span style="color:violet">La función rem().</span>
La función rem() de CSS, permite realizar el resto. Funciona de forma muy similar al módulo, sin embargo, hay diferencias cuando utilizamos números negativos.

css:
![alt text](./imagenes-y-redondeos-en-css/image-12.png)

html:
![alt text](./imagenes-y-redondeos-en-css/image-13.png)

vista:
![alt text](./imagenes-y-redondeos-en-css/image-14.png)


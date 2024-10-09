# <span style="color:lime"><center>La API de Nodos HTML</center></span>

En capítulos anteriores hemos visto formas de [crear elementos con createElement](https://lenguajejs.com/dom/crear/createelement/) e incluso [modificar el contenido con innerHTML](https://lenguajejs.com/dom/contenido/innerhtml/). Aunque son opciones, a veces necesitamos un mayor control, y utilizar .innerHTML no es suficiente.

## <span style="color:orange">¿Qué son los Nodos?.</span>
La API de Nodos de Javascript es la más antigua y la que trabaja a más bajo nivel (a nivel de detalle muy profundo). Se basa en trabajar con ítems llamados nodos, que son una unidad aún más básica que los elementos HTML.

Un nodo en el contexto del DOM, es una unidad básica del HTML, donde podría ser un elemento HTML o unidades que no lo son, como por ejemplo un nodo de texto (que no está dentro de una etiqueta).

Observa el siguiente ejemplo:

![alt text](./imagenes-la-api-de-nodos-html/image.png)

Mediante .children obtenemos una lista de elementos ELEMENT, y sólo obtenemos el < strong >. Sin embargo, mediante .childNodes que nos devuelve en NODE en lugar de ELEMENT, nos devuelve 3 nodos:

   - Un nodo de texto, correspondiente a Visita .
   - Un elemento < strong >, con el contenido Manz.dev.
   - Un nodo de texto, correspondiente a (o al menos su Twitch)..

Como puedes ver, la API de nodos tiene un nivel de granularidad más detallada, lo que lo hace más potente y flexible, pero muchas veces también demasiado tediosa.

## <span style="color:orange">API de Nodos.</span>
La API de nodos de Javascript es la más tradicional y antigua, y por esta razón suele ser la que más nos encontramos. Sin embargo, es importante tener en cuenta que no es la única, y muchas veces, tampoco es la mejor elección.

Los métodos que incorpora son los siguientes:

![alt text](./imagenes-la-api-de-nodos-html/image-1.png)

De ellos, probablemente el método más extendido y conocido es .appendChild(). Vamos a analizar cada uno de ellos y ver como podemos utilizarlos.

## <span style="color:orange">El método .appendChild().</span>
El método .appendChild()

Uno de los métodos más comunes para añadir un elemento HTML creado con Javascript es .appendChild(). Como su propio nombre indica, este método añade o inserta un nuevo elemento, como si fuera un hijo al final de todos los hijos del elemento sobre el que se realiza.

![alt text](./imagenes-la-api-de-nodos-html/createelement-dom.png)

Es importante tener claro donde se inserta, porque aunque es bastante común, no siempre querremos insertar el elemento en esa posición particular.

Observa el siguiente fragmento de código:

![alt text](./imagenes-la-api-de-nodos-html/image-2.png)

En este ejemplo, creamos un elemento < img > que aún no está conectado al DOM de la página. Existe sólo en la constante < img >. Posteriormente, añadimos los atributos src y alt y lo conectamos al DOM el elemento usando el método .appendChild().

Se insertará como último hijo del elemento < body >, ya que es su comportamiento predefinido.

## <span style="color:orange">El método .removeChild().</span>
En algunos casos, nos puede interesar eliminar un nodo hijo de un elemento. Para esas situaciones, podemos utilizar el método .removeChild(node) donde node es el nodo hijo que queremos eliminar:

![alt text](./imagenes-la-api-de-nodos-html/image-3.png)

## <span style="color:orange">El método .removeChild().</span>
De la misma forma, el método replaceChild(new, old) nos permite cambiar un nodo hijo old por un nuevo nodo hijo new. En ambos casos, el método nos devuelve el nodo reemplazado:

![alt text](./imagenes-la-api-de-nodos-html/image-4.png)

## <span style="color:orange">El método .insertBefore().</span>
Por último, el método insertBefore(newnode, node) es un método más específico y menos utilizado en el que se puede especificar exactamente el lugar a insertar un nodo. El primer parámetro es el nodo a insertar, mientras que el segundo parámetro puede ser:

   - ► NULL inserta newnode después del último nodo hijo. Equivale a .appendChild().
   - ► ELEMENT inserta newnode antes de dicho node de referencia.

![alt text](./imagenes-la-api-de-nodos-html/image-5.png)

En este caso, el nuevo elemento aparecería justo antes del segundo item.

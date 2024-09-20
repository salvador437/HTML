# <span style="color:lime"><center>Combinador o selector :has()</center></span>

Probablemente, uno de los combinadores o selectores más potentes es :has(). En CSS, cuando damos estilo, el elemento objetivo al que se le aplica el estilo es siempre el último que se escribe en el selector.

Por ejemplo, en este caso el elemento a quién se le da estilo es a .element, siempre y cuando cumpla el resto de restricciones, que en este caso es que se encuentre dentro de un elemento .container:

![alt text](./imagenes-Combinador-o-selector-has()/image.png)

Sin embargo, con el combinador :has() esto se puede cambiar.

## <span style="color:violet">El combinador :has()</span>
El combinador o pseudoclase :has() permite seleccionar un elemento contenedor, siempre y cuando sus elementos hijos (descendientes) cumplan los criterios indicados por los parámetros de :has(), lo que comunmente siempre se ha denominado el selector padre.

![alt text](./imagenes-Combinador-o-selector-has()/image-1.png)


   - 1️⃣ En el primer caso, aplicamos estilos a TODOS los enlaces "a".
   - 2️⃣ En el segundo caso, aplicamos estilos a todos los enlaces "a" que contengan una imagen "img".

Sin embargo, recuerda que podemos añadir más selectores antes, después o el interior del :has(), consiguiendo criterios más complejos y potentes.

## <span style="color:violet">Selector padre con :has()</span>
El fragmento de código anterior puede resultar un poco confuso, así que veamoslo aplicado a un ejemplo real en el que tenemos 3 enlaces: los dos primeros contienen una imagen y el tercero y último, contiene un texto:

css:
![alt text](./imagenes-Combinador-o-selector-has()/image-2.png)

html:
![alt text](./imagenes-Combinador-o-selector-has()/image-3.png)

vista:
![alt text](./imagenes-Combinador-o-selector-has()/image-4.png)

Si nos fijamos en el CSS, en a:hover indicamos que cuando se mueva el ratón sobre el enlace:

   - Se aplique un color azul en el borde.
   - Se aplique color de texto azul.

Sin embargo, en el selector a:hover:has(> img) indicamos que cuando se mueva el ratón sobre un enlace que contenga una imagen:

   - Se aplique un color rojo en el borde.

Ten en cuenta que el color de texto azul se aplicaría también en el tercer caso, ya que aunque contenga una imagen, sigue siendo un enlace, por lo que también se le aplica el a:hover.

## <span style="color:violet">Selector cuantificador :has()</span>
Sin embargo, :has() es más potente de lo que a simple vista parece, ya que se puede combinar con otros selectores de forma que se consigan funcionalidades aún más potentes.

Por ejemplo, utilizando :has() junto a funciones como :nth-child() se puede contabilizar el número de elementos hijos que tiene al menos una cantidad de elementos:

css:
![alt text](./imagenes-Combinador-o-selector-has()/image-5.png)

html:
![alt text](./imagenes-Combinador-o-selector-has()/image-6.png)
![alt text](./imagenes-Combinador-o-selector-has()/image-7.png)

vista:
![alt text](./imagenes-Combinador-o-selector-has()/image-8.png)

En este ejemplo, nos centraremos en los 3 primeros contenedores de elementos: Uno con 2 items, otro con 3 items y otro con 4 items. Utilizando el selector .container:has(:nth-child(3 of .item)) estamos seleccionando:

   - Un elemento padre con clase .container
   - Que tenga al menos 3 elementos hijos con clase .item

Observa que si al cuarto y último grupo, le cambiaramos los elementos hijos, de modo que queden dos .item y dos .noitem, este grupo contenedor no tendría estilo, ya que no cumple los criterios de tener al menos 3 elementos con clase .item.

## <span style="color:violet">Selector de estados :has()</span>
Quizás el detalle más interesante del combinador o selector :has() es que lo podemos utilizar para controlar estados de ciertos elementos de la página. Para ello, podemos utilizar pseudoclases como :checked o :hover, por ejemplo.

El siguiente ejemplo permite cambiar el diseño de un elemento, dependiendo de una casilla "input" que no tiene relación directa:

css:
![alt text](./imagenes-Combinador-o-selector-has()/image-9.png)

html:
![alt text](./imagenes-Combinador-o-selector-has()/image-10.png)

vista:
![alt text](./imagenes-Combinador-o-selector-has()/image-11.png)
![alt text](./imagenes-Combinador-o-selector-has()/image-12.png)

## <span style="color:violet">Detalles importantes sobre :has()</span>
Algunos detalles interesantes sobre la pseudoclase funcional :has():

   - La pseudoclase :has() no se puede anidar dentro de otra :has().
   - Los pseudoelementos, como ::before o ::after, no funcionan dentro de :has().
   - La especificidad de :has() es el valor más alto de los selectores indicados por parámetro.


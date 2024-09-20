# <span style="color:lime"><center>Combinador o selector :not()</center></span>

En general, en CSS estamos acostumbrados a indicar un selector que aplicará estilo CSS sólo si se cumple la condición indicada en el selector. Sin embargo, con el combinador o selector :not() podemos hacer justo lo contrario.

## <span style="color:violet">El combinador :not()</span>
El combinador, selector o pseudoclase de negación :not() es muy útil, ya que permite seleccionar todos los elementos que no cumplan los criterios indicados en sus parámetros entre paréntesis. Esto puede simplificar mucho algunos fragmentos de CSS.

Veamos un sencillo ejemplo:

css:
![alt text](./imagenes-Combinador-o-selector-not()/image.png)

html:
![alt text](./imagenes-Combinador-o-selector-not()/image-1.png)

vista:
![alt text](./imagenes-Combinador-o-selector-not()/image-2.png)

Este pequeño fragmento de código nos indica que todos los párrafos <p> que no tengan la clase .main, se les aplique el estilo especificado.

## <span style="color:violet">Selectores complejos en :not()</span>
Antiguamente, sólo se permitían selectores simples en el combinador :not(). Sin embargo, actualmente los navegadores permiten indicar listas de selectores o selectores complejos.

Observa el siguiente ejemplo. Aunque no tiene demasiado sentido, se puede ver como los selectores complejos son aceptados por parámetro del combinador :not():

css:
![alt text](./imagenes-Combinador-o-selector-not()/image-3.png)

html:
![alt text](./imagenes-Combinador-o-selector-not()/image-4.png)

vista:
![alt text](./imagenes-Combinador-o-selector-not()/image-5.png)

En este caso, tenemos tres elementos y le hemos dicho que le de estilo a los elementos que:

   - Sean párrafos "p"
   - No tengan la clase .first
   - No tengan la clase .last

Como resultado, se le da estilo sólo al elemento "p" con clase .main, que es la única que cumple la restricción.

## <span style="color:violet">Selectores :not() encadenados</span>
Otra forma de escribir selectores complejos utilizando combinadores :not() es encadenando uno con otro. De esta forma, podemos conseguir cosas similares a los casos anteriores. Veamos el ejemplo anterior, reescribiéndolo con :not() encadenados:

css:
![alt text](./imagenes-Combinador-o-selector-not()/image-6.png)

html:
![alt text](./imagenes-Combinador-o-selector-not()/image-7.png)

vista:
![alt text](./imagenes-Combinador-o-selector-not()/image-8.png)

En este caso, estamos dando estilo a los elementos que:

   - Sean párrafos "p"
   - No tengan la clase .first
   - No tengan la clase .last

Como puedes ver, equivalente al caso anterior.

## <span style="color:violet">Detalles importantes sobre :not()</span>
Algunos detalles adicionales (e importantes) sobre la pseudoclase funcional :not():

   - El combinador :not() se puede anidar dentro de otro :not().
   - El combinador :not() no acepta pseudoelementos, como ::before o ::after, por parámetro.
   - Al igual que con :is(), la especificidad de :not() es el valor más alto de sus parámetros.


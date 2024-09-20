# <span style="color:lime"><center>Combinador :is() y :where()</center></span>

Como hemos visto en apartados anteriores, los combinadores lógicos son un tipo de selector que permite combinar varios selectores más simples. Utiliza una estructura funcional, de modo que se le puede colocar selectores por parámetro.

Esencialmente, tenemos dos combinadores lógicos principales: :is() y :where(). Vamos a empezar por el primero, ya que el segundo funciona exactamente igual con algunas diferencias leves.

## <span style="color:violet">El combinador :is()</span>
La pseudoclase funcional :is() es un reemplazo práctico de la agrupación de selectores mediante comas, que permite reescribir selectores complejos de una forma mucho más práctica y compacta, ya que permite combinar y acumular otros selectores con los pasados por parámetro a :is().

Vamos con el primer ejemplo. El siguiente selector agrupa 3 partes diferentes:

![alt text](./imagenes-Combinador-is()-y-where()/image.png)

Si nos fijamos bien, la clase .container siempre aparece en cada uno de los tres casos, sin embargo, no hay forma de abreviarla, aunque sólo cambie la última parte.

Por ejemplo, quizás podríamos intentarlo con el siguiente fragmento, sin embargo NO ES EQUIVALENTE al fragmento de código anterior:

![alt text](./imagenes-Combinador-is()-y-where()/image-1.png)

En este caso, estamos indicado los elementos .list que se encuentren dentro de .container, y además los elementos .menu y los elementos ul, estos dos últimos aunque no estén dentro del .container. Esto se acentúa cada vez más si el selector es más largo.

Con la pseudoclase :is() si que podemos abreviar la información repetida del ejemplo anterior, reescribiéndolo de la siguiente forma:

![alt text](./imagenes-Combinador-is()-y-where()/image-2.png)

Observa que hemos indicado los 3 casos iniciales en un sólo selector (que añade 3 posibilidades diferentes por parámetro). Esto nos permite crear código mucho más compacto y sencillo de leer y escribir.

Antiguamente, esta pseudoclase era conocida como :matches(), pero finalmente fue renombrada a :is(), por lo que es posible que nos la encontremos de esta forma si accedemos a documentación antigua.

## <span style="color:violet">Especificidad de :is()</span>
Mucho cuidado con la especificidad CSS, ya que no tiene porque ser equivalente a la versión inicial que separábamos con comas. Observa el siguiente ejemplo inicial:

![alt text](./imagenes-Combinador-is()-y-where()/image-3.png)

Con la pseudoclase :is(), se calcula la especificidad sumando la especificidad más alta de sus parámetros.

Para el selector .container .list la especificidad sería (0,2,0) tanto usando :is() como no usándolo, sin embargo, en el caso del selector .container ul, en el primer caso sin :is(), la especificidad sería (0,1,1), mientras que con :is() seguiría siendo (0,2,0):

![alt text](./imagenes-Combinador-is()-y-where()/image-4.png)

Si no conoces el concepto de especificidad CSS, te recomiendo echar un vistazo al artículo de [Cascada CSS](https://lenguajecss.com/css/cascada-css/que-es-cascada/), donde hablamos de él y explicamos sus bases.

## <span style="color:violet">El combinador :where()</span>
Por otro lado, existe otro combinador lógico denominado :where(), que funciona exactamente igual que el combinador :is(). La única diferencia que tiene es en cuanto a la especificidad CSS.

Mientras que con el combinador :is(), la especificidad es el valor más alto de la lista de parámetros de :is(), en el caso de :where() la especificidad CSS es siempre cero.

Veamos un ejemplo para clarificarlo:

![alt text](./imagenes-Combinador-is()-y-where()/image-5.png)

Observa que en el caso de :where(), sólo se suma la especificidad de los selectores que están fuera del :where().

El combinador :where() puede ser útil para casos en los que se quiere anular la especificidad de un elemento fácilmente si se sobreescribe con otro selector. Esto lo hace especialmente interesante para crear unos estilos con especificidad muy baja que posteriormente van a ser sobreescritos y no queremos que la especificidad lo evite o lo vuelva complejo de sobreescribir.
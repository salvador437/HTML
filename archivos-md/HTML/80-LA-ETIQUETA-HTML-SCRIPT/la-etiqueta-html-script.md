# <span style="color:lime"><center>Etiqueta HTML <script>.<center></center></span>

A medida que aprendemos HTML vemos que se trata de un lenguaje de marcas estupendo y muy potente, pero también nos vamos dando cuenta que ciertos detalles no se pueden cubrir sólo con HTML y CSS, y se requiere la potencia y flexibilidad de un lenguaje de programación. Para ello, usaremos Javascript.

Javascript es muy potente y flexible, pero también requiere unas capacidades de desarrollo diferentes que no suelen existir en HTML y CSS. En el caso de Javascript requeriremos ciertos conocimientos que es recomendable dominar de programación.

En este artículo cubriremos una parte básica de Javascript muy relacionada con HTML. Si estás empezando en programación y vas a aprender Javascript en profundidad, echa un ojo a los [fundamentos de programación.](https://lenguajejs.com/fundamentos/)

## <span style="color:orange">Lenguajes de scripting.</span>
Por defecto, el lenguaje de scripting soportado por los navegadores es Javascript, por lo que cuando hablamos de scripting en el navegador (front-end, o en el lado del cliente) hablamos de este lenguaje de programación. Javascript está basado en [ECMAScrip](https://lenguajejs.com/javascript/introduccion/ecmascript/)t, la especificación estándar que indica como debe actuar el lenguaje. Luego, es misión de cada navegador implementarlo de acuerdo a esas normas, aunque siempre hay algunas diferencias entre navegadores (habitualmente, porque no han implementado ciertas características).

Más adelante, hablaremos de algunas alternativas y como utilizarlas.

## <span style="color:orange">La etiqueta < script >.</span>
Para utilizar Javascript en una página, debemos indicar en nuestro HTML que vamos a cargar un script (un archivo de texto con código Javascript) y hacerlo funcionar sobre el documento web actual. Para hacer esto, utilizaremos la etiqueta < script >.

Dicha etiqueta cuenta con los siguientes atributos básicos, que comentaremos más adelante:

![alt text](image.png)

Para empezar, ten en cuenta que la etiqueta <script> se puede escribir de dos formas en nuestro HTML:

   - Como script en línea: El código JS se incluye en el HTML, dentro de la propia etiqueta.
   - Como script externo: El código JS se incluye en el fichero Javascript enlazado en el atributo src.

## <span style="color:orange">Scripts en línea.</span>
Un ejemplo de script en línea sería el siguiente. Observa que el código se incluye en el interior de la etiqueta, por lo que permanece en el documento HTML:

![alt text](image-1.png)

Esta modalidad es útil en algunos casos donde queremos que un cierto código solo afecte a ese documento, o porque simplemente queremos una forma simple y rápida de escribir un código Javascript en un cierto documento.

Sin embargo, por norma general, es más conveniente crear un script externo, ya que tendríamos nuestro código Javascript en un fichero independiente y será mucho más fácil de reutilizar y organizar.

## <span style="color:orange">Scripts externos.</span>
El siguiente caso, por otro lado, es un script externo. En dicha etiqueta < script >, el código Javascript se encuentra en un archivo separado del HTML. Por ejemplo, aquí se indica mediante el atributo src, que se encuentra en la ruta /js/script.js:

![alt text](image-2.png)

En ese otro archivo /js/script.js se encontraría el código Javascript en cuestión:

![alt text](image-3.png)

sta modalidad suele ser la más conveniente, ya que separamos bien los archivos, de modo que es más fácil de reutilizarlos y tener todo nuestro código mejor organizado.

## <span style="color:orange">Tipos de scripts (atributo type).</span>
A parte del atributo src, que nos permite enlazar scripts externos con código Javascript, tenemos el atributo type. Históricamente, este atributo se utilizaba en el pasado para indicar el tipo de script que ibamos a utilizar, escribiendo generalmente el valor text/javascript (algo que aún podemos encontrar en páginas antiguas).

Hoy en día, el atributo type cumple otras funciones, dependiendo del valor que se establezca. Los valores válidos que se pueden indicar en el atributo type de la etiqueta < script > son los siguientes:

![alt text](image-4.png)

Explicaremos más adelante cada una de estas modalidades. De momento, vamos a centrarnos en el modo de script clásico, cuando no indicamos ningún valor en el atributo type.

## <span style="color:orange">Modalidad clásica.</span>
Cuando indicamos un script externo mediante el atributo src, el proceso de carga del script por parte del navegador es el siguiente:

   - 👁‍🗨 El navegador se encuentra parseando (leyendo) y renderizando (dibujando) el .html en la página.
   - 🛑 Detiene temporalmente el dibujado en el HTML, cuando encuentra un <script src>.
   - 🔽 Descarga el script .js referenciado en el atributo src en el caché del navegador.
   - 🏃‍♀️ Ejecuta el código javascript una vez descargado.
   - 👁‍🗨 Reanuda el proceso de parseo y renderizado del documento HTML por donde lo dejó.

Este es el modo de carga por defecto de los scripts por parte del navegador (modo clásico). Sin embargo, existen dos métodos de carga diferentes: la carga diferida y la carga asíncrona. Las veremos más adelante en el artículo el atributo defer y async.

Si quieres aprender más sobre [Javascript](https://lenguajejs.com/javascript/), te aconsejo echar un vistazo a Javascript. Si eres nuevo en el mundo de la programación y no has programado nunca, o sólo has tocado código HTML y/o CSS, te recomiendo aprender antes los [Fundamentos de programación](https://lenguajejs.com/fundamentos/).

## <span style="color:orange">La etiqueta < noscript >.</span>
Debemos ser conscientes de que, aunque actualmente la mayoría de los navegadores poseen Javascript y es un lenguaje de programación muy común en la web, hay que intentar no abusar y utilizarlo para todo. Siempre que puedas hacer algo (equivalente) con HTML y/o CSS antes que con Javascript, será una mejor opción, ya que suelen ser soluciones más accesible, eficiente, fáciles de posicionar en buscadores y en general, más apropiadas.

Un usuario podría acceder desde un dispositivo que no tenga Javascript habilitado (aunque es algo muy poco frecuente hoy en día, es posible), y si tu página sólo funciona con Javascript, no podrá utilizarla. Una buena costumbre, es proporcionar una alternativa (aunque sea mínima o para avisar al usuario) para aquellos usuarios que no tengan Javascript habilitado.

Para ello, se suele utilizar la etiqueta < noscript >:

![alt text](image-5.png)

En el caso de que el usuario tenga capacidades de Javascript en su navegador, se ejecutará el código de la etiqueta <script> y se ignorará la etiqueta <noscript>. Sin embargo, si el navegador no posee Javascript o no lo tiene habilitado, se mostrará el contenido HTML proporcionado en la etiqueta <noscript>, que aunque no puede obtener el nombre de usuario, mostrará una alternativa.

Si no es posible realizar una alternativa al código Javascript, lo ideal sería mostrar al usuario un mensaje donde se le avisa que la página actual sólo es capaz de funcionar con Javascript, y que parece que el navegador que está utilizando no es capaz de procesarlo.

De esta forma conseguimos que el usuario tenga siempre feedback de lo que está ocurriendo.

## <span style="color:orange">Alternativas a Javascript.</span>
Existen alternativas para no utilizar Javascript directamente, sino utilizar algún lenguaje similar que traduce (o mejor dicho, transpila) a Javascript. De esta forma, puedes utilizar otros lenguajes que tienen características que Javascript no posee.

Sin embargo, hay que tener claro que los navegadores sólo soportan Javascript de forma nativa, de forma que si quieres utilizar alguno de estos lenguajes, tienes que integrarlo en tu workflow de trabajo y acostumbrarte a que el código debe ser transpilado (convertido a Javascript) y entonces esa versión es la que debes utilizar en tu web final, ya que es la que entienden los navegadores.

Los transpiladores o lenguajes más populares a Javascript que existen actualmente son los siguientes:

![alt text](image-6.png)

Probablemente, los más populares y utilizados hoy en día, son Typescript y Babel.


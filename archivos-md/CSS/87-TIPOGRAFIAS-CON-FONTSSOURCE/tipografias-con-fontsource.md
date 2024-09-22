# <span style="color:lime"><center>Tipografías con Fontsource</center></span>

Cuando acostumbramos a trabajar con NPM, o en proyectos Javascript, utilizar Google Fonts o instalar las tipografías de forma manual se nos puede hacer bastante tedioso. Para ello, existe una maravillosa colección de tipografías, empaquetadas en NPM y listas para utilizar, por la gente de [FontSource](https://fontsource.org/).

## <span style="color:violet">¿Por qué utilizar Fontsource?</span>
Entre las ventajas de utilizar Fontsource se encuentran las siguientes:

   - 1️⃣ Rendimiento: Se descargan y alojan en tu proyecto. No tienes la latencia de Google Fonts.
   - 2️⃣ Versionado: En Google Fonts las tipografías se actualizan silenciosamente. En Fontsource, no.
   - 3️⃣ Privacidad: No realizas peticiones a los repositorios de Google.
   - 4️⃣ Variedad: Existen más tipografías, no se limitan a las de Google Fonts.
   - 5️⃣ Comodidad: Son mucho más cómodas de instalar, utilizando NPM.

► Más información en [Fuentes variables CSS](https://lenguajecss.com/css/fuentes-y-tipografias/fuentes-variables/)

Si en tu proyecto no utilizas (o no quieres utilizar) un gestor de paquetes como NPM, también puedes usar la versión de CDN, que explicaremos al final del artículo.

## <span style="color:violet">Instalación de una tipografía</span>
Fontsource dispone de dos modalidades para instalar tipografías: tipografías estáticas y tipografías variables. El primer grupo es una tipografía con un grosor específico, y el segundo grupo es una tipografía con todos los grosores disponibles. El primero es mejor si sólo vas a utilizar un grosor concreto, el segundo si vas a utilizar varios.

## <span style="color:violet">Instalar una tipografía estática</span>
Si queremos instalar la tipografía estática, solo debemos instalarla con npm o pnpm, indicando el prefijo @fontsource/ al nombre de la tipografía, la cuál se escribe en minúsculas y separadas por guión. Puedes echar un vistazo a cuales existen buscando en NPMJS.

Por ejemplo, si queremos instalar la tipografía Open Sans en su versión estática, simplemente ejecutamos en una terminal el siguiente comando:

![alt text](image.png)

Listo, ya la tenemos descargada en nuestro proyecto y casi lista para utilizar.

## <span style="color:violet">Instalar una tipografía variable</span>
Si por otro lado, queremos instalar la tipografía variable, indicaremos el prefijo @fontsource-variable/ al nombre de la tipografía. Recuerda echar un vistazo primero a NPMJS para comprobar si existe esa tipografía en versión variable.

El comando a ejecutar para instalar Open Sans en su versión variable sería el siguiente:

![alt text](image-1.png)

Listo. Ahora sólo necesitamos escribir el código para utilizarla.

## <span style="color:violet">Usar una tipografía</span>
Para utilizar una tipografía en una web, hay que escribir la regla @font-face de CSS, lo que en algunos casos puede ser tedioso. Servicios como Google Fonts o Fontsource te evitan escribirlo, pero no porque no exista, sino porque lo hacen ellos por debajo.

Si hemos instalado el paquete en los pasos anteriores, lo único que tendríamos que hacer es elegir si añadirlo mediante nuestro código CSS o mediante nuestro código Javascript. Dependiendo de tu proyecto, te puede interesar más una forma u otra, pero son más o menos equivalentes:

css:
![alt text](image-2.png)

js:
![alt text](image-3.png)

Si elegimos añadirlo en CSS, escribiremos la línea al principio de nuestro fichero CSS. Observa que el prefijo de la tipografía es @fontsource/ y que usamos @ al principio del import. Si por otro lado, queremos hacerlo en nuestro código Javascript, de forma muy similar, escribiremos el import en las primeras líneas Javascript, pero sin la @ antes del import.

Recuerda que sólo debes escribir una de estas dos formas, no necesitas las dos.

Por último, nos queda elegir donde queremos utilizar la tipografía, hayamos elegido cargarla en CSS o en Javascript. Por ejemplo, si la incluimos en el selector body, lo utilizará en toda la página. Si la incluimos en un selector .container, sólo en ese elemento y sus hijos:

![alt text](image-4.png)

En el nombre de la tipografía anterior, recuerda que si eliges utilizar una tipografía variable, deberás escribir el sufijo Variable en el nombre de la tipografía. En nuestro ejemplo sería Open Sans Variable.

Atento a las siguientes puntualizaciones, ya que dependiendo de si utilizas una tipografía estática o variable, tienes algunos extras que puedes realizar.

## <span style="color:violet">Usar una tipografía estática</span>
Al utilizar una tipografía estática por defecto, como las indicadas en los ejemplos anteriores, por defecto el navegador indica la tipografía Open Sans de peso 400 (normal) con soporte para diferentes codificaciones latín, cirílico, latín extendido, vietnamita, hebreo, etc...

Si queremos cargar pesos diferentes (recuerda que son archivos individuales) haremos lo siguiente:

![alt text](image-5.png)

En este caso, en lugar de indicar la 400 (normal), estaríamos indicando sólo la tipografía de peso 300 (en cursiva) y 600 (normal).

## <span style="color:violet">Usar una tipografía variable</span>
En el caso de que hayamos decidido instalar una tipografía variable, tendremos un sólo archivo para diferentes pesos, por lo que tenemos una opción más flexible que nos permite cambiar el grosor, con un rango más amplio y en cualquier momento. Por contrapartida, el peso del archivo será un poco más grande.

Tras haber instalado la tipografía variable, tendremos que cargarla de esta forma (observa que indicamos el prefijo @fontsource-variable/):

css:
![alt text](image-6.png)

js:
![alt text](image-7.png)

Recuerda que sólo debes escribir una de estas dos formas, no necesitas las dos.

En el caso de las tipografías variables, también tienen algunas variaciones, relacionadas con características que podrás ver más adelante en el artículo [Características personalizadas de las tipografías](https://lenguajecss.com/css/fuentes-y-tipografias/caracteristicas-personalizadas/).

## <span style="color:violet">Utilización mediante CDN</span>
Como comentamos más atrás, es posible que en tu proyecto no utilices automatizadores, ni empaquetadores o ni siquiera NPM o gestores de paquetes. En ese caso, no puedes utilizar Fontsource de la forma que hemos explicado más atrás, sin embargo, si que existe una forma de utilizarlo.

Fontsource tiene listo un CDN para casos como estos en cada tipografía, en los que sólo necesitas copiar el siguiente fragmento de código al inicio de tu archivo .css:

![alt text](image-8.png)

Observa, que en este caso estamos creando la regla @font-face con una configuración concreta, algo que en los otros casos realizaba Fontsource de forma transparente para nosotros. Si quieres saber como funciona todo esto, avanza en esta página hasta el artículo de [la regla CSS @font-face.](https://lenguajecss.com/css/fuentes-y-tipografias/regla-font-face/)


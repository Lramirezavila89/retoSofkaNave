# retoSofkaNave
_El proyecto se basa en la **Clasificación de las naves espaciales***, el cual he nombrado retoSofkaNave, tal como indica su nombre, es un reto para la presentación del Automation Training League de Sofka, el cual consiste en aplicar POO (Programación Orientada a Objetos)  y definir unos retos aplicando dichos conceptos en cual he utilizado **javascript** ; sin embargo, cada pre-requisito, instalación, análisis y presentación la describiremos a continuación:_

## Comenzando 🚀

_Vamos a iniciar  explicando los requisitos necesarios para ejecutar el proyecto, posteriormente conoceremos cada uno de los pasos y herramientas que utilizaremos a lo largo de la documentación para finalizar con exito la instalación, ejecución y visualización de **retoSofkaNave**_


## Pre-requisitos 📋

_***Pasos:***_

_1. Debemos instalar apache con sus versiones php7 actuales, donde les recomiendo utilizar [VISUAL STUDIO CODE](https://code.visualstudio.com/) o [XAMPP](https://www.apachefriends.org/es/index.html)_

_2. Descargar el repositorio de **Github** /retoSofkaNave el cual contiene todos los archivos necesario para su funcionamiento_


## Instalación 🔧

_1.Ejecutar xampp e instalar en el disco local_

```
C:/xampp
```

_2. Activar las casillas Apache y MYSQL_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/1.png)

_3. copiamos los archivos descargados y los pegamos en la ruta de localhost donde crearemos una carpeta llamda <sub>retoSofkaNave</sub>_

```
C:/xampp/htdocs/
```

_4. Ejecutamos la URL **localhost/phpmyadmin/** y creamos una nueva base de datos llamada "naves", donde vamos a importar el archivo <sub>naves.sql</sub> que esta dentro del proyecto_

```
http://localhost/phpmyadmin/
```

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/3.png)

_5. Ingresamos a nuestro navegador de preferencia y ejecutaremos el proyecto mendiate la siguiente URL:_

```
http://localhost/retoSofkaNave/index.html
```
_o desde Visual Studio Code "reload PHP" como:_

```
http://localhost:3000/index.html
```
_ya dependerá del puerto que asigne automaticamente; veamos un ejemplo:_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/2.png)


## Ejecutando las pruebas ⚙️

_Como el desarrollo del reto fue aplicado mediante el lenguaje de programación **javascript** las pruebamos las podemos enfocar mediante la consola del navegador y/o dentro del mismo código con la palabra reservada <sub>console.log()</sub>_

### Explicación del código fuente 🔩

_1. Iniciar creando un <sub>index.html</sub> que contiene las librerias js y css de **Bootstrap** [librerias](https://getbootstrap.com/) , dentro de este archivo especificamos un script llamado "controlador.js" que va a contener todas las clases, instancias e interfaces del reto basados bajo un MVC_

_2. El script <sub>controlador.js</sub> esta sectorizado en 3 partes MODELO - CONTROLADOR  - VISTA como se observa en la siguiente imagen:

### MODELO

_Se crea todas las clases con sus respectivos atributos y metodos_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/4.png)

### CONTROLADOR

_Se crea un control de de las clases y las vistas mediante el DOM por medio de instancias_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/5.png)

### VISTA

_Se crean metodos visuales de HTML utilizando template y fragment en funciones declaradas como <sub>pintar</sub>CualquierCosa y son reflejadas en el DOM_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/6.png)

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Dona con cripto a esta dirección: `0xf253fc233333078436d111175e5a76a649890000`
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊

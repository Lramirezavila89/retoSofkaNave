# retoSofkaNave
_El proyecto se basa en la **Clasificación de las naves espaciales***, el cual he nombrado retoSofkaNave, tal como indica su nombre, es un reto para la presentación del Automation Training League de Sofka, el cual consiste en aplicar POO (Programación Orientada a Objetos)  y definir unos retos aplicando dichos conceptos en cual he utilizado **javascript** ; sin embargo, cada pre-requisito, instalación, análisis y presentación la describiremos a continuación:_

## Comenzando 🚀

_Vamos a iniciar  explicando los requisitos necesarios para ejecutar el proyecto, posteriormente conoceremos cada uno de los pasos y herramientas que utilizaremos a lo largo de la documentación para finalizar con éxito la instalación, ejecución y visualización de **retoSofkaNave**_


## Pre-requisitos 📋

_***Pasos:***_

_1. Debemos instalar apache con sus versiones php7 actuales, donde les recomiendo utilizar [VISUAL STUDIO CODE](https://code.visualstudio.com/) o [XAMPP](https://www.apachefriends.org/es/index.html)_

_2. Descargar el repositorio de **Github** /retoSofkaNave el cual contiene todos los archivos necesarios para su funcionamiento_


## Instalación 🔧

_1. Ejecutar xampp e instalar en el disco local_

```
C:/xampp
```

_2. Activar las casillas Apache y MYSQL_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/1.png)

_3. copiamos los archivos descargados y los pegamos en la ruta de localhost donde crearemos una carpeta llamada <sub>retoSofkaNave</sub>_

```
C:/xampp/htdocs/
```

_4. Ejecutamos la URL **localhost/phpmyadmin/** y creamos una nueva base de datos llamada "naves", donde vamos a importar el archivo <sub>naves.sql</sub> que esta dentro del proyecto_

```
http://localhost/phpmyadmin/
```

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/3.png)

_podemos observar la base de datos relacional implementada_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/7.png)

_5. Ingresamos a nuestro navegador de preferencia y ejecutaremos el proyecto mediante la siguiente URL:_

```
http://localhost/retoSofkaNave/index.html
```
_o desde Visual Studio Code "reload PHP" como:_

```
http://localhost:3000/index.html
```
_ya dependerá del puerto que asigne automáticamente; veamos un ejemplo:_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/2.png)


## Ejecutando las pruebas ⚙️

_Como el desarrollo del reto fue aplicado mediante el lenguaje de programación **javascript** las pruebas las podemos enfocar mediante la consola del navegador y/o dentro del mismo código con la palabra reservada <sub>console.log()</sub>_

### Explicación del código fuente 🔩

_1. Iniciar creando un <sub>index.html</sub> que contiene las librerías js y css de **Bootstrap** [librerías](https://getbootstrap.com/) , dentro de este archivo especificamos un script llamado "controlador.js" que va a contener todas las clases, instancias e interfaces del reto basados bajo un MVC_

_2. El script <sub>controlador.js</sub> esta sectorizado en 3 partes MODELO - CONTROLADOR - VISTA como se observa en la siguiente imagen:

### MODELO

_Se crea todas las clases con sus respectivos atributos y métodos_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/4.png)

### CONTROLADOR

_Se crea un control de  las clases y las vistas mediante el DOM por medio de instancias_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/5.png)

### VISTA

_Se crean métodos visuales de HTML utilizando template y fragment en funciones declaradas como <sub>pintar</sub>CualquierCosa y son reflejadas en el DOM_

![Ejemplo](https://milenaavilezodontologa.com/retoSofkaNaves/vista/img/6.png)

## Despliegue y DEMO 📦

_Para la realización del deploy utilice un hosting compartido donde aloje el reto tal cual se encuentra en /retoSofkaNaves_

**Demo:** [Ejecutar demo](https://milenaavilezodontologa.com/retoSofkaNaves/)

## Construcción 🛠️

_Las herramientas utilizadas para la construcción del reto fueron:_

* [Xampp](https://www.apachefriends.org/es/index.html) - Xampp como servidor local de prueba
* [Boostrap](https://getbootstrap.com/) - Boostrap como librerías de estilos 
* [VSC](https://code.visualstudio.com/) - Como editor se utilizó Visual Studio Code

## Contribuyendo 🖇️

Por favor lee el [README.md](https://github.com/Lramirezavila89/retoSofkaNave/blob/main/README.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests o mejoras.




## Autor ✒️

* **Luis Enrique Ramírez Ávila** - *Trabajo Inicial*  - *Documentación*  - *Desarrollo* - *Presentación*  [Lramirezavila89](https://github.com/Lramirezavila89)

## Gracias por visualizar y contribuir a este Reto 🎁
* Comenta a otros sobre este proyecto 📢
* Invita e incentiva a las personas que deseen aprender POO con javascript. 
* gracias a todo 🤓.



---
⌨️ con ❤️ por [Lramirezavila89](https://github.com/Lramirezavila89) 😊

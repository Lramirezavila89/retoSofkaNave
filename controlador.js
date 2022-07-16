//MODELO::::::::::::::::::::::::::::::::::::::::::
class Vehiculos{ 
    #gravedad = 10
    constructor(nombre, empuje, destino, combustible, pais){
        this.nombre = nombre
        this.Tempuje = empuje
        this.destino = destino
        this.combustible = combustible,
        this.pais = pais
    }
    despegar(){
        return `El despegue se realiza con un peso total de ${this.Tempuje / this.#gravedad } `
    }
    viajar(){
        return `Actualmente esta viajando la nave ${this.nombre}`
    }
}



class Nave1 extends Vehiculos{
    constructor(nombre,Tempuje, destino, combustible,  pais, valocidad){
        super(nombre,Tempuje, destino, combustible, pais)
        this.velocidad = valocidad
    }
    viajar(){
        if(this.combustible!= 0){
           return `Actualmente esta viajando la nave ${this.nombre} -combustible ${this.combustible} - con una fuerza de (F = M . A ) = ${this.velocidad * this.Tempuje } m/s`
        }else{
           return `imposible crear la nave ${this.nombre} sin combustible`
        }
    }
    insertar(){
        let parametros = {"nombre" : this.nombre,"empuje" : this.Tempuje,"destino" : this.destino,
        "combustible" : this.combustible,"pais" : this.pais, "velocidad" : this.velocidad, "privilegio" : "nave1"
        }
        console.log(parametros)
        $.ajax({
            url: 'modelo/insertar.php',
            type: 'post',
            data: parametros,
            dataType: 'json',
            beforeSend: function () {
            $("#loading-fin").html("<div class='loading-fin'><img src='vista/img/loading.gif' /></div>");   
            },
            error: function(){
                alert("error petición ajax");
            },
            success: function(data){
                if(data==='1'){
                    $("#loading-fin").html("")  
                    console.log('corrrecto')    
                }else{
                    console.log('error')
                }
            }
        })
    }
}

class Nave2 extends Vehiculos{
    constructor(nombre,Tempuje, destino, combustible,  pais, altura){
        super(nombre,Tempuje, destino, combustible, pais)
        this.altura = altura
    }
    viajar(){
        if(this.combustible!= 0){
            return `La nave ${this.nombre} viaja con un combustible  ${this.combustible} con una altura de  ${this.altura}`
        }else{
            return `imposible crear la nave ${this.nombre}`
        }
    }
    posicion(posicionX){
        if(this.combustible!= 0){
            return `Actualmente se encuentra en  ${this.destino} con una altura de ${this.altura}  con una posición X ${posicionX}`
        }else{
            return `Actualmente se encuentra en  ${this.destino} con una altura de ${this.altura}  con una posición X ${posicionX} pero sin combustible`
        }

    }
    posicion(posicionX, posicionY){
        if(this.combustible!= 0){
            return `Actualmente se encuentra en  ${this.destino} con una altura de ${this.altura} KM con una posición (${posicionX}, ${posicionY})`
        }else{
            return `Actualmente se encuentra en  ${this.destino} con una altura de ${this.altura} KM con una posición (${posicionX}, ${posicionY}) pero sin combustible`
        }
    }
    insertar(){
        let parametros = {"nombre" : this.nombre,"empuje" : this.Tempuje,"destino" : this.destino,
        "combustible" : this.combustible,"pais" : this.pais, "altura" : this.altura, "privilegio" : "nave2"
        }
        console.log(parametros)
        $.ajax({
            url: 'modelo/insertar.php',
            type: 'post',
            data: parametros,
            dataType: 'json',
            beforeSend: function () {
            $("#loading-fin").html("<div class='loading-fin'><img src='vista/img/loading.gif' /></div>");   
            },
            error: function(){
                alert("error petición ajax");
            },
            success: function(data){
                if(data==='1'){
                    $("#loading-fin").html("")  
                    console.log('corrrecto')    
                }else{
                    console.log('error')
                }
            }
        })
    }
}

class Nave3 extends Vehiculos{
    constructor(nombre,Tempuje, destino, combustible,  pais, peso){
        super(nombre,Tempuje, destino, combustible, pais)
        this.peso = peso
    }
    viajar(){
        if(this.combustible!= 0){
            return `Actualmente esta viajando la nave ${this.nombre}`
        }else{
            return `imposible crear la nave ${this.nombre}`
        }   
    }
    aceleracion(){
        if(this.combustible!= 0){
            return ` con una aceleración de ${this.Tempuje / this.peso}  km/s2`
        }else{
            return ` con cero aceleración `
        }
    }
    insertar(){
        let parametros = {"nombre" : this.nombre,"empuje" : this.Tempuje,"destino" : this.destino,
        "combustible" : this.combustible,"pais" : this.pais, "peso" : this.peso, "privilegio" : "nave3"
        }
        console.log(parametros)
        $.ajax({
            url: 'modelo/insertar.php',
            type: 'post',
            data: parametros,
            dataType: 'json',
            beforeSend: function () {
            $("#loading-fin").html("<div class='loading-fin'><img src='vista/img/loading.gif' /></div>");   
            },
            error: function(){
                alert("error petición ajax");
            },
            success: function(data){
                if(data==='1'){
                    $("#loading-fin").html("")  
                    console.log('corrrecto')    
                }else{
                    console.log('error')
                }
            }
        })
    }
    
}

class Nave4 extends Vehiculos{
    constructor(nombre,Tempuje, destino, combustible,  pais, tipoVehiculo){
        super(nombre,Tempuje, destino, combustible, pais)
        this.tipoVehiculo = tipoVehiculo
    }
    viajar(){
        if(this.combustible!= 0){
            return `Actualmente esta viajando la nave ${this.nombre} tipo - ${this.tipoVehiculo}`
        }else{
            return `imposible crear la nave ${this.nombre}`
        }
    }
    insertar(){
        let parametros = {"nombre" : this.nombre,"empuje" : this.Tempuje,"destino" : this.destino,
        "combustible" : this.combustible,"pais" : this.pais, "tipo" : this.tipoVehiculo, "privilegio" : "nave4"
        }
        console.log(parametros)
        $.ajax({
            url: 'modelo/insertar.php',
            type: 'post',
            data: parametros,
            dataType: 'json',
            beforeSend: function () {
            $("#loading-fin").html("<div class='loading-fin'><img src='vista/img/loading.gif' /></div>");   
            },
            error: function(){
                alert("error petición ajax");
            },
            success: function(data){
                if(data==='1'){
                    $("#loading-fin").html("")  
                    console.log('corrrecto')    
                }else{
                    console.log('error')
                }
            }
        })
    }
}



const fetchData =  async ()=>{
    try{
        const respuesta = await fetch('modelo/inventarioNaves.json')
        const data = await respuesta.json();
        pintarInv(data)
    }catch(error){
        console.log(error)
    }
      
}



class buscador{
    constructor(nombre, destino, pais, accion){
        this.nombre = nombre
        this.destino = destino
        this.pais = pais
        this.accion = accion
    }
    buscar(){
        let parametros = {"nombre" : this.nombre, "destino" : this.destino, "pais" : this.pais, "tipo" : this.accion}
        console.log(parametros)
        $.ajax({
            url: 'modelo/buscar.php',
            type: 'post',
            data: parametros,
            dataType: 'json',
            beforeSend: function () {
            $("#loading-fin").html("<div class='loading-fin'><img src='vista/img/loading-buscar.gif' /></div>");   
            },
            error: function(){
                alert("error petición ajax");
            },
            success: function(data){
                if(data==='0'){
                      console.log('error')
                      setTimeout(() => {
                        $("#loading-fin").html("") 
                      }, 5000);
                }else{
                    $("#loading-fin").html("")  
                    pintarBuscador(data)
                }
            }
        })
    }
}






//CONTROLADOR::::::::::::::::::::::::::::::::::::::
const bt1 = document.getElementById('formulario1')
const bt2 = document.getElementById('formulario2')
const bt3 = document.getElementById('formulario3')
const bt4 = document.getElementById('formulario4')

const btBuscar = document.getElementById('buscarF')


bt1.addEventListener('submit', (e)=>{
    e.preventDefault();
    //contenido
    const nombre = document.getElementById('nombreF').value
    const empuje = document.getElementById('empujeF').value
    const destino = document.getElementById('destinoF').value
    const combustible = document.getElementById('combustibleF').value
    const pais = document.getElementById('paisF').value
    const velocidad = document.getElementById('velocidadF').value
    const alert1 = document.getElementById('alertaN1positivo')
    const alert1N = document.getElementById('alertaN1negativo')

    const nave= new Nave1(nombre,empuje, destino,combustible,pais,velocidad)

    if(combustible!= 0){
        setTimeout(() => {
            alert1.textContent = nave.viajar()
            alert1.style.transform = "translateY(100px)"
            nave.insertar()
        }, 1000)
        setTimeout(() => {
            alert1.style.transform = "translateY(-100px)"
        }, 10000)
    }else{
        setTimeout(() => {
            alert1N.textContent = nave.viajar()
            alert1N.style.transform = "translateY(20px)"
        }, 500)
        setTimeout(() => {
            alert1N.style.transform = "translateY(-100px)"
        }, 5000)

    }
})

bt2.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombreF2').value
    const empuje = document.getElementById('empujeF2').value
    const destino = document.getElementById('destinoF2').value
    const combustible = document.getElementById('combustibleF2').value
    const pais = document.getElementById('paisF2').value
    const altura = document.getElementById('alturaF2').value
    const alert2 = document.getElementById('alertaN2positivo')
    const alert2N = document.getElementById('alertaN2negativo')
    const Y = altura / 1000
    const nave= new Nave2(nombre,empuje, destino,combustible,pais,altura)
    if(combustible!= 0){
        setTimeout(() => {
            alert2.textContent = nave.posicion(0,Y)
            alert2.style.transform = "translateY(100px)"
            nave.insertar()
        }, 1000)
        setTimeout(() => {
            alert2.style.transform = "translateY(-100px)"
        }, 10000)
    }else{
        setTimeout(() => {
            alert2N.textContent = nave.posicion(0,Y)
            alert2N.style.transform = "translateY(20px)"
        }, 1000)
        setTimeout(() => {
            alert2N.style.transform = "translateY(-100px)"
        }, 5000)

    }
})


bt3.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombreF3').value
    const empuje = document.getElementById('empujeF3').value
    const destino = document.getElementById('destinoF3').value
    const combustible = document.getElementById('combustibleF3').value
    const pais = document.getElementById('paisF3').value
    const peso = document.getElementById('pesoF3').value
    const alert3 = document.getElementById('alertaN3positivo')
    const alert3N = document.getElementById('alertaN3negativo')
   
    const nave= new Nave3(nombre,empuje, destino,combustible,pais,peso)
    if(combustible!= 0){
        setTimeout(() => {
            alert3.textContent += nave.viajar()
            alert3.textContent += nave.aceleracion()
            alert3.style.transform = "translateY(100px)"
            nave.insertar()
        }, 1000)
        setTimeout(() => {
            alert3.style.transform = "translateY(-100px)"
        }, 10000)
    }else{
        setTimeout(() => {
            alert3N.textContent = nave.viajar()
            alert3N.style.transform = "translateY(20px)"
        }, 500)
        setTimeout(() => {
            alert3N.style.transform = "translateY(-100px)"
        }, 5000)

    }
})


bt4.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombreF4').value
    const empuje = document.getElementById('empujeF4').value
    const destino = document.getElementById('destinoF4').value
    const combustible = document.getElementById('combustibleF4').value
    const pais = document.getElementById('paisF4').value
    const tipo = document.getElementById('tipoF4').value
    const alert4 = document.getElementById('alertaN4positivo')
    const alert4N = document.getElementById('alertaN4negativo')
   
    const nave= new Nave4(nombre,empuje, destino,combustible,pais,tipo)
    if(combustible!= 0){
        setTimeout(() => {
            alert4.textContent = nave.viajar()
            alert4.style.transform = "translateY(100px)"
            nave.insertar()
        }, 1000)
        setTimeout(() => {
            alert4.style.transform = "translateY(-100px)"
        }, 10000)
    }else{
        setTimeout(() => {
            alert4N.textContent = nave.viajar()
            alert4N.style.transform = "translateY(20px)"
        }, 500)
        setTimeout(() => {
            alert4N.style.transform = "translateY(-100px)"
        }, 5000)

    }
})

btBuscar.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombreB').value
    const destino = document.getElementById('destinoB').value
    const pais = document.getElementById('paisB').value
    const accion = document.getElementById('accionB').value
    
    const b = new buscador(nombre,destino,pais,accion)
    b.buscar()  
    
    e.stopPropagation();
    
})









//VISTA::::::::::::::::::::::::::::::::::::::::::::::::::::::

const inv1 = document.getElementById('inv1')  //donde pintaremos 
const inv2 = document.getElementById('inv2')  //donde pintaremos 
const inv3 = document.getElementById('inv3')  //donde pintaremos 

const resultado = document.getElementById('resultadoBuscador') //donde pintaremos 

const templateCard = document.getElementById('template-nav-inv').content //creamos template 
const categoria1 = document.getElementById('categoria1')
const categoria2 = document.getElementById('categoria2')
const categoria3 = document.getElementById('categoria3')

const templateBuscador = document.getElementById('template-nav-buscador').content //creamos template 

const fragment = document.createDocumentFragment() 
let mynaves = {}

document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
})


const pintarInv = data =>{
    const cat1 = data.lanzadera[0].tipo
    categoria1.textContent = cat1

    data.lanzadera.reverse().forEach(elemet =>{
        templateCard.querySelector('img').setAttribute('src',  elemet.img)
        templateCard.querySelector('.card-title').textContent = elemet.nombre
        templateCard.querySelector('#empuje').textContent =  elemet.empuje
        templateCard.querySelector('#destino').textContent = elemet.destino
  
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
     })
     inv1.appendChild(fragment)// y le pasamos todos los fragmentos del forEach al id CARDS


     const cat2 = data.notripuladas[0].tipo
     categoria2.textContent = cat2

     data.notripuladas.reverse().forEach(elemet =>{
        templateCard.querySelector('img').setAttribute('src',  elemet.img)
        templateCard.querySelector('.card-title').textContent = elemet.nombre
        templateCard.querySelector('#empuje').textContent =  elemet.empuje
        templateCard.querySelector('#destino').textContent = elemet.destino
  
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
     })
     inv2.appendChild(fragment)// y le pasamos todos los fragmentos del forEach al id CARDS

     const cat3 = data.tripuladas[0].tipo
     categoria3.textContent = cat3

     data.tripuladas.reverse().forEach(elemet =>{
        templateCard.querySelector('img').setAttribute('src',  elemet.img)
        templateCard.querySelector('.card-title').textContent = elemet.nombre
        templateCard.querySelector('#empuje').textContent =  elemet.empuje
        templateCard.querySelector('#destino').textContent = elemet.destino
  
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
     })
     inv3.appendChild(fragment)// y le pasamos todos los fragmentos del forEach al id CARDS
}


const pintarBuscador = dato => {
    resultado.innerHTML = ""
    dato.forEach(element => {
        templateBuscador.querySelector('.card-header').textContent = element.nombre
        templateBuscador.querySelectorAll('.list-group-item')[0].textContent =  element.empuje
        templateBuscador.querySelectorAll('.list-group-item')[1].textContent =  element.destino
        templateBuscador.querySelectorAll('.list-group-item')[2].textContent =  element.combustible
        templateBuscador.querySelectorAll('.list-group-item')[3].textContent =  element.pais
        templateBuscador.querySelectorAll('.list-group-item')[4].textContent =  element.id_r

        const clone = templateBuscador.cloneNode(true)
        fragment.appendChild(clone)
    })
    resultado.appendChild(fragment)// y le pasamos todos los fragmentos del forEach al id CARDS


}


const btnIniciar = document.querySelector('.iniciar')
const btnSalir = document.querySelector('.salir')
const divResultados = document.querySelector('.resultados')

btnIniciar.addEventListener('click', () =>{
   divResultados.style.visibility = "visible"
   btnIniciar.style.display = "none"
   btnSalir.style.display = "block"
})
btnSalir.addEventListener('click', () =>{
    divResultados.style.visibility = "hidden"
    btnSalir.style.display = "none"
    btnIniciar.style.display = "block"
})

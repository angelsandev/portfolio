/*
-----------------------------------------------------------
BOTON HAMBURGUESA PARA SIDEBAR RESPONSIVE
-----------------------------------------------------------
*/

const menuToggler = document.getElementById('btnHamburguesa');
const sideBar = document.querySelector('.sidebar');

menuToggler.addEventListener('click', function () {
  sideBar.classList.toggle('active');
});


/*
-----------------------------------------------------------
ACTIVAR ELEMENTOS DE NAVEGACION DEL SIDEBAR
-----------------------------------------------------------
*/
const nav = document.querySelector('.nav');
const uno = document.querySelectorAll('li a');    //devuelve una lista de elementos

nav.addEventListener('click', function (event) {

  uno.forEach((elemento) => {                     //recorrer todos los elementos del menu nav
    elemento.classList.remove('active');
  });
  const clic = event.target.closest('a');         //target devuelve lo que el usuario toca

  clic.classList.add('active');                   //Activar el elemento del menú que se ha clicado

  console.log(clic);

  //-------------------DESPLAZAMIENTO SUAVE-------------------------------------//
  const ancla = clic.getAttribute('href');          //ancla tendrá el valor activado, ej.: #about (esto es el id del enlace)
  const enlace = document.querySelector(ancla);
  if (enlace) {
    event.preventDefault();                         //Evita el desplazamiento brusco inicial
    enlace.scrollIntoView({
      behavior: 'smooth',
      block: 'start'                                 // Se alinea al principio de la sección 
    });
  }
});

/*
-----------------------------------------------------------
ACTIVAR ELEMENTOS DE NAVEGACION CON SCROLL, DEL SIDEBAR
SCROLL SPY
IntersectionObserver=> API de JS => ejecuta una funcion cuando un elemento entra o sale del viewport
-----------------------------------------------------------
*/
const secciones = document.querySelectorAll('section[id], h2[id]');  //seleccionar las secciones con un id

document.addEventListener('DOMContentLoaded', function () {
  //offest de visualización
  const offset = {
    threshold: 0.6                                                        //El 80% de la sección debe estar visible
  };
  const vigilante = new IntersectionObserver((secciones) => {
    secciones.forEach((seccion) => {                                      //Recorrer cada sección guardada
      if (seccion.isIntersecting) {                                       // Si la sección ocupa al menos el 50% de la pantalla (isIntersecting)
        const id = seccion.target.getAttribute('id');                     //target devuelve lo que está activado
        const enlace = document.querySelector(`.nav li a[href="#${id}"]`);// Buscamos el enlace que tiene href="#idActual"
        console.log("ID detectdo ",id);
        console.log("Enlace encontrado ",enlace);
        
        if (enlace) {
          uno.forEach((elemento) => {                                     //recorrer todos los elementos del menu nav
          elemento.classList.remove('active');
        });
          enlace.classList.add('active');                                 //Activar el enlace de la sección actual
        }
        
      }
    });
  }, offset);
  secciones.forEach((seccion) => vigilante.observe(seccion));              //Activar el vigilante para cada sección  

});



/*
-----------------------------------------------------------
BOTON BACK TO TOP
-----------------------------------------------------------
*/

const backTop = document.getElementById("backTop");

backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 500) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }

});



/*
-----------------------------------------------------------
BOTON ENLACES EXTERNOS www.tecnoplc.com
-----------------------------------------------------------
*/
const tecnoplc = document.getElementById("tecnoplc");

tecnoplc.addEventListener("click", function () {
  window.open("https://www.tecnoplc.com", "_blank");
});

/*
-----------------------------------------------------------
BOTON ENLACES EXTERNOS Star Wars API
Se ha comentado en el HTML para evitar que el botón aparezca
-----------------------------------------------------------
*/
/*
const starWars = document.getElementById("starWars");

starWars.addEventListener("click", function () {
  window.open("https://angelsandev.github.io/StarWars_API/", "_blank");
});
*/
/*


/*
-----------------------------------------------------------
BOTON ENLACES EXTERNOS El Tiempo API
-----------------------------------------------------------
*/
/*
const clima = document.getElementById("clima");

clima.addEventListener("click", function () {
  window.open("https://angelsandev.github.io/ELTIEMPO/", "_blank");
});
*/
/*
-----------------------------------------------------------
BOTON DE PORTFOLIO Salto al repositorio de GitHub
Se ha comentado en el HTML para evitar que el botón aparezca
-----------------------------------------------------------
*/
/*
const inicio = document.getElementById("inicio");
inicio.addEventListener("click", function () {
  window.open("https://github.com/angelsandev/portfolio", "_blank");
});
*/

/*
-----------------------------------------------------------
BOTON DE ENTRENA+  Abre un modal card
-----------------------------------------------------------
*/
const abrirEntrena = document.getElementById("abrirEntrena");
const modalSimple = document.getElementById("modalSimple");
abrirEntrena.addEventListener("click", function () {
  modalSimple.style.display = "block";
});

modalSimple.addEventListener("click", function () {
  modalSimple.style.display = "none";
});

/*
-----------------------------------------------------------
BOTON DE PORTFOLIO Salto a los repositorios de GitHub
-----------------------------------------------------------
*/
const repositorios = document.getElementById("repositorios");
repositorios.addEventListener("click", function () {
  window.open("https://github.com/angelsandev?tab=repositories", "_blank");
});

/*
-----------------------------------------------------------
BOTON DE Landing Page con Astro. 
-----------------------------------------------------------
*/
const landingGate = document.getElementById("landing-gate");
landingGate.addEventListener("click", function () {
  window.open("https://github.com/angelsandev/pdf-landing-gate", "_blank");
});

/*
-----------------------------------------------------------
BOTON DE Web Scraping. 
-----------------------------------------------------------
*/
const scraping = document.getElementById("scraping");
scraping.addEventListener("click", function () {
  window.open("https://github.com/angelsandev/comparador_web", "_blank");
});

/*
-----------------------------------------------------------
BOTON Proyecto MQTT
-----------------------------------------------------------
*/

const mqtt = document.getElementById("mqtt-dash");

mqtt.addEventListener("click", function () {
  window.open("https://mqttsync-dash-frontend.vercel.app/", "_blank");
});
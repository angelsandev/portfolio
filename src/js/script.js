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
BOTON ENLACES EXTERNOS
-----------------------------------------------------------
*/
const tecnoplc = document.getElementById("tecnoplc");

tecnoplc.addEventListener("click", function () {
  window.open("https://www.tecnoplc.com", "_blank");
});

/*
-----------------------------------------------------------
BOTON DE PORTFOLIO
-----------------------------------------------------------
*/
const inicio = document.getElementById("inicio");
inicio.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
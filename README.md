# 🚀 Mi Portfolio Personal - Ángel Sánchez

Bienvenido al repositorio de mi portfolio personal. Aquí muestro toda mi experiencia, utilizando:
* Una carta de presentación.
* Una evolución técnica: de la **programación industrial (PLC/HMI)** hacia el **desarrollo de aplicaciones web**.
* Mis habilidades y aptitudes recogidas en el camino.

> "20 años en programación industrial, ahora construyendo soluciones en la web."

---
### 🌐 Mi Portfolio Web
[![Portfolio Ángel Sánchez](https://img.shields.io/badge/Visitar-Portfolio-0078D4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://angelsandev.github.io/portfolio)

![Formación Académica](./src/images/Formación%20Académica%20en%20Portfolio.png)

> 💡 **Nota:** Puedes ver mi Portfolio interactivo pulsando el botón. Más abajo lo que tienes es una descripción técnica de todas las tecnologías que he utilizado para desarrollar el Portfolio.

---

## 🛠️ Stack Tecnológico

* **HTML5:** Estructura semántica adecuada para SEO y accesibilidad.
* **CSS3:** Variables nativas (`:root`), Flexbox y **Grid Layout** (con diseños adaptativos de 2, 3, 4 y 6 columnas).
* **JavaScript (ES6+):** Lógica interactiva y manipulación dinámica del DOM.
* **DevIcons:** Iconos externos para mostrar herramientas y habilidades.

![Estructura HTML y CSS](./src/images/Estructura%20HTML%20y%20CSS.png)
---

## 🧠 Lógica y Funcionalidades (JavaScript)

Utilizo varios conceptos en JavaScript para interactividad, rendimiento y dinamismo. Experiencia de Usuario (UX).

### 1. Intersection Observer API (Scroll Spy)
API `IntersectionObserver`. Este detecta qué sección está viendo el usuario en tiempo real y actualiza automáticamente la clase `.active` en el menú de navegación. Es mucho más eficiente que los eventos de scroll tradicionales ya que no sobrecarga el navegador.

### 2. Gestión de Navegación y DOM
* **Smooth Scrolling:** Evitar saltos bruscos. Navegación suave en enlaces de sidebar: método `scrollIntoView`.
* **Menú Responsive:** Sidebar Dual dependiendo de tamaño de pantalla. (`toggle`) mediante botón hamburguesa.
* **Delegación de Eventos:** Uso de `event.target.closest('a')` para asegurar que las interacciones en el menú sean precisas.
* **Captura de Eventos:** Uso de `event listeners`.
* **Prevención de acciones:** Uso de `target` y `prevent default`.
* **Acceso al DOM:** Identificación de elementos, modificación del documento mediante código.

![Gestión en JavaScript](./src/images/Gestión%20en%20JavaScript.png)

### 3. Utilidades Dinámicas
* **Back to Top:** Botón para subir a inicio de página. Aparece según scroll `window.scrollY > 500`.
* **Gestión de Enlaces Externos:** Manejadores de eventos para abrir proyectos (TecnoPLC y Star Wars API) en pestañas nuevas `window.open`.

---

### 🚀 ¿Cómo usar este repositorio?

Si necesitar observar este proyecto de forma local:

1.  **Clona el proyecto:**
    ```bash
    git clone [https://github.com/angelsandev/portfolio](https://github.com/angelsandev/portfolio)
    ```
2.  **Abre el archivo:**
    Abre el archivo `index.html` en tu navegador.
3.  **¡Explora el código!**
    Podrás revisar la arquitectura y código. Pero recuerda echar un vistazo a mi experiencia y habilidades. Gracias.

## 📂 Organización del Proyecto

```text
/
├── index.html          # Estructura principal y semántica
├── src/
│   ├── css/
│   │   └── style.css   # Variables, Layouts (Grid/Flex) y Responsive Design
│   ├── js/
│   │   └── script.js  # Observer API, eventos y lógica de scroll
│   └── images/         # Assets y capturas de los proyectos
└── README.md
├── CHANGELOG.md
```

## ✍️ Autor
Hecho con ❤️ por [**Ángel Sánchez Guillén**](https://github.com/angelsandev)

[![Email](https://img.shields.io/badge/Email-geletesan@hotmail.com-red?style=flat-square&logo=gmail)](mailto:geletesan@hotmail.com)
const navBurguer = document.getElementById("abrirMenu");
const menuNav = document.getElementById("menuNav");
const flecha = document.getElementById("flechaMenu");

navBurguer.addEventListener("click", function() {
    if (menuNav.classList.contains("mostrar-menu")) {
        menuNav.classList.remove("mostrar-menu");
        flecha.classList.remove("flecha-menu");
    } else {
        menuNav.classList.add("mostrar-menu");
        flecha.classList.add("flecha-menu")
    }
});

// FUNCION DEL TEXTAREA DEL CREAR PRODUCTO

const textareaCrear = document.getElementById('descripcion');
textareaCrear.addEventListener('input', e => {
    textareaCrear.style.height = '24px';
    textareaCrear.style.height = textareaCrear.scrollHeight + 'px';
    console.log(textareaCrear.scrollHeight);    
})
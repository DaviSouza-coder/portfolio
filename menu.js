let btnMenu = document.getElementById('btn-abrir-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

window.addEventListener("scroll", fixarHeader);
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(fixarHeader, 100); // Espera o scroll terminar
    });
});

function fixarHeader() {
    const header = document.querySelector("header");
    const inicio = document.querySelector("#inicio");

    if (!inicio) return;

    const limite = inicio.offsetTop + inicio.offsetHeight;

    if (window.scrollY >= limite) {
        header.classList.add("fixo");
    } else {
        header.classList.remove("fixo");
    }
}

const menuBtn = document.querySelector(".menu");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.right = "20px";
        menu.style.background = "#111";
        menu.style.padding = "20px";
        menu.style.borderRadius = "12px";
        menu.style.gap = "15px";
        menu.style.boxShadow = "0 15px 35px rgba(0,0,0,.35)";
        menu.style.zIndex = "1000";

    }

});

// Cerrar menú al seleccionar una opción
document.querySelectorAll("nav ul a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            menu.style.display = "none";
        }

    });

});

// Restaurar menú al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        menu.removeAttribute("style");

    }

});

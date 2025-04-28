function animarAoScroll() {
    const elementos = document.querySelectorAll("[data-animar]");
    const alturaTela = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const topoElemento = el.getBoundingClientRect().top;

        const delay = el.getAttribute("data-delay") || "0s";
        el.style.setProperty("--delay", delay);

        if (el.classList.contains('hero') || (topoElemento < alturaTela && topoElemento > 0)) {
            el.classList.add("ativo");
        } else {
            el.classList.remove("ativo");
        }
    });
}

window.addEventListener("scroll", animarAoScroll);
window.addEventListener("load", animarAoScroll);

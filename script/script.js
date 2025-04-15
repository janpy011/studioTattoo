function animarAoScroll() {
    const elementos = document.querySelectorAll("[data-animar]");
    const alturaTela = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const topoElemento = el.getBoundingClientRect().top;

        if (topoElemento < alturaTela) {
            const delay = el.getAttribute("data-delay") || "0s";
            el.style.setProperty("--delay", delay);
            el.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", animarAoScroll);
window.addEventListener("load", animarAoScroll);

const btn = document.getElementById("btnImage");
const cria = document.getElementById("b");
const toggle = document.querySelector('input[type="checkbox"]');
const body = document.getElementById("body");

const estados = {
    normal: "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
};

let contador = 0;
let intervalo = null;
let animando = false;

toggle.addEventListener("change", () => {

    console.log("clicou");

    if (toggle.checked) {
        // 🌙 NOITE
        body.style.backgroundImage = "url('bg_n.png')";
    } else {
        // ☀️ DIA
        body.style.backgroundImage = "url('bg.png')";
    }

    // mantém o fundo bonito
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
});

function mostrarFerlini() {
    const img = document.getElementById("ferliniImg");

    img.classList.toggle("hidden");
}

function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;

        console.log("tempo:", contador);

        if (contador === 30) {
            cria.src = estados.puto;
        }

        if (contador === 60) {
            cria.src = estados.morto;
        }
    }, 1000);
}

function alimentar() {
    if (animando) return;

    animando = true;
    contador = 0;

    cria.src = estados.comendo;

    setTimeout(() => {
        cria.src = estados.alimentado;
        animando = false;
    }, 1000);
}

controlador();
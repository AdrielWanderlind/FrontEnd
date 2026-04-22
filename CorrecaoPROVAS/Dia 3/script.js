function mostrarTabela() {
    let img = document.createElement("img");
    img.src = "img/Tabela_Jogos.png"; // caminho da imagem
    img.style.width = "80%";

    document.body.appendChild(img);
}

function revelar() {

    // imagem
    document.querySelector(".card-img-top")
        .src = "img/_vinicius_junior.png";

    // textos
    document.getElementById("Nome").innerHTML =
        "Vinícius Júnior <span id='Rank' class='badge text-bg-success'>9.5</span>";

    document.getElementById("Data_Nas").innerText =
        "12/07/2000 (25 anos)";

    document.getElementById("Alutra").innerText =
        "1,76 m";

    document.getElementById("Posição ").innerText =
        "Ponta-esquerda / Atacante";

    // remover classes placeholder
    let elementos = document.querySelectorAll(".placeholder");
    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}
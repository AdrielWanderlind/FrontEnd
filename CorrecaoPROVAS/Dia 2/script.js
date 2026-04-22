function proximo() {
    document.querySelector(".container").innerHTML = `
    
    <div class="card">
        <h2>🅳 Grupo D</h2>
        <ul>
            <li>Estados Unidos</li>
            <li>Paraguai</li>
            <li>Austrália</li>
            <li>Turquia</li>
        </ul>
        <details>
            <summary>Saiba mais</summary>
            <p>EUA jogam em casa.</p>
        </details>
    </div>

    <div class="card">
        <h2>🅴 Grupo E</h2>
        <ul>
            <li>Alemanha</li>
            <li>Equador</li>
            <li>Costa do Marfim</li>
            <li>Curaçao</li>
        </ul>
        <details>
            <summary>Saiba mais</summary>
            <p>Alemanha domina fases de grupo.</p>
        </details>
    </div>

    <div class="card">
        <h2>🅵 Grupo F</h2>
        <ul>
            <li>Holanda</li>
            <li>Japão</li>
            <li>Tunísia</li>
            <li>Suécia</li>
        </ul>
        <details>
            <summary>Saiba mais</summary>
            <p>Jogos equilibrados.</p>
        </details>
    </div>
    `;
}

function add() {

    let novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.style.width = "22rem";

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">
                Lucas Paquetá 
                <span class="badge text-bg-success">8.8</span>
            </h5>

            <p class="card-text">
                27/08/1997 (28 anos)<br>
                1,80 m<br>
                Meio-campista
            </p>
        </div>
    `;

    // 👇 pega o container correto (onde já existe o card)
    document.querySelector(".d-flex").appendChild(novoCard);
}
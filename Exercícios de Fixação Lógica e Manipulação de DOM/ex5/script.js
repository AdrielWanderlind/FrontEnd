const input = document.getElementById("nomeConvidado");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("listaConvidados");

let convidados = [];

botaoAdicionar.addEventListener("click", adicionarConvidado);

function adicionarConvidado() {

  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  convidados.push(nome);

  renderizarLista();

  input.value = "";
}

function renderizarLista() {

  lista.innerHTML = "";

  convidados.forEach((convidado, index) => {

    const item = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = convidado;
    span.classList.add("nome");

    // Área dos botões
    const areaBotoes = document.createElement("div");
    areaBotoes.classList.add("botoes");

    // Botão concluir
    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.classList.add("concluir");

    btnConcluir.addEventListener("click", () => {
      span.classList.toggle("riscado");
    });

    // Botão editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");

    btnEditar.addEventListener("click", () => {

      const novoNome = prompt(
        "Editar convidado:",
        convidados[index]
      );

      if (novoNome !== null && novoNome.trim() !== "") {

        convidados[index] = novoNome.trim();

        renderizarLista();
      }
    });

    // Botão excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("excluir");

    btnExcluir.addEventListener("click", () => {

      convidados.splice(index, 1);

      renderizarLista();
    });

    // Adicionando elementos
    areaBotoes.appendChild(btnConcluir);
    areaBotoes.appendChild(btnEditar);
    areaBotoes.appendChild(btnExcluir);

    item.appendChild(span);
    item.appendChild(areaBotoes);

    lista.appendChild(item);
  });
}
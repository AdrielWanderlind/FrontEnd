const botao = document.getElementById("calcular");

botao.addEventListener("click", () => {

  const bandeira = document.getElementById("bandeira").value;
  const valor = Number(document.getElementById("valor").value);
  const parcelas = Number(document.getElementById("parcelas").value);

  const resultado = document.getElementById("resultado");

  let taxaBandeira = 0;

  // Taxa da bandeira
  switch (bandeira) {
    case "visa":
      taxaBandeira = valor * 0.02;
      break;

    case "master":
      taxaBandeira = valor * 0.0185;
      break;

    case "elo":
      taxaBandeira = valor * 0.03;
      break;
  }

  // Juros simples
  const juros = valor * (0.015 * parcelas);

  // Taxa fixa mensal
  const taxaMensal = 12.50 * parcelas;

  // Valor total
  const valorTotal = valor + taxaBandeira + juros + taxaMensal;

  // Valor da parcela
  const valorParcela = valorTotal / parcelas;

  resultado.innerHTML = `
    <strong>Resumo da Venda:</strong><br><br>

    💰 Valor da Venda: R$ ${valor.toFixed(2)} <br>

    💳 Taxa da Bandeira: R$ ${taxaBandeira.toFixed(2)} <br>

    📈 Valor dos Juros: R$ ${juros.toFixed(2)} <br>

    🏦 Taxa Mensal: R$ ${taxaMensal.toFixed(2)} <br>

    📦 Total da Compra: R$ ${valorTotal.toFixed(2)} <br>

    🧾 Valor de Cada Parcela: R$ ${valorParcela.toFixed(2)}
  `;
});
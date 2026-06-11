function calcular() {

    let valorPacote = Number(document.getElementById("pacote").value);
    let quantidade = Number(document.getElementById("pessoas").value);

    let custoBruto = valorPacote * quantidade;

    let taxaServico = custoBruto * 0.10;

    let subtotal = custoBruto + taxaServico;

    let desconto = 0;

    if (quantidade > 100) {
        desconto = subtotal * 0.05;
    }

    let totalFinal = subtotal - desconto;

    document.getElementById("bruto").innerHTML = custoBruto.toFixed(2);
    document.getElementById("taxa").innerHTML = taxaServico.toFixed(2);
    document.getElementById("desconto").innerHTML = desconto.toFixed(2);
    document.getElementById("total").innerHTML = totalFinal.toFixed(2);
}
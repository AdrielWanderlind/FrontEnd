function analisarCartao() {

    let numero = document.getElementById("cartao").value;

    numero = numero.replace(/\s/g, "");
    numero = numero.replace(/\./g, "");

    if(numero.length < 13 || numero.length > 16){
        document.getElementById("status").innerHTML = "Número Inválido";
        return;
    }

    let valido = validarLuhn(numero);

    let bandeira = identificarBandeira(numero);
    let setor = identificarSetor(numero);
    let banco = identificarBanco(numero);

    document.getElementById("status").innerHTML =
        valido ? "✅ Válido" : "❌ Inválido";

    document.getElementById("bandeira").innerHTML = bandeira;
    document.getElementById("setor").innerHTML = setor;
    document.getElementById("banco").innerHTML = banco;
}

function validarLuhn(numero){

    let soma = 0;
    let dobrar = false;

    for(let i = numero.length - 1; i >= 0; i--){

        let digito = parseInt(numero[i]);

        if(dobrar){
            digito *= 2;

            if(digito > 9){
                digito -= 9;
            }
        }

        soma += digito;
        dobrar = !dobrar;
    }

    return soma % 10 === 0;
}

function identificarBandeira(numero){

    if(numero.startsWith("4")){
        return "Visa";
    }

    if(
        numero.startsWith("51") ||
        numero.startsWith("52") ||
        numero.startsWith("53") ||
        numero.startsWith("54") ||
        numero.startsWith("55")
    ){
        return "MasterCard";
    }

    if(
        numero.startsWith("34") ||
        numero.startsWith("37")
    ){
        return "American Express";
    }

    return "Desconhecida";
}

function identificarSetor(numero){

    let primeiroDigito = numero[0];

    switch(primeiroDigito){

        case "1":
            return "Companhias Aéreas";

        case "2":
            return "Serviços Financeiros";

        case "3":
            return "Viagens e Entretenimento";

        case "4":
        case "5":
            return "Instituições Bancárias";

        case "6":
            return "Comércio e Bancos";

        default:
            return "Não identificado";
    }
}

function identificarBanco(numero){

    let prefixo = numero.substring(0, 4);

    switch(prefixo){

        case "4000":
            return "Banco do Brasil";

        case "4011":
            return "Bradesco";

        case "5100":
            return "Itaú";

        case "5200":
            return "Santander";

        case "5500":
            return "Caixa Econômica";

        default:
            return "Banco não identificado";
    }
}
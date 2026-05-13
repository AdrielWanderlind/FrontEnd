function validarCPF() {
      let cpf = document.getElementById("cpf").value;

      // Remove pontos e traços
      cpf = cpf.replace(/\D/g, "");

      const resultado = document.getElementById("resultado");

      // Verifica tamanho e CPFs repetidos
      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        resultado.textContent = "CPF Inválido!";
        resultado.className = "invalido";
        return;
      }

      // ===== 1º Dígito =====
      let soma = 0;

      for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
      }

      let digito1 = (soma * 10) % 11;

      if (digito1 === 10) {
        digito1 = 0;
      }

      // ===== 2º Dígito =====
      soma = 0;

      for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
      }

      let digito2 = (soma * 10) % 11;

      if (digito2 === 10) {
        digito2 = 0;
      }

      // Validação final
      if (
        digito1 == cpf[9] &&
        digito2 == cpf[10]
      ) {
        resultado.textContent = "CPF Válido!";
        resultado.className = "valido";
      } else {
        resultado.textContent = "CPF Inválido!";
        resultado.className = "invalido";
      }
    }
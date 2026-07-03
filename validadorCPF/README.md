# 🪪 Validador de CPF

Projeto desenvolvido com HTML, CSS e JavaScript para validar números de CPF por meio do cálculo dos dígitos verificadores, seguindo as regras oficiais utilizadas no Brasil.

A aplicação realiza o tratamento da entrada, verifica formatos inválidos e informa ao usuário se o CPF é válido ou inválido de forma imediata.

---

## 📌 Objetivo

Praticar lógica de programação e algoritmos de validação através da implementação das regras matemáticas utilizadas para verificar a autenticidade de números de CPF.

---

## 🚀 Funcionalidades

* Validação completa de CPF
* Remoção automática de pontos e traços
* Identificação de CPFs com sequência repetida
* Cálculo do primeiro dígito verificador
* Cálculo do segundo dígito verificador
* Exibição dinâmica do resultado
* Feedback visual para CPF válido ou inválido

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📚 Conceitos praticados

### HTML

* Estruturação de formulários
* Campos de entrada
* Organização da interface

### CSS

* Centralização utilizando Flexbox
* Estilização de formulários
* Feedback visual através de classes CSS
* Interface simples e responsiva

### JavaScript

* Manipulação de strings
* Expressões regulares (Regex)
* Estruturas de repetição
* Estruturas condicionais
* Conversão de tipos
* Manipulação do DOM
* Implementação de algoritmos

---

## 🧠 Regras implementadas

### Tratamento da entrada

Antes da validação, o sistema remove automaticamente caracteres como pontos e traços, considerando apenas os números informados.

### Verificação inicial

São rejeitados automaticamente:

* CPFs com quantidade incorreta de dígitos
* Sequências repetidas (ex.: 11111111111)

### Cálculo dos dígitos verificadores

O algoritmo calcula:

* Primeiro dígito verificador
* Segundo dígito verificador

Os valores obtidos são comparados com os dígitos informados pelo usuário para determinar a validade do documento.

---

## 📂 Estrutura do projeto

```bash
validadorCPF/
│
├── index.html
├── style.css
└── script.js
```

---

## 🔍 Fluxo da aplicação

```text
Entrada do CPF
       │
       ▼
Remoção de caracteres especiais
       │
       ▼
Validação do tamanho
       │
       ▼
Verificação de sequências repetidas
       │
       ▼
Cálculo do 1º dígito verificador
       │
       ▼
Cálculo do 2º dígito verificador
       │
       ▼
Comparação com os dígitos informados
       │
       ▼
Exibição do resultado
```

---

## 🎯 Aprendizados

Este projeto foi desenvolvido para consolidar conhecimentos em lógica de programação por meio da implementação do algoritmo oficial de validação de CPF.

Durante o desenvolvimento foram praticados conceitos como manipulação de strings, expressões regulares, estruturas de repetição, condicionais e cálculo de dígitos verificadores, simulando uma funcionalidade frequentemente utilizada em sistemas de cadastro e autenticação.

Desenvolvido por **Adriel Wanderlind**.

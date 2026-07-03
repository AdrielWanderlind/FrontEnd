# 🎓 Calculadora de Média Escolar

Projeto desenvolvido com HTML, CSS e JavaScript para calcular a média de um aluno com base em três notas, classificando automaticamente sua situação acadêmica.

A aplicação realiza os cálculos de forma dinâmica e informa se o aluno foi aprovado, está em exame ou foi reprovado, apresentando o resultado diretamente na interface.

---

## 📌 Objetivo

Praticar conceitos fundamentais de lógica de programação por meio da implementação de regras de classificação acadêmica, utilizando manipulação do DOM, estruturas condicionais e cálculos matemáticos.

---

## 🚀 Funcionalidades

* Cadastro do nome do aluno
* Inserção de três notas
* Cálculo automático da média aritmética
* Classificação do aluno conforme a média obtida
* Exibição dinâmica do resultado
* Alteração visual do resultado conforme a situação do aluno

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📚 Conceitos praticados

### HTML

* Estruturação de formulários
* Campos de entrada para texto e números
* Organização dos elementos da interface

### CSS

* Layout centralizado com Flexbox
* Estilização de formulários
* Feedback visual utilizando classes CSS
* Interface simples e organizada

### JavaScript

* Manipulação do DOM
* Eventos com `addEventListener()`
* Conversão de dados utilizando `Number()`
* Estruturas condicionais (`if` / `else if` / `else`)
* Operações matemáticas
* Atualização dinâmica da interface

---

## 🧠 Regras implementadas

### Cálculo da média

O sistema calcula automaticamente a média aritmética das três notas informadas.

### Classificação do aluno

|         Média | Situação  |
| ------------: | --------- |
|    7,0 a 10,0 | Aprovado  |
|     4,0 a 6,9 | Exame     |
| Abaixo de 4,0 | Reprovado |

### Informações exibidas

Após o cálculo são apresentados:

* Nome do aluno
* Média final
* Situação acadêmica
* Quantidade de pontos restantes para atingir a nota máxima (quando em exame)

---

## 📂 Estrutura do projeto

```bash
mediaEscolar/
│
├── index.html
├── style.css
└── script.js
```

---

## 🔍 Fluxo da aplicação

```text
Entrada do nome
        │
        ▼
Inserção das três notas
        │
        ▼
Cálculo da média aritmética
        │
        ▼
Classificação da situação do aluno
        │
        ├────────► Aprovado
        ├────────► Exame
        └────────► Reprovado
                 │
                 ▼
Exibição do resultado na interface
```

---

## 🎯 Aprendizados

Este projeto foi desenvolvido para consolidar conhecimentos em lógica de programação através da implementação de regras de classificação acadêmica e cálculo de médias.

Durante o desenvolvimento foram praticados conceitos como manipulação do DOM, eventos, estruturas condicionais, operações matemáticas e atualização dinâmica da interface, simulando funcionalidades comuns em sistemas de gestão escolar.

Desenvolvido por **Adriel Wanderlind**.

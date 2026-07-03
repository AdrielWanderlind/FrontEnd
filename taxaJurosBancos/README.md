# 💳 Calculadora de Taxas Bancárias

Projeto desenvolvido com HTML, CSS e JavaScript para simular o cálculo de taxas aplicadas em vendas realizadas por cartão de crédito.

A aplicação considera a bandeira do cartão, o valor da venda e a quantidade de parcelas para calcular taxas, juros, custo mensal e o valor final da transação.

---

## 📌 Objetivo

Praticar lógica de programação e implementação de regras de negócio por meio da simulação de cálculos financeiros utilizados em operações de pagamento parcelado.

---

## 🚀 Funcionalidades

* Seleção da bandeira do cartão
* Cálculo da taxa conforme a bandeira escolhida
* Cálculo de juros simples sobre o parcelamento
* Aplicação de taxa fixa mensal
* Cálculo do valor total da venda
* Cálculo do valor de cada parcela
* Exibição detalhada do resumo financeiro

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📚 Conceitos praticados

### HTML

* Estruturação de formulários
* Campos de entrada numéricos
* Seleção de opções com `select`

### CSS

* Layout centralizado com Flexbox
* Organização visual da interface
* Estilização de formulários
* Painel de exibição de resultados

### JavaScript

* Manipulação do DOM
* Eventos com `addEventListener()`
* Conversão de tipos utilizando `Number()`
* Estruturas condicionais (`switch`)
* Operações matemáticas
* Atualização dinâmica da interface

---

## 🧠 Regras implementadas

### Taxa da bandeira

Cada bandeira possui um percentual específico aplicado sobre o valor da venda.

| Bandeira   |  Taxa |
| ---------- | ----: |
| Visa       | 2,00% |
| MasterCard | 1,85% |
| Elo        | 3,00% |

### Juros do parcelamento

O sistema aplica juros simples de **1,5% por parcela** sobre o valor informado.

### Taxa mensal

Além dos juros, é considerada uma taxa fixa de **R$ 12,50 por parcela**.

### Valor final

O sistema calcula automaticamente:

* Taxa da bandeira
* Valor dos juros
* Taxa mensal
* Total da compra
* Valor individual de cada parcela

---

## 📂 Estrutura do projeto

```bash
taxaJurosBancos/
│
├── index.html
├── style.css
└── script.js
```

---

## 🔍 Fluxo da aplicação

```text
Seleção da bandeira
          │
          ▼
Informação do valor da venda
          │
          ▼
Quantidade de parcelas
          │
          ▼
Cálculo da taxa da bandeira
          │
          ▼
Cálculo dos juros
          │
          ▼
Aplicação da taxa mensal
          │
          ▼
Cálculo do valor total
          │
          ▼
Cálculo do valor por parcela
          │
          ▼
Exibição do resumo financeiro
```

---

## 🎯 Aprendizados

Este projeto foi desenvolvido para aplicar conceitos de lógica de programação em um contexto financeiro, simulando o cálculo de custos envolvidos em operações de venda com cartão de crédito.

Durante o desenvolvimento foram praticados conceitos de manipulação do DOM, eventos, estruturas condicionais, cálculos matemáticos e implementação de regras de negócio, aproximando a aplicação de cenários encontrados em sistemas de meios de pagamento e gestão financeira.

Desenvolvido por **Adriel Wanderlind**.

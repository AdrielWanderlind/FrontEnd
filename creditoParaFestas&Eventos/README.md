# 🎉 Calculadora de Orçamento para Festas e Eventos

Aplicação desenvolvida com HTML, CSS e JavaScript para simular o cálculo de orçamento de eventos com base no pacote escolhido e na quantidade de participantes.

O sistema calcula automaticamente custo bruto, taxa de serviço, possíveis descontos e o valor final do orçamento.

---

## 📌 Objetivo

Praticar conceitos de desenvolvimento Front-End por meio da implementação de regras de negócio, cálculos financeiros e manipulação dinâmica da interface utilizando JavaScript.

---

## 🚀 Funcionalidades

* Seleção de diferentes pacotes de evento
* Definição da quantidade de participantes
* Cálculo automático do custo bruto
* Aplicação de taxa de serviço
* Aplicação de desconto para grandes eventos
* Exibição detalhada do valor final

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📚 Conceitos praticados

### HTML

* Estruturação de formulários
* Uso de `select`, `input` e elementos dinâmicos

### CSS

* Centralização com Flexbox
* Estilização de formulários
* Organização visual dos resultados
* Feedback visual com estados de botão

### JavaScript

* Captura de valores do DOM
* Conversão de dados com `Number()`
* Operações matemáticas
* Estruturas condicionais (`if`)
* Atualização dinâmica de conteúdo com `innerHTML`

---

## 🧮 Regras utilizadas

### Taxa de serviço

* Aplicada automaticamente em **10%** sobre o custo bruto.

### Desconto

* Eventos com mais de **100 participantes** recebem **5% de desconto** sobre o subtotal.

### Fórmula aplicada

```text
Custo Bruto = Valor do Pacote × Quantidade

Taxa = Custo Bruto × 10%

Subtotal = Custo Bruto + Taxa

Desconto = 5% (quando quantidade > 100)

Total = Subtotal − Desconto
```

---

## 📂 Estrutura do projeto

```bash
creditoParaFestas&Eventos/
│
├── index.html
├── style.css
└── script.js
```

---


## 🎯 Aprendizados

Este projeto permitiu aplicar lógica de programação e regras de negócio em um cenário próximo de aplicações reais, explorando cálculos condicionais e atualização dinâmica da interface.

Desenvolvido por **Adriel Wanderlind**.

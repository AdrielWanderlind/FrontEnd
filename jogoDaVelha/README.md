# ❌⭕ Jogo da Velha com React

Projeto desenvolvido utilizando React para recriar o clássico Jogo da Velha com atualização dinâmica de interface, gerenciamento de estado e controle de regras da partida.

O sistema permite alternar entre jogadores, identificar automaticamente o vencedor e reiniciar o jogo.

---

## 📌 Objetivo

Praticar conceitos fundamentais do ecossistema React, incluindo componentes reutilizáveis, gerenciamento de estado com Hooks e atualização reativa da interface.

---

## 🚀 Funcionalidades

* Alternância automática entre jogadores (X e O)
* Atualização dinâmica do tabuleiro
* Verificação automática de vitória
* Bloqueio de jogadas após encerramento
* Reinício da partida
* Interface simples e interativa

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* React
* React Hooks (`useState`)

---

## 📚 Conceitos praticados

### React

* Componentização
* Props
* Estado com `useState`
* Fluxo de dados entre componentes
* Renderização reativa

### JavaScript

* Manipulação de arrays
* Funções puras
* Estruturas condicionais
* Separação de responsabilidades

### Interface

* Organização visual
* Atualização dinâmica do DOM via React

---

## 🧩 Estrutura dos componentes

### `Square`

Responsável por representar cada posição individual do tabuleiro.

### `Board`

Gerencia as jogadas e controla a exibição do estado atual da partida.

### `Game`

Controla o estado global do jogo e reinício da aplicação.

### `calculateWinner`

Função responsável por validar combinações vencedoras.

---

## 🧠 Regras implementadas

* Jogador **X** inicia a partida
* Cada posição pode ser preenchida apenas uma vez
* O jogo encerra automaticamente quando existe vencedor
* O botão **Reiniciar** limpa o tabuleiro

---

## 📂 Estrutura do projeto

```bash
jogoDaVelha/
│
├── index.html
├── style.css
└── script.js
```

---

## 🎯 Aprendizados

Este projeto foi desenvolvido para consolidar conceitos de React através da construção de uma aplicação interativa baseada em estado, eventos e composição de componentes.

Durante o desenvolvimento foram praticados conceitos importantes de arquitetura Front-End e controle de interface orientado a componentes.

Desenvolvido por **Adriel Wanderlind**.

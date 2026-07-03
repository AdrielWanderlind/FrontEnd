# 🛡️ Validador de Segurança de Cartões

Projeto desenvolvido com HTML, CSS e JavaScript para validar números de cartões utilizando o Algoritmo de Luhn e identificar informações como bandeira, setor de atuação e banco emissor com base nos prefixos informados.

A aplicação simula parte do funcionamento de sistemas de validação utilizados em instituições financeiras, proporcionando uma experiência prática com algoritmos e regras de negócio.

---

## 📌 Objetivo

Praticar lógica de programação e manipulação do DOM através da implementação de um sistema capaz de validar cartões, aplicar regras de identificação e apresentar informações relevantes ao usuário.

---

## 🚀 Funcionalidades

* Validação do número do cartão utilizando o Algoritmo de Luhn
* Remoção automática de espaços e caracteres desnecessários
* Identificação da bandeira do cartão
* Identificação do setor de atuação
* Identificação do banco emissor por prefixo
* Exibição dinâmica das informações na interface

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📚 Conceitos praticados

### HTML

* Estruturação de formulários
* Organização de painéis informativos
* Componentes de entrada de dados

### CSS

* Centralização com Flexbox
* Organização visual dos resultados
* Estilização de formulários
* Interface limpa e responsiva

### JavaScript

* Manipulação do DOM
* Tratamento de strings
* Estruturas condicionais
* Laços de repetição
* Funções reutilizáveis
* Algoritmos de validação
* Atualização dinâmica da interface

---

## 🧠 Regras implementadas

### Validação do cartão

O sistema utiliza o **Algoritmo de Luhn**, responsável por verificar matematicamente se a sequência de números possui uma estrutura válida.

### Identificação da bandeira

Atualmente são reconhecidas as seguintes bandeiras:

* Visa
* MasterCard
* American Express

### Identificação do setor

A classificação é realizada com base no primeiro dígito do cartão, permitindo identificar categorias como:

* Instituições bancárias
* Serviços financeiros
* Comércio
* Viagens e entretenimento
* Companhias aéreas

### Identificação do banco emissor

O sistema identifica alguns bancos utilizando prefixos previamente cadastrados, simulando consultas realizadas em sistemas financeiros.

---

## 📂 Estrutura do projeto

```bash
validadorDeSeguranca/
│
├── index.html
├── style.css
└── script.js
```

---

## 🔍 Fluxo da aplicação

```text
Entrada do número do cartão
          │
          ▼
Limpeza dos caracteres
          │
          ▼
Validação pelo Algoritmo de Luhn
          │
          ├────────► Cartão Válido ou Inválido
          │
          ▼
Identificação da bandeira
          │
          ▼
Identificação do setor
          │
          ▼
Identificação do banco emissor
          │
          ▼
Exibição das informações ao usuário
```

---

## 🎯 Aprendizados

Este projeto foi desenvolvido para consolidar conhecimentos de lógica de programação por meio da implementação de um algoritmo amplamente utilizado na validação de cartões bancários.

Durante o desenvolvimento foram praticados conceitos de manipulação de strings, estruturas condicionais, laços de repetição, organização de funções e atualização dinâmica da interface, simulando um cenário próximo a aplicações do setor financeiro.

Desenvolvido por **Adriel Wanderlind**.

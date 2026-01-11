# Cypress E2E – Automação de Cadastro de Usuários

Projeto de automação de testes **end-to-end (E2E)** utilizando **Cypress**, com foco em boas práticas, organização de código e escalabilidade.  
O objetivo é validar o fluxo de **cadastro de usuários**, aplicando **Page Object Model**, uso de **fixtures**, **custom commands** e separação clara de responsabilidades.



## 🧪 Tecnologias Utilizadas

- **Cypress**
- **JavaScript (ES6+)**
- **Node.js**
- **Page Object Model (POM)**



## 📁 Estrutura do Projeto

<img width="284" height="427" alt="image" src="https://github.com/user-attachments/assets/a2064ad7-d3a0-46d1-b72f-ff9d6e15e28d" />





## 📌 Conceitos Aplicados

### ✅ Page Object Model (POM)
A lógica de interação com a interface está isolada na camada de **pages**, tornando os testes:
- Mais legíveis
- Mais fáceis de manter
- Menos acoplados à UI

### ✅ Fixtures
Os dados de teste ficam centralizados em `fixtures/usuario.json`, permitindo:
- Reutilização de massa
- Facilidade de manutenção
- Separação entre dados e lógica de teste




## ▶️ Como Executar o Projeto

###  Pré-requisitos
- Node.js instalado (versão recomendada: LTS)
- NPM ou Yarn
- Cypress versão utilizada 12.17.4

### Instalar dependências 
- NPM install

### Como rodar o projeto com cypress interativo
 - npx cypress open

###🧪 Cenários Automatizados

- Cadastro de usuário com dados válidos
- Validação de campos obrigatórios
- Preenchimento de formulário utilizando fixtures
- Fluxo completo de cadastro (E2E)

### Autor
- Paulo Jr

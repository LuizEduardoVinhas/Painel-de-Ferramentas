```markdown
# 🚀 DevTools Lab

O **DevTools Lab** é um painel de utilitários de alta performance desenvolvido para otimizar o fluxo de trabalho de desenvolvedores. O projeto combina ferramentas essenciais com uma arquitetura moderna, focada em modularidade e escalabilidade.

## 🛠 Stack Tecnológica & Arquitetura

O projeto utiliza um ecossistema robusto para garantir performance e compatibilidade:

*   **Core:** JavaScript (ES6+) com gerenciamento de dependências via **Node.js/npm**.
*   **Build Tool:** **Webpack** para empacotamento eficiente de ativos.
*   **Transpilação:** **Babel** para assegurar compatibilidade cross-browser.
*   **Comunicação Assíncrona:** Implementação de **Promises** encapsulando **XMLHttpRequest** para integração com APIs.
*   **Estilização:** CSS3 estruturado com *Glassmorphism*, Design Responsivo (Mobile-first) e variáveis globais.
*   **Fontes:** Fira Code (foco em legibilidade técnica).

## 📂 Estrutura do Projeto

```text
/
├── assets/js/          # Código fonte modular (ES6)
├── css/                # Estilização (main.css)
├── dist/               # Bundle de produção gerado pelo Webpack
├── node_modules/       # Dependências do projeto
├── img/                # Assets e ícones
├── index.html          # Landing Page principal
├── package.json        # Gerenciamento de scripts e dependências
├── webpack.config.js   # Configuração de build
└── README.md           # Documentação

```

## 🚀 Funcionalidades

* **Gerador de Senha:** Criação de chaves robustas com parâmetros ajustáveis.
* **Validador de CPF:** Algoritmo de validação de documentos em tempo real.
* **Interface Responsiva:** Layout adaptável para desktop, tablets e dispositivos móveis.
* **Assincronicidade:** Uso de Promises para evitar bloqueios de interface durante validações ou requisições.

## ⚙️ Configuração para Desenvolvimento

1. **Instalação de Dependências:**
```bash
npm install

```


2. **Build para Produção:**
```bash
npm run build

```


3. **Execução:**
Abra o arquivo `index.html` em seu navegador. (Recomendado utilizar o *Live Server* para desenvolvimento).

## 👨‍💻 Autor

Desenvolvido por **Luiz Eduardo**.

> "Focado em performance, modularidade e código limpo."

```

```
export const GerarSenha = {
    render: () => {
        return `
            <section class="container-gerador">
                <h2> Gerador de Senha</h2>
                <p> Crie uma senha segura e aleatória com apenas um clique. Escolha o tamanho desejado e obtenha uma senha forte para proteger suas contas online.</p>

                <div class="senha-gerada"></div>

                Quantidade de caracteres: <input type='number' id='tamanhoSenha' value='0' min='4' max='32'>
                Adicionar maiúsculas: <input type='checkbox' id='maiusculas'>
                Adicionar minúsculas: <input type='checkbox' id='minusculas'>
                Adicionar números: <input type='checkbox' id='numeros'>
                Adicionar símbolos <input type='checkbox' id='simbolos'>
                <button id='gerarSenha'>Gerar Senha</button>
            </section>
        `;
    }
};

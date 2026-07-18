export const GerarSenha = {
    render: () => {
        return `
            <button class="btn-voltar" id="btnVoltar">← Voltar</button>
            <section class="container-gerador">
                <h2>Gerador de Senha</h2>
                <p>Crie uma senha segura e aleatória com apenas um clique.</p>

                <div class="senha-gerada" id="resultado"></div>
                <button id="btnCopiar" title="Copiar senha">📋 Copiar</button>

                <label for="tamanhoSenha">Quantidade de caracteres:</label>
                <input type='number' id='tamanhoSenha' value='12' min='4' max='32'>

                <label><input type='checkbox' id='maiusculas'> Adicionar maiúsculas</label>
                <label><input type='checkbox' id='minusculas'> Adicionar minúsculas</label>
                <label><input type='checkbox' id='numeros'> Adicionar números</label>
                <label><input type='checkbox' id='simbolos'> Adicionar símbolos</label>

                <button id='gerarSenha'>Gerar Senha</button>
            </section>
        `;
    },

    after_render: () => {
        const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
        const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
        const geraMinuscula = () => String.fromCharCode(rand(97, 123));
        const geraNumero = () => String.fromCharCode(rand(48, 58));
        const simbolos = '!@#$%&*()_+{`^}:?/;]~^><.,';
        const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

        const gerarSenha = (qtd, maiusculas, minusculas, numeros, simbolos) => {
            const senhaArray = [];
            qtd = Number(qtd);
            for (let i = 0; i < qtd; i++) {
                maiusculas && senhaArray.push(geraMaiuscula());
                minusculas && senhaArray.push(geraMinuscula());
                numeros && senhaArray.push(geraNumero());
                simbolos && senhaArray.push(geraSimbolo());
            }
            return senhaArray.join('').slice(0, qtd);
        };

        const btnGerar = document.getElementById('gerarSenha');
        const btnCopiar = document.getElementById('btnCopiar');
        const display = document.getElementById('resultado');

        btnGerar.addEventListener('click', () => {
            const qtd = document.getElementById('tamanhoSenha').value;
            const mai = document.getElementById('maiusculas').checked;
            const min = document.getElementById('minusculas').checked;
            const num = document.getElementById('numeros').checked;
            const simb = document.getElementById('simbolos').checked;

            const senha = gerarSenha(qtd, mai, min, num, simb);
            display.innerHTML = senha || "Selecione uma opção!";
        });

        btnCopiar.addEventListener('click', () => {
            const senha = display.innerHTML;
            if (!senha || senha === "Selecione uma opção!") return;

            navigator.clipboard.writeText(senha).then(() => {
                alert("Senha copiada para a área de transferência!");
            });
        });

        const btnVoltar = document.getElementById('btnVoltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', () => {
                window.location.href = '/public/index.html';
            });
        }
    }
};
export const ConsultaCPF = {
    render: () => {
        return `
            <button class="btn-voltar" id="btnVoltar">← Voltar</button>
            <section class="container-consulta">
                <div class="page-header">
                    <div>
                        <h2>Validador de CPF</h2>
                        <p>Insira um CPF para verificar se ele é válido de acordo com o cálculo oficial.</p>
                    </div>
                </div>

                <div class="cpf-card">
                    <label class="form-field" for="cpfInput">
                        <span>CPF</span>
                        <input type='text' id='cpfInput' placeholder='000.000.000-00' maxlength='14'>
                    </label>

                    <div class="control-row">
                        <button class="hero-cta" id='btnValidar'>Validar CPF</button>
                        <button class="hero-secondary" id='btnLimpar' type='button'>Limpar</button>
                    </div>

                    <div class="cpf-result" id='cpfResultado'>Digite um CPF e clique em validar para conferir o status.</div>
                </div>
            </section>
        `;
    },

    after_render: () => {
        const formatCPF = cpf => cpf.replace(/\D/g, '');
        const validarCPF = cpf => {
            if (!cpf || cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

            const calcularDigito = (cpf, fator) => {
                let total = 0;
                for (let i = 0; i < fator - 1; i += 1) {
                    total += Number(cpf[i]) * (fator - i);
                }
                const resto = (total * 10) % 11;
                return resto === 10 ? 0 : resto;
            };

            const digito1 = calcularDigito(cpf, 10);
            const digito2 = calcularDigito(cpf, 11);
            return digito1 === Number(cpf[9]) && digito2 === Number(cpf[10]);
        };

        const cpfInput = document.getElementById('cpfInput');
        const btnValidar = document.getElementById('btnValidar');
        const btnLimpar = document.getElementById('btnLimpar');
        const cpfResultado = document.getElementById('cpfResultado');

        const updateStatus = (message, valid) => {
            cpfResultado.textContent = message;
            cpfResultado.classList.remove('valid', 'invalid');
            if (valid === true) cpfResultado.classList.add('valid');
            if (valid === false) cpfResultado.classList.add('invalid');
        };

        btnValidar.addEventListener('click', () => {
            const rawCpf = formatCPF(cpfInput.value);
            const formatted = rawCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

            if (!rawCpf) {
                updateStatus('Digite um CPF para iniciar a validação.', null);
                return;
            }

            if (rawCpf.length !== 11) {
                updateStatus('CPF incompleto. Use 11 dígitos numéricos.', false);
                return;
            }

            const valido = validarCPF(rawCpf);
            if (valido) {
                updateStatus(`CPF ${formatted} válido.`, true);
            } else {
                updateStatus(`CPF ${formatted} inválido.`, false);
            }
        });

        btnLimpar.addEventListener('click', () => {
            cpfInput.value = '';
            updateStatus('Digite um CPF e clique em validar para conferir o status.', null);
        });

        const btnVoltar = document.getElementById('btnVoltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', () => {
                window.location.href = '/public/index.html';
            });
        }
    }
};
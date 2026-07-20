export const Consultacpf = {
    render: () => {
        return `
            <button class="btn-voltar" id="btnVoltar">← Voltar</button>
            <section class="container-consulta">
                <h2>Validador de CPF</h2>
                <p>Insira um CPF para verificar se ele é válido de acordo com o cálculo oficial.</p>

                <div class="cpf-card">
                    <input type='text' id='cpfInput' placeholder='000.000.000-00' maxlength='14'>
                    <button id='btnValidar'>Validar CPF</button>
                    <button id='btnLimpar' type='button'>Limpar</button>
                    <div class="cpf-result" id='cpfResultado'>Digite um CPF e clique em validar para conferir o status.</div>
                </div>
            </section>
        `;
    },

    after_render: () => {

        class validaCPF {
            constructor(cpf) {
                Object.defineProperty(this, 'cpfLimpo', {
                    enumerable: true,
                    get: () => cpf.replace(/\D+/g, '')
                })
            }
        }

        validaCPF.prototype.valida = function () {
            if (typeof this.cpfLimpo === 'undefined') return false;
            if (this.cpfLimpo.length !== 11) return false;
            if (this.sequencia()) return false;

            const cpfparcial = this.cpfLimpo.slice(0, -2);
            const digito1 = this.criaDigito(cpfparcial);
            const digito2 = this.criaDigito(cpfparcial + digito1);

            const novoCpf = cpfparcial + digito1 + digito2;


            return novoCpf === this.cpfLimpo;
        }

        validaCPF.prototype.criaDigito = function (cpfparcial) {
            const array = Array.from(cpfparcial);
            let regressivo = array.length + 1;

            const total = array.reduce((ac, val) => {
                ac += (regressivo * Number(val));
                regressivo--;
                return ac;
            }, 0);

            const digito = 11 - (total % 11);
            return digito > 9 ? '0' : String(digito);

        }

        validaCPF.prototype.sequencia = function () {
            return this.cpfLimpo[0].repeat(11) == this.cpfLimpo;
        }

        const bntValidar = document.querySelector('#btnValidar');
        const bntLimpar = document.querySelector('#btnLimpar');
        const inputCPF = document.querySelector('#cpfInput')
        const divResultado = document.querySelector('#cpfResultado')

        bntValidar.addEventListener('click', () => {
            const valorDoInput = inputCPF.value;

            const validacao = new validaCPF(valorDoInput);

            if (validacao.valida()) {
                divResultado.textContent = 'CPF Válido!';
                divResultado.classList.remove('invalid');
                divResultado.classList.add('valid');
            } else {
                divResultado.textContent = 'CPF Inválido.';
                divResultado.classList.remove('valid');
                divResultado.classList.add('invalid');
            }
        });

        bntLimpar.addEventListener('click', () => {
            inputCPF.value = '';
            divResultado.textContent = 'Digite um CPF e clique em validar para conferir o status.';
            divResultado.classList.remove('valid', 'invalid');
        })

        const btnVoltar = document.getElementById('btnVoltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', () => {
                window.location.href = '/public/index.html';
            });
        }
    }
};
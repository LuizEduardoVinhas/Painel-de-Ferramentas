/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/screens/ConsultaCPF.js"
/*!************************************!*\
  !*** ./src/screens/ConsultaCPF.js ***!
  \************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConsultaCPF = void 0;
const ConsultaCPF = exports.ConsultaCPF = {
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
        });
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
    };
    validaCPF.prototype.criaDigito = function (cpfparcial) {
      const array = Array.from(cpfparcial);
      let regressivo = array.length + 1;
      const total = array.reduce((ac, val) => {
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
      }, 0);
      const digito = 11 - total % 11;
      return digito > 9 ? '0' : String(digito);
    };
    validaCPF.prototype.sequencia = function () {
      return this.cpfLimpo[0].repeat(11) == this.cpfLimpo;
    };
    const bntValidar = document.querySelector('#btnValidar');
    const bntLimpar = document.querySelector('#btnLimpar');
    const inputCPF = document.querySelector('#cpfInput');
    const divResultado = document.querySelector('#cpfResultado');
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
    });
    const btnVoltar = document.getElementById('btnVoltar');
    if (btnVoltar) {
      btnVoltar.addEventListener('click', () => {
        window.location.href = '/public/index.html';
      });
    }
  }
};

/***/ },

/***/ "./src/screens/Contato.js"
/*!********************************!*\
  !*** ./src/screens/Contato.js ***!
  \********************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ContatoScreen = void 0;
const ContatoScreen = exports.ContatoScreen = {
  render: () => {
    return `
<section class="contato-section">
    <div class="container-global">
        <button class="btn-voltar" id="btnVoltar" type="button">← Voltar</button>
        <div class="header-grid">
            <h2>Contato</h2>
            <p>Mande uma mensagem e vamos conversar sobre o futuro</p>
        </div>

        <form action="https://formspree.io/f/mdarrzwz" method="POST" class="form-contato">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required>
            </div>

            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="seuemail@provedor.com" required>
            </div>

            <div class="form-group">
                <label for="assunto">Assunto</label>
                <input type="text" id="assunto" name="assunto" placeholder="Ex: Proposta de estágio, Dúvida..." required>
            </div>

            <div class="form-group">
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva aqui..." required></textarea>
            </div>

            <div class="form-group">
                <label for="entidade">Entidade</label>
                <input type="text" id="entidade" name="entidade" placeholder="Porto Digital, Senac, Uninassau..." required>
            </div>

            <button type="submit" class="hero-cta btn-enviar">
                Enviar Mensagem <i class="fa-solid fa-paper-plane"></i>
            </button>
        </form>
    </div>
</section>
        `;
  },
  after_render: () => {
    const btnVoltar = document.getElementById('btnVoltar') || document.getElementById('btn-voltar-home');
    if (btnVoltar) {
      btnVoltar.addEventListener('click', () => {
        window.location.href = '/public/index.html';
      });
    }
  }
};

/***/ },

/***/ "./src/screens/GeradorSenha.js"
/*!*************************************!*\
  !*** ./src/screens/GeradorSenha.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GerarSenha = void 0;
const GerarSenha = exports.GerarSenha = {
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

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
let exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["navegação"] = navegação;
var _GeradorSenha = __webpack_require__(/*! ./screens/GeradorSenha.js */ "./src/screens/GeradorSenha.js");
var _ConsultaCPF = __webpack_require__(/*! ./screens/ConsultaCPF.js */ "./src/screens/ConsultaCPF.js");
var _Contato = __webpack_require__(/*! ./screens/Contato.js */ "./src/screens/Contato.js");
const routes = {
  senha: _GeradorSenha.GerarSenha,
  consulta: _ConsultaCPF.ConsultaCPF,
  contato: _Contato.ContatoScreen
};
function navegação(tela, params) {
  const container = document.getElementById('app');
  const screen = routes[tela];
  if (screen) {
    container.innerHTML = screen.render(params);
    if (screen.after_render) {
      screen.after_render(params);
    }
  } else {
    container.innerHTML = '<h2>Tela não encontrada</h2>';
  }
}
document.addEventListener('click', event => {
  const button = event.target.closest('button[data-screen]');
  if (button) {
    const screen = button.dataset.screen;
    if (screen) {
      navegação(screen);
    }
  }
});
const ajax = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.metodo, obj.url, true);
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.sucesso(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};
function carregaTela(el) {
  const href = el.getAttribute('href');
  console.log('Carregando tela:', href);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
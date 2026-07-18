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
        const resto = total * 10 % 11;
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
const routes = {
  senha: _GeradorSenha.GerarSenha,
  consulta: _ConsultaCPF.ConsultaCPF
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
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu-navegacao button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const screen = event.currentTarget.dataset.screen;
      navegação(screen);
    });
  });
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
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
            <div class="container-teste">
                <h2>Validador de CPF (Em Breve)</h2>
                <p>A tela de consulta e validação de CPF será construída aqui.</p>
            </div>
        `;
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
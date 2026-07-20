import { GerarSenha } from './screens/GeradorSenha.js';
import { Consultacpf } from './screens/Consultacpf.js';
import { ContatoScreen } from './screens/Contato.js';

const routes = {
    senha: GerarSenha,
    consulta: Consultacpf,
    contato: ContatoScreen,
};

export function navegação(tela, params) {
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

document.addEventListener('click', (event) => {
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
            obj.error(xhr.statusText );
        }
    })}; 


function carregaTela(el) {
    const href = el.getAttribute('href');
    console.log('Carregando tela:', href);
}
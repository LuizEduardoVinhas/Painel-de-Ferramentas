import { GerarSenha } from './screens/geradorSenha.js';
import { ConsultaCPF } from './screens/consultaCpf.js';

const routes = {
    senha: GerarSenha,
    consulta: ConsultaCPF
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

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-navegacao button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const screen = event.currentTarget.dataset.screen;
            navegação(screen);
        });
    });
});
export const ContatoScreen = {
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
        const btnVoltar = document.getElementById('btnVoltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', () => {
                window.location.href = '/public/index.html';
            });
        }
    }


};

import "./Contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato secao-ancora">
      <div className="contato-container">
        <h1>Contato</h1>
        <p className="contato-desc">
          Tem dúvidas, sugestões ou quer falar comigo? Preencha o formulário
          abaixo!
        </p>
        <form className="form-contato">
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <textarea placeholder="Sua mensagem" rows={5} />
          <button type="submit">Enviar</button>
        </form>
        <footer className="contato-footer">
          <span>© 2025 Eriane André</span>
        </footer>
      </div>
    </section>
  );
}

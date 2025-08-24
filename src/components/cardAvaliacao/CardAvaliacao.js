import "./CardAvaliacao.css";

export default function CardAvaliacao({ avaliacao }) {
  return (
    <div className="card-avaliacao">
      <div className="conteudo-card">
        <h3>{avaliacao.titulo}</h3>
        <p>{avaliacao.descricao}</p>
      </div>
      <a href={avaliacao.arquivo} download className="btn-download">
        📄 Baixar PDF
      </a>
    </div>
  );
}

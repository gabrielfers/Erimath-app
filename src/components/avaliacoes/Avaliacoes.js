import "./Avaliacoes.css";
import CardAvaliacao from "../cardAvaliacao/CardAvaliacao";
import avaliacoes from "./Avaliacoes.data";

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="avaliacoes secao-ancora">
      <h1>Avaliações</h1>
      <p>Baixe as listas de avaliações para praticar</p>

      <div className="lista-avaliacoes">
        {avaliacoes.map((avaliacao) => (
          <CardAvaliacao key={avaliacao.id} avaliacao={avaliacao} />
        ))}
      </div>
    </section>
  );
}

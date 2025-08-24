import "./Inicio.css";

export default function Inicio() {
  return (
    <section id="inicio" className="inicio secao-ancora">
      <h1>Bem-vindos ao Erimath!</h1>
      <h2>Um espaço para aprender, praticar e se preparar em Matemática.</h2>
      <p>
        Aqui você encontra listas de exercícios, provas anteriores, materiais de
        apoio e dicas para desenvolver suas habilidades matemáticas.
      </p>
      <div className="math-symbols">
        <span className="pi">π</span>
        <span className="infinity">∞</span>
        <span className="sigma">∑</span>
        <span className="sqrt">√</span>
        <span className="divide">÷</span>
        <span className="integral">∫</span>
        <span className="delta">Δ</span>
        <span className="alpha">α</span>
        <span className="beta">β</span>
        <span className="theta">θ</span>
        <span className="not-equal">≠</span>
        <span className="approximately">≈</span>
        <span className="plus">+</span>
        <span className="minus">−</span>
        <span className="multiply">×</span>
        <span className="equal">=</span>
      </div>
    </section>
  );
}

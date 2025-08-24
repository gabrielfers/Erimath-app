import "./SobreMim.css";
import fotoEriane from "../../assets/Eriane.jpeg";

export default function SobreMim() {
  return (
    <section id="sobre-mim" className="sobre-mim secao-ancora">
      <div className="area-foto">
        <img src={fotoEriane} alt="Foto de Eriane" className="foto-perfil" />
      </div>
      <div className="info-area">
        <h2 className="nome">Profª Eriane André</h2>
        <p className="descricao">
          Graduanda em Matemática Licenciatura pela Universidade Estadual de
          Alagoas e professora de Matemática do Colégio Nossa Senhora de Fátima
          em Penedo-AL.
        </p>
        <p className="justificativa">
          Este espaço foi criado para compartilhar materiais, listas de
          exercícios, avaliações e dicas, com o objetivo de ajudar estudantes a
          aprenderem matemática de forma mais leve, prática e acessível. Aqui
          você encontra recursos para praticar, revisar conteúdos e se preparar
          para avaliações, sempre com foco no desenvolvimento do raciocínio
          lógico e na autonomia dos estudos.
        </p>
      </div>
    </section>
  );
}

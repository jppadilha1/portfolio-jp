import style from "./main.module.css";
import { GitHubIcon } from "../icons/github";
import { LinkedInIcon } from "../icons/linkedln";

export function Main() {
  return (
    <>
      <div className={style.main}>
        <div className={style.info}>
          <div className={style.desc}>
            <h1>Hello👋🏼 I'm João Pedro</h1>
            <p>
              Atuo como desenvolvedor full‑stack web, com identificação e
              preferência pelo backend. Comprometido com a criação de código
              limpo, eficiente e escalável, possuo interesse genuíno em
              compreender profundamente a arquitetura e os processos internos
              das aplicações. Estou em constante evolução profissional e aberto
              a novos desafios que envolvam desenvolvimento robusto e soluções
              de alta performance.
            </p>
            <div className={style.maincontacts}>
              <button>Download Curriculum</button>
              <div className={style.icons}>
                <GitHubIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className={style.image}>
            <img src="/me.png" alt="my photo"></img>
          </div>
        </div>
      </div>
    </>
  );
}

import style from "./projects.module.css";
import { useEffect } from "react";

export function Projects() {
  useEffect(() => {
    const h1 = document.querySelector(`.${style.titleproj} h1`);
    const contentProjects = document.querySelector(`.${style.projects}`);

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        h1.style.opacity = "1";
        h1.style.transition = "opacity 0.5s ease";
      } else {
        h1.style.opacity = "0";
      }

      if (window.scrollY >= 140) {
        contentProjects.style.marginRight = "0";
        contentProjects.style.transition = "margin-right 0.8s ease";
      } else {
        contentProjects.style.marginRight = "100%";
      }
    });
  }, []);

  return (
    <>
      <div className={style.projectscont} id="projects">
        <div className={style.titleproj}>
          <h1>Projects</h1>
        </div>
        <div className={style.projects}>
          <div className={style.project}>
            <div className={style.pcontent}>
              <h2>Secure Form</h2>
              <div className={style.details}>
                <img src="/secure-form.png" alt="image about project"></img>
                <p>
                  Projeto focado em explorar envio de e-mails com Nodemailer e
                  implementar autenticação JWT para controle de acesso a rotas
                  protegidas.
                </p>
              </div>

              <div className={style.btnprojects}>
                <a
                  href="https://github.com/jppadilha1/secure-form"
                  target="_blank"
                  className={style.button}
                >
                  Código Fonte
                </a>
              </div>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.pcontent}>
              <h2>Climate Searcher</h2>
              <div className={style.details}>
                <img
                  src="/climate-searcher.png"
                  alt="image about project"
                ></img>
                <p>
                  Consumindo API para retornar as condições climáticas de
                  qualquer cidade ou estado ao usuário.
                </p>
              </div>

              <div className={style.btnprojects}>
                <a
                  href="https://github.com/jppadilha1/Climate-Searcher"
                  target="_blank"
                  className={style.button}
                >
                  Código Fonte
                </a>
                <a
                  href="https://jppadilha1.github.io/Climate-Searcher/"
                  target="_blank"
                  className={style.button}
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.pcontent}>
              <h2>Em Andamento...</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

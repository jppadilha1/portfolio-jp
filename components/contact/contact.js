import style from "./contact.module.css";

export function ContactMe() {
  return (
    <>
      <div className={style.contactsection}>
        <div className={style.contactcontent} id="contact">
          <div className={style.contactspan}>
            <span>Send me a message!</span>
            <p>
              Deseja tirar uma dúvida ou propor um projeto? Estou à disposição.
            </p>
          </div>
          <div className={style.form}>
            <div className={style.name}>
              <label>Nome:</label>
              <br></br>
              <input type="text" value="name"></input>
            </div>
            <div className={style.email}>
              <label>Email:</label>
              <br></br>
              <input type="email" value="email"></input>
            </div>
            <div className={style.message}>
              <label>Mensagem:</label>
              <br></br>
              <input
                type="text"
                value="message"
                placeholder="Type your message"
              ></input>
            </div>
            <div className={style.cta}>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useRef } from "react";
import style from "./contact.module.css";
import Swal from "sweetalert2";

export function ContactMe() {
  const nameref = useRef("");
  const emailref = useRef("");
  const messageref = useRef("");

  function handleSend() {
    const name = nameref.current.value;
    const email = emailref.current.value;
    const message = messageref.current.value;
    if (!emailref.current.checkValidity()) {
      Swal.fire({
        title: "Email inválido!",
        icon: "error",
        confirmButtonColor: "#1b1b1b",
      });
    }
    nameref.current.value = "";
    emailref.current.value = "";
    messageref.current.value = "";

    console.log(name, email, message);
  }

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
              <input type="text" placeholder="Nome" ref={nameref}></input>
            </div>
            <div className={style.email}>
              <label>Email:</label>
              <br></br>
              <input
                type="email"
                placeholder="Email de Contato"
                ref={emailref}
              ></input>
            </div>
            <div className={style.message}>
              <label>Mensagem:</label>
              <br></br>
              <textarea
                placeholder="Envie sua mensagem"
                ref={messageref}
              ></textarea>
            </div>
            <div className={style.cta}>
              <button onClick={handleSend}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

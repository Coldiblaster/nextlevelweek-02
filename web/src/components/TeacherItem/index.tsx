import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/47608086?s=460&u=9ca44ce338e40d273522c0491a809370b422bbf7&v=4"
          alt="Vinicius Bastazin"
        />
        <div>
          <strong>Vinicius Bastazin</strong>
          <span>Tecnologia</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias da atualidade
        <br /> <br />
        Apaixonado em ensinar pessoas
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

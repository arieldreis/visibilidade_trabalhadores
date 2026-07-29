import React from "react";
import Header from "../components/Header";
import "../styles/MyPerfil.css";

const MyPerfil = () => {
  return (
    <>
      <Header />
      <div className="perfil-page">
        <div className="perfil-card">
          <div className="perfil-card__header">
            <div className="perfil-avatar">A</div>
            <div>
              <h1>Meu Perfil</h1>
              <p className="perfil-email">arieldreis@gmail.com</p>
            </div>
          </div>

          <form className="perfil-form">
            <div className="perfil-field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" value="Ariel Marinho" disabled />
              <span className="perfil-hint">O nome não pode ser alterado aqui</span>
            </div>

            <div className="perfil-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value="arieldreis@gmail.com"
                disabled
              />
            </div>

            <div className="perfil-field">
              <label htmlFor="telefone">Telefone / WhatsApp</label>
              <input id="telefone" type="tel" placeholder="Ex: 11999999999" />
            </div>

            <div className="perfil-field">
              <label htmlFor="sobre">Sobre mim</label>
              <input
                id="sobre"
                type="text"
                placeholder="Uma breve descrição sobre você"
              />
            </div>

            <button type="submit" className="perfil-submit">
              <span className="perfil-submit__icon" aria-hidden="true">
                💾
              </span>
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyPerfil;

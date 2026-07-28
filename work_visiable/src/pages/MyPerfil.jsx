import React from "react";
import Header from "../components/Header";
import "../styles/MyPerfil.css";

const MyPerfil = () => {
  return (
    <>
      <Header />
      <div class="perfil-page">
        <div class="perfil-card">
          <div class="perfil-card__header">
            <div class="perfil-avatar">A</div>
            <div>
              <h1>Meu Perfil</h1>
              <p class="perfil-email">arieldreis@gmail.com</p>
            </div>
          </div>

          <form class="perfil-form">
            <div class="perfil-field">
              <label for="nome">Nome</label>
              <input id="nome" type="text" value="Ariel Marinho" disabled />
              <span class="perfil-hint">O nome não pode ser alterado aqui</span>
            </div>

            <div class="perfil-field">
              <label for="email">E-mail</label>
              <input
                id="email"
                type="email"
                value="arieldreis@gmail.com"
                disabled
              />
            </div>

            <div class="perfil-field">
              <label for="telefone">Telefone / WhatsApp</label>
              <input id="telefone" type="tel" placeholder="Ex: 11999999999" />
            </div>

            <div class="perfil-field">
              <label for="sobre">Sobre mim</label>
              <input
                id="sobre"
                type="text"
                placeholder="Uma breve descrição sobre você"
              />
            </div>

            <button type="submit" class="perfil-submit">
              <span class="perfil-submit__icon" aria-hidden="true">
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

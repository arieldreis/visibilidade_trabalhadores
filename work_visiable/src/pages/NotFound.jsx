import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
          <header className="notfound-header">
            <div className="notfound-header__brand">
              <span className="notfound-header__logo">🧰</span>
              <span className="notfound-header__name">TalentoLocal</span>
            </div>
          </header>
    
          <main className="notfound-main">
            <div className="notfound-card">
              <span className="notfound-code">404</span>
              <h1>Página não encontrada</h1>
              <p>
                O endereço que você tentou acessar não existe ou foi movido.
                Confira o link ou volte para a página inicial.
              </p>
    
              <div className="notfound-actions">
                <Link to="/" className="notfound-btn notfound-btn--primary">
                  Voltar para o início
                </Link>
                <Link to="/MyServices" className="notfound-btn notfound-btn--ghost">
                  Ver meus serviços
                </Link>
              </div>
            </div>
          </main>
        </div>
  )
}

export default NotFound
